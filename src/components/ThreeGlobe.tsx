import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export interface GlobePin {
  id: string;
  name: string;
  code: string;
  lat: number;
  lon: number;
  isHost?: boolean;
}

export const GLOBE_PINS: GlobePin[] = [
  { id: 'canada', name: '캐나다', code: 'ca', lat: 56.0, lon: -106.0 },
  { id: 'us', name: '미국', code: 'us', lat: 38.0, lon: -98.0 },
  { id: 'uk', name: '영국', code: 'gb', lat: 54.0, lon: -2.0 },
  { id: 'france', name: '프랑스', code: 'fr', lat: 47.0, lon: 2.0 },
  { id: 'germany', name: '독일', code: 'de', lat: 51.0, lon: 10.0 },
  { id: 'japan', name: '일본', code: 'jp', lat: 36.0, lon: 138.0 },
  { id: 'china', name: '중국', code: 'cn', lat: 35.0, lon: 105.0 },
  { id: 'singapore', name: '싱가포르', code: 'sg', lat: 1.35, lon: 103.8 },
  { id: 'australia', name: '호주', code: 'au', lat: -25.0, lon: 133.0 },
  { id: 'nz', name: '뉴질랜드', code: 'nz', lat: -41.0, lon: 174.0 },
  { id: 'philippines', name: '필리핀', code: 'ph', lat: 13.0, lon: 121.0 },
  { id: 'malaysia', name: '말레이시아', code: 'my', lat: 4.0, lon: 102.0 },
  { id: 'taiwan', name: '대만', code: 'tw', lat: 23.7, lon: 121.0 },
  { id: 'hk', name: '홍콩', code: 'hk', lat: 22.3, lon: 114.1 },
  { id: 'korea', name: '대한민국', code: 'kr', lat: 36.5, lon: 127.5, isHost: true }
];

interface ThreeGlobeProps {
  onPinClick: (id: string) => void;
  onPinHover: (pin: GlobePin | null) => void;
}

interface ProjectedPin extends GlobePin {
  x: number;
  y: number;
  visible: boolean;
}

const ThreeGlobe: React.FC<ThreeGlobeProps> = ({ onPinClick, onPinHover }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [projectedPins, setProjectedPins] = useState<ProjectedPin[]>([]);
  const [activePinId, setActivePinId] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(150, 100, 150);
    scene.add(sunLight);

    const spaceLight = new THREE.DirectionalLight(0x8bc6ff, 0.6); // Soft blue light from opposite side
    spaceLight.position.set(-150, -50, -100);
    scene.add(spaceLight);

    // Globe
    const globeRadius = 60;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    
    // Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/images/earth-texture.jpg?v=4');
    
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
      metalness: 0.1
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    
    // Rotate to face Greenwich initially (Greenwich is at lon=0. Since 0 is at back in Three.js Sphere mapping, we rotate by PI Y-axis)
    globe.rotation.y = Math.PI;
    
    scene.add(globe);

    // Atmosphere Glow Ring (Faux glow sprite or slight overlay)
    const glowGeometry = new THREE.SphereGeometry(globeRadius * 1.02, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Starfield Background Particles
    const starsCount = 500;
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      // Random coordinates in a shell around the globe
      const radius = 150 + Math.random() * 150;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i+2] = radius * Math.cos(phi);
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Inertia & Dragging states
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocityX = 0;
    let velocityY = 0;
    let targetVelocityX = 0;
    let targetVelocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      targetVelocityX = 0;
      targetVelocityY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // Update globe rotation directly during drag
      globe.rotation.y += deltaX * 0.005;
      globe.rotation.x += deltaY * 0.005;

      // Clamp vertical rotation so globe doesn't flip upside down
      globe.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, globe.rotation.x));

      // Calculate instantaneous velocity for inertia
      targetVelocityX = deltaX * 0.004;
      targetVelocityY = deltaY * 0.004;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Attach drag events to container
    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerUp);

    // Lat/Lon to Vector3 Conversion
    const convertLatLngToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const lambda = lon * (Math.PI / 180);
      
      const x = r * Math.sin(phi) * Math.sin(lambda);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.cos(lambda);
      
      return new THREE.Vector3(x, y, z);
    };

    // Project 3D vectors to 2D screen positions
    const updatePinsPosition = () => {
      const cameraPosition = new THREE.Vector3();
      camera.getWorldPosition(cameraPosition);
      
      const projected = GLOBE_PINS.map((pin) => {
        // Get local coordinates on sphere
        const localPos = convertLatLngToVector3(pin.lat, pin.lon, globeRadius);
        // Transform to world coordinates based on globe's current rotation matrix
        const worldPos = localPos.clone().applyMatrix4(globe.matrixWorld);

        // Backface culling calculation
        const pinDirection = worldPos.clone().normalize();
        const cameraDirection = cameraPosition.clone().normalize();
        const dot = pinDirection.dot(cameraDirection);

        // Dot product > 0 means the pin is facing the camera
        const isVisible = dot > 0.25; // 0.25 gives a nice edge visibility clamp

        const screenPos = worldPos.clone().project(camera);
        
        // Convert screen normalized device coordinates (-1 to 1) to percentage (0 to 100)
        const x = (screenPos.x * 0.5 + 0.5) * 100;
        const y = (-(screenPos.y * 0.5) + 0.5) * 100;

        return {
          ...pin,
          x,
          y,
          visible: isVisible
        };
      });

      setProjectedPins(projected);
    };

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Handle Inertia Dragging Damping
      if (isDragging) {
        velocityX = velocityX * 0.2 + targetVelocityX * 0.8;
        velocityY = velocityY * 0.2 + targetVelocityY * 0.8;
      } else {
        // Damp velocity over time when not dragging
        velocityX *= 0.94;
        velocityY *= 0.94;

        // Rotate globe using inertia velocity
        globe.rotation.y += velocityX;
        globe.rotation.x += velocityY;
        
        // Damp vertical rotation clamp in inertia
        globe.rotation.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, globe.rotation.x));

        // Auto-rotation around Y axis if mouse is not dragging, velocity has decayed, and not hovering any pin
        const currentSpeed = Math.abs(velocityX) + Math.abs(velocityY);
        const refPinId = container.getAttribute('data-active-pin');
        
        if (currentSpeed < 0.001 && !refPinId) {
          globe.rotation.y += 0.0018; // smooth slow auto rotation
        }
      }

      // Rotate stars very slowly for parallax effect
      starField.rotation.y += 0.0001;

      // Project pins onto screen coordinates
      updatePinsPosition();

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointerleave', onPointerUp);

      starsGeometry.dispose();
      starsMaterial.dispose();
      globeGeometry.dispose();
      globeMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  // Update DOM attribute when activePinId changes so Three.js loop can read it immediately
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.setAttribute('data-active-pin', activePinId || '');
    }
  }, [activePinId]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] select-none rounded-full overflow-hidden shadow-[0_0_80px_0_rgba(0,0,0,0.55)] border border-white/10 aspect-square cursor-grab active:cursor-grabbing"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* 2D HTML Pins Layer Overlay */}
      <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
        {projectedPins.map((pin) => {
          if (!pin.visible) return null;
          
          return (
            <button
              key={pin.id}
              onClick={() => {
                if (!pin.isHost) {
                  onPinClick(pin.id);
                }
              }}
              onMouseEnter={() => {
                setActivePinId(pin.id);
                onPinHover(pin);
              }}
              onMouseLeave={() => {
                setActivePinId(null);
                onPinHover(null);
              }}
              style={{ 
                left: `${pin.x}%`, 
                top: `${pin.y}%`
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none pointer-events-auto z-45"
            >
              {/* Pulsing glow ring */}
              <span className="absolute -inset-2.5 rounded-full bg-secondary-container/30 scale-0 group-hover/pin:scale-100 transition-transform duration-300 pointer-events-none"></span>
              <span className="absolute w-3.5 h-3.5 -left-0.5 -top-0.5 rounded-full bg-secondary-container opacity-75 animate-ping pointer-events-none"></span>
              {/* Solid dot */}
              <span className={`relative block w-2.5 h-2.5 rounded-full border border-white shadow-[0_0_8px_rgba(253,118,26,0.8)] group-hover/pin:scale-125 transition-all duration-300 ${pin.isHost ? 'bg-sky-400' : 'bg-secondary-container'}`}></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeGlobe;
