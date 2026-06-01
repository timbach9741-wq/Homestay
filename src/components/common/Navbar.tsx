import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-on-surface border-b-[3px] border-secondary-container font-bold pb-1 text-[17px] font-sans cursor-pointer focus:outline-none"
      : "text-on-surface/85 pb-1 text-[17px] font-semibold hover:text-secondary-container transition-colors font-sans cursor-pointer focus:outline-none";
  };

  return (
    <header className={`fixed top-0 z-50 w-full bg-surface-container-lowest transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="text-[26px] md:text-[28px] font-sans font-extrabold text-on-surface hover:opacity-80 tracking-tight">
          EduGuard
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link className={getLinkClass('/')} to="/">{t('nav.home')}</Link>
          <button 
            onClick={() => setIsCountryModalOpen(true)}
            className={location.pathname.startsWith('/country/') ? "text-on-surface border-b-[3px] border-secondary-container font-bold pb-1 text-[17px] font-sans cursor-pointer focus:outline-none" : "text-on-surface/85 pb-1 text-[17px] font-semibold hover:text-secondary-container transition-colors font-sans cursor-pointer focus:outline-none"}
          >
            {t('nav.homestays')}
          </button>
          {user ? (
            <Link className={getLinkClass('/dashboard')} to="/dashboard">{t('nav.dashboard')}</Link>
          ) : (
            <Link className={getLinkClass('/pricing')} to="/pricing">{t('nav.partners')}</Link>
          )}
        </div>
        <div className="flex gap-6 items-center">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-[16px] font-semibold text-on-surface/85 hover:text-secondary-container transition-colors py-2 font-sans"
            >
              <span>
                {language === 'ko' && '🇰🇷 한국어'}
                {language === 'en' && '🇺🇸 English'}
              </span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-44 bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-xl z-20 py-2">
                  <button onClick={() => { setLanguage('ko'); setLangMenuOpen(false); }} className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm hover:bg-surface-container-high transition-colors ${language === 'ko' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}>
                    <span className="text-base">🇰🇷</span> <span>한국어</span>
                  </button>
                  <button onClick={() => { setLanguage('en'); setLangMenuOpen(false); }} className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm hover:bg-surface-container-high transition-colors ${language === 'en' ? 'font-bold text-primary bg-surface-container-low' : 'text-on-surface'}`}>
                    <span className="text-base">🇺🇸</span> <span>English</span>
                  </button>
                </div>
              </>
            )}
          </div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-on-surface/85 font-semibold font-sans">
                {user.email.split('@')[0]}{t('nav.welcome')}
                {user.membershipTier === 'premium' && <span className="ml-2 text-xs bg-secondary text-on-secondary px-2.5 py-1 rounded-full font-bold">{t('nav.premium')}</span>}
              </span>
              <button 
                onClick={() => { logout(); navigate('/'); }}
                className="bg-surface-container-high text-on-surface px-6 py-2.5 rounded-full text-[16px] font-bold hover:bg-surface-container-highest hover:scale-[1.02] transition-all duration-200 font-sans"
              >
                {t('nav.logout')}
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-[16px] font-bold hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-200 inline-block font-sans shadow-sm hover:shadow"
            >
              {t('nav.login')}
            </Link>
          )}
        </div>
      </nav>

      {/* Country Selection Modal */}
      {isCountryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsCountryModalOpen(false)}
          />
          
          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-slate-200/50 z-10 scale-100 transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 font-sans">
                어느 국가를 찾으시나요?
              </h3>
              <button 
                onClick={() => setIsCountryModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Country Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[380px] overflow-y-auto pr-2">
              {[
                { id: 'canada', name: '캐나다', code: 'ca' },
                { id: 'us', name: '미국', code: 'us' },
                { id: 'uk', name: '영국', code: 'gb' },
                { id: 'australia', name: '호주', code: 'au' },
                { id: 'nz', name: '뉴질랜드', code: 'nz' },
                { id: 'france', name: '프랑스', code: 'fr' },
                { id: 'germany', name: '독일', code: 'de' },
                { id: 'singapore', name: '싱가포르', code: 'sg' },
                { id: 'japan', name: '일본', code: 'jp' },
                { id: 'china', name: '중국', code: 'cn' },
                { id: 'philippines', name: '필리핀', code: 'ph' },
                { id: 'malaysia', name: '말레이시아', code: 'my' },
                { id: 'taiwan', name: '대만', code: 'tw' },
                { id: 'hk', name: '홍콩', code: 'hk' }
              ].map((country) => (
                <button
                  key={country.id}
                  onClick={() => {
                    setIsCountryModalOpen(false);
                    navigate(`/country/${country.id}`);
                  }}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-[#4f46e5]/50 bg-slate-50/50 hover:bg-indigo-50/30 hover:shadow-sm transition-all text-left font-sans cursor-pointer group"
                >
                  <img 
                    src={`https://flagcdn.com/${country.code}.svg`} 
                    alt={`${country.name} 국기`} 
                    className="w-7 h-auto rounded-[2px] shadow-sm group-hover:scale-105 transition-transform" 
                  />
                  <span className="text-base font-bold text-slate-800 group-hover:text-[#4f46e5] transition-colors">
                    {country.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
