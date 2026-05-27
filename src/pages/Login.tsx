import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-container-lowest px-4">
      <div className="max-w-md w-full bg-surface-container rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-4">
            <LogIn size={32} />
          </div>
          <h2 className="text-display-sm font-display-sm font-bold text-on-surface">{t('환영합니다')}</h2>
          <p className="text-body-md text-on-surface-variant mt-2">{t('홈스테이 파트너 계정으로 로그인하세요.')}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">{t('이메일')}</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="hello@example.com"
              className="w-full px-4 py-3 bg-surface-container-highest rounded-xl text-on-surface border border-outline-variant focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">{t('비밀번호')}</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-surface-container-highest rounded-xl text-on-surface border border-outline-variant focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 w-full bg-primary text-on-primary py-4 rounded-full font-label-lg hover:opacity-90 transition-opacity"
          >
            {t('로그인')}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-body-md text-on-surface-variant">
            {t('아직 파트너 계정이 없으신가요?')} <Link to="/register" className="text-primary font-bold hover:underline">{t('회원가입')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
