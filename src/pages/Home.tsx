import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const COUNTRIES = [
  { id: 'canada', code: 'ca', img: '/images/countries/canada.jpg' },
  { id: 'us', code: 'us', img: '/images/countries/us.jpg' },
  { id: 'uk', code: 'gb', img: '/images/countries/uk.jpg' },
  { id: 'australia', code: 'au', img: '/images/countries/australia.jpg' },
  { id: 'nz', code: 'nz', img: '/images/countries/nz.jpg' },
  { id: 'france', code: 'fr', img: '/images/countries/france.jpg' },
  { id: 'germany', code: 'de', img: '/images/countries/germany.jpg' },
  { id: 'singapore', code: 'sg', img: '/images/countries/singapore.jpg' },
  { id: 'japan', code: 'jp', img: '/images/countries/japan.jpg' },
  { id: 'china', code: 'cn', img: '/images/countries/china.jpg' },
  { id: 'philippines', code: 'ph', img: '/images/countries/philippines.jpg' },
  { id: 'malaysia', code: 'my', img: '/images/countries/malaysia.jpg' },
  { id: 'taiwan', code: 'tw', img: '/images/countries/taiwan.jpg' },
  { id: 'hk', code: 'hk', img: '/images/countries/hk.jpg' },
  { id: 'other', code: 'un', img: '/images/countries/other.jpg' }
];

const GLOBE_PINS = [
  { id: 'canada', name: '캐나다', code: 'ca', x: '29%', y: '24.8%' },
  { id: 'us', name: '미국', code: 'us', x: '28.4%', y: '28.4%' },
  { id: 'uk', name: '영국', code: 'gb', x: '50%', y: '21.4%' },
  { id: 'france', name: '프랑스', code: 'fr', x: '50.6%', y: '22.9%' },
  { id: 'germany', name: '독일', code: 'de', x: '53.7%', y: '20.8%' },
  { id: 'japan', name: '일본', code: 'jp', x: '88.8%', y: '30.2%' },
  { id: 'china', name: '중국', code: 'cn', x: '82.3%', y: '27.8%' },
  { id: 'singapore', name: '싱가포르', code: 'sg', x: '78.8%', y: '49.3%' },
  { id: 'australia', name: '호주', code: 'au', x: '91.9%', y: '68.8%' },
  { id: 'nz', name: '뉴질랜드', code: 'nz', x: '98.5%', y: '70.4%' },
  { id: 'philippines', name: '필리핀', code: 'ph', x: '83.6%', y: '41.9%' },
  { id: 'malaysia', name: '말레이시아', code: 'my', x: '78.3%', y: '48.3%' },
  { id: 'taiwan', name: '대만', code: 'tw', x: '83.8%', y: '36.1%' },
  { id: 'hk', name: '홍콩', code: 'hk', x: '81.7%', y: '37.6%' },
  { id: 'korea', name: '대한민국', code: 'kr', x: '85.3%', y: '29.2%', isHost: true }
];

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [hoveredPin, setHoveredPin] = useState<any>(null);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[620px] lg:h-[680px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1c30] via-[#081524] to-[#040810]">
        {/* Abstract background grid or patterns for premium feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-fixed/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm md:text-base font-sans font-semibold text-secondary-container bg-secondary-container/15 border border-secondary-container/35 rounded-full drop-shadow-sm">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.25] font-sans font-bold text-white break-keep tracking-[-0.03em] mb-8">
              {t('hero.title')}
            </h1>
            
            {/* Elegant Search/CTA Area */}
            <div className="w-full max-w-lg bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-2xl">
              <input 
                type="text" 
                placeholder="어느 국가로 유학을 준비 중이신가요?" 
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/50 outline-none text-base font-sans font-medium"
              />
              <button 
                onClick={() => {
                  const el = document.getElementById('country-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-secondary-container text-white px-7 py-3.5 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all font-sans whitespace-nowrap"
              >
                검색하기
              </button>
            </div>
          </div>
          
          {/* Globe Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            {/* Spinning Globe Outer Wrapper with Atmosphere Glow */}
            <div className="relative group/globe">
              {/* Outer Atmosphere Glow */}
              <div className="absolute -inset-4 rounded-full bg-sky-500/10 blur-[25px] opacity-75 group-hover/globe:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Floating Tooltip HUD */}
              <div className={`absolute top-[-65px] left-1/2 -translate-x-1/2 bg-surface-container-lowest/95 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 z-50 transition-all duration-300 pointer-events-none ${hoveredPin ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                {hoveredPin && (
                  <>
                    <img src={`https://flagcdn.com/${hoveredPin.code}.svg`} alt={`${hoveredPin.name} 국기`} className="w-6 h-auto rounded-[2px] shadow-sm" />
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-sans font-bold text-on-surface leading-none mb-0.5">{hoveredPin.name}</span>
                      <span className="text-[10px] font-sans text-secondary-container font-semibold tracking-tight">
                        {hoveredPin.isHost ? '출발 국가 (Home)' : '클릭하여 유학 정보 보기 ➔'}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Spinning Globe Sphere (Larger Size: 500px on desktop) */}
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-[0_0_80px_0_rgba(0,0,0,0.5)] border border-white/10 bg-[#040b15] aspect-square flex items-center justify-center">
                {/* 3D Sphere Shading Overlay */}
                <div className="absolute inset-0 rounded-full z-35 pointer-events-none shadow-[inset_-40px_-40px_90px_0_rgba(0,0,0,0.95),inset_20px_20px_40px_0_rgba(255,255,255,0.4),0_0_0_1px_rgba(255,255,255,0.08)]"></div>
                
                {/* Soft Inner Glow (Atmosphere-like Depth) */}
                <div className="absolute inset-0 rounded-full z-20 pointer-events-none bg-gradient-to-tr from-transparent via-sky-500/5 to-sky-400/25 mix-blend-screen opacity-90"></div>
                
                {/* Spinning Map Layer */}
                <div className="absolute inset-0 pointer-events-none">
                  <div 
                    className="absolute left-0 top-0 flex w-[200%] h-full shrink-0 animate-spin-globe"
                    style={{ animationPlayState: hoveredPin ? 'paused' : 'running' }}
                  >
                    {/* Copy 1 */}
                    <div className="w-1/2 h-full bg-[url('/images/earth-texture.jpg?v=4')] bg-[length:100%_100%] bg-no-repeat relative">
                      {GLOBE_PINS.map((pin) => (
                        <button
                          key={pin.id}
                          onClick={() => {
                            if (!pin.isHost) {
                              navigate(`/country/${pin.id}`);
                            }
                          }}
                          onMouseEnter={() => setHoveredPin(pin)}
                          onMouseLeave={() => setHoveredPin(null)}
                          style={{ left: pin.x, top: pin.y }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none pointer-events-auto z-40"
                        >
                          {/* Pulsing glow ring */}
                          <span className="absolute -inset-2.5 rounded-full bg-secondary-container/30 scale-0 group-hover/pin:scale-100 transition-transform duration-300 pointer-events-none"></span>
                          <span className="absolute w-3.5 h-3.5 -left-0.5 -top-0.5 rounded-full bg-secondary-container opacity-75 animate-ping pointer-events-none"></span>
                          {/* Solid dot */}
                          <span className={`relative block w-2.5 h-2.5 rounded-full border border-white shadow-[0_0_8px_rgba(253,118,26,0.8)] group-hover/pin:scale-125 transition-all duration-300 ${pin.isHost ? 'bg-sky-400' : 'bg-secondary-container'}`}></span>
                        </button>
                      ))}
                    </div>
                    {/* Copy 2 */}
                    <div className="w-1/2 h-full bg-[url('/images/earth-texture.jpg?v=4')] bg-[length:100%_100%] bg-no-repeat relative">
                      {GLOBE_PINS.map((pin) => (
                        <button
                          key={`${pin.id}-copy`}
                          onClick={() => {
                            if (!pin.isHost) {
                              navigate(`/country/${pin.id}`);
                            }
                          }}
                          onMouseEnter={() => setHoveredPin(pin)}
                          onMouseLeave={() => setHoveredPin(null)}
                          style={{ left: pin.x, top: pin.y }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none pointer-events-auto z-40"
                        >
                          {/* Pulsing glow ring */}
                          <span className="absolute -inset-2.5 rounded-full bg-secondary-container/30 scale-0 group-hover/pin:scale-100 transition-transform duration-300 pointer-events-none"></span>
                          <span className="absolute w-3.5 h-3.5 -left-0.5 -top-0.5 rounded-full bg-secondary-container opacity-75 animate-ping pointer-events-none"></span>
                          {/* Solid dot */}
                          <span className={`relative block w-2.5 h-2.5 rounded-full border border-white shadow-[0_0_8px_rgba(253,118,26,0.8)] group-hover/pin:scale-125 transition-all duration-300 ${pin.isHost ? 'bg-sky-400' : 'bg-secondary-container'}`}></span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section id="country-section" className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">{t('home.heading')}</h2>
          <p className="text-body-lg text-on-surface-variant">{t('home.subheading')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => (
            <div 
              key={country.id}
              onClick={() => navigate(`/country/${country.id}`)}
              className="group cursor-pointer rounded-3xl overflow-hidden relative aspect-[4/3] shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={country.img} 
                alt={t(`country.${country.id}.name`)} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 flex items-center gap-2 drop-shadow-md">
                  <img src={`https://flagcdn.com/${country.code}.svg`} alt={`${t(`country.${country.id}.name`)} 국기`} className="w-7 h-auto drop-shadow-sm rounded-[2px]" />
                  <span>{t(`country.${country.id}.name`)}</span>
                </h3>
                <p className="text-sm md:text-base font-sans text-white/90 font-medium break-keep leading-snug drop-shadow-sm">
                  {t(`country.${country.id}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action for Partners */}
      <section className="py-24 bg-surface-container-low text-center px-4">
        <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">{t('home.cta_title')}</h2>
        <p className="text-body-lg text-on-surface-variant mb-10">{t('home.cta_desc')}</p>
        <button 
          onClick={() => navigate('/register')}
          className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-label-lg hover:opacity-90 transition-opacity"
        >
          {t('home.cta_btn')}
        </button>
      </section>
    </main>
  );
};

export default Home;
