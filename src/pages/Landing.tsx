const Landing = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-margin-desktop py-24 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md mb-6">EduGuard Premium Care</span>
            <h1 className="font-headline-xl text-headline-xl mb-6">도착하는 첫 순간부터<br /><span className="text-secondary-container">완벽한 정착</span>, 랜딩 패키지</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-10 max-w-xl">
              낯선 유학지의 첫 걸음이 두려우신가요? 공항 마중부터 학교 오리엔테이션까지, EduGuard의 전문 가디언이 학생의 안전하고 빠른 정착을 책임집니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:shadow-lg transition-all flex items-center gap-2">
                패키지 예약하기 <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-outline text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all">
                문의하기
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img className="w-full h-full object-cover" alt="Student arriving" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw6fzItNVwC5M0iL7RjAfrRd5JULR6AyTeIiJqURxmjkDax5Udj6tZPT0Eu9Ml5AQyHLeDEVPZ8mwm_yMvwYPJNHMjO4IN689IQBzoaIfNltSLpGoU-_JTaATTudPg8AR-xhGtOJGozMywWAolcp1sCjhJ8Kxa34-2Eu4edS__9qjFch7OOno5xMC38EpdGeiNXYF3jLwtBPEb8CdKvkzbVG7coSMMfiEcMAmeTRmxXJeUX1BtdjgTvxfF3sGVkhzKZaS8HE726ZY" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant">
              <div className="w-12 h-12 bg-secondary-container text-white rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="font-headline-md text-headline-md leading-tight">100%</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Safety Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options Section */}
      <section className="bg-surface-container-low py-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">맞춤형 정착 솔루션</h2>
            <p className="text-on-surface-variant">학생의 필요에 따라 선택하는 세 가지 전문 패키지</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Essential */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant hover:border-secondary-container transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface">flight_land</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">01. Essential</h3>
              <p className="text-on-surface-variant text-body-sm font-body-sm mb-6">가장 핵심적인 서비스로 구성된 경제적인 패키지</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">공항 픽업 및 샌딩</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">현지 USIM 카드 개통</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">숙소 체크인 가이드</span></li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-primary-container text-primary-container font-label-md text-label-md hover:bg-primary-container hover:text-white transition-all">선택하기</button>
            </div>
            {/* Premium */}
            <div className="bg-primary-container p-8 rounded-3xl text-on-primary shadow-2xl relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 p-4 bg-secondary-container text-white text-label-sm font-label-sm rounded-bl-xl">BEST CHOICE</div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">workspace_premium</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">02. Premium</h3>
              <p className="text-on-primary-container text-body-sm font-body-sm mb-6">올인원 케어로 부모님의 걱정을 덜어드리는 패키지</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">stars</span> <span className="text-body-md font-body-md">Essential 패키지 포함</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">stars</span> <span className="text-body-md font-body-md">현지 은행 계좌 개설</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">stars</span> <span className="text-body-md font-body-md">동반 학교 방문 & 투어</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">stars</span> <span className="text-body-md font-body-md">대중교통 카드 및 앱 설정</span></li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-secondary-container text-white font-label-md text-label-md hover:bg-secondary transition-all">선택하기</button>
            </div>
            {/* Custom */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant hover:border-secondary-container transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-on-surface">edit_document</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">03. Custom</h3>
              <p className="text-on-surface-variant text-body-sm font-body-sm mb-6">필요한 서비스만 골라 담는 유연한 구성</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">보험 가입 대행</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">지역 생활 물품 쇼핑 지원</span></li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-container">check_circle</span> <span className="text-body-md font-body-md">기타 행정 업무 지원</span></li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-primary-container text-primary-container font-label-md text-label-md hover:bg-primary-container hover:text-white transition-all">상담 후 구성</button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4">정착 프로세스 한눈에 보기</h2>
          <p className="text-on-surface-variant">공항 도착부터 학교 등교까지 EduGuard가 함께합니다.</p>
        </div>
        <div className="relative space-y-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-surface-container hidden md:block"></div>
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12 group">
            <div className="md:w-1/2 text-right hidden md:block">
              <img className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="step 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4m8UnuPrjR6dtPcFwHDUR-FNR_IwZi_250uZiVhe1nQMtQtbUoOJxganqBsuE_zCJWhndbZuYYkDX5O_dRw82YWrcxUVETZW6yAhF43fIf3uzFjdlC0NZ0fhzyOVe3C5bNU2ec0sGdO5N5u3oPHa6XsTon9H9bgjFjJYnO0bhpM_hjWP6M0jj6pjybRUrVNv91APmRqJ0mezbAl9sPg7LXgev3F4qfnzlisTO4r96x1XkAObxtYSpPSG75EHIkiIKfcAIhmV4wWs" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold z-10 border-4 border-background">1</div>
            <div className="md:w-1/2">
              <div className="bg-surface-container-low p-8 rounded-3xl">
                <h4 className="font-headline-md text-headline-md mb-3">공항 미팅 및 안심 귀가</h4>
                <p className="text-on-surface-variant text-body-md font-body-md">가디언이 약속된 장소에서 학생을 맞이하고, 준비된 차량으로 숙소까지 안전하게 이동합니다. 부모님께는 도착 보고를 실시간으로 전송합니다.</p>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 group">
            <div className="md:w-1/2 text-left hidden md:block">
              <img className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="step 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC36sasCY3SDPWDSaskvGli23zc-ERurPpct0-fWxGCMRK0Ym8I9ETftXgjTZVNFbOmbANdxswTL9ahcqzCeRAjrEKjmB0I4dC3XRK9cDzO3SwcYCWWdC4mXVyjGEx-ES06ZqAx7ycZLtALgXL6TJBwnyuNdN9UvxavrHo71iwsZ4_7w0mv-ztYy5bheIZt3TFs2s-6m98oURR5vXS4dTpEnwGUFAOVzxUurifBbwaeaK7yrO57N3cUglzOdJC94urL9fi62iBmiRE" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold z-10 border-4 border-background">2</div>
            <div className="md:w-1/2">
              <div className="bg-surface-container-low p-8 rounded-3xl md:text-right">
                <h4 className="font-headline-md text-headline-md mb-3">필수 행정 처리</h4>
                <p className="text-on-surface-variant text-body-md font-body-md">현지 연락을 위한 USIM 개통과 금융 거래를 위한 은행 계좌 개설을 동행하여 지원합니다. 언어 장벽 없이 정확하게 처리됩니다.</p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12 group">
            <div className="md:w-1/2 text-right hidden md:block">
              <img className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="step 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJrRsLZowNqcbYH0ej2kJsP0ehdd5bmb5rgMe2n0TIvi1PyJX_2ohikgDUdcUhZNIgmd7GDR0M2b6gi-QbvxovDDvPs1nKoOZ7UA_XGpIAn5Da9WjfmkAi1ixxW1wHxC2lAG1HFl9eCdQlWvuhxZi2MaSlAzdNake09UcLv6ekFc7cdw3XZtRe-_6HmAeyeH6dyei5mnPsfxQ-e6qi4Uc6PtSYcd2jdPs-Rt16MHBAGw3IRQp1Q9zXWTYpwgvFlmvrcvSQIeZ9VfI" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold z-10 border-4 border-background">3</div>
            <div className="md:w-1/2">
              <div className="bg-surface-container-low p-8 rounded-3xl">
                <h4 className="font-headline-md text-headline-md mb-3">학교 방문 및 오리엔테이션</h4>
                <p className="text-on-surface-variant text-body-md font-body-md">학교까지의 경로를 익히고, 교내 주요 시설을 함께 둘러봅니다. 첫 등교 시 당황하지 않도록 오리엔테이션 일정과 주의사항을 체크합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator Info Section */}
      <section className="bg-surface-dim py-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-2">당신을 도와줄 현지 전문가</h2>
              <p className="text-on-surface-variant">풍부한 경험을 가진 가디언 팀이 여러분의 손과 발이 되어드립니다.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Coordinator 1 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coordinator 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQO6HRKJ6_LEN-IjSjj3ELWuFBHf0Q0hUx9cl0aZxjohYqfenvczlVx-1oNcOJhtMf9gXYQMPZ__ChYCSGxLrem6gUpicUYe_BSbUxoa8mvgv9iv38d1EcYTr6nFM3SxfGo9PmiMf0qqSh75aMKses6wBIpuj5RC-iBONzavQXJikrvTWhqLt3lXycsCOIU_hfF9OTGwUR1XfMoAbqknokXHOo_GPz-yoG9mBTQje-sfXLjIbkXXEAYg6g1eHvMJGtGWwpgxyL-2s" />
              </div>
              <div className="p-6">
                <h5 className="font-headline-md text-headline-md text-base mb-1">Sarah Kim</h5>
                <p className="text-label-sm font-label-sm text-secondary-container mb-3">Senior Coordinator (London)</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">10년 이상의 가디언 경력으로 복잡한 행정 업무를 완벽하게 처리합니다.</p>
              </div>
            </div>
            {/* Coordinator 2 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coordinator 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl8HT4O3wIos9hDbVJt1uBAx6tiSsBS0XIOraNGjLIKSrPxFGZqqGSpDGYdZw6iYlxXKlDr9a0wQ46pHMnzGN1dqOhde3NLelitHzWhjfW0hKKCqf68Q-nzJXimcN9XDrnxVH1vAdutthrq3pw8uOmP3h58xJNIuzIo-qM-Ng70L914JcLSXsn5g99mNCliyyJX_EdYWMBX_Sv3gvIyRASyur7dKSnALM98-e7D3qHr2cg2EpWUBbGFVQ2HpeFb-iMK32S9OqMGcg" />
              </div>
              <div className="p-6">
                <h5 className="font-headline-md text-headline-md text-base mb-1">David Lee</h5>
                <p className="text-label-sm font-label-sm text-secondary-container mb-3">Safety Manager (Vancouver)</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">학생들의 안전한 정착과 초기 적응을 돕는 든든한 형 같은 가디언입니다.</p>
              </div>
            </div>
            {/* Coordinator 3 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coordinator 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFLGgbBn1YdKPzU2G8wWhyVMs9_QlANV54QTfQKC2VpaOW60f6sTJPFMs-dASetECohlLXNoCbg08k7XnRzXXTpM59vaFYD9pEUQg1A4z6rTeaGTfrkB_jljk1L_IccNiZwVSQ09D3h4G2exp-JjSIiN2LBEzX5wPP3CZ6LNAB3QMvs8zv0o7HoYmzNDFaOrYOsGmqs2hbuVzAMrAK-Kpe61BHpn6xN5I-siIg8C5Tc4M1dYtnKFHguE1FIEkOT2hLi8J1LduePhs" />
              </div>
              <div className="p-6">
                <h5 className="font-headline-md text-headline-md text-base mb-1">Jane Park</h5>
                <p className="text-label-sm font-label-sm text-secondary-container mb-3">Academic Advisor (Sydney)</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">학교 방문 및 현지 오리엔테이션 전문가로 첫 등교의 긴장을 해소해 드립니다.</p>
              </div>
            </div>
            {/* Coordinator 4 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coordinator 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB__B2ZBo886X6FLBmO3D_NZ3bQm-sEqqlUSwA9R0X8MfsZFz3mFAjtH9vBN_83hv9hOnkpsmELlxT10E7OStacH4YamMjfgY8mmCGdjODyJOx9O7eTPgNVJvlPXq14VPkm9fB19nJjOJVlN6P-DYM86hp3wFXJI13i2ZeEwxjlwE1j1Q8cu3Io4g5vZU5oT9wBvtlcAjx1scuJMOX8msGTliRDl4F76h_zbftC91ZW9GJwEeg6Ykf9P9He_oiSaPefyK9d8lgYYCA" />
              </div>
              <div className="p-6">
                <h5 className="font-headline-md text-headline-md text-base mb-1">Michael Chang</h5>
                <p className="text-label-sm font-label-sm text-secondary-container mb-3">Operation Lead (Seoul)</p>
                <p className="text-body-sm font-body-sm text-on-surface-variant">한국 본사에서 현지 팀과의 원활한 소통과 예약 관리를 총괄합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-headline-lg text-headline-lg mb-4">자주 묻는 질문</h2>
            <p className="text-on-surface-variant mb-8">랜딩 패키지에 대해 궁금하신 점을 확인해 보세요. 추가 문의는 채팅 상담이 가능합니다.</p>
            <button className="flex items-center gap-2 text-secondary-container font-label-md text-label-md hover:gap-4 transition-all">
              전체 FAQ 보기 <span className="material-symbols-outlined">east</span>
            </button>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <details className="group bg-surface-container-low rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-transparent open:border-outline-variant transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h5 className="font-headline-md text-headline-md text-lg">항공편이 지연되어도 픽업이 가능한가요?</h5>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant font-body-md">네, 당연합니다. 가디언은 실시간으로 항공편 상태를 모니터링하며 지연 시에도 변동된 도착 시간에 맞춰 공항에서 대기합니다. 별도의 추가 비용 없이 끝까지 기다립니다.</p>
            </details>
            <details className="group bg-surface-container-low rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-transparent open:border-outline-variant transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h5 className="font-headline-md text-headline-md text-lg">은행 계좌 개설 시 필요한 서류는 무엇인가요?</h5>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant font-body-md">국가마다 차이가 있으나 보통 여권, 학생 비자, 학교 등록 확인서(Letter of Acceptance), 주소 증명서 등이 필요합니다. 패키지 예약 후 국가별 맞춤 준비물 리스트를 안내해 드립니다.</p>
            </details>
            <details className="group bg-surface-container-low rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-transparent open:border-outline-variant transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h5 className="font-headline-md text-headline-md text-lg">가디언과 학생이 만나는 지점은 어디인가요?</h5>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant font-body-md">일반적으로 입국장을 나오자마자 보이는 Meeting Point에서 EduGuard 팻말을 든 가디언을 만나게 됩니다. 사전에 가디언의 연락처와 사진을 카카오톡으로 전송해 드립니다.</p>
            </details>
            <details className="group bg-surface-container-low rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-transparent open:border-outline-variant transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h5 className="font-headline-md text-headline-md text-lg">패키지 예약은 언제까지 해야 하나요?</h5>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant font-body-md">가디언의 원활한 일정 배정을 위해 최소 출국 2주 전까지 예약을 권장 드립니다. 성수기(1월, 8월)에는 조기 마감될 수 있으니 미리 신청해 주세요.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-secondary-container text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center gap-2">
        <span className="material-symbols-outlined">chat_bubble</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-label-md text-label-md">실시간 상담하기</span>
      </button>
    </main>
  );
};

export default Landing;
