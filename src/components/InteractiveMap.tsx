import React from 'react';

export interface MapPin {
  id: string;
  name: string;
  code: string;
  lat: number;
  lon: number;
  x: number;
  y: number;
  isHost?: boolean;
}

export const MAP_PINS: MapPin[] = [];

interface InteractiveMapProps {
  onPinClick?: (id: string) => void;
  onPinHover?: (pin: MapPin | null) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = () => {
  return (
    <div 
      className="relative w-full select-none rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] border border-slate-200/60 bg-white/90"
      style={{ aspectRatio: '1009.6727 / 665.96301' }}
    >
      {/* Grid Background overlay for high-tech HUD look */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

      {/* World Map Image Background (Styled to soft blue-grey for modern minimalist theme) */}
      <img 
        src="/images/world-map.svg" 
        alt="World Map Vector Outlines" 
        className="absolute inset-0 w-full h-full object-fill opacity-95 z-0" 
        style={{
          filter: 'opacity(0.12) contrast(1.15) saturate(0.9) hue-rotate(220deg)'
        }}
      />
    </div>
  );
};

export default InteractiveMap;

