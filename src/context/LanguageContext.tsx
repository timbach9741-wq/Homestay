import React, { createContext, useContext, useState } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Navbar
    'nav.home': '홈',
    'nav.homestays': '홈스테이 찾기',
    'nav.dashboard': '대시보드',
    'nav.login': '로그인',
    'nav.logout': '로그아웃',
    'nav.language': '언어 선택',
    'nav.welcome': '님',
    'nav.premium': '프리미엄',

    // Home Hero
    'hero.badge': '어느 국가로 떠나시나요?',
    'hero.title': '전 세계 검증된 홈스테이와 가디언을 지금 바로 만나보세요',

    // Home Body
    'home.heading': '인기 유학 국가',
    'home.subheading': '원하시는 국가를 선택하여 맞춤형 홈스테이를 찾아보세요.',
    
    // Home CTA
    'home.cta_title': '홈스테이를 운영하시나요?',
    'home.cta_desc': '에듀가드 파트너로 가입하고 전 세계 유학생들을 만나보세요.',
    'home.cta_btn': '파트너 신청하기',

    // Country Names
    'country.canada.name': '캐나다 나이아가라 폭포',
    'country.us.name': '미국 자유의 여신상',
    'country.uk.name': '영국 런던 타워 브릿지',
    'country.australia.name': '호주 시드니 오페라하우스',
    'country.nz.name': '뉴질랜드 와나카 호수 대자연',
    'country.france.name': '프랑스 파리 에펠탑',
    'country.germany.name': '독일 노이슈반스타인 성',
    'country.singapore.name': '싱가포르 마리나 베이샌즈',
    'country.japan.name': '일본 후지산 전경',
    'country.china.name': '중국 만리장성',
    'country.philippines.name': '필리핀 엘 니도 팔라완 해변',
    'country.malaysia.name': '말레이시아 페트로나스 트윈타워',
    'country.taiwan.name': '대만 타이베이 101타워',
    'country.hk.name': '홍콩 빅토리아 하버야경',

    // Country Descriptions
    'country.canada.desc': '웅장한 나이아가라 폭포와 청정 자연의 나라',
    'country.us.desc': '뉴욕의 상징, 자유와 기회의 나라',
    'country.uk.desc': '템스강의 명물이자 유서 깊은 전통 교육',
    'country.australia.desc': '아름다운 항구 도시와 여유로운 교육 환경',
    'country.nz.desc': '깨끗한 호수와 청정 자연 속 평화로운 학업',
    'country.france.desc': '낭만과 예술의 상징, 문화 교육의 중심지',
    'country.germany.desc': '동화 속 궁전과 유럽 최고 수준의 명문 교육',
    'country.singapore.desc': '현대적인 글로벌 비즈니스 및 아시아 최고 교육 허브',
    'country.japan.desc': '아름다운 후지산과 안전하고 친근한 교육 환경',
    'country.china.desc': '역사의 위대함과 글로벌 미래 비전의 어학 허브',
    'country.philippines.desc': '에메랄드빛 해변과 가성비 최고의 어학연수',
    'country.malaysia.desc': '웅장한 트윈 타워와 다문화 글로벌 허브',
    'country.taiwan.desc': '지표 타워와 IT 기반 우수 교육 환경',
    'country.hk.desc': '화려한 야경과 금융/교육의 중심지',
    'country.other.name': '기타 국가',
    'country.other.desc': '리스트에 없는 다양한 국가의 홈스테이 정보',

    // Footer
    'footer.desc': '글로벌 교육 보호 및 홈스테이 관리 전문 플랫폼. 학생의 안전과 성장을 최우선으로 합니다.',
    'footer.services': '서비스',
    'footer.info': '정보',
    'footer.community': '커뮤니티',
    'footer.terms': '이용약관',
    'footer.privacy': '개인정보처리방침',
    'footer.support': '고객지원',
    'footer.host_app': '호스트 신청',
    'footer.partnerships': '파트너십'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.homestays': 'Find Homestays',
    'nav.dashboard': 'Dashboard',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.language': 'Language',
    'nav.welcome': ', Welcome',
    'nav.premium': 'Premium',

    // Home Hero
    'hero.badge': 'Where are you studying?',
    'hero.title': 'Find Verified Homestays and Guardians Worldwide',

    // Home Body
    'home.heading': 'Popular Study Destinations',
    'home.subheading': 'Choose your destination to find the perfect homestay matching your needs.',
    
    // Home CTA
    'home.cta_title': 'Are you running a homestay?',
    'home.cta_desc': 'Register as an EduGuard partner and connect with international students.',
    'home.cta_btn': 'Apply as Partner',

    // Country Names
    'country.canada.name': 'Canada Niagara Falls',
    'country.us.name': 'USA Statue of Liberty',
    'country.uk.name': 'UK London Tower Bridge',
    'country.australia.name': 'Australia Sydney Opera House',
    'country.nz.name': 'New Zealand Lake Wanaka Nature',
    'country.france.name': 'France Paris Eiffel Tower',
    'country.germany.name': 'Germany Neuschwanstein Castle',
    'country.singapore.name': 'Singapore Marina Bay Sands',
    'country.japan.name': 'Japan Mount Fuji View',
    'country.china.name': 'China Great Wall',
    'country.philippines.name': 'Philippines El Nido Palawan Beach',
    'country.malaysia.name': 'Malaysia Petronas Twin Towers',
    'country.taiwan.name': 'Taiwan Taipei 101 Tower',
    'country.hk.name': 'Hong Kong Victoria Harbour Night View',

    // Country Descriptions
    'country.canada.desc': 'Majestic Niagara Falls and pristine nature',
    'country.us.desc': 'Symbol of New York, land of freedom and opportunity',
    'country.uk.desc': 'Famous Thames landmark and prestigious education',
    'country.australia.desc': 'Beautiful harbor city and relaxed study environment',
    'country.nz.desc': 'Peaceful studies in pristine nature and lakes',
    'country.france.desc': 'Symbol of romance and art, cultural education hub',
    'country.germany.desc': 'Fairytale castle and top-tier European education',
    'country.singapore.desc': 'Modern global business and Asia\'s top education hub',
    'country.japan.desc': 'Beautiful Mount Fuji and safe, friendly environment',
    'country.china.desc': 'Great history and future-focused language learning hub',
    'country.philippines.desc': 'Emerald beaches and cost-effective language programs',
    'country.malaysia.desc': 'Grand twin towers and multicultural global hub',
    'country.taiwan.desc': 'Landmark tower and IT-based excellent education',
    'country.hk.desc': 'Spectacular night view, financial and educational hub',
    'country.other.name': 'Other Countries',
    'country.other.desc': 'Homestay information for various other countries',

    // Footer
    'footer.desc': 'Global educational protection and homestay management platform. We prioritize student safety and growth.',
    'footer.services': 'Services',
    'footer.info': 'Information',
    'footer.community': 'Community',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.support': 'Support',
    'footer.host_app': 'Host Application',
    'footer.partnerships': 'Partnerships',

    // ============================================================
    // CountryList Page UI
    // ============================================================
    '국가 선택으로 돌아가기': 'Back to Country Selection',
    '등록된 홈스테이가 없습니다': 'No homestays registered',
    '이 국가의 첫 번째 파트너가 되어보세요!': 'Be the first partner in this country!',
    'VVIP 공식 인증 가디언': 'VVIP Certified Guardian',
    '지역 독점 혜택': 'Regional Exclusive Benefit',
    '프리미엄 추천 홈스테이': 'Premium Recommended Homestays',
    '일반 홈스테이': 'General Homestays',
    '한 달(4주) 기준 요금': 'Price per month (4 weeks)',
    '자세히 보기': 'View Details',
    '공식 인증 가디언': 'Certified Guardian',
    '추천 호스트': 'Recommended Host',
    '한국인 가정': 'Korean Family',
    '현지인 가정': 'Local Family',
    '정식 사업자': 'Registered Business',
    '안심 보험 가입': 'Safety Insured',
    '에듀가드에서 철저한 검증을 거친 공식 인증 파트너입니다. 최고의 식단과 안전한 생활 환경, 꼼꼼한 학생 관리를 보장하는 프리미엄 급 홈스테이입니다.': 'Vetted premium homestay guaranteeing the best meals, safe environment, and student care.',

    // ============================================================
    // Business Names & Locations - Canada
    // ============================================================
    '토론토 노스욕 VVIP 가디언 스테이': 'Toronto North York VVIP Guardian Stay',
    'York Mills CI 도보 10분': '10 min walk to York Mills CI',
    '밴쿠버 웨스트사이드 명문학군 홈스테이': 'Vancouver Westside Elite School District Homestay',
    'Lord Byng 초/중 인근': 'Near Lord Byng School',
    '밴쿠버 행복 홈스테이': 'Vancouver Happy Homestay',
    'UBC 차로 15분': '15 min drive to UBC',
    '캘거리 따뜻한 가족 홈스테이': 'Calgary Warm Family Homestay',
    '다운타운 20분': '20 min to Downtown',
    '몬트리올 아트 하우스': 'Montreal Art House',
    '맥길 대학교 도보 15분': '15 min walk to McGill University',
    '오타와 리버뷰 맘스테이': 'Ottawa Riverview Mom Stay',
    '오타와 대학교 30분': '30 min to University of Ottawa',

    // Business Names & Locations - US
    'LA 선샤인 공식 파트너 하우스': 'LA Sunshine Official Partner House',
    'UCLA 버스 20분': '20 min bus to UCLA',
    '어바인(Irvine) 안전제일 에듀스테이': 'Irvine Safety-First EduStay',
    'Northwood High School 인접': 'Adjacent to Northwood High School',
    '뉴욕 맨해튼 프리미엄 홈': 'New York Manhattan Premium Home',
    '콜럼비아 대학 인근': 'Near Columbia University',
    '시애틀 킹카운티 홈스테이': 'Seattle King County Homestay',
    'UW 시애틀 캠퍼스 버스 15분': '15 min bus to UW Seattle Campus',
    '샌디에이고 오션 맘스테이': 'San Diego Ocean Mom Stay',
    'UCSD 20분 거리': '20 min to UCSD',

    // Business Names & Locations - UK
    '런던 리치몬드 수석 가디언 홈': 'London Richmond Senior Guardian Home',
    'Tiffin School 버스 15분': '15 min bus to Tiffin School',
    '뉴몰든 한인타운 엘리트 홈스테이': 'New Malden Koreatown Elite Homestay',
    '워털루역 기차 25분': '25 min train to Waterloo Station',
    '브라이튼 해변가 쉐어하우스': 'Brighton Beachside Share House',
    '브라이튼 대학 도보 5분': '5 min walk to University of Brighton',

    // Business Names & Locations - Australia
    '시드니 노스쇼어 VVIP 에듀케어': 'Sydney North Shore VVIP EduCare',
    '채스우드역 도보 5분': '5 min walk to Chatswood Station',
    '멜버른 프리미엄 홈 가디언': 'Melbourne Premium Home Guardian',
    'Mckinnon SC 인접': 'Adjacent to McKinnon SC',
    '브리즈번 썬샤인 홈스테이': 'Brisbane Sunshine Homestay',
    '시티 중심가 버스 20분': '20 min bus to City Center',

    // Business Names & Locations - NZ
    '오클랜드 하버뷰 스테이': 'Auckland Harbour View Stay',
    '시티센터 도보 15분': '15 min walk to City Center',

    // Business Names & Locations - Philippines
    '세부 잉글리시 VVIP 가디언 캠프': 'Cebu English VVIP Guardian Camp',
    'IT 파크 내 위치': 'Located in IT Park',

    // Business Names & Locations - Malaysia
    '쿠알라룸푸르 럭셔리 콘도': 'Kuala Lumpur Luxury Condo',
    '몽키아라 국제학교 앞': 'Near Mont Kiara International School',

    // Business Names & Locations - Taiwan
    '타이베이 에듀케어 홈스테이': 'Taipei EduCare Homestay',
    '사대부중 도보 5분': '5 min walk to NTNU High School',

    // Business Names & Locations - Hong Kong
    '홍콩섬 퍼스트 공식 가디언 홈': 'Hong Kong Island First Official Guardian Home',
    '해피밸리 고급 주택가': 'Happy Valley Premium Residential Area',

    // Business Names & Locations - Japan
    '도쿄 미나토구 글로벌 아카데미 홈스테이': 'Tokyo Minato Global Academy Homestay',
    '아자부주반역 도보 5분': '5 min walk to Azabu-Juban Station',
    '도쿄 신주쿠 안심 에듀스테이': 'Tokyo Shinjuku Safe EduStay',
    '와세다 대학 인근': 'Near Waseda University',

    // Business Names & Locations - China
    '베이징 왕징 한인 친화형 에듀 하우스': 'Beijing Wangjing Korean-Friendly Edu House',
    '왕징역 도보 8분': '8 min walk to Wangjing Station',

    // Business Names & Locations - Germany
    '프랑크푸르트 명문 학군 하우스': 'Frankfurt Elite School District House',
    'Frankfurt Intl School 도보 12분': '12 min walk to Frankfurt Intl School',

    // Business Names & Locations - Singapore
    '싱가포르 오차드 로드 공식 인증 가디언 스테이': 'Singapore Orchard Road Certified Guardian Stay',
    'Dhoby Ghaut MRT 도보 5분': '5 min walk to Dhoby Ghaut MRT',
    '싱가포르 센토사 프리미엄 오션뷰 홈': 'Singapore Sentosa Premium Ocean View Home',
    'Sentosa Cove 내 위치': 'Located in Sentosa Cove',

    // Business Names & Locations - France
    '파리 16구 안심 에듀 가디언 스테이': 'Paris 16th Arr. Safe Edu Guardian Stay',
    'Passy 역 도보 5분': '5 min walk to Passy Station',
    '프랑스 리옹 센트럴 홈스테이': 'Lyon Central Homestay',
    'Bellecour 광장 인근': 'Near Place Bellecour',

    // ============================================================
    // Detail Page
    // ============================================================
    '사진 더보기 (12)': 'View More Photos (12)',
    '인기 숙소': 'Popular Stay',
    '검증 완료': 'Verified',
    '런던 부촌 윔블던의 화목한 가디언 가정': 'Warm Guardian Family in Wimbledon, London',
    '후기 24개': '24 Reviews',
    '호스트 Sarah 님': 'Host Sarah',
    '경력 12년 가디언 전문가': '12-Year Guardian Professional',
    '한국어 가능': 'Korean Available',
    '안녕하세요! 저희 가족은 10년 넘게 한국 유학생들과 함께 생활해왔습니다. 두 아이의 엄마이자 교육 컨설턴트로 활동하고 있어 학생들의 학업과 정서적 안정을 최우선으로 생각합니다. 매주 주말에는 근처 공원 산책과 한국식 집밥을 제공하며 따뜻한 가정 환경을 조성합니다.': 'Hello! Our family has lived with international students for over 10 years. We prioritize students\' academics and emotional stability, providing weekend walks and home-cooked meals.',
    '식단 및 편의 시설': 'Meals & Amenities',
    '매일 제공되는 식단': 'Daily Provided Meals',
    '조식(아메리칸), 석식(주 3회 한국식 식단 포함), 주말 전식 제공. 알러지 및 특수 식단 대응 가능.': 'Breakfast (American), Dinner (includes Korean meals 3 times a week), full weekend meals.',
    '고속 인터넷 & 스터디룸': 'High-Speed Internet & Study Room',
    '5G 기가 와이파이, 각 방 개인용 책상, 모니터 스탠드 및 인체공학 의자 완비.': '5G Giga Wi-Fi, private desk, monitor stand, and ergonomic chair in each room.',
    '세탁 및 관리': 'Laundry & Cleaning',
    '주 2회 세탁 및 침구 교체. 매주 금요일 전문 청소 서비스 제공.': 'Laundry and bedding replaced twice a week. Professional cleaning every Friday.',
    '주변 학교 거리': 'Nearby School Distance',
    '도보 10분': '10 min walk',
    '버스 15분': '15 min bus ride',
    'EduGuard 신뢰 및 안전 정책': 'EduGuard Trust & Safety Policy',
    '우리는 학생의 안전을 최우선으로 합니다. 모든 결제는 에스크로 서비스를 통해 보호되며, 서비스 완료 시 호스트에게 대금이 지급됩니다.': 'We prioritize student safety. All payments are protected through our escrow service.',
    '100% 에스크로 보호': '100% Escrow Protection',
    '입주 확인 전까지 대금이 안전하게 보관됩니다.': 'Funds are held securely until move-in is confirmed.',
    '현지 가디언십 기관 인증': 'Local Guardianship Certified',
    '정기적인 방문 실사를 통해 주거 환경을 검증합니다.': 'We verify housing conditions through regular physical inspections.',
    '신원 확인': 'Identity Verification',
    '배경 조사': 'Background Check',
    '안전 결제': 'Secure Payment',
    '24/7 지원': '24/7 Support',
    '학생 및 학부모 후기': 'Student & Parent Reviews',
    '전체보기 (24)': 'View All (24)',
    '김*지 학생': 'Student Min-ji Kim',
    '2023년 9월 - 2024년 6월 체류': 'Stayed Sep 2023 - Jun 2024',
    '박*현 학부모': 'Parent Ji-hyun Park',
    '2022년 3월 - 현재 체류 중': 'Staying since Mar 2022 - Present',
    '에스크로 결제로 예약하기': 'Book with Escrow Payment',
    '아직 결제되지 않습니다.': 'You won\'t be charged yet.',
    '가디언 서비스 수수료': 'Guardian Service Fee',
    '총 합계': 'Total Amount',
    '호스트 문의': 'Contact Host',
    '공유하기': 'Share',
    '저장': 'Save',
    '예약하기': 'Book Now',
    '체크인 - 체크아웃': 'Check-in - Check-out',
    '학생 정보': 'Student Info',
    '게스트 1명 (만 16세)': '1 Guest (Age 16)',

    // ============================================================
    // Dashboard
    // ============================================================
    '글로벌 안심 홈스테이 파트너 대시보드': 'Global Safe Homestay Partner Dashboard',
    '환영합니다, ': 'Welcome, ',
    '님! 입점 신청 정보 및 숙소를 관리하세요.': '! Manage your listing and application.',
    '👑 Premium 무제한 케어 파트너 (전면 무료 제공)': '👑 Premium Unlimited Care Partner (Fully Free)',
    '기본 정보': 'Basic Info',
    '가옥 & 객실': 'House & Room',
    '식사 & 친화도': 'Meals & Affinity',
    '지원 서비스': 'Support Services',
    '국가별 서류': 'Documents by Country',
    '최종 서약': 'Final Pledge',
    '이전': 'Previous',
    '다음': 'Next',
    '신청서 최종 제출하기': 'Submit Application',
    '홈스테이 실사진 관리': 'Manage Homestay Photos',
    '숙소 사진': 'Accommodation Photo',
    'Premium 파트너 혜택 무상 적용': 'Premium Partner Benefit (Free)',
    '유학생 및 학부모 매칭 확률 극대화를 위해 **사진 및 동영상을 무제한 업로드**하실 수 있습니다! (모두 무료)': 'You can upload unlimited photos/videos to maximize match rates (free)!',
    '실무 안내 (안심 매칭 가이드)': 'Operation & Safe Matching Guide',
    '다국어 자동 번역 모듈 탑재': 'Multilingual Auto-Translation Module',
    '입력하신 호스트 정보는 한국 유학생 학부모용 전용 대시보드에 **깔끔한 한글 번역본**으로 자동 제공되어 의사소통 분쟁을 원천 해결합니다.': 'Your input is automatically translated into clean Korean for parents to resolve communication issues.',
    '학교 거리 자동 매핑': 'School Distance Auto-Mapping',
    '기재하신 주소 정보를 바탕으로 현지 구글 맵 API와 연동되어 인근 중고등학교/대학교까지의 버스/도보 통학 시간이 학생 화면에 실시간으로 표시됩니다.': 'Address info integrates with Google Maps API to display transit/walking commute times in real-time.',
    '실제 현장 안전 실사': 'On-Site Safety Audits',
    '서류 제출 완료 후, 현지 EduGuard 가디언 팀이 직접 가옥을 방문하여 소방 설비 및 쾌적도 상태를 2차로 확인하고 최종 안심 등급을 수여합니다.': 'Local EduGuard teams inspect properties post-submission to verify fire safety and comfort.',
    '축하합니다! 글로벌 안심 홈스테이 호스트 신청서가 성공적으로 저장 및 접수되었습니다. 담당자 서류 심사 후 3일 이내에 최종 승인 메일이 발송됩니다.': 'Congratulations! Your application has been submitted successfully. Approval email will be sent in 3 days.',

    // ============================================================
    // Login / Register
    // ============================================================
    '환영합니다': 'Welcome',
    '홈스테이 파트너 계정으로 로그인하세요.': 'Login with your homestay partner account.',
    '이메일': 'Email',
    '비밀번호': 'Password',
    '비밀번호 확인': 'Confirm Password',
    '아직 파트너 계정이 없으신가요?': 'Don\'t have a partner account yet?',
    '회원가입': 'Sign Up',
    '파트너 가입': 'Partner Registration',
    '홈스테이를 등록하고 전 세계 고객들과 만나보세요.': 'Register your homestay and meet global clients.',
    '가입하기': 'Register Now',
    '이미 계정이 있으신가요?': 'Already have an account?',

    // ============================================================
    // Pricing
    // ============================================================
    '특별 파트너 모집 프로모션': 'Special Partner Recruitment Promotion',
    '에듀가드 파트너 전면 무료화 안내': 'Notice: EduGuard Partner Services Completely Free',
    '더 많은 글로벌 유학생들과 우수한 현지 홈스테이의 연결을 위해, **파트너 등록 및 홍보 서비스를 수수료/이용료 없이 전면 무료**로 제공합니다.': 'Partner registration and promotion services are 100% free.',
    '에듀가드 안심 파트너 요금': 'EduGuard Safe Partner Fee',
    '입점 기간 한정, 월 49,000원 상당의 모든 프리미엄 기능을 제공합니다.': 'Limited time offer: get all premium features (worth ₩49,000/mo) for free.',
    '/ 월 49,000원': '/ ₩49,000 per month',
    '평생 무료 지원': 'Free Lifetime Support',
    '무상 제공되는 프리미엄 기능:': 'Free Premium Features Included:',
    '대시보드에서 가입 신청서 작성하기': 'Fill Out Application in Dashboard',
    '지금 파트너로 시작하기': 'Start as a Partner Now',
    '왜 에듀가드는 무료로 제공되나요?': 'Why is EduGuard Free?',
    '에듀가드는 해외에 자녀를 보내는 한국인 학부모들의 불안감을 해소하기 위해 설립되었습니다. 진입 장벽을 낮춰 더 많은 훌륭한 현지 호스트들의 신원과 안전 규정을 검증하는 것이 가장 큰 목표이므로, 모든 입점 비용은 전면 무료로 제공됩니다.': 'EduGuard was founded to ease the anxiety of Korean parents sending their children abroad. All listings are free.',

    // ============================================================
    // Dashboard Form — Step 1: Host Profile
    // ============================================================
    '1단계: 호스트 기본 정보 (Host Profile)': 'Step 1: Host Profile',
    '호스트의 신원 및 연락처 정보를 수집하고, 미성년자 수용을 위한 연령 등 기본 자격을 검증합니다.': 'Collecting host identity and contact information, verifying basic qualifications such as age for hosting minors.',
    '대표 호스트 성명 (여권상 영문 성명 필수) *': 'Host Full Name (Passport English name required) *',
    '예: GILDONG HONG': 'e.g.: GILDONG HONG',
    '호스트 생년월일 *': 'Host Date of Birth *',
    '※ 만 18세 이하 유학생 유치 시 만 25세 이상 요건 검증용': '※ Age verification: must be 25+ when hosting students under 18',
    '이메일 주소 *': 'Email Address *',
    '연락처 *': 'Contact Number *',
    '예: +1 123-456-7890 (국가코드 포함)': 'e.g.: +1 123-456-7890 (include country code)',
    '가정 내 주 언어': 'Primary Language at Home',
    '영어 (English)': 'English',
    '한국어 (Korean)': 'Korean',
    '스페인어 (Spanish)': 'Spanish',
    '일본어 (Japanese)': 'Japanese',
    '중국어 (Chinese)': 'Chinese',
    '※ 영어권 국가(캐나다, 뉴질랜드 등)는 가정 내 영어 사용을 강력 권장합니다.': '※ English-speaking countries (Canada, NZ, etc.) strongly recommend English usage at home.',
    '홈스테이 등록 국가 *': 'Homestay Registration Country *',
    '🇨🇦 캐나다 (Canada)': '🇨🇦 Canada',
    '🇺🇸 미국 (United States)': '🇺🇸 United States',
    '🇬🇧 영국 (United Kingdom)': '🇬🇧 United Kingdom',
    '🇦🇺 호주 (Australia)': '🇦🇺 Australia',
    '🇳🇿 뉴질랜드 (New Zealand)': '🇳🇿 New Zealand',
    '🇯🇵 일본 (Japan)': '🇯🇵 Japan',
    '🇨🇳 중국 (China)': '🇨🇳 China',
    '🇩🇪 독일 (Germany)': '🇩🇪 Germany',
    '🇸🇬 싱가포르 (Singapore)': '🇸🇬 Singapore',
    '🇫🇷 프랑스 (France)': '🇫🇷 France',
    '🇵🇭 필리핀 (Philippines)': '🇵🇭 Philippines',
    '🇲🇾 말레이시아 (Malaysia)': '🇲🇾 Malaysia',
    '🇹🇼 대만 (Taiwan)': '🇹🇼 Taiwan',
    '🇭🇰 홍콩 (Hong Kong)': '🇭🇰 Hong Kong',
    '🌐 기타 국가 (Other Countries)': '🌐 Other Countries',
    '상주 여부 확인 *': 'Residency Confirmation *',
    '예 (호스트 본인이 이 주택에 상시 주 거주합니다)': 'Yes (Host primarily resides in this property)',
    '아니오': 'No',
    '상세 주소 *': 'Detailed Address *',
    '예: 123 Main St, Vancouver, BC, Canada': 'e.g.: 123 Main St, Vancouver, BC, Canada',
    '숙소명/상호 (선택)': 'Accommodation Name / Business (Optional)',
    '예: 밴쿠버 안심 에듀 홈스테이': 'e.g.: Vancouver Safe Edu Homestay',

    // ============================================================
    // Dashboard Form — Step 2: Home & Room Details
    // ============================================================
    '2단계: 가옥 및 객실 환경 정보 (Home & Room Details)': 'Step 2: Home & Room Details',
    '학생이 머물 공간의 쾌적함과 소방 안전 상태를 검증합니다. (지하방, 창문 없는 방 등 유해 시설을 사전 필터링합니다)': 'Verifying comfort and fire safety of student spaces. (Pre-filtering hazardous facilities like basement or windowless rooms)',
    '주거 형태 *': 'Residence Type *',
    '🏡 단독주택 (House)': '🏡 House',
    '🏠 타운하우스 (Townhouse)': '🏠 Townhouse',
    '🏢 아파트/콘도 (Apartment/Condo)': '🏢 Apartment / Condo',
    '※ 뉴질랜드 등 일부 국가의 경우 마당의 캠핑카, 임시 간이 주택(Sleep-outs) 등록이 절대 불가합니다.': '※ In some countries (e.g., NZ), campervans and sleep-outs are strictly prohibited.',
    '제공 가능한 유학생 객실 수 *': 'Number of Available Student Rooms *',
    '1개': '1 Room',
    '2개': '2 Rooms',
    '3개 이상': '3+ Rooms',
    '※ 캐나다 등의 가이드라인은 한 가구당 최대 수용 인원을 2명으로 권장하고 있습니다.': '※ Guidelines in countries like Canada recommend max 2 students per household.',
    '객실 필수 가구 검증 (전체 선택 필수) *': 'Required Room Furniture Verification (Select All) *',
    '🛏️ 개인 침대': '🛏️ Bed',
    '👗 옷장': '👗 Closet',
    '✍️ 책상': '✍️ Desk',
    '🪑 의자': '🪑 Chair',
    '💡 스탠드 조명': '💡 Lamp',
    '[필수] 창문 및 독립문 여부': '[Required] Window & Independent Door',
    '제공할 유학생 객실 내에 외부로 통하는 규격 창문이 있고, 완전히 닫을 수 있는 독립된 정식 문이 있음을 증명합니다. (지하방이나 창문이 없는 방은 법적으로 등록이 불가능합니다.)': 'The student room has a standard window to the outside and a fully closable independent door. (Basement or windowless rooms cannot be legally registered.)',
    '[필수] 소방 안전 설비': '[Required] Fire Safety Equipment',
    '가옥 내에 정상 작동 가능한 연기 감지기(Smoke Detector) 및 초기 진화용 소화기가 규정된 장소에 비치되어 있습니다. (호주, 미국, 캐나다 등 현지 소방법 필수 기준 준수)': 'Working smoke detectors and fire extinguishers are installed at designated locations. (Compliant with local fire codes in Australia, US, Canada, etc.)',
    '욕실 사용 형태 *': 'Bathroom Type *',
    '유학생 개인 전용 욕실 (Private Bathroom)': 'Private Bathroom for Student',
    '호스트 가족 혹은 다른 학생과 공용': 'Shared with Host Family or Other Students',

    // ============================================================
    // Dashboard Form — Step 3: Dietary & Cultural Match
    // ============================================================
    '3단계: 식사 제공 및 한국인 유학생 친화도 (Dietary & Cultural Match)': 'Step 3: Dietary & Cultural Match',
    '한국 유학생 조기 정착 플랫폼의 중요 요소입니다. 식습관으로 인한 문화 분쟁을 사전에 필터링합니다.': 'A critical element for Korean student settlement. Pre-filtering cultural conflicts due to dietary habits.',
    '식사 제공 형태 *': 'Meal Plan Type *',
    '(주 7일 아침, 점심, 저녁 3식 모두 제공)': '(3 meals daily, 7 days a week)',
    '(평일 아침/저녁 2식, 주말 3식 제공)': '(2 meals on weekdays, 3 meals on weekends)',
    '(식사 제공 없음, 학생이 주방 직접 조리/식재료 보관 지원)': '(No meals provided, student can cook/store groceries)',
    '식사 준비 방식 *': 'Meal Preparation Method *',
    '호스트가 직접 밥을 준비하여 제공': 'Host prepares and serves meals',
    '호스트는 식재료만 제공하며 학생이 직접 조리 가능': 'Host provides ingredients only, student cooks independently',
    '한식 조리 가능 여부 *': 'Korean Food Availability *',
    '🍚 매일 한식 조리 가능 (한인 가정 등)': '🍚 Daily Korean meals available (Korean family, etc.)',
    '🍳 주 1~2회 한식 제공 가능 (한식 식재료 완비)': '🍳 Korean meals 1-2 times/week (Korean ingredients stocked)',
    '🍜 한식은 불가능하나 아시안 푸드 이해도가 높음': '🍜 No Korean food, but familiar with Asian cuisine',
    '🥩 로컬 양식 위주 제공 (서양식 식사)': '🥩 Mainly local/Western cuisine',
    '※ 한국인 유학생들의 현지 적응과 향수병 예방을 위해 솔직하게 입력해 주세요.': '※ Please be honest to help Korean students adapt and prevent homesickness.',
    '키우는 반려동물 정보 및 알레르기 관리 *': 'Pet Information & Allergy Management *',
    '예: 골든 리트리버 1마리 사육 중 / 반려동물 없음': 'e.g.: 1 Golden Retriever / No pets',
    '※ 학생의 동물 털 알레르기 유무와 크로스매칭하기 위해 정확한 정보를 적어주세요.': '※ Please provide accurate info for cross-matching with student pet allergy status.',

    // ============================================================
    // Dashboard Form — Step 4: Guardianship & Landing Services
    // ============================================================
    '4단계: 가디언십 및 랜딩 지원 서비스 여부 (Services)': 'Step 4: Guardianship & Landing Services',
    '부가가치가 높은 가디언십 대행이나 현지 초기 정착(랜딩) 서비스 동행 가능 여부를 파악합니다.': 'Identifying availability for guardianship and local settlement (landing) services.',
    '미성년 가디언십(법정 보호자) 대행 가능 여부 *': 'Minor Guardianship (Legal Guardian) Availability *',
    '예, 만 18세 미만 미성년자의 현지 법정 대리인(Custodian/Guardian) 대행이 가능합니다.': 'Yes, I can serve as a local legal custodian/guardian for minors under 18.',
    '아니오, 미성년 가디언십 대행은 불가능하며 성인 유학생만 받겠습니다.': 'No, I cannot provide guardianship and will only accept adult students.',
    '※ 호스트가 시민권자 또는 영주권자여야만 캐나다/호주 등 현지법상 합법적인 가디언 등록이 가능합니다.': '※ Hosts must be citizens or permanent residents for legal guardian registration in Canada/Australia, etc.',
    '한국 학부모용 정기 생활 리포트 작성 동의': 'Monthly Life Report for Korean Parents Agreement',
    ': 학생의 현지 적응, 학업 상황, 건강 관리에 대해 월 1회 한국에 계신 부모님께 전달될 에듀가드 플랫폼 정기 리포트 양식 작성을 적극 지원하겠습니다. (부모님 안심 킬러 서비스)': ': I will actively support monthly EduGuard report writing about student adaptation, academics, and health for parents in Korea. (Parent peace-of-mind service)',
    '초기 정착 (랜딩) 지원 가능 서비스 (중복 선택 가능)': 'Available Landing Support Services (Select Multiple)',
    '🚗 공항 안심 픽업 및 배웅 서비스 제공': '🚗 Airport Pick-up & Drop-off Service',
    '🏦 현지 시중은행 동행 및 계좌 개설 조력': '🏦 Bank Account Opening Assistance',
    '📱 현지 모바일(유심) 개통 및 버스 카드 발급 지원': '📱 Mobile SIM & Transit Card Setup',

    // ============================================================
    // Dashboard Form — Step 5: Country-Specific Legal Compliance
    // ============================================================
    '5단계: 국가별 법적 규제 준수 및 필수 서류': 'Step 5: Country-Specific Legal Compliance & Documents',
    '🌐 국가 설정': '🌐 Country Setting',
    '🇨🇦 캐나다': '🇨🇦 Canada',
    '🇺🇸 미국': '🇺🇸 United States',
    '🇬🇧 영국': '🇬🇧 United Kingdom',
    '🇦🇺 호주': '🇦🇺 Australia',
    '🇳🇿 뉴질랜드': '🇳🇿 New Zealand',
    '🇯🇵 일본': '🇯🇵 Japan',
    '🇨🇳 중국': '🇨🇳 China',
    '🇩🇪 독일': '🇩🇪 Germany',
    '🇸🇬 싱가포르': '🇸🇬 Singapore',
    '🇫🇷 프랑스': '🇫🇷 France',
    '🇵🇭 필리핀': '🇵🇭 Philippines',
    '🇲🇾 말레이시아': '🇲🇾 Malaysia',
    '🇹🇼 대만': '🇹🇼 Taiwan',
    '🇭🇰 홍콩': '🇭🇰 Hong Kong',
    '🌐 기타 국가': '🌐 Other Countries',
    '가 감지되어 관련 현지 법적 서류 인증 항목이 활성화되었습니다.': ' detected. Related local legal document verification items have been activated.',

    // Canada Compliance
    '🛡️ 성인 거주자 신원 조회 동의 (CRC / Vulnerable Sector Check)': '🛡️ Adult Resident Identity Check (CRC / Vulnerable Sector Check)',
    '가옥 내에 동거하는 만 18세 이상(BC주 등 일부 주는 만 19세 이상)의 모든 성인 구성원의 **범죄경력조회(Criminal Record Check)** 및 **취약계층 안전 조회(Vulnerable Sector Check)** 서류를 제출하는 데 동의하며, 3년마다 갱신하겠습니다.': 'I agree to submit Criminal Record Check and Vulnerable Sector Check documents for all adult household members (18+, 19+ in some provinces), renewed every 3 years.',
    'Vulnerable Sector Check 결과지 파일 업로드 (PDF / JPG)': 'Upload Vulnerable Sector Check Results (PDF / JPG)',
    '✓ 업로드됨': '✓ Uploaded',
    '📄 세무 및 전대차 권리 적격 서약': '📄 Tax & Subletting Rights Eligibility Pledge',
    '저는 해당 홈스테이 주택의 소유주이거나, 임차인(세입자)인 경우 유학생 유치 및 전대(Sublet) 행위에 대해 주택 소유주(임대인)의 서면 서명 동의를 사전에 완료하였음을 서약합니다.': 'I pledge that I am the property owner, or if a tenant, have obtained written landlord consent for subletting to students.',
    '🎒 마니토바주 지역 특별 조건 (해당 주 입점자 한정)': '🎒 Manitoba Special Requirements (Manitoba hosts only)',
    '마니토바주 교육부 규정에 부합하는 유효한 응급처치 자격증(First Aid Certificate)을 보유하고 있습니다.': 'I hold a valid First Aid Certificate meeting Manitoba Department of Education requirements.',
    'First Aid Certificate 사본 업로드 (선택)': 'Upload First Aid Certificate Copy (Optional)',

    // Australia Compliance
    '👶 아동 보호 구역 WWCC 안전 인증 (Working with Children Check)': '👶 Child Safety WWCC Certification (Working with Children Check)',
    '가옥 내에 동거하는 만 18세 이상의 모든 가족 구성원은 주 정부가 발행한 아동 대상 안전 근무 자격인 **Working with Children Check (WWCC)**를 정상적으로 이수하여 유효한 카드를 보유하고 있음을 서약합니다.': 'I pledge all household members 18+ hold valid Working with Children Check (WWCC) cards issued by the state government.',
    'WWCC 일련번호 (Card/App Number) *': 'WWCC Serial Number (Card/App Number) *',
    'WWC 등록 영문 실명 *': 'WWC Registered English Name *',
    '※ 주 정부 WWC 검증 시스템과 API로 연동되어 정상 자격 여부가 체크됩니다.': '※ Connected to state government WWC verification system via API.',
    '🔥 호주 연방 소방안전 규정 준수 서약': '🔥 Australian Fire Safety Compliance Pledge',
    '호주 연방/주 정부 및 지방의회(Council) 규정에 맞춰 침실 및 복도에 연기 감지기(Smoke Detector)를 의무적으로 작동 상태로 유지하고 매월 자체 점검을 실시할 것임을 서약합니다.': 'I pledge to maintain working smoke detectors per Australian federal/state/council regulations with monthly self-inspections.',

    // NZ Compliance
    '🇳🇿 교육 복지 강령 준수 (Pastoral Care Code 2021)': '🇳🇿 Pastoral Care Code 2021 Compliance',
    '뉴질랜드 정부의 유학생 안전 관리 지침인 **Education (Pastoral Care of Tertiary and International Learners) Code of Practice 2021** 규정을 준수하며, 가옥 내 만 18세 이상의 모든 거주인에 대한 NZ Police Vetting(경찰 신원 조회) 진행 및 3년 주기 갱신에 전적으로 동의합니다.': 'I comply with NZ Pastoral Care Code 2021, agree to NZ Police Vetting for all residents 18+, renewed every 3 years.',
    '뉴질랜드 경찰 신원 조회 동의서 및 신분증 업로드 (PDF / JPG)': 'Upload NZ Police Vetting Consent & ID (PDF / JPG)',
    '🏕️ 교육청 비규격 숙소 제한 준수 서약': '🏕️ Non-Standard Accommodation Restriction Pledge',
    '뉴질랜드 교육부 규정에 맞춰, 유학생을 마당에 별도 건축된 임시 간이 컨테이너 주택(Sleep-outs)이나 카라반(Caravans)에 숙박시키지 않고, 오직 본 가옥 내부의 독립된 침실에 배정할 것을 서약합니다.': 'I pledge not to house students in sleep-outs or caravans, only in independent bedrooms within the main house per NZ regulations.',

    // UK Compliance
    '🇬🇧 영국 DBS 신원 조회 동의 (Disclosure and Barring Service)': '🇬🇧 UK DBS Check Consent (Disclosure and Barring Service)',
    '가옥 내에 거주하는 만 16세 이상의 모든 구성원에 대해 영국 **DBS(Disclosure and Barring Service)** Enhanced Check를 완료하고 유효 인증서를 보유하고 있음을 서약합니다.': 'I pledge all household members 16+ have completed UK DBS Enhanced Check with valid certificates.',
    'DBS Enhanced Check 인증서 업로드 (PDF / JPG)': 'Upload DBS Enhanced Check Certificate (PDF / JPG)',
    '🏡 사설 위탁 보호 신고 의무 동의 (Private Fostering)': '🏡 Private Fostering Notification Obligation',
    '영국 Children Act 2004 규정에 따라 만 16세 미만 외국인 아동이 28일 이상 친부모가 아닌 가정에 체류하는 경우 현지 Local Authority(지방정부)에 사설 위탁 보호(Private Fostering)를 의무 신고해야 함을 인지하고 이에 동의합니다.': 'I acknowledge the UK Children Act 2004 requiring Private Fostering notification to Local Authority for foreign children under 16 staying 28+ days.',

    // US Compliance
    '🇺🇸 미국 SSN 기반 범죄 경력 조회 동의 (Criminal Background Check)': '🇺🇸 US SSN-Based Criminal Background Check Consent',
    '미국 연방법에 따라 가옥 내 만 18세 이상의 모든 성인 거주자의 **사회보장번호(SSN) 기반 범죄경력조회(Criminal Background Check)**를 제3의 공인 기관을 통해 실시하는 데 전적으로 동의합니다.': 'I fully agree to SSN-based criminal background checks for all adult residents 18+ through authorized agencies per US federal law.',
    '🛡️ 성범죄자 등록부 확인 동의 (NSOPR)': '🛡️ National Sex Offender Registry Check Consent (NSOPR)',
    '미국 법무부 운영 국가 성범죄자 공개 등록부(NSOPR)에서 가옥 내 모든 성인 거주자에 대한 조회를 실시하는 데 동의합니다.': 'I agree to NSOPR checks for all adult household residents through the US DOJ registry.',
    '📋 CSIET 기준 준수 서약 (Council on Standards for International Educational Travel)': '📋 CSIET Standards Compliance Pledge',
    'J-1 비자 교환학생 배정 관련 홈스테이의 경우, 미국 국무부(DOS)가 인정하는 **CSIET 인증 기준**에 부합하는 홈스테이 운영 원칙을 최대한 준수할 것을 서약합니다.': 'For J-1 visa exchange student homestays, I pledge to comply with CSIET certification standards recognized by the US DOS.',

    // Japan Compliance
    '🇯🇵 일본 범죄경력조회 동의': '🇯🇵 Japan Criminal Record Check Consent',
    '일본 경찰청 또는 관할 지방자치체의 요청에 따라 가옥 내 거주하는 모든 성인 구성원의 범죄경력조회 서류(犯罪経歴証明書)를 제출하는 데 동의합니다.': 'I agree to submit criminal record certificates for all adult household members as required by Japanese police.',
    '🏨 민박 신고 번호 (住宅宿泊事業法)': '🏨 Minpaku Registration Number (Housing Accommodation Business Act)',
    '일본 주택숙박사업법(민박법)에 의거하여 관할 지방자치체에 정상적으로 신고된 민박 신고 번호를 입력해 주세요.': 'Please enter the Minpaku registration number filed with your local government under Japanese law.',
    '🏠 임대 주택의 경우 집주인 동의 확인': '🏠 Landlord Consent for Rental Properties',
    '임차인(세입자)인 경우, 일본 민법 및 임대차 계약서 규정에 따라 주택 소유자(집주인)로부터 유학생 동거 또는 민박 운영에 대한 사전 서면 동의를 득하였음을 서약합니다.': 'If a tenant, I pledge to have obtained written landlord consent for student hosting per Japanese civil law.',

    // China Compliance
    '🇨🇳 외국인 임시거주 등록 동의 (临时住宿登记)': '🇨🇳 Temporary Residence Registration Consent',
    '중국 출입국관리법에 따라, 외국인 유학생이 입주한 후 24시간 이내에 관할 파출소(派出所)에 임시 숙박 등록(临时住宿登记)을 완료하는 데 전적으로 협조하고, 등록증 사본을 보관할 것을 서약합니다.': 'I pledge to complete temporary residence registration at the local police station within 24 hours of student move-in per Chinese immigration law.',
    '신분증 사본 업로드 (身份证 / 护照 사본)': 'Upload ID Copy (身份证 / Passport)',

    // Germany Compliance
    '🇩🇪 독일 범죄경력증명 동의 (Führungszeugnis)': '🇩🇪 Germany Criminal Record Certificate Consent (Führungszeugnis)',
    '독일 연방 사법청(Bundesamt für Justiz)이 발행하는 경찰 범죄경력증명서(Führungszeugnis) 원본 또는 확장 경찰증명서(Erweitertes Führungszeugnis)를 제출하는 데 동의합니다.': 'I agree to submit a Führungszeugnis or Erweitertes Führungszeugnis issued by the German Federal Office of Justice.',
    'Führungszeugnis 사본 업로드 (PDF / JPG)': 'Upload Führungszeugnis Copy (PDF / JPG)',
    '🔥 독일 연방주 소방 규정 준수 서약 (Rauchwarnmelderpflicht)': '🔥 German State Fire Safety Compliance (Rauchwarnmelderpflicht)',
    '독일 각 연방주 소방 법령에 규정된 유학생 거주 침실 내 연기 감지기(Rauchwarnmelder)의 의무 설치 및 비상구 경로 확보, 작동 상태 정기 점검을 실시할 것임을 동의하고 서약합니다.': 'I pledge to install mandatory smoke detectors (Rauchwarnmelder) in student rooms and maintain emergency exits per German state fire regulations.',

    // Singapore Compliance
    '🇸🇬 최소 임대 기간 준수 서약 (HDB / URA 규정)': '🇸🇬 Minimum Lease Period Compliance (HDB / URA)',
    '싱가포르 주택개발청(HDB) 규정에 따라 공공주택(HDB Flats)은 **최소 6개월 이상**, 민간 주택(Private Properties)은 도시개발청(URA) 규정에 따라 **최소 3개월 이상** 유학생 계약 기간을 의무 준수할 것을 동의하고 서약합니다. (단기 주간/일일 렌탈 금지)': 'I pledge minimum lease periods: 6+ months for HDB Flats, 3+ months for private properties per HDB/URA regulations. (No short-term daily/weekly rentals)',
    '👥 가구당 무관련 동거인 수 제한 (Occupancy Cap)': '👥 Occupancy Cap per Household',
    '싱가포르 현지 법률에 따라 가옥 내에 거주하는 무관련 인원(호스트 가족 외 유학생 및 기타 세입자 포함)의 총합이 **최대 6인**을 초과하지 않음을 서약합니다.': 'I pledge total non-related occupants (students + other tenants) will not exceed 6 persons per Singapore law.',
    '🪪 유학생 거주 등록 및 신분 확인 동의': '🪪 Student Residence Registration & ID Verification',
    '유학생 유치 시 학생의 Student Pass(학생 비자)가 유효한지 상시 검증하며, 입주 후 **7일 이내**에 HDB 또는 URA 포털에 거주자 등록을 완료할 것에 전적으로 동의합니다.': 'I agree to verify Student Pass validity and complete resident registration on HDB/URA portal within 7 days of move-in.',

    // France Compliance
    '🛡️ 프랑스 사법경찰 범죄경력조회 동의 (Bulletin N°3)': '🛡️ France Criminal Record Check Consent (Bulletin N°3)',
    '프랑스 아동 안전 및 보호 법률의 일환으로, 가옥 내 동거하는 만 18세 이상의 모든 구성원의 프랑스 법무부 발행 **사법경찰 범죄경력증명서(Casier Judiciaire Bulletin N°3)** 사본을 제출하는 데 동의합니다.': 'I agree to submit Casier Judiciaire Bulletin N°3 for all household members 18+ per French child safety laws.',
    'Bulletin N°3 결과지 파일 업로드 (PDF / JPG)': 'Upload Bulletin N°3 Results (PDF / JPG)',
    '📄 영접 증명 서약 (Attestation d\'Accueil)': '📄 Reception Certificate Pledge (Attestation d\'Accueil)',
    '프랑스 출입국 규정에 따라 부모를 동반하지 않은 비EU 국가 미성년/성인 유학생 유치 시 관할 시장(Mairie) 또는 지방정부(Prefecture)에 **Attestation d\'Accueil(영접 증명서)** 신청/인증 절차를 진행 및 협조할 것을 동의하고 서약합니다.': 'I pledge to process Attestation d\'Accueil through the local Mairie/Prefecture for non-EU students per French immigration regulations.',

    // Other Countries Compliance
    '🛡️ 현지 경찰 범죄경력조회서 (Police Clearance Certificate)': '🛡️ Local Police Clearance Certificate',
    '가옥 내에 거주하는 모든 성인 구성원의 현지 정부 발행 **범죄경력조회서(Police Clearance / Criminal Record)** 사본을 제출하는 데 동의하며, 플랫폼 요청 시 원본을 제시할 것을 서약합니다.': 'I agree to submit Police Clearance Certificates for all adult household members and present originals upon platform request.',
    '범죄경력조회서 파일 업로드 (PDF / JPG)': 'Upload Police Clearance Certificate (PDF / JPG)',
    '🪪 합법적 체류 신분 및 비자 증명 서약': '🪪 Legal Residency & Visa Verification Pledge',
    '저는 해당 국가에서 유학생을 합법적으로 유치할 수 있는 시민권, 영주권 또는 정식 거주/유학생 유치 가능 비자를 소유하고 있음을 서약합니다.': 'I pledge that I hold citizenship, permanent residency, or a valid visa permitting legal hosting of international students.',
    '체류 증명 신분증/비자 사본 업로드 (선택)': 'Upload Residency/Visa Proof (Optional)',
    '🔥 주택 소방 안전 규정 준수 서약': '🔥 Fire Safety Compliance Pledge',
    '현지 지자체 소방 안전 규정에 부합하는 연기 감지기 및 화재 진화 장비를 구비하고 있으며, 학생들에게 화재 발생 시 비상 대피 경로를 안내할 것을 동의하고 서약합니다.': 'I pledge to have smoke detectors and fire equipment per local regulations, and to inform students of emergency evacuation routes.',

    // ============================================================
    // Dashboard Form — Step 6: Final Safety Pledge
    // ============================================================
    '6단계: 호스트 최종 안전 서약 및 약관 동의': 'Step 6: Final Safety Pledge & Terms Agreement',
    '최종 가입 완료 및 매칭 대금 정산을 위한 플랫폼 규칙에 서약합니다.': 'Pledging to platform rules for final registration and payment settlement.',
    '[필수 동의] 안심 결제 에스크로(Escrow) 정산 프로토콜 동의 *': '[Required] Escrow Payment Settlement Protocol Agreement *',
    '본 플랫폼은 유학생 보증금 사기 및 입국 불허 분쟁을 근절하기 위해 **안심 에스크로 정산 시스템**을 적용하고 있습니다. 게스트가 결제한 전체 숙박금은 에듀가드 안전 계좌에 보관되며, **유학생이 현지에 무사히 입국 및 체크인하여 객실 상태를 확인하고 웰컴 서명을 한 직후에 호스트 계좌로 대금이 지급**되는 플랫폼 정산 원칙을 완전히 이해하고 이에 전적으로 동의합니다.': 'This platform uses an escrow settlement system. Guest payments are held in EduGuard\'s secure account and released to the host only after the student arrives, checks in, confirms room condition, and signs the welcome form. I fully understand and agree.',
    '[필수 동의] 허위 정보 기재 시 페널티 및 퇴출 조항 동의 *': '[Required] False Information Penalty & Removal Clause Agreement *',
    '본 가입 신청서에 기재한 주택 환경, 신원 증명 서류, 범죄 조회 및 소방 시설 관련 정보 중 허위 사실이 발견되거나 숨겨진 사실이 판명되는 경우 즉각적인 입점 취소 및 강제 퇴출 조치가 취해지며, 이에 따른 학생 재배치 비용 및 위약금 등의 법적 귀책 사유가 호스트 본인에게 있음을 동의하고 보증합니다.': 'If false or hidden information is found regarding housing, identity documents, criminal records, or fire safety, immediate listing cancellation and removal will apply. I agree the host bears all legal liability including student relocation costs and penalties.',

    // ============================================================
    // Supplemental keys (subagent used different wording)
    // ============================================================
    // UK (subagent variants)
    '💂 영국 범죄 이력 조회 (Enhanced DBS)': '💂 UK Criminal Record Check (Enhanced DBS)',
    '가구 내 만 16세 이상의 모든 구성원은 범죄 이력 체크를 위해 영국 정부가 승인한 **Enhanced DBS**를 보유하고 있음을 보증하며 관련 인증 서류를 제출하는 데 동의합니다.': 'I guarantee all household members 16+ hold government-approved Enhanced DBS certificates and agree to submit them.',
    'Enhanced DBS 인증서 파일 업로드 (PDF / JPG)': 'Upload Enhanced DBS Certificate (PDF / JPG)',
    '🏡 사설 위탁 보호 의무 신고 규정 동의 (Private Fostering)': '🏡 Private Fostering Notification Requirement',
    '영국 현지법(Children Act 1989)에 의거하여, 만 16세 미만의 미성년자가 부모 동반 없이 일반 가정에 **28일 이상 체류**하는 경우, 관할 지자체(Children\'s Social Care)에 매칭 시작 최소 6주 전에 사설 포스터링(Private Fostering) 신고서를 제출해야 할 의무가 호스트 및 플랫폼에 있음을 인지하고 이에 적극 협조 및 동의합니다.': 'Per UK Children Act 1989, I acknowledge the obligation to submit Private Fostering notification to Children\'s Social Care at least 6 weeks before placement for children under 16 staying 28+ days.',

    // US (subagent variants)
    '🦅 성범죄 및 배경 조회 자동 연동 동의 (SSN / NSOPR)': '🦅 Criminal & Sex Offender Background Check Consent (SSN / NSOPR)',
    '미국 국무부(Department of State) 및 CSIET 홈스테이 지침에 의거하여, 가구 내 만 18세 이상의 모든 구성원에 대해 사회보장번호(SSN)를 기반으로 한 미국 전역 범죄 경력 조회 및 미국 법무부(DOJ)의 **전국 성범죄자 공개 등록부(NSOPR)**의 자동 정보 조회 및 수집에 전적으로 동의합니다.': 'Per US DOS and CSIET guidelines, I fully agree to SSN-based nationwide criminal record checks and DOJ NSOPR registry checks for all household members 18+.',
    '사회보장번호 (SSN) *': 'Social Security Number (SSN) *',
    '신원 정보 검증 위탁 서명 동의': 'Identity Verification Delegation Consent',
    '📸 유학생 초상권 보호 및 홍보 규제 동의 (CSIET 표준)': '📸 Student Image Rights & Promotion Regulation (CSIET Standards)',
    '매칭 및 광고 노출 과정에서 유학생의 동의 없이 학생의 실제 얼굴 사진을 외부에 공개 게시하지 않으며, 학생의 운동 능력이나 신체 조건을 상업적으로 홍보 및 광고 목적으로 악용하지 않는 미 국무부 법령 가이드라인을 엄격하게 준수할 것을 동의합니다.': 'I agree to strictly comply with US DOS guidelines: not publicly posting student photos without consent and not commercially exploiting students\' physical abilities.',

    // Japan (subagent variants)
    '👶 아동 안전 신원조회 동의 (일본판 DBS 제도 도입 서약)': '👶 Child Safety Identity Check (Japan DBS System Pledge)',
    '일본 아동가정청의 **일본판 DBS(日本版DBS)** 가이드라인 취지에 맞춰, 가옥 내 거주하는 만 18세 이상의 모든 구성원은 아동 학대 및 성범죄 이력이 없음을 보증하며, 향후 정부 인증 서류 제출 요청 시 이에 전적으로 협조할 것에 서약합니다.': 'Per Japan DBS guidelines, I guarantee all household members 18+ have no history of child abuse or sex offenses and will cooperate with future document requests.',
    '🏡 주택숙박사업법(민박법) 및 지자체 조례 준수': '🏡 Housing Accommodation Business Act (Minpaku) & Local Ordinance Compliance',
    '자가 주택이 아닌 임대 주택 또는 맨션의 경우, 관리조합 규약(HOA) 및 집주인의 홈스테이 유치(전대차 행위) 서면 동의를 완료하였음을 증명합니다.': 'For rental properties, I certify that HOA rules and written landlord consent for student hosting have been obtained.',
    '주택숙박사업(민박) 신고번호 (선택 - 180일 영업 제한 대상 여부 확인용)': 'Minpaku Registration Number (Optional - for 180-day limit verification)',
    '예: 제 M130000000 호': 'e.g.: M130000000',

    // China (subagent variants)
    '🇨🇳 외국인 임시 주거 등록 동의 (입국 후 24시간 내 의무 신고)': '🇨🇳 Foreign Temporary Residence Registration (Required within 24h of arrival)',
    '중국 출입국관리법 제39조에 의거하여, 유학생이 숙소에 도착한 후 **24시간 이내**에 관할 파출소(派出所) 방문 또는 온라인 플랫폼을 통해 **외국인 임시 주거 등록(外国人临时住宿登记表)**을 차질 없이 마칠 수 있도록 임대 계약서 등 관련 거주 증명 서류 제공 및 행정 신고에 적극 협조하겠습니다.': 'Per Chinese Immigration Law Article 39, I will actively cooperate to complete foreign temporary residence registration within 24 hours of student arrival.',
    '🪪 대표 호스트 신분증 및 소유권 증빙 제출': '🪪 Host ID & Property Ownership Verification',
    '공안국 등록 지원을 위해 파출소 제출용 대표 호스트 신분 증빙 파일을 첨부합니다.': 'Attaching host ID document for police station registration support.',
    '중국 신분증(身份证) 또는 거주 증빙 파일 업로드 (PDF / JPG)': 'Upload Chinese ID (身份证) or Residency Proof (PDF / JPG)',

    // Germany (subagent variants)
    '🇩🇪 독일 아동보호법 범죄 이력 조회 동의 (Erweitertes Führungszeugnis)': '🇩🇪 German Child Protection Criminal Record Check (Erweitertes Führungszeugnis)',
    '독일 연방아동보호법(Bundeskinderschutzgesetz) 및 연방중앙등록법(BZRG) 제30a조에 따라, 가옥 내 동거하는 만 18세 이상의 모든 거주인은 아동 보호 안전 검증을 위한 **확장 범죄경력증명서(Erweitertes Führungszeugnis)** 사본 제출에 동의하며, 플랫폼 요청 시 갱신된 서류를 제공하겠습니다.': 'Per German Child Protection Act (BZRG §30a), all residents 18+ agree to submit Erweitertes Führungszeugnis and provide updated documents upon request.',
    'Erweitertes Führungszeugnis 파일 업로드 (PDF / JPG)': 'Upload Erweitertes Führungszeugnis (PDF / JPG)',
    '🔥 독일 연방 주택 소방안전 규정 준수 서약': '🔥 German Federal Housing Fire Safety Compliance Pledge',

    // NZ (subagent variant)
    '뉴질랜드 교육부 규정에 맞춰, 유학생을 마당에 별도 건축된 임시 간이 컨테이너 주택(Sleep-outs)이나 카라반(Caravans)에 숙박시키지 않고, 오직 본 가옥 내부의 독립된 침실에만 배정할 것을 엄숙히 서약합니다.': 'I solemnly pledge not to house students in sleep-outs or caravans, only in independent bedrooms within the main house per NZ regulations.',

    // Step 2 checkbox texts (subagent variants)
    '제공할 유학생 객실 내에 외부로 통하는 규격 창문이 있고, 완전히 닫을 수 있는 독립된 정식 문이 있음을 증명합니다. (지하방이나 창문이 없는 방은 법적으로 등록이 불가합니다.)': 'The student room has a standard window to the outside and a fully closable independent door. (Basement or windowless rooms cannot be legally registered.)',
    '제공할 유학생 객실 내에 외부로 통하는 규격 창문이 있고, 완전히 닫을 수 있는 독립된 정식 문이 있음을 증명합니다. (지하방이나 창문이 없는 방은 법적으로 등록이 불가능합니다.)': 'The student room has a standard window to the outside and a fully closable independent door. (Basement or windowless rooms cannot be legally registered.)',
    '가옥 내에 정상 작동 가능한 연기 감지기(Smoke Detector) 및 초기 진화용 소화기가 규정된 장소에 비치되어 있습니다. (호주, 미국, 캐나다 등 현지 소방법 필수 기준 준수)': 'Working smoke detectors and fire extinguishers are installed at designated locations. (Compliant with local fire codes in Australia, US, Canada, etc.)',

    // Navigation & Sidebar
    '이전': 'Previous',
    '다음': 'Next',
    '신청서 최종 제출하기': 'Submit Final Application',
    '홈스테이 실사진 관리': 'Homestay Photo Management',
    '숙소 사진': 'Accommodation Photo',
    'Premium 파트너 혜택 무상 적용': 'Free Premium Partner Benefits',
    '유학생 및 학부모 매칭 확률 극대화를 위해 **사진 및 동영상을 무제한 업로드**하실 수 있습니다! (모두 무료)': 'Upload **unlimited photos and videos** to maximize matching with students and parents! (All free)',
    '실무 안내 (안심 매칭 가이드)': 'Practical Guide (Safe Matching Guide)',
    '다국어 자동 번역 모듈 탑재': 'Multi-language Auto Translation',
    '입력하신 호스트 정보는 한국 유학생 학부모용 전용 대시보드에 **깔끔한 한글 번역본**으로 자동 제공되어 의사소통 분쟁을 원천 해결합니다.': 'Your host information is automatically translated and displayed on the Korean parent dashboard, eliminating communication issues.',
    '학교 거리 자동 매핑': 'Automatic School Distance Mapping',
    '기재하신 주소 정보를 바탕으로 현지 구글 맵 API와 연동되어 인근 중고등학교/대학교까지의 버스/도보 통학 시간이 학생 화면에 실시간으로 표시됩니다.': 'Based on your address, Google Maps API calculates commute times to nearby schools, displayed in real-time on the student screen.',
    '실제 현장 안전 실사': 'On-Site Safety Inspection',
    '서류 제출 완료 후, 현지 EduGuard 가디언 팀이 직접 가옥을 방문하여 소방 설비 및 쾌적도 상태를 2차로 확인하고 최종 안심 등급을 수여합니다.': 'After document submission, the local EduGuard guardian team visits to inspect fire safety and comfort, then assigns the final safety rating.',

    // Dashboard Header & Step Tracker
    '글로벌 안심 홈스테이 파트너 대시보드': 'Global Safe Homestay Partner Dashboard',
    '환영합니다, ': 'Welcome, ',
    '님! 입점 신청 정보 및 숙소를 관리하세요.': '! Manage your listing application and accommodation.',
    '👑 Premium 무제한 케어 파트너 (전면 무료 제공)': '👑 Premium Unlimited Care Partner (Completely Free)',
    '기본 정보': 'Profile',
    '가옥 & 객실': 'Home & Room',
    '식사 & 친화도': 'Meals & Match',
    '지원 서비스': 'Services',
    '국가별 서류': 'Legal Docs',
    '최종 서약': 'Final Pledge'
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return (saved && translations[saved]) ? saved : 'ko';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    if (language === 'ko') {
      return translations['ko']?.[key] || key;
    }
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
