import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle2, Star } from 'lucide-react';

const Pricing = () => {
  const { user, upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate('/login');
      return;
    }
    
    // 가상 결제 로직 (Mock Payment)
    if (window.confirm("Premium 요금제(월 49,000원)를 결제하시겠습니까? (현재 테스트 환경입니다)")) {
      upgradeToPremium();
      alert("결제가 완료되었습니다! Premium 파트너로 승급되었습니다.");
      navigate('/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-surface-container-lowest pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-display-sm font-display-sm font-bold text-on-surface mb-4">
          파트너 요금제 안내
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          비즈니스 규모에 맞는 요금제를 선택하고 더 많은 예약을 만들어보세요.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Free Plan */}
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant flex flex-col hover:-translate-y-1 transition-transform">
          <div className="mb-8">
            <h2 className="text-headline-md font-bold text-on-surface mb-2">Free 파트너</h2>
            <p className="text-on-surface-variant mb-6">플랫폼을 처음 시작하는 분들을 위한 기본 플랜</p>
            <div className="flex items-baseline gap-1">
              <span className="text-display-sm font-bold">₩0</span>
              <span className="text-body-md text-on-surface-variant">/ 평생 무료</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-on-surface-variant shrink-0" />
              <span className="text-body-md text-on-surface">기본 업체 정보 등록 (상호, 설명)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-on-surface-variant shrink-0" />
              <span className="text-body-md text-on-surface">사진 최대 3장 업로드</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-on-surface-variant shrink-0" />
              <span className="text-body-md text-on-surface">플랫폼 내 메시지로 문의 수신</span>
            </li>
          </ul>

          <button 
            onClick={() => user ? navigate('/dashboard') : navigate('/register')}
            className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold text-label-lg hover:bg-primary-container transition-colors"
          >
            {user ? '현재 이용 중' : '무료로 시작하기'}
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-xl relative flex flex-col transform hover:-translate-y-1 transition-transform border-4 border-secondary-container">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 shadow-md">
            <Star size={14} /> 가장 인기있는 요금제
          </div>
          
          <div className="mb-8">
            <h2 className="text-headline-md font-bold mb-2">Premium 파트너</h2>
            <p className="opacity-90 mb-6">최고의 노출 효과로 매출을 극대화하세요</p>
            <div className="flex items-baseline gap-1">
              <span className="text-display-sm font-bold">₩49,000</span>
              <span className="text-body-md opacity-80">/ 월</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0" />
              <span className="text-body-md font-medium">해당 지역 검색 시 최상단 고정 노출 보장</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0" />
              <span className="text-body-md font-medium">'안심 홈스테이' 프리미엄 인증 배지 부여</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0" />
              <span className="text-body-md font-medium">사진 무제한 및 동영상 업로드 가능</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0" />
              <span className="text-body-md font-medium">카카오톡 / WhatsApp 다이렉트 연락 활성화</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0" />
              <span className="text-body-md font-medium">고객용 프로모션 쿠폰 발행 권한</span>
            </li>
          </ul>

          <button 
            onClick={handleSubscribe}
            className="w-full py-4 rounded-full bg-secondary text-on-secondary font-bold text-label-lg hover:brightness-110 shadow-lg transition-all"
          >
            {user?.membershipTier === 'premium' ? '프리미엄 이용 중' : '프리미엄 구독하기'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
