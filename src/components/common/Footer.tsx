import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-on-surface mb-4">EduGuard</div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">{t('footer.desc')}</p>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">{t('footer.services')}</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/detail">{t('nav.homestays')}</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/dashboard">{t('nav.dashboard')}</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/landing">Landing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">{t('footer.info')}</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">{t('footer.terms')}</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">{t('footer.privacy')}</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">{t('footer.support')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">{t('footer.community')}</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">{t('footer.host_app')}</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">{t('footer.partnerships')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-margin-desktop py-8 border-t border-outline-variant max-w-container-max mx-auto text-center">
        <p className="text-label-sm text-on-surface-variant opacity-70">© 2024 EduGuard Overseas. All rights reserved. Registered Educational Guardianship Service.</p>
      </div>
    </footer>
  );
};

export default Footer;
