import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-on-surface mb-4">EduGuard</div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">글로벌 교육 보호 및 홈스테이 관리 전문 플랫폼. 학생의 안전과 성장을 최우선으로 합니다.</p>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">서비스</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/detail">Homestays</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/dashboard">Guardianship</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="/landing">Landing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">정보</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">Terms of Service</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">Privacy Policy</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-4">커뮤니티</h4>
          <ul className="space-y-2">
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">Host Application</Link></li>
            <li><Link className="text-label-sm text-on-surface-variant hover:text-secondary transition-colors" to="#">Partnerships</Link></li>
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
