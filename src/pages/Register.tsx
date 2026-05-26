import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password === confirmPassword) {
      register(email);
      navigate('/dashboard'); // 회원가입 후 대시보드로 이동하여 컴플라이언스 정보 입력 유도
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-surface-container-lowest px-4 py-12">
      <div className="max-w-md w-full bg-surface-container rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-4">
            <UserPlus size={32} />
          </div>
          <h2 className="text-display-sm font-display-sm font-bold text-on-surface">파트너 가입</h2>
          <p className="text-body-md text-on-surface-variant mt-2 text-center">
            홈스테이를 등록하고 전 세계 고객들과 만나보세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">이메일</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="hello@example.com"
              className="w-full px-4 py-3 bg-surface-container-highest rounded-xl text-on-surface border border-outline-variant focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-surface-container-highest rounded-xl text-on-surface border border-outline-variant focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-2">비밀번호 확인</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-surface-container-highest rounded-xl text-on-surface border border-outline-variant focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 w-full bg-secondary text-on-secondary py-4 rounded-full font-label-lg hover:opacity-90 transition-opacity"
          >
            가입하기
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-body-md text-on-surface-variant">
            이미 계정이 있으신가요? <Link to="/login" className="text-secondary font-bold hover:underline">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
