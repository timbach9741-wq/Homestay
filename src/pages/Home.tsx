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

const WorldMap = () => (
  <svg viewBox="0 0 800 400" className="w-[800px] h-[400px] shrink-0" fill="url(#map-gradient)">
    <defs>
      <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffb076" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#fd761a" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#d84f00" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <path d="M 60,60 L 75,50 L 90,55 L 110,40 L 130,45 L 150,30 L 175,35 L 205,50 L 210,75 L 195,95 L 200,120 L 185,140 L 170,135 L 165,150 L 150,165 L 140,190 L 130,195 L 120,185 L 115,160 L 120,140 L 115,130 L 100,125 L 85,120 L 70,115 L 60,95 L 60,75 Z" />
    <path d="M 230,30 L 255,20 L 270,25 L 265,40 L 250,55 L 235,50 Z" />
    <path d="M 130,205 L 145,205 L 160,215 L 168,235 L 172,255 L 175,275 L 168,295 L 160,315 L 150,335 L 140,355 L 130,370 L 125,385 L 120,385 L 115,380 L 115,360 L 112,340 L 115,320 L 120,290 L 125,270 L 125,250 L 120,230 L 120,215 Z" />
    <path d="M 330,175 L 345,160 L 365,150 L 390,150 L 415,155 L 428,175 L 438,195 L 448,215 L 452,235 L 450,255 L 442,275 L 432,295 L 418,315 L 398,325 L 380,320 L 372,310 L 368,295 L 365,280 L 360,265 L 350,250 L 332,235 L 328,215 L 322,195 Z" />
    <path d="M 315,120 L 330,105 L 350,95 L 375,90 L 400,95 L 425,100 L 450,90 L 475,80 L 500,75 L 525,75 L 550,70 L 580,65 L 610,65 L 640,70 L 670,80 L 685,95 L 680,115 L 670,130 L 675,145 L 685,155 L 675,170 L 660,180 L 640,195 L 620,185 L 600,190 L 585,195 L 570,205 L 550,225 L 530,235 L 515,235 L 505,225 L 495,215 L 480,210 L 465,205 L 450,200 L 435,195 L 410,185 L 395,180 L 375,175 L 355,170 L 340,165 L 330,150 L 315,135 Z" />
    <path d="M 318,78 L 324,72 L 328,76 L 326,82 L 320,80 Z" />
    <path d="M 698,98 L 704,95 L 708,105 L 704,118 L 698,110 Z" />
    <path d="M 482,198 L 488,198 L 492,208 L 488,212 L 484,204 Z" />
    <path d="M 528,198 L 534,202 L 532,212 L 526,208 Z" />
    <path d="M 605,285 L 625,275 L 645,280 L 655,295 L 650,315 L 640,330 L 620,335 L 605,320 L 598,300 Z" />
    <path d="M 670,335 L 675,345 L 670,355 L 665,345 Z" />
    <path d="M 445,280 L 450,290 L 446,305 L 440,295 Z" />
    
    {/* Pulsing City Hubs */}
    <circle cx="670" cy="115" r="3.5" fill="#ffffff" className="animate-pulse" />
    <circle cx="326" cy="85" r="2.5" fill="#ffffff" className="animate-pulse" />
    <circle cx="185" cy="85" r="2.5" fill="#ffffff" className="animate-pulse" />
    <circle cx="95" cy="95" r="2.5" fill="#ffffff" className="animate-pulse" />
    <circle cx="642" cy="315" r="2.5" fill="#ffffff" className="animate-pulse" />
    <circle cx="105" cy="65" r="2.5" fill="#ffffff" className="animate-pulse" />
  </svg>
);

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[620px] lg:h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1c30] via-[#081524] to-[#040810]">
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
            <h1 className="text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.25] font-sans font-bold text-white break-keep tracking-[-0.03em] mb-8">
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
              <div className="absolute -inset-1.5 rounded-full bg-secondary-container/15 blur-[15px] opacity-75 group-hover/globe:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Spinning Globe Sphere */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-[0_0_80px_0_rgba(253,118,26,0.3)] border border-white/10 bg-[#040b15] aspect-square flex items-center justify-center">
                {/* 3D Sphere Shading Overlay */}
                <div className="absolute inset-0 rounded-full z-30 pointer-events-none shadow-[inset_-30px_-30px_70px_0_rgba(0,0,0,0.9),inset_15px_15px_30px_0_rgba(255,255,255,0.35),0_0_0_1px_rgba(255,255,255,0.08)]"></div>
                
                {/* Soft Inner Glow */}
                <div className="absolute inset-0 rounded-full z-20 pointer-events-none bg-gradient-to-tr from-transparent via-secondary-container/5 to-secondary-container/30 mix-blend-screen opacity-90"></div>
                
                {/* STATIC 3D GRID OVERLAY */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-25 pointer-events-none opacity-20 text-white">
                  {/* Latitudes */}
                  <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="0" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.6" />
                  <line x1="0" y1="65" x2="100" y2="65" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  
                  {/* Longitudes */}
                  <ellipse cx="50" cy="50" rx="42" ry="50" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <ellipse cx="50" cy="50" rx="28" ry="50" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <ellipse cx="50" cy="50" rx="14" ry="50" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.6" />
                </svg>
                
                {/* Spinning Map Layer */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex w-[200%] h-[80%] items-center animate-spin-globe">
                    <WorldMap />
                    <WorldMap />
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
