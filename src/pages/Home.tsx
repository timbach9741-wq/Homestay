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
        <stop offset="0%" stopColor="#ff9858" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#fd761a" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    <path d="M 80,60 C 95,50 120,40 145,45 C 170,50 185,45 200,65 C 215,85 220,110 205,130 C 190,150 180,140 165,155 C 150,170 140,195 130,200 C 120,195 110,180 115,160 C 120,140 115,130 100,125 C 85,120 70,115 65,95 C 60,75 70,65 80,60 Z" />
    <path d="M 230,30 C 245,20 265,25 260,40 C 255,55 235,50 230,30 Z" />
    <path d="M 130,205 C 145,205 165,220 170,245 C 175,270 165,300 150,335 C 135,370 125,385 120,385 C 115,385 110,360 115,320 C 120,280 125,240 120,225 C 115,210 120,205 130,205 Z" />
    <path d="M 330,175 C 360,150 405,150 425,175 C 445,200 455,230 435,265 C 415,300 395,320 380,320 C 365,320 360,300 355,275 C 350,250 330,240 325,220 C 320,200 315,190 330,175 Z" />
    <path d="M 320,115 C 340,95 380,85 410,95 C 440,105 470,85 500,80 C 530,75 580,65 620,70 C 660,75 690,95 680,120 C 670,145 685,160 665,180 C 645,200 625,185 595,195 C 565,205 545,235 525,235 C 505,235 490,215 460,210 C 430,205 410,185 390,180 C 370,175 350,180 340,165 C 330,150 310,135 320,115 Z" />
    <path d="M 320,75 C 325,70 330,75 328,80 C 325,85 318,80 320,75 Z" />
    <path d="M 695,100 C 700,95 705,105 702,115 C 700,125 693,120 695,100 Z" />
    <path d="M 480,195 C 490,195 495,205 490,215 C 485,225 475,205 480,195 Z" />
    <path d="M 605,285 C 625,275 655,285 650,310 C 645,335 615,335 605,310 C 595,285 595,285 605,285 Z" />
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
            {/* Spinning Globe Sphere */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-[0_0_80px_0_rgba(253,118,26,0.25)] border border-white/10 bg-[#061221] aspect-square flex items-center justify-center">
              {/* 3D Sphere Shading Overlay */}
              <div className="absolute inset-0 rounded-full z-20 pointer-events-none shadow-[inset_-30px_-30px_70px_0_rgba(0,0,0,0.85),inset_15px_15px_30px_0_rgba(255,255,255,0.25),0_0_0_1px_rgba(255,255,255,0.05)]"></div>
              
              {/* Soft Inner Glow */}
              <div className="absolute inset-0 rounded-full z-10 pointer-events-none bg-gradient-to-tr from-transparent via-secondary-container/5 to-secondary-container/20 mix-blend-screen opacity-80"></div>
              
              {/* Spinning Map Layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex w-[200%] h-[90%] items-center animate-spin-globe">
                  <WorldMap />
                  <WorldMap />
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
