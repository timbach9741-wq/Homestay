import { useParams, useNavigate } from 'react-router-dom';

const MOCK_HOMESTAYS = {
  canada: [
    { id: 1, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "토론토 노스욕 VVIP 가디언 스테이", location: "York Mills CI 도보 10분", price: "CAD $1,800", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx9umDeYyXZYntw9ynGrPD3itI7D89ptNszLvYj7A9KNBHKKrCTXLIv72OWvWp_Mikpf3TnM4dCpInV8Ie1beSypzTRfulRP3F45SruY635WRAoqZ58FaARuV8nkJQG8plj5_fJMa9qCWzkDHP5RzoaBKgh_jLGlMsV2acVKZBdvnYr2YkERuhOlo08bY0Y4OPrm8cmsgBNggnLU6LvJj2H9DG5XMZQxQ0mB77Zp6G9RTxWUH09reTNKh7fOlumJmTGnX-o6f9XCU" },
    { id: 2, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "밴쿠버 웨스트사이드 명문학군 홈스테이", location: "Lord Byng 초/중 인근", price: "CAD $1,650", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, tier: 'premium', hostType: 'korean', businessType: 'individual', insurance: true, name: "밴쿠버 행복 홈스테이", location: "UBC 차로 15분", price: "CAD $1,500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADbKyEttGkCNBgh6EQh1cDIkjSa6jRSDZkwGHEChO642wJt4ymzLQzHAfsjz9ttMscynuK01Zq8BR6PBEmCu4vOREqhn6oeZiFGy2h9Tlh88e35DJiPMMlEA0QItN5fcRsIvBVSATJVOobG7x1evKaCmhHt-ErGMmGSEADThRvXgaCcvvEMqCryH0AMwnvJEWj7mJHkZT67XwGzCEOMyMCY9kD3clCqdf0GbJ6FssekwM88H6jQKWv3aCehgcIJauR0vMkxsM8z-E" },
    { id: 5, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "캘거리 따뜻한 가족 홈스테이", location: "다운타운 20분", price: "CAD $1,400", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { id: 13, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "몬트리올 아트 하우스", location: "맥길 대학교 도보 15분", price: "CAD $1,350", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" },
    { id: 14, tier: 'general', hostType: 'korean', businessType: 'individual', insurance: false, name: "오타와 리버뷰 맘스테이", location: "오타와 대학교 30분", price: "CAD $1,450", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
  ],
  us: [
    { id: 6, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "LA 선샤인 공식 파트너 하우스", location: "UCLA 버스 20분", price: "USD $1,900", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop" },
    { id: 15, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "어바인(Irvine) 안전제일 에듀스테이", location: "Northwood High School 인접", price: "USD $2,100", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, tier: 'premium', hostType: 'local', businessType: 'individual', insurance: true, name: "뉴욕 맨해튼 프리미엄 홈", location: "콜럼비아 대학 인근", price: "USD $2,500", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop" },
    { id: 16, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "시애틀 킹카운티 홈스테이", location: "UW 시애틀 캠퍼스 버스 15분", price: "USD $1,600", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1000&auto=format&fit=crop" },
    { id: 17, tier: 'general', hostType: 'korean', businessType: 'individual', insurance: true, name: "샌디에이고 오션 맘스테이", location: "UCSD 20분 거리", price: "USD $1,750", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop" }
  ],
  uk: [
    { id: 2, tier: 'exclusive', hostType: 'local', businessType: 'registered', insurance: true, name: "런던 리치몬드 수석 가디언 홈", location: "Tiffin School 버스 15분", price: "GBP £1,450", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU5NkpQhSRryRvgJP5nWsLGwGPA5An-Kr1upii1S1KZF7ryx3srC5kHPF-uAaRfP7K-bve7SnjEb3jW0E3u7sahqongxjywE5sP3Qio4Ue5Ra6WV2D89UhvBAsgG8NWC2QpIPj9Bm4bIjDci5vjyAOpkSAfgCZ75m571kcCUJpKAlbjLTAa0sDn7_heLjgTr0NTPWfeQaMezHYlxoATnovcZT_Ao178wkUdmyPBIEQHliiW005fsumLiNXg7GB22TR46HreXGxUdg" },
    { id: 18, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "뉴몰든 한인타운 엘리트 홈스테이", location: "워털루역 기차 25분", price: "GBP £1,200", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1000&auto=format&fit=crop" },
    { id: 19, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "브라이튼 해변가 쉐어하우스", location: "브라이튼 대학 도보 5분", price: "GBP £950", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1000&auto=format&fit=crop" }
  ],
  australia: [
    { id: 20, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "시드니 노스쇼어 VVIP 에듀케어", location: "채스우드역 도보 5분", price: "AUD $1,850", img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "멜버른 프리미엄 홈 가디언", location: "Mckinnon SC 인접", price: "AUD $1,600", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLbxGKVL0DX2Lkm02cR0aXgmu8B0Pm1Skxut_-7FZzxdiybb8E95J0sEgx0wgorcVraAIkTgpI2bFq0HwFVCYKu8KULvPgS2ZiTq2841GQ4w_O5flWB1Gl0SArEdfVXSezVmRZ62n2rT3Pw6B7GGgjuiysh6w89EjhJijW_SiEG7rpQtn82-t1ImonAagG4DGXZwt1wIGRORWkHBptYUJ31zu8F-Jfv5pKDMM47N6MHvkme-MsU68q203rgn5H96HOP8RwMJOUads" },
    { id: 21, tier: 'general', hostType: 'local', businessType: 'individual', insurance: true, name: "브리즈번 썬샤인 홈스테이", location: "시티 중심가 버스 20분", price: "AUD $1,200", img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1000&auto=format&fit=crop" }
  ],
  nz: [
    { id: 8, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "오클랜드 하버뷰 스테이", location: "시티센터 도보 15분", price: "NZD $1,300", img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop" }
  ],
  philippines: [
    { id: 9, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "세부 잉글리시 VVIP 가디언 캠프", location: "IT 파크 내 위치", price: "PHP 45,000", img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop" }
  ],
  malaysia: [
    { id: 10, tier: 'premium', hostType: 'korean', businessType: 'registered', insurance: true, name: "쿠알라룸푸르 럭셔리 콘도", location: "몽키아라 국제학교 앞", price: "MYR 3,500", img: "https://images.unsplash.com/photo-1596422846543-74c6e64883ff?q=80&w=1000&auto=format&fit=crop" }
  ],
  taiwan: [
    { id: 11, tier: 'general', hostType: 'local', businessType: 'individual', insurance: false, name: "타이베이 에듀케어 홈스테이", location: "사대부중 도보 5분", price: "TWD 25,000", img: "https://images.unsplash.com/photo-1552993873-040212fafbb3?q=80&w=1000&auto=format&fit=crop" }
  ],
  hk: [
    { id: 12, tier: 'exclusive', hostType: 'korean', businessType: 'registered', insurance: true, name: "홍콩섬 퍼스트 공식 가디언 홈", location: "해피밸리 고급 주택가", price: "HKD 18,000", img: "https://images.unsplash.com/photo-1506974261899-73fbcc016cf1?q=80&w=1000&auto=format&fit=crop" }
  ]
};

const COUNTRY_INFO = {
  canada: { code: 'ca', name: '캐나다 (Canada)', desc: '자연과 도심이 조화로운 유학 환경' },
  us: { code: 'us', name: '미국 (USA)', desc: '세계 최고 수준의 교육' },
  uk: { code: 'gb', name: '영국 (UK)', desc: '깊은 역사와 전통의 명문 교육' },
  australia: { code: 'au', name: '호주 (Australia)', desc: '따뜻한 기후와 여유로운 라이프스타일' },
  nz: { code: 'nz', name: '뉴질랜드 (New Zealand)', desc: '청정 자연 속에서의 평화로운 학업' },
  philippines: { code: 'ph', name: '필리핀 (Philippines)', desc: '단기 어학연수와 영어 교육의 중심' },
  malaysia: { code: 'my', name: '말레이시아 (Malaysia)', desc: '안전하고 다문화적인 글로벌 허브' },
  taiwan: { code: 'tw', name: '대만 (Taiwan)', desc: '아시아의 친근한 문화와 우수한 인프라' },
  hk: { code: 'hk', name: '홍콩 (Hong Kong)', desc: '동서양 문화가 공존하는 금융/교육 중심지' }
};

const Badges = ({ stay }: { stay: any }) => (
  <div className="flex flex-wrap gap-2 mt-3 mb-1">
    <span className="inline-flex items-center gap-1 bg-surface-container-high text-on-surface text-xs font-medium px-2 py-1 rounded-md">
      {stay.hostType === 'korean' ? '🇰🇷 한국인 가정' : '🌍 현지인 가정'}
    </span>
    {stay.businessType === 'registered' && (
      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md border border-blue-200">
        <span className="material-symbols-outlined text-[14px]">domain_verification</span>
        정식 사업자
      </span>
    )}
    {stay.insurance && (
      <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-md border border-green-200">
        <span className="material-symbols-outlined text-[14px]">shield_person</span>
        안심 보험 가입
      </span>
    )}
  </div>
);

const CountryList = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();

  const countryKey = countryId as keyof typeof MOCK_HOMESTAYS;
  const listings = MOCK_HOMESTAYS[countryKey] || [];
  const info = COUNTRY_INFO[countryKey as keyof typeof COUNTRY_INFO] || { name: '알 수 없는 국가', desc: '' };

  const exclusiveListings = listings.filter(l => l.tier === 'exclusive');
  const premiumListings = listings.filter(l => l.tier === 'premium');
  const generalListings = listings.filter(l => l.tier === 'general');

  const renderExclusiveCard = (stay: any) => (
    <div key={stay.id} className="group cursor-pointer bg-white rounded-3xl border-2 border-secondary-container shadow-lg overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-xl hover:border-primary" onClick={() => navigate('/detail')}>
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img alt={stay.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={stay.img}/>
        <div className="absolute top-4 left-4 bg-secondary text-on-secondary text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          공식 인증 가디언
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-2xl font-bold text-on-surface">{stay.name}</h4>
          </div>
          <p className="text-body-lg text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-base">location_on</span>
            {stay.location}
          </p>
          <Badges stay={stay} />
          <p className="mt-4 text-body-md text-on-surface-variant line-clamp-2">
            에듀가드에서 철저한 검증을 거친 공식 인증 파트너입니다. 최고의 식단과 안전한 생활 환경, 꼼꼼한 학생 관리를 보장하는 프리미엄 급 홈스테이입니다.
          </p>
        </div>
        <div className="mt-6 flex justify-between items-end border-t border-outline-variant pt-4">
          <div className="text-left">
            <p className="text-label-sm text-on-surface-variant mb-1">한 달(4주) 기준 요금</p>
            <span className="text-2xl font-bold text-secondary-container">{stay.price}</span>
          </div>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-semibold hover:bg-secondary transition-colors hover:text-on-secondary">
            자세히 보기
          </button>
        </div>
      </div>
    </div>
  );

  const renderPremiumCard = (stay: any) => (
    <div key={stay.id} className="group cursor-pointer bg-white rounded-2xl border border-outline-variant shadow-md overflow-hidden transition-all hover:shadow-lg hover:border-primary" onClick={() => navigate('/detail')}>
      <div className="relative h-56 overflow-hidden">
        <img alt={stay.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={stay.img}/>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-sm border border-primary/20">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          추천 호스트
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-headline-sm font-bold text-on-surface mb-1">{stay.name}</h4>
        <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          {stay.location}
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
        <img alt={stay.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={stay.img}/>
      </div>
      <div className="p-4">
        <h4 className="text-title-md font-bold text-on-surface mb-1 line-clamp-1">{stay.name}</h4>
        <p className="text-body-sm text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          {stay.location}
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
          국가 선택으로 돌아가기
        </button>
        <h1 className="text-display-md font-display-md font-bold text-on-surface mb-2 flex items-center gap-3">
          {info.code && <img src={`https://flagcdn.com/${info.code}.svg`} alt={`${info.name} 국기`} className="w-10 h-auto rounded-sm shadow-sm" />}
          {info.name}
        </h1>
        <p className="text-body-lg text-on-surface-variant">{info.desc}</p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop">
        {listings.length === 0 ? (
          <div className="text-center py-20 bg-surface-container rounded-3xl">
            <span className="material-symbols-outlined text-display-lg text-outline mb-4">search_off</span>
            <h3 className="text-headline-md font-bold text-on-surface mb-2">등록된 홈스테이가 없습니다</h3>
            <p className="text-body-md text-on-surface-variant">이 국가의 첫 번째 파트너가 되어보세요!</p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Exclusive Section */}
            {exclusiveListings.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <h2 className="text-headline-md font-bold text-on-surface">VVIP 공식 인증 가디언</h2>
                  <span className="ml-auto text-label-sm bg-secondary-container/10 text-secondary-container px-3 py-1 rounded-full font-bold">지역 독점 혜택</span>
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
                  <h2 className="text-headline-sm font-bold text-on-surface">프리미엄 추천 홈스테이</h2>
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
                  <h2 className="text-title-lg font-bold text-on-surface">일반 홈스테이</h2>
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
