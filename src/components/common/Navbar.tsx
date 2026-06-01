import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
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
      ? "text-on-surface border-b-[3px] border-secondary-container font-bold pb-1 text-[17px] font-sans"
      : "text-on-surface/85 pb-1 text-[17px] font-semibold hover:text-secondary-container transition-colors font-sans";
  };

  return (
    <header className={`fixed top-0 z-50 w-full bg-surface-container-lowest transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="text-[26px] md:text-[28px] font-sans font-extrabold text-on-surface hover:opacity-80 tracking-tight">
          EduGuard
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link className={getLinkClass('/')} to="/">{t('nav.home')}</Link>
          <Link className={getLinkClass('/detail')} to="/detail">{t('nav.homestays')}</Link>
          <Link className={getLinkClass('/dashboard')} to="/dashboard">{t('nav.dashboard')}</Link>
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
    </header>
  );
};

export default Navbar;
