import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Star, Gift, UserPlus } from 'lucide-react';

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-surface-container-lowest pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-6 shadow-sm">
          <Gift size={16} /> {t('특별 파트너 모집 프로모션')}
        </span>
        <h1 className="text-display-sm font-display-sm font-bold text-on-surface mb-4">
          {t('에듀가드 파트너 전면 무료화 안내')}
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto break-keep">
          {t('더 많은 글로벌 유학생들과 우수한 현지 홈스테이의 연결을 위해, **파트너 등록 및 홍보 서비스를 수수료/이용료 없이 전면 무료**로 제공합니다.')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Main Free Plan Card */}
        <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 shadow-xl relative flex flex-col border-4 border-secondary-container overflow-hidden">
          {/* Decorative Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-secondary text-on-secondary px-5 py-1.5 rounded-full text-label-sm font-bold flex items-center gap-1 shadow-md">
            <Star size={14} /> {t('추천 호스트')}
          </div>
          
          <div className="mb-8 border-b border-white/20 pb-6">
            <h2 className="text-headline-md font-bold mb-2">{t('에듀가드 안심 파트너 요금')}</h2>
            <p className="opacity-90 mb-4">{t('입점 기간 한정, 월 49,000원 상당의 모든 프리미엄 기능을 제공합니다.')}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-display-md font-extrabold">₩0</span>
              <span className="text-body-lg opacity-80 line-through">{t('/ 월 49,000원')}</span>
              <span className="text-body-md bg-white/20 px-3 py-1 rounded-full font-bold ml-2">{t('평생 무료 지원')}</span>
            </div>
          </div>
          
          <h3 className="text-title-lg font-bold mb-6">{t('무상 제공되는 프리미엄 기능:')}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('지역별 검색 결과 최상단 노출 권한')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('\'글로벌 안심 홈스테이\' 인증 마크 부여')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('숙소 실사진 및 동영상 무제한 등록')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('카카오톡 / WhatsApp 다이렉트 연락처 노출')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('학부모용 한국어 자동 번역 번들 적용')}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-0.5" />
              <span className="text-body-md font-medium">{t('공항 픽업 및 랜딩 부가 서비스 판매 지원')}</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {user ? (
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex-1 py-4 rounded-full bg-secondary text-on-secondary font-bold text-label-lg hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={18} /> {t('대시보드에서 가입 신청서 작성하기')}
              </button>
            ) : (
              <>
                <button 
                  onClick={() => navigate('/register')}
                  className="flex-1 py-4 rounded-full bg-secondary text-on-secondary font-bold text-label-lg hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <UserPlus size={18} /> {t('지금 파트너로 시작하기')}
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="py-4 px-8 rounded-full border-2 border-white/30 text-white font-bold text-label-lg hover:bg-white/10 transition-colors"
                >
                  {t('로그인')}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Informational Section */}
        <div className="mt-12 bg-surface-container rounded-3xl p-8 border border-outline-variant text-center">
          <h3 className="font-headline-sm font-bold mb-3">{t('왜 에듀가드는 무료로 제공되나요?')}</h3>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto break-keep">
            {t('에듀가드는 해외에 자녀를 보내는 한국인 학부모들의 불안감을 해소하기 위해 설립되었습니다. 진입 장벽을 낮춰 더 많은 훌륭한 현지 호스트들의 신원과 안전 규정을 검증하는 것이 가장 큰 목표이므로, 모든 입점 비용은 전면 무료로 제공됩니다.')}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
