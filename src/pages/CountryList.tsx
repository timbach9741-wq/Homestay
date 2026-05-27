import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const MOCK_HOMESTAYS = {
  canada: [
    { id: 1, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "토론토 노스욕 VVIP 가디언 스테이", location: "York Mills CI 도보 10분", price: "CAD $1,800", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx9umDeYyXZYntw9ynGrPD3itI7D89ptNszLvYj7A9KNBHKKrCTXLIv72OWvWp_Mikpf3TnM4dCpInV8Ie1beSypzTRfulRP3F45SruY635WRAoqZ58FaARuV8nkJQG8plj5_fJMa9qCWzkDHP5RzoaBKgh_jLGlMsV2acVKZBdvnYr2YkERuhOlo08bY0Y4OPrm8cmsgBNggnLU6LvJj2H9DG5XMZQxQ0mB77Zp6G9RTxWUH09reTNKh7fOlumJmTGnX-o6f9XCU" },
    { id: 2, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "밴쿠버 웨스트사이드 명문학군 홈스테이", location: "Lord Byng 초/중 인근", price: "CAD $1,650", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
    { id: 4, tier: 'premium', hostType: 'korean', businessType: 'individual', insurance: true, name: "밴쿠버 행복 홈스테이", location: "UBC 차로 15분", price: "CAD $1,500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXbKyEttGkCNBgh6EQh1cDIkjSa6jRSDZkwGHEChO642wJt4ymzLQzHAfsjz9ttMscynuK01Zq8BR6PBEmCu4vOREqhn6oeZiFGy2h9Tlh88e35DJiPMMlEA0QItN5fcRsIvBVSATJVOobG7x1evKaCmhHt-ErGMmGSEADThRvXgaCcvvEMqCryH0AMwnvJEWj7mJHkZT67XwGzCEOMyMCY9kD3clCqdf0GbJ6FssekwM88H6jQKWv3aCehgcIJauR0vMkxsM8z-E" },
    { id: 5, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "캘거리 따뜻한 가족 홈스테이", location: "다운타운 20분", price: "CAD $1,400", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 13, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "몬트리올 아트 하우스", location: "맥길 대학교 도보 15분", price: "CAD $1,350", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
    { id: 14, tier: 'general', hostType: 'korean', businessType: 'individual', insurance: false, name: "오타와 리버뷰 맘스테이", location: "오타와 대학교 30분", price: "CAD $1,450", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
  ],
  us: [
    { id: 6, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "LA 선샤인 공식 파트너 하우스", location: "UCLA 버스 20분", price: "USD $1,900", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 15, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "어바인(Irvine) 안전제일 에듀스테이", location: "Northwood High School 인접", price: "USD $2,100", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
    { id: 7, tier: 'premium', hostType: 'local', businessType: 'individual', insurance: true, name: "뉴욕 맨해튼 프리미엄 홈", location: "콜럼비아 대학 인근", price: "USD $2,500", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" },
    { id: 16, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "시애틀 킹카운티 홈스테이", location: "UW 시애틀 캠퍼스 버스 15분", price: "USD $1,600", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80" },
    { id: 17, tier: 'general', hostType: 'korean', businessType: 'individual', insurance: true, name: "샌디에이고 오션 맘스테이", location: "UCSD 20분 거리", price: "USD $1,750", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
  ],
  uk: [
    { id: 2, tier: 'exclusive', hostType: 'local', businessType: 'registered', insurance: true, name: "런던 리치몬드 수석 가디언 홈", location: "Tiffin School 버스 15분", price: "GBP £1,450", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
    { id: 18, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "뉴몰든 한인타운 엘리트 홈스테이", location: "워털루역 기차 25분", price: "GBP £1,200", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80" },
    { id: 19, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "브라이튼 해변가 쉐어하우스", location: "브라이튼 대학 도보 5분", price: "GBP £950", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80" }
  ],
  australia: [
    { id: 20, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "시드니 노스쇼어 VVIP 에듀케어", location: "채스우드역 도보 5분", price: "AUD $1,850", img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80" },
    { id: 3, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "멜버른 프리미엄 홈 가디언", location: "Mckinnon SC 인접", price: "AUD $1,600", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 21, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "브리즈번 썬샤인 홈스테이", location: "시티 중심가 버스 20분", price: "AUD $1,200", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
  ],
  nz: [
    { id: 8, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "오클랜드 하버뷰 스테이", location: "시티센터 도보 15분", price: "NZD $1,300", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" }
  ],
  philippines: [
    { id: 9, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "세부 잉글리시 VVIP 가디언 캠프", location: "IT 파크 내 위치", price: "PHP 45,000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" }
  ],
  malaysia: [
    { id: 10, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "쿠알라룸푸르 럭셔리 콘도", location: "몽키아라 국제학교 앞", price: "MYR 3,500", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" }
  ],
  taiwan: [
    { id: 11, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "타이베이 에듀케어 홈스테이", location: "사대부중 도보 5분", price: "TWD 25,000", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80" }
  ],
  hk: [
    { id: 12, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "홍콩섬 퍼스트 공식 가디언 홈", location: "해피밸리 고급 주택가", price: "HKD 18,000", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
  ],
  japan: [
    { id: 22, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "도쿄 미나토구 글로벌 아카데미 홈스테이", location: "아자부주반역 도보 5분", price: "JPY ¥180,000", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
    { id: 23, tier: 'premium', hostType: 'local', businessType: 'individual', insurance: true, name: "도쿄 신주쿠 안심 에듀스테이", location: "와세다 대학 인근", price: "JPY ¥150,000", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" }
  ],
  china: [
    { id: 24, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "베이징 왕징 한인 친화형 에듀 하우스", location: "왕징역 도보 8분", price: "CNY ¥8,500", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" }
  ],
  germany: [
    { id: 25, tier: 'premium', hostType: 'local', businessType: 'registered', insurance: true, name: "프랑크푸르트 명문 학군 하우스", location: "Frankfurt Intl School 도보 12분", price: "EUR €1,100", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80" }
  ],
  singapore: [
    { id: 26, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "싱가포르 오차드 로드 공식 인증 가디언 스테이", location: "Dhoby Ghaut MRT 도보 5분", price: "SGD $2,200", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" },
    { id: 27, tier: 'premium', hostType: 'local', businessType: 'individual', insurance: true, name: "싱가포르 센토사 프리미엄 오션뷰 홈", location: "Sentosa Cove 내 위치", price: "SGD $3,000", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
  ],
  france: [
    { id: 28, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "파리 16구 안심 에듀 가디언 스테이", location: "Passy 역 도보 5분", price: "EUR €1,600", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
    { id: 29, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "프랑스 리옹 센트럴 홈스테이", location: "Bellecour 광장 인근", price: "EUR €950", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80" }
  ]
};

const COUNTRY_INFO = {
  canada: { code: 'ca' },
  us: { code: 'us' },
  uk: { code: 'gb' },
  australia: { code: 'au' },
  nz: { code: 'nz' },
  france: { code: 'fr' },
  germany: { code: 'de' },
  singapore: { code: 'sg' },
  japan: { code: 'jp' },
  china: { code: 'cn' },
  philippines: { code: 'ph' },
  malaysia: { code: 'my' },
  taiwan: { code: 'tw' },
  hk: { code: 'hk' },
  other: { code: 'un' }
};

const Badges = ({ stay }: { stay: any }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-1">
      <span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface text-xs font-medium px-2 py-1 rounded-md">
        {stay.hostType === 'korean' ? `🇰🇷 ${t('한국인 가정')}` : `🌍 ${t('현지인 가정')}`}
      </span>
      {stay.businessType === 'registered' && (
        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md border border-blue-200">
          <span className="material-symbols-outlined text-[14px]">domain_verification</span>
          {t('정식 사업자')}
        </span>
      )}
      {stay.insurance && (
        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-md border border-green-200">
          <span className="material-symbols-outlined text-[14px]">shield_person</span>
          {t('안심 보험 가입')}
        </span>
      )}
    </div>
  );
};

const CountryList = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const countryKey = countryId as keyof typeof MOCK_HOMESTAYS;
  const listings = MOCK_HOMESTAYS[countryKey] || [];
  const info = COUNTRY_INFO[countryKey as keyof typeof COUNTRY_INFO] || { code: 'ca' };

  const exclusiveListings = listings.filter(l => l.tier === 'exclusive');
  const premiumListings = listings.filter(l => l.tier === 'premium');
  const generalListings = listings.filter(l => l.tier === 'general');

  const renderExclusiveCard = (stay: any) => (
    <div key={stay.id} className="group cursor-pointer bg-white rounded-3xl border-2 border-secondary-container shadow-lg overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-xl hover:border-primary" onClick={() => navigate('/detail')}>
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img alt={t(stay.name)} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={stay.img}/>
        <div className="absolute top-4 left-4 bg-secondary text-on-secondary text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          {t('공식 인증 가디언')}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-2xl font-bold text-on-surface">{t(stay.name)}</h4>
          </div>
          <p className="text-body-lg text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-base">location_on</span>
            {t(stay.location)}
          </p>
          <Badges stay={stay} />
          <p className="mt-4 text-body-md text-on-surface-variant line-clamp-2">
            {t('에듀가드에서 철저한 검증을 거친 공식 인증 파트너입니다. 최고의 식단과 안전한 생활 환경, 꼼꼼한 학생 관리를 보장하는 프리미엄 급 홈스테이입니다.')}
          </p>
        </div>
        <div className="mt-6 flex justify-between items-end border-t border-outline-variant pt-4">
          <div className="text-left">
            <p className="text-label-sm text-on-surface-variant mb-1">{t('한 달(4주) 기준 요금')}</p>
            <span className="text-2xl font-bold text-secondary-container">{stay.price}</span>
          </div>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-semibold hover:bg-secondary transition-colors hover:text-on-secondary">
            {t('자세히 보기')}
          </button>
        </div>
      </div>
    </div>
  );

  const renderPremiumCard = (stay: any) => (
    <div key={stay.id} className="group cursor-pointer bg-white rounded-2xl border border-outline-variant shadow-md overflow-hidden transition-all hover:shadow-lg hover:border-primary" onClick={() => navigate('/detail')}>
      <div className="relative h-56 overflow-hidden">
        <img alt={t(stay.name)} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={stay.img}/>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-sm border border-primary/20">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          {t('추천 호스트')}
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-headline-sm font-bold text-on-surface mb-1">{t(stay.name)}</h4>
        <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {t(stay.location)}
        </p>
        <Badges stay={stay} />
        <div className="mt-4 flex justify-between items-end">
          <span className="text-title-lg font-bold text-on-surface">{stay.price}</span>
        </div>
      </div>
    </div>
  );

  const renderGeneralCard = (stay: any) => (
    <div key={stay.id} className="group cursor-pointer bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-outline" onClick={() => navigate('/detail')}>
      <div className="relative h-48 overflow-hidden">
        <img alt={t(stay.name)} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={stay.img}/>
      </div>
      <div className="p-4">
        <h4 className="text-title-md font-bold text-on-surface mb-1 line-clamp-1">{t(stay.name)}</h4>
        <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {t(stay.location)}
        </p>
        <Badges stay={stay} />
        <div className="mt-3 text-right">
          <span className="text-title-md font-bold text-on-surface-variant">{stay.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-24 pb-24 min-h-screen bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-desktop mb-12">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface mb-8">
          <span className="material-symbols-outlined">arrow_back</span>
          {t('국가 선택으로 돌아가기')}
        </button>
        <h1 className="text-display-md font-display-md font-bold text-on-surface mb-2 flex items-center gap-3">
          {info.code && <img src={`https://flagcdn.com/${info.code}.svg`} alt={`${t('country.' + countryId + '.name')} 국기`} referrerPolicy="no-referrer" className="w-10 h-auto rounded-sm shadow-sm" />}
          {t('country.' + countryId + '.name')}
        </h1>
        <p className="text-body-lg text-on-surface-variant">{t('country.' + countryId + '.desc')}</p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop">
        {listings.length === 0 ? (
          <div className="text-center py-20 bg-surface-container rounded-3xl">
            <span className="material-symbols-outlined text-display-lg text-outline mb-4">search_off</span>
            <h3 className="text-headline-md font-bold text-on-surface mb-2">{t('등록된 홈스테이가 없습니다')}</h3>
            <p className="text-body-md text-on-surface-variant">{t('이 국가의 첫 번째 파트너가 되어보세요!')}</p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Exclusive Section */}
            {exclusiveListings.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <h2 className="text-headline-md font-bold text-on-surface">{t('VVIP 공식 인증 가디언')}</h2>
                  <span className="ml-auto text-label-sm bg-secondary-container/10 text-secondary-container px-3 py-1 rounded-full font-bold">{t('지역 독점 혜택')}</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {exclusiveListings.map(renderExclusiveCard)}
                </div>
              </section>
            )}

            {/* Premium Section */}
            {premiumListings.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-headline-sm font-bold text-on-surface">{t('프리미엄 추천 홈스테이')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {premiumListings.map(renderPremiumCard)}
                </div>
              </section>
            )}

            {/* General Section */}
            {generalListings.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6 pt-8 border-t border-outline-variant">
                  <h2 className="text-title-lg font-bold text-on-surface">{t('일반 홈스테이')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {generalListings.map(renderGeneralCard)}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryList;
