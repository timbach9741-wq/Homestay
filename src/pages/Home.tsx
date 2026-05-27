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

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD20JUXBtpk8MFI_k33n-KDdHu6ekyAjkx7kdG4utjw_Xdw13qUE5fWChIEAHVwQ7dGJtvi84NpJyMigV7m7C_p_J0DZ1TFMTkbz6kjf0bLHC3vEh0dV8MPhPEkhgqNFXwE3GbvsIXzKhOWE8sJo6wYtM1SY_aWF-bI-9Ki6T8-5aq_EP4gSndpWut1JngwKr0XMp4rQE2DW183YSvXhtLCi_YdDFWi8NmM0EcTsMsCcXoFvsLuVQWJ3eEZgNpZhB4O-tRwaNEewE"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm md:text-base font-sans font-semibold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30 drop-shadow-sm">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-sans font-bold text-white leading-[1.35] break-keep tracking-[-0.02em] drop-shadow-lg">
            {t('hero.title')}
          </h1>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
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
