import { useNavigate } from 'react-router-dom';

const COUNTRIES = [
  { id: 'canada', code: 'ca', name: '캐나다', desc: '자연과 도심이 조화로운 유학 환경', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx9umDeYyXZYntw9ynGrPD3itI7D89ptNszLvYj7A9KNBHKKrCTXLIv72OWvWp_Mikpf3TnM4dCpInV8Ie1beSypzTRfulRP3F45SruY635WRAoqZ58FaARuV8nkJQG8plj5_fJMa9qCWzkDHP5RzoaBKgh_jLGlMsV2acVKZBdvnYr2YkERuhOlo08bY0Y4OPrm8cmsgBNggnLU6LvJj2H9DG5XMZQxQ0mB77Zp6G9RTxWUH09reTNKh7fOlumJmTGnX-o6f9XCU' },
  { id: 'us', code: 'us', name: '미국', desc: '세계 최고 수준의 교육과 다양한 기회', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop' },
  { id: 'uk', code: 'gb', name: '영국', desc: '깊은 역사와 전통의 명문 교육', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU5NkpQhSRryRvgJP5nWsLGwGPA5An-Kr1upii1S1KZF7ryx3srC5kHPF-uAaRfP7K-bve7SnjEb3jW0E3u7sahqongxjywE5sP3Qio4Ue5Ra6WV2D89UhvBAsgG8NWC2QpIPj9Bm4bIjDci5vjyAOpkSAfgCZ75m571kcCUJpKAlbjLTAa0sDn7_heLjgTr0NTPWfeQaMezHYlxoATnovcZT_Ao178wkUdmyPBIEQHliiW005fsumLiNXg7GB22TR46HreXGxUdg' },
  { id: 'australia', code: 'au', name: '호주', desc: '따뜻한 기후와 여유로운 라이프스타일', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLbxGKVL0DX2Lkm02cR0aXgmu8B0Pm1Skxut_-7FZzxdiybb8E95J0sEgx0wgorcVraAIkTgpI2bFq0HwFVCYKu8KULvPgS2ZiTq2841GQ4w_O5flWB1Gl0SArEdfVXSezVmRZ62n2rT3Pw6B7GGgjuiysh6w89EjhJijW_SiEG7rpQtn82-t1ImonAagG4DGXZwt1wIGRORWkHBptYUJ31zu8F-Jfv5pKDMM47N6MHvkme-MsU68q203rgn5H96HOP8RwMJOUads' },
  { id: 'nz', code: 'nz', name: '뉴질랜드', desc: '청정 자연 속 평화로운 학업', img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071&auto=format&fit=crop' },
  { id: 'philippines', code: 'ph', name: '필리핀', desc: '단기 어학연수와 영어 교육의 중심', img: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1974&auto=format&fit=crop' },
  { id: 'malaysia', code: 'my', name: '말레이시아', desc: '안전하고 다문화적인 글로벌 허브', img: 'https://images.unsplash.com/photo-1596422846543-74c6e64883ff?q=80&w=2000&auto=format&fit=crop' },
  { id: 'taiwan', code: 'tw', name: '대만', desc: '아시아의 친근한 문화와 우수한 인프라', img: 'https://images.unsplash.com/photo-1552993873-040212fafbb3?q=80&w=2072&auto=format&fit=crop' },
  { id: 'hk', code: 'hk', name: '홍콩', desc: '동서양 문화가 공존하는 금융/교육 중심지', img: 'https://images.unsplash.com/photo-1506974261899-73fbcc016cf1?q=80&w=2070&auto=format&fit=crop' }
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD20JUXBtpk8MFI_k33n-KDdHu6ekyAjkx7kdG4utjw_Xdw13qUE5fWChIEAHVwQ7dGJtvi84NpJyMigV7m7C_p_J0DZ1TFMTkbz6kjf0bLHC3vEh0dV8MPhPEkhgqNFXwE3GbvsIXzKhOWE8sJo6wYtM1SY_aWF-bI-9Ki6T8-5aq_EP4gSndpWut1JngwKr0XMp4rQE2DW183YSvXhtLCi_YdDFWi8NmM0EcTsMsCcXoFvsLuVQWJ3eEZgNpZhB4O-tRwaNEewE"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm md:text-base font-sans font-semibold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30 drop-shadow-sm">
            어느 국가로 떠나시나요?
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-sans font-bold text-white leading-[1.35] break-keep tracking-[-0.02em] drop-shadow-lg">
            전 세계 검증된 홈스테이와 가디언을<br className="hidden md:block" /> 지금 바로 만나보세요
          </h1>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">인기 유학 국가</h2>
          <p className="text-body-lg text-on-surface-variant">원하시는 국가를 선택하여 맞춤형 홈스테이를 찾아보세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => (
            <div 
              key={country.id}
              onClick={() => navigate(`/country/${country.id}`)}
              className="group cursor-pointer rounded-3xl overflow-hidden relative aspect-[4/3] shadow-md hover:shadow-xl transition-all"
            >
              <img 
                src={country.img.includes('unsplash.com') ? `https://picsum.photos/seed/${country.id}/800/600` : country.img} 
                alt={country.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${country.id}/800/600`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 flex items-center gap-2 drop-shadow-md">
                  <img src={`https://flagcdn.com/${country.code}.svg`} alt={`${country.name} 국기`} className="w-7 h-auto drop-shadow-sm rounded-[2px]" />
                  <span>{country.name}</span>
                </h3>
                <p className="text-sm md:text-base font-sans text-white/90 font-medium break-keep leading-snug drop-shadow-sm">
                  {country.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action for Partners */}
      <section className="py-24 bg-surface-container-low text-center px-4">
        <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">홈스테이를 운영하시나요?</h2>
        <p className="text-body-lg text-on-surface-variant mb-10">에듀가드 파트너로 가입하고 전 세계 유학생들을 만나보세요.</p>
        <button 
          onClick={() => navigate('/register')}
          className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-label-lg hover:opacity-90 transition-opacity"
        >
          파트너 신청하기
        </button>
      </section>
    </main>
  );
};

export default Home;
