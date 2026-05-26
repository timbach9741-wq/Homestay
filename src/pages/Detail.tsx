const Detail = () => {
  return (
    <>
      <main className="pt-20 pb-32">
        {/* Hero Section: Bento Style Image Carousel */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px] rounded-xl overflow-hidden relative shadow-md">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuUI03kR2UHBUv7E_9QkeJYwR69YndQg8Wkc4rBcngCgkato18aT-843-2XtNnbKNkK5K9PdXtSUgYyJrO8R5DxFyfWiS7C4WCQhTB5Gj2buQ0EksSrs5z8d_NBzgvUJXps_CY_3fktrW6B-po4Kl-CPMjKvc87de0VAAwPJpzb1gQos_rpSmu_h11aKpQpZc6Iv79KDcCTQHNSbvYs9Tn3Lg3aDjGpSzIpKug24fCs1QggqrlVnMte2EbAoDR6jGPYcCaz5QDqN8" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1c3066]"></div>
            </div>
            <div className="hidden md:block relative group overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bedroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBolfPbKuhpuN136okq8ACFrKAtSdnWKWwL3ITg6JkL9v1Hjvumx0PmtsgJmUivZsZQdCDagDXE9t1Cuy58J-OQ6gWCFQuIraupNtf7axOauXOYLYpmPdiR6_cFwreVPQiKv4QPvR-eSkojb0akhl4C4VVfj9cdtecfCrO02LZUqshPKXlVFYXRsIKETCdykW4Njez3nJYb4kbYBef6XVGGPneSiKF1MaA2bVFJapl_mwTV5GRM4xH7HviE2ceEq0bUP6owejvwl5c" />
            </div>
            <div className="hidden md:block relative group overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjsZOyZ61xsCXSJWq_MirJrTj5A1zp8vKiW1jktcK7pTvtb0u8HZkpJi0CbycciH-VmOyUrdxWrgbD23MeMWfzy63Bl_24k5I92kWGvEpsnH4dKOhImb_d7GW1ssfuRplPHBNREiw_eb2BnfEPFm3f33b7hEJE3oQoGjg40ApXGIa7B2uY3w_lm4SY5kzKxvT4R7WUnsxQk7SL7dGs0OdhtAGsivIMAsNrDILqbI7AYRlf607u7ptGF-RnQ_JWCwODBK8rF6-AHs" />
            </div>
            <div className="hidden md:block md:col-span-2 relative group overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDT52M_do9a6ZtKaCv87dTL_Mm3bLlV1sZ9IEycZ-YV6bBf0zBqqRaty5260n1KnS9-iJ7omBAkRFd_rExPX0YnSybhAHyK9EE0gT3mmtjuOeI9Tx8AyF666rUKcJeOirxyMKCMv5FWc-JEFkgSFltI1NK2YQRoj71m-rG7KZIFk85RWJtkD3H9DjVAcYutHryJSAF0i8kSpVhF4KIBHPsyCtfJgexnnTvkfBqXJ10W6Evm51VjA_LxIIlaZY3L7Ya7yHcGfmRJ1U" />
              <div className="absolute bottom-6 right-6">
                <button className="bg-surface-container-lowest/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-label-md font-label-md shadow-lg">
                  <span className="material-symbols-outlined">photo_library</span>
                  사진 더보기 (12)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            {/* Title & Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm">인기 숙소</span>
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm">검증 완료</span>
              </div>
              <h1 className="text-headline-xl font-headline-xl mb-4">런던 부촌 윔블던의 화목한 가디언 가정</h1>
              <div className="flex items-center gap-6 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary-container">star</span>
                  <span className="font-bold text-on-surface">4.9</span> (후기 24개)
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined">location_on</span>
                  Wimbledon, London, UK
                </div>
              </div>
            </section>
            <hr className="border-outline-variant" />

            {/* Host Profile */}
            <section className="bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start">
              <div className="relative">
                <img className="w-24 h-24 rounded-full object-cover border-4 border-surface-container-lowest" alt="Host Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fPOKyRNUKKoStN5bv9HykTUet5aN5K3q6R_aZ4TMDLhyUNAVNzQhwqu-cg1Q3EUGOHgynkfQKtdV3J7r3mbdcacyES32wha5LEruuOsAynZ73ZOhtEeoNyGChv9L4J1odFjDA0X0-MZzUgq5sRRc2My4Jl6MkMUGhSmvcxuVvxaBiP9nCc3CvklpqnqGUwzO-XGIWPamAAWAre1LPWak5kifbn3OUfgNEs0Uv9LU9H3QBMT3vX2qk_SAdwKUnzbWBjAWtsJU6BE" />
                <div className="absolute bottom-0 right-0 bg-secondary-container text-white p-1 rounded-full border-2 border-white">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-headline-md font-headline-md mb-1">호스트 Sarah 님</h3>
                    <p className="text-label-md font-label-md text-on-surface-variant">경력 12년 가디언 전문가</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm font-label-sm">한국어 가능</span>
                    <span className="bg-surface-container-high px-3 py-1 rounded-full text-label-sm font-label-sm">English</span>
                  </div>
                </div>
                <p className="text-body-md font-body-md text-on-surface mb-6">
                  안녕하세요! 저희 가족은 10년 넘게 한국 유학생들과 함께 생활해왔습니다. 두 아이의 엄마이자 교육 컨설턴트로 활동하고 있어 학생들의 학업과 정서적 안정을 최우선으로 생각합니다. 매주 주말에는 근처 공원 산책과 한국식 집밥을 제공하며 따뜻한 가정 환경을 조성합니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                    <span className="text-label-md font-label-md">CRC/WWCC 검증</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                    <span className="text-label-md font-label-md">응급처치 교육 이수</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                    <span className="text-label-md font-label-md">교육 심리 자격증</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features & Amenities */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-headline-md font-headline-md mb-6">식단 및 편의 시설</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-surface-container p-2 rounded-lg h-fit">
                      <span className="material-symbols-outlined">restaurant</span>
                    </div>
                    <div>
                      <p className="font-bold text-label-md">매일 제공되는 식단</p>
                      <p className="text-body-sm text-on-surface-variant">조식(아메리칸), 석식(주 3회 한국식 식단 포함), 주말 전식 제공. 알러지 및 특수 식단 대응 가능.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-surface-container p-2 rounded-lg h-fit">
                      <span className="material-symbols-outlined">wifi</span>
                    </div>
                    <div>
                      <p className="font-bold text-label-md">고속 인터넷 & 스터디룸</p>
                      <p className="text-body-sm text-on-surface-variant">5G 기가 와이파이, 각 방 개인용 책상, 모니터 스탠드 및 인체공학 의자 완비.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-surface-container p-2 rounded-lg h-fit">
                      <span className="material-symbols-outlined">local_laundry_service</span>
                    </div>
                    <div>
                      <p className="font-bold text-label-md">세탁 및 관리</p>
                      <p className="text-body-sm text-on-surface-variant">주 2회 세탁 및 침구 교체. 매주 금요일 전문 청소 서비스 제공.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-headline-md font-headline-md mb-6">주변 학교 거리</h4>
                <div className="space-y-4">
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-primary-container">school</span>
                      <span className="font-medium">Wimbledon College</span>
                    </div>
                    <span className="text-label-sm text-secondary-container font-bold">도보 10분</span>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-primary-container">school</span>
                      <span className="font-medium">King's College School</span>
                    </div>
                    <span className="text-label-sm text-secondary-container font-bold">버스 15분</span>
                  </div>
                  <div className="rounded-xl overflow-hidden h-32 mt-4 relative">
                    <div className="absolute inset-0 bg-surface-dim flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-on-surface-variant">map</span>
                    </div>
                    <img className="w-full h-full object-cover" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lTKnMWTo4aTm6644pnNIWmiKMV7BfHdcbmtF8K-2Tkv_XpkALRtu8dcG8BuAqYreaoNWF2Xeb4LEoAOl-tiLsyouST-4WIX9mqFetxPlMgpx-xlSVykb2iPOQE4MiHEJP461AkheuZbwFAmZPApAefySRH4tAdrlpxNTlHNcnQ5AtXuRcRkILWC4lpgh-2hnb3o6PiUPiCmVUq6l74Bm57Byq2imU5NBApTboeibLXBjxc0e52casZPLiJLrkXg_okkdVoivwgE" />
                  </div>
                </div>
              </div>
            </section>

            {/* Trust & Safety Section */}
            <section className="bg-primary-container text-on-primary-fixed p-10 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h4 className="text-headline-lg font-headline-lg text-white mb-4">EduGuard 신뢰 및 안전 정책</h4>
                  <p className="text-body-md font-body-md text-on-primary-container mb-8">
                    우리는 학생의 안전을 최우선으로 합니다. 모든 결제는 에스크로 서비스를 통해 보호되며, 서비스 완료 시 호스트에게 대금이 지급됩니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary-container mt-1">shield_with_heart</span>
                      <div>
                        <p className="font-bold text-white">100% 에스크로 보호</p>
                        <p className="text-body-sm text-on-primary-container">입주 확인 전까지 대금이 안전하게 보관됩니다.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary-container mt-1">verified_user</span>
                      <div>
                        <p className="font-bold text-white">현지 가디언십 기관 인증</p>
                        <p className="text-body-sm text-on-primary-container">정기적인 방문 실사를 통해 주거 환경을 검증합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-container text-3xl mb-2">fingerprint</span>
                    <p className="text-label-sm font-label-sm text-white">신원 확인</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-container text-3xl mb-2">policy</span>
                    <p className="text-label-sm font-label-sm text-white">배경 조사</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-container text-3xl mb-2">payments</span>
                    <p className="text-label-sm font-label-sm text-white">안전 결제</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                    <span className="material-symbols-outlined text-secondary-container text-3xl mb-2">support_agent</span>
                    <p className="text-label-sm font-label-sm text-white">24/7 지원</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-headline-md font-headline-md">학생 및 학부모 후기</h4>
                <button className="text-secondary-container font-bold text-label-md">전체보기 (24)</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant">
                  <div className="flex gap-1 mb-3">
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-body-md italic mb-4">"런던 생활이 처음이라 걱정이 많았는데, Sarah 이모님이 친언니처럼 잘 챙겨주셨어요. 특히 한식이 생각날 때마다 해주신 제육볶음은 정말 잊을 수 없습니다!"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">김*지</div>
                    <div>
                      <p className="text-label-sm font-bold">김*지 학생</p>
                      <p className="text-[10px] text-on-surface-variant">2023년 9월 - 2024년 6월 체류</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant">
                  <div className="flex gap-1 mb-3">
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-body-md italic mb-4">"학업 관리까지 신경 써주시는 가디언이라 안심하고 아이를 보낼 수 있었습니다. 매달 보내주시는 리포트 덕분에 아이의 성장을 체감할 수 있었어요."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface">박*현</div>
                    <div>
                      <p className="text-label-sm font-bold">박*현 학부모</p>
                      <p className="text-[10px] text-on-surface-variant">2022년 3월 - 현재 체류 중</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <aside className="sticky top-24 bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-outline-variant">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-headline-md font-headline-md">£1,850</span>
                  <span className="text-on-surface-variant">/ 월</span>
                </div>
                <div className="text-label-sm text-secondary-container font-bold">에스크로 보증</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="border border-outline p-3 rounded-lg">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">체크인 - 체크아웃</label>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm">2024.09.01</span>
                    <span className="material-symbols-outlined text-on-surface-variant">calendar_today</span>
                    <span className="text-body-sm">2025.06.30</span>
                  </div>
                </div>
                <div className="border border-outline p-3 rounded-lg">
                  <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">학생 정보</label>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm">게스트 1명 (만 16세)</span>
                    <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-secondary-container text-white py-4 rounded-xl font-headline-md font-bold hover:opacity-90 transition-all shadow-md mb-4 flex items-center justify-center gap-2">
                에스크로 결제로 예약하기
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </button>
              <p className="text-center text-label-sm text-on-surface-variant mb-6">아직 결제되지 않습니다.</p>
              <div className="space-y-3">
                <div className="flex justify-between text-body-sm">
                  <span>£1,850 x 10개월</span>
                  <span>£18,500</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span>가디언 서비스 수수료</span>
                  <span>£150</span>
                </div>
                <hr className="border-outline-variant" />
                <div className="flex justify-between font-bold text-headline-md mt-4">
                  <span>총 합계</span>
                  <span>£18,650</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant flex gap-4">
                <button className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <span className="text-label-sm">호스트 문의</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <span className="text-label-sm">공유하기</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-surface-container transition-colors text-error">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <span className="text-label-sm">저장</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-[60] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div>
          <span className="text-headline-md font-bold">£1,850</span>
          <span className="text-body-sm text-on-surface-variant">/ 월</span>
        </div>
        <button className="bg-secondary-container text-white px-8 py-3 rounded-xl font-bold">예약하기</button>
      </div>
    </>
  );
};

export default Detail;
