import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Star, Gift } from 'lucide-react';

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#4f46e5]/10 text-[#4f46e5] font-label-md text-label-md mb-6 shadow-sm">
          <Gift size={16} /> {t('특별 파트너 모집 프로모션')}
        </span>
        <h1 className="text-[36px] md:text-[44px] font-sans font-bold text-slate-900 mb-4 break-keep tracking-tight">
          {t('에듀가드 파트너 요금제')}
        </h1>
        <p className="text-body-lg text-slate-600 max-w-2xl mx-auto break-keep leading-relaxed font-sans font-medium">
          {t('더 많은 글로벌 유학생들과 우수한 현지 홈스테이의 연결을 위해 초기 파트너 입점 프로모션을 진행합니다. 부담 없이 시작하고 우수한 유학생들을 만나보세요.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Tier 1: General (Free for 3 Months) */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] border border-slate-200/60 flex flex-col relative transition-all hover:shadow-lg">
          <div className="mb-6">
            <span className="text-xs bg-slate-100 text-slate-600 px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">{t('일반 파트너')}</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2 font-sans">{t('일반 가입')}</h3>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">{t('기본적인 홈스테이 리스팅 및 유학생 매칭 서비스를 지원합니다.')}</p>
          </div>
          
          <div className="mb-6 border-t border-slate-100 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-slate-900">$30</span>
              <span className="text-slate-500 text-sm">{t('/ 월')}</span>
              <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full font-bold ml-2">{t('3개월 무료')}</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-600 text-sm font-medium">{t('기본 홈스테이 정보 등록')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-600 text-sm font-medium">{t('일반 검색 결과 영역 노출')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-600 text-sm font-medium">{t('다수 업체 순환 노출')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-600 text-sm font-medium">{t('에스크로 안전 계약 보호')}</span>
            </div>
          </div>

          <div className="mt-auto">
            <button 
              onClick={() => navigate(user ? '/dashboard' : '/register')}
              className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 active:scale-95 transition-all text-sm font-sans"
            >
              {user ? t('대시보드로 가기') : t('3개월 무료 시작하기')}
            </button>
          </div>
        </div>

        {/* Tier 2: Premium (Free for 3 Months) */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(79,70,229,0.08)] border-2 border-[#4f46e5] flex flex-col relative transition-all hover:shadow-xl">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#4f46e5] text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
            <Star size={12} fill="currentColor" /> {t('인기 호스트 추천')}
          </div>

          <div className="mb-6">
            <span className="text-xs bg-[#4f46e5]/10 text-[#4f46e5] px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">{t('프리미엄 파트너')}</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2 font-sans">{t('프리미엄 가입')}</h3>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">{t('최상단 노출 및 특별 하이라이트 디자인으로 마케팅 효과를 극대화합니다.')}</p>
          </div>
          
          <div className="mb-6 border-t border-slate-100 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-[#4f46e5]">$200</span>
              <span className="text-slate-500 text-sm">{t('/ 월')}</span>
              <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold ml-2">{t('3개월 무료')}</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-700 text-sm font-semibold">{t('카테고리 최상단 배너')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-700 text-sm font-semibold">{t('별도 하이라이트 디자인')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-700 text-sm font-semibold">{t('홈페이지 메인 페이지 추천')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-700 text-sm font-semibold">{t('숙소 실사진 및 영상 무제한 등록')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-[#4f46e5] shrink-0 mt-0.5" size={18} />
              <span className="text-slate-700 text-sm font-semibold">{t('한국인 학부모용 자동 한글 번역')}</span>
            </div>
          </div>

          <div className="mt-auto">
            <button 
              onClick={() => navigate(user ? '/dashboard' : '/register')}
              className="w-full py-3.5 rounded-2xl bg-[#4f46e5] text-white font-bold hover:bg-[#4338ca] active:scale-95 transition-all text-sm font-sans shadow-md"
            >
              {user ? t('대시보드로 가기') : t('프리미엄 3개월 무료 시작')}
            </button>
          </div>
        </div>

        {/* Tier 3: Regional Exclusive (Consultation) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-800 flex flex-col relative transition-all hover:shadow-lg">
          <div className="mb-6">
            <span className="text-xs bg-amber-500/20 text-amber-400 px-3.5 py-1 rounded-full font-bold uppercase tracking-wider">{t('지역 선점제')}</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-2 font-sans">{t('지역 독점 파트너')}</h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">{t('지정한 구역 및 학군에서 압도적인 1순위 노출을 확보하여 독점적으로 유학생 예약을 선점합니다.')}</p>
          </div>
          
          <div className="mb-6 border-t border-slate-800 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-amber-400">$800</span>
              <span className="text-slate-400 text-sm">{t('/ 월')}</span>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-bold ml-2">{t('별도 문의 및 상담')}</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span className="text-slate-300 text-sm font-medium">{t('세부 구역/학군 단위별 오직 1개 호스트 독점 보장')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span className="text-slate-300 text-sm font-medium">{t('해당 지역 트래픽 100% 흡수')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span className="text-slate-300 text-sm font-medium">{t('경쟁사 노출 전면 차단')}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span className="text-slate-300 text-sm font-medium">{t('공식 인증 가디언 VVIP 골드 배지')}</span>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-[11px] text-slate-400 mb-3 text-center leading-normal break-keep">
              {t('* 이미 독점된 지역의 경우 가입이 제한되며, 프리미엄 파트너 요금제로 대체 가입을 안내해 드립니다.')}
            </p>
            <button 
              onClick={() => window.open('mailto:support@eduguard.com?subject=Regional%20Exclusive%20Inquiry')}
              className="w-full py-3.5 rounded-2xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 active:scale-95 transition-all text-sm font-sans"
            >
              {t('지역 독점 문의 및 상담')}
            </button>
          </div>
        </div>
      </div>

      {/* Informational Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl p-8 border border-slate-200/60 text-center shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-slate-900 font-sans">{t('왜 에듀가드는 대부분 무료 프로모션을 진행하나요?')}</h3>
        <p className="text-body-md text-slate-600 max-w-2xl mx-auto break-keep leading-relaxed font-sans font-medium">
          {t('에듀가드는 해외에 자녀를 보내는 한국인 학부모들의 불안감을 해소하기 위해 설립되었습니다. 진입 장벽을 낮춰 더 많은 훌륭한 현지 호스트들의 신원과 안전 규정을 검증하는 것이 가장 큰 목표이므로, 일반 및 프리미엄 등록 비용은 3개월간 무료 프로모션으로 제공하며 추후 광고 수수료 및 부가 서비스 제휴를 통해 확장성 높은 비즈니스 구조를 구축합니다.')}
        </p>
      </div>
    </main>
  );
};

export default Pricing;
