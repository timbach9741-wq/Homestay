import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Camera } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const activeUser = user || { email: 'developer@example.com', membershipTier: 'premium' };

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: 호스트 기본 정보
    ownerName: '',
    birthDate: '',
    email: activeUser.email,
    phone: '',
    isResident: 'yes',
    primaryLanguage: 'english',
    address: '',
    country: 'canada',
    businessName: '',
    pricePerNight: '',
    description: '',

    // Step 2: 가옥 및 객실 환경 정보
    residenceType: 'house',
    roomCount: '1',
    roomFurniture: [] as string[],
    hasWindowAndDoor: false,
    hasFireSafety: false,
    bathroomType: 'private',

    // Step 3: 식사 제공 및 한국인 유학생 친화도
    mealType: 'full',
    mealPrep: 'host',
    koreanFoodSupport: 'daily',
    allergies: '',

    // Step 4: 가디언십 및 랜딩 지원 서비스 여부
    guardianSupport: 'no',
    koreanParentReport: false,
    landingServices: [] as string[],

    // Step 5: 국가별 법적 규제 준수 및 필수 서류
    // Canada
    caCrcAgree: false,
    caVscFile: '' as string,
    caSubletAgree: false,
    caManitobaFirstAid: false,
    caFirstAidFile: '' as string,
    // Australia
    auWwcAgree: false,
    auWwcNumber: '',
    auWwcName: '',
    auFireSafetyAgree: false,
    // New Zealand
    nzPastoralCodeAgree: false,
    nzPoliceVettingFile: '',
    nzAccommodationRestrictAgree: false,
    // UK
    ukDbsAgree: false,
    ukDbsFile: '',
    ukPrivateFosteringAgree: false,
    // US
    usSsnBackgroundAgree: false,
    usSsnNumber: '',
    usNsoprConsent: false,
    usCsietCompliance: false,
    // Other countries
    otherPoliceAgree: false,
    otherPoliceFile: '',
    otherVisaAgree: false,
    otherVisaFile: '',
    otherFireSafetyAgree: false,

    // Japan
    jpDbsAgree: false,
    jpMinpakuNumber: '',
    jpOwnerConsentAgree: false,
    // China
    cnTmpResidenceAgree: false,
    cnIdentityFile: '',
    // Germany
    deFührungszeugnisAgree: false,
    deFührungszeugnisFile: '',
    deFireSafetyAgree: false,

    // Singapore
    sgMinLeaseAgree: false,
    sgOccupancyCapAgree: false,
    sgHdbRegisterAgree: false,

    // France
    frCasierJudiciaireAgree: false,
    frCasierJudiciaireFile: '',
    frAttestationAgree: false,

    // Step 6: 호스트 최종 안전 서약 및 약관 동의
    escrowPaymentAgree: false,
    falseInfoPenaltyAgree: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: string }>({});
  const [photos, setPhotos] = useState<string[]>([
    'https://lh3.googleusercontent.com/aida-public/AB6AXuADbKyEttGkCNBgh6EQh1cDIkjSa6jRSDZkwGHEChO642wJt4ymzLQzHAfsjz9ttMscynuK01Zq8BR6PBEmCu4vOREqhn6oeZiFGy2h9Tlh88e35DJiPMMlEA0QItN5fcRsIvBVSATJVOobG7x1evKaCmhHt-ErGMmGSEADThRvXgaCcvvEMqCryH0AMwnvJEWj7mJHkZT67XwGzCEOMyMCY9kD3clCqdf0GbJ6FssekwM88H6jQKWv3aCehgcIJauR0vMkxsM8z-E'
  ]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFurnitureChange = (furniture: string) => {
    setFormData(prev => {
      const current = prev.roomFurniture;
      if (current.includes(furniture)) {
        return { ...prev, roomFurniture: current.filter(f => f !== furniture) };
      } else {
        return { ...prev, roomFurniture: [...current, furniture] };
      }
    });
  };

  const handleLandingChange = (service: string) => {
    setFormData(prev => {
      const current = prev.landingServices;
      if (current.includes(service)) {
        return { ...prev, landingServices: current.filter(s => s !== service) };
      } else {
        return { ...prev, landingServices: [...current, service] };
      }
    });
  };

  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileName = files[0].name;
      setUploadedFiles(prev => ({ ...prev, [field]: fileName }));
      setFormData(prev => ({ ...prev, [field]: fileName }));
    }
  };

  const handleAddPhoto = () => {
    const urls = [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDw6fzItNVwC5M0iL7RjAfrRd5JULR6AyTeIiJqURxmjkDax5Udj6tZPT0Eu9Ml5AQyHLeDEVPZ8mwm_yMvwYPJNHMjO4IN689IQBzoaIfNltSLpGoU-_JTaATTudPg8AR-xhGtOJGozMywWAolcp1sCjhJ8Kxa34-2Eu4edS__9qjFch7OOno5xMC38EpdGeiNXYF3jLwtBPEb8CdKvkzbVG7coSMMfiEcMAmeTRmxXJeUX1BtdjgTvxfF3sGVkhzKZaS8HE726ZY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD20JUXBtpk8MFI_k33n-KDdHu6ekyAjkx7kdG4utjw_Xdw13qUE5fWChIEAHVwQ7dGJtvi84NpJyMigV7m7C_p_J0DZ1TFMTkbz6kjf0bLHC3vEh0dV8MPhPEkhgqNFXwE3GbvsIXzKhOWE8sJo6wYtM1SY_aWF-bI-9Ki6T8-5aq_EP4gSndpWut1JngwKr0XMp4rQE2DW183YSvXhtLCi_YdDFWi8NmM0EcTsMsCcXoFvsLuVQWJ3eEZgNpZhB4O-tRwaNEewE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLbxGKVL0DX2Lkm02cR0aXgmu8B0Pm1Skxut_-7FZzxdiybb8E95J0sEgx0wgorcVraAIkTgpI2bFq0HwFVCYKu8KULvPgS2ZiTq2841GQ4w_O5flWB1Gl0SArEdfVXSezVmRZ62n2rT3Pw6B7GGgjuiysh6w89EjhJijW_SiEG7rpQtn82-t1ImonAagG4DGXZwt1wIGRORWkHBptYUJ31zu8F-Jfv5pKDMM47N6MHvkme-MsU68q203rgn5H96HOP8RwMJOUads'
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    setPhotos(prev => [...prev, randomUrl]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("축하합니다! 글로벌 안심 홈스테이 호스트 신청서가 성공적으로 저장 및 접수되었습니다. 담당자 서류 심사 후 3일 이내에 최종 승인 메일이 발송됩니다."));
    setCurrentStep(1);
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pt-24 min-h-screen">
      <section className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-headline-xl text-headline-xl mb-2">{t('글로벌 안심 홈스테이 파트너 대시보드')}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t('환영합니다, ')}{activeUser.email.split('@')[0]}{t('님! 입점 신청 정보 및 숙소를 관리하세요.')}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 rounded-full font-bold text-label-md bg-secondary text-on-secondary flex items-center gap-1 shadow-sm">
            {t('👑 Premium 무제한 케어 파트너 (전면 무료 제공)')}
          </span>
        </div>
      </section>

      {/* Step Progress Tracker */}
      <section className="bg-surface-container rounded-3xl p-6 mb-8 border border-outline-variant">
        <div className="flex justify-between items-center relative flex-wrap gap-y-4 md:flex-nowrap">
          {[
            { step: 1, label: t('기본 정보'), icon: 'person' },
            { step: 2, label: t('가옥 & 객실'), icon: 'home' },
            { step: 3, label: t('식사 & 친화도'), icon: 'restaurant' },
            { step: 4, label: t('지원 서비스'), icon: 'medical_services' },
            { step: 5, label: t('국가별 서류'), icon: 'gavel' },
            { step: 6, label: t('최종 서약'), icon: 'assignment_turned_in' }
          ].map((item) => (
            <div key={item.step} className="flex-1 flex flex-col items-center relative z-10 text-center min-w-[70px] md:min-w-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-label-md transition-all ${currentStep === item.step ? 'bg-primary text-on-primary scale-110 shadow-md' : currentStep > item.step ? 'bg-secondary text-on-secondary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                {currentStep > item.step ? <span className="material-symbols-outlined text-base">check</span> : item.step}
              </div>
              <span className={`text-label-sm font-label-sm mt-2 block ${currentStep === item.step ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{item.label}</span>
            </div>
          ))}
          <div className="absolute left-[8%] right-[8%] top-[20px] h-[2px] bg-outline-variant z-0 hidden md:block"></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} noValidate className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant flex flex-col gap-6">
            
            {/* Step 1: 호스트 기본 정보 */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">person</span>
                  {t('1단계: 호스트 기본 정보 (Host Profile)')}
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {t('호스트의 신원 및 연락처 정보를 수집하고, 미성년자 수용을 위한 연령 등 기본 자격을 검증합니다.')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('대표 호스트 성명 (여권상 영문 성명 필수) *')}</label>
                    <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" placeholder={t('예: GILDONG HONG')} />
                  </div>
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('호스트 생년월일 *')}</label>
                    <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" />
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 만 18세 이하 유학생 유치 시 만 25세 이상 요건 검증용')}</span>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('이메일 주소 *')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" />
                  </div>
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('연락처 *')}</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" placeholder={t('예: +1 123-456-7890 (국가코드 포함)')} />
                  </div>
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('가정 내 주 언어')}</label>
                    <select name="primaryLanguage" value={formData.primaryLanguage} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary">
                      <option value="english">{t('영어 (English)')}</option>
                      <option value="korean">{t('한국어 (Korean)')}</option>
                      <option value="spanish">{t('스페인어 (Spanish)')}</option>
                      <option value="japanese">{t('일본어 (Japanese)')}</option>
                      <option value="chinese">{t('중국어 (Chinese)')}</option>
                    </select>
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 영어권 국가(캐나다, 뉴질랜드 등)는 가정 내 영어 사용을 강력 권장합니다.')}</span>
                  </div>
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('홈스테이 등록 국가 *')}</label>
                    <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary">
                      <option value="canada">{t('🇨🇦 캐나다 (Canada)')}</option>
                      <option value="us">{t('🇺🇸 미국 (United States)')}</option>
                      <option value="uk">{t('🇬🇧 영국 (United Kingdom)')}</option>
                      <option value="australia">{t('🇦🇺 호주 (Australia)')}</option>
                      <option value="nz">{t('🇳🇿 뉴질랜드 (New Zealand)')}</option>
                      <option value="japan">{t('🇯🇵 일본 (Japan)')}</option>
                      <option value="china">{t('🇨🇳 중국 (China)')}</option>
                      <option value="germany">{t('🇩🇪 독일 (Germany)')}</option>
                      <option value="singapore">{t('🇸🇬 싱가포르 (Singapore)')}</option>
                      <option value="france">{t('🇫🇷 프랑스 (France)')}</option>
                      <option value="philippines">{t('🇵🇭 필리핀 (Philippines)')}</option>
                      <option value="malaysia">{t('🇲🇾 말레이시아 (Malaysia)')}</option>
                      <option value="taiwan">{t('🇹🇼 대만 (Taiwan)')}</option>
                      <option value="hk">{t('🇭🇰 홍콩 (Hong Kong)')}</option>
                      <option value="other">{t('🌐 기타 국가 (Other Countries)')}</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('상주 여부 확인 *')}</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="isResident" value="yes" checked={formData.isResident === 'yes'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('예 (호스트 본인이 이 주택에 상시 주 거주합니다)')}
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="isResident" value="no" checked={formData.isResident === 'no'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('아니오')}
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('상세 주소 *')}</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" placeholder={t('예: 123 Main St, Vancouver, BC, Canada')} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-label-md mb-2 text-on-surface">{t('숙소명/상호 (선택)')}</label>
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder={t('예: 밴쿠버 안심 에듀 홈스테이')} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: 가옥 및 객실 환경 정보 */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">home</span>
                  {t('2단계: 가옥 및 객실 환경 정보 (Home & Room Details)')}
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {t('학생이 머물 공간의 쾌적함과 소방 안전 상태를 검증합니다. (지하방, 창문 없는 방 등 유해 시설을 사전 필터링합니다)')}
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('주거 형태 *')}</label>
                    <select name="residenceType" value={formData.residenceType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest">
                      <option value="house">{t('🏡 단독주택 (House)')}</option>
                      <option value="townhouse">{t('🏠 타운하우스 (Townhouse)')}</option>
                      <option value="apartment">{t('🏢 아파트/콘도 (Apartment/Condo)')}</option>
                    </select>
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 뉴질랜드 등 일부 국가의 경우 마당의 캠핑카, 임시 간이 주택(Sleep-outs) 등록이 절대 불가합니다.')}</span>
                  </div>

                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('제공 가능한 유학생 객실 수 *')}</label>
                    <select name="roomCount" value={formData.roomCount} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest">
                      <option value="1">{t('1개')}</option>
                      <option value="2">{t('2개')}</option>
                      <option value="3">{t('3개 이상')}</option>
                    </select>
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 캐나다 등의 가이드라인은 한 가구당 최대 수용 인원을 2명으로 권장하고 있습니다.')}</span>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                    <label className="block text-label-md mb-3 text-on-surface font-bold">{t('객실 필수 가구 검증 (전체 선택 필수) *')}</label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {[
                        { id: 'bed', label: t('🛏️ 개인 침대') },
                        { id: 'closet', label: t('👗 옷장') },
                        { id: 'desk', label: t('✍️ 책상') },
                        { id: 'chair', label: t('🪑 의자') },
                        { id: 'lamp', label: t('💡 스탠드 조명') }
                      ].map((furniture) => (
                        <label key={furniture.id} className={`p-4 rounded-xl border cursor-pointer flex flex-col items-center justify-center gap-2 text-center transition-all ${formData.roomFurniture.includes(furniture.id) ? 'bg-primary-container text-on-primary-container border-primary font-bold' : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant'}`}>
                          <input type="checkbox" checked={formData.roomFurniture.includes(furniture.id)} onChange={() => handleFurnitureChange(furniture.id)} className="sr-only" />
                          <span>{furniture.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                      <input type="checkbox" name="hasWindowAndDoor" checked={formData.hasWindowAndDoor} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" id="hasWindowAndDoor" />
                      <label htmlFor="hasWindowAndDoor" className="text-body-md text-on-surface cursor-pointer">
                        <strong>{t('[필수] 창문 및 독립문 여부')}</strong>: {t('제공할 유학생 객실 내에 외부로 통하는 규격 창문이 있고, 완전히 닫을 수 있는 독립된 정식 문이 있음을 증명합니다. (지하방이나 창문이 없는 방은 법적으로 등록이 불가능합니다.)')}
                      </label>
                    </div>

                    <div className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                      <input type="checkbox" name="hasFireSafety" checked={formData.hasFireSafety} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" id="hasFireSafety" />
                      <label htmlFor="hasFireSafety" className="text-body-md text-on-surface cursor-pointer">
                        <strong>{t('[필수] 소방 안전 설비')}</strong>: {t('가옥 내에 정상 작동 가능한 연기 감지기(Smoke Detector) 및 초기 진화용 소화기가 규정된 장소에 비치되어 있습니다. (호주, 미국, 캐나다 등 현지 소방법 필수 기준 준수)')}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('욕실 사용 형태 *')}</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="bathroomType" value="private" checked={formData.bathroomType === 'private'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('유학생 개인 전용 욕실 (Private Bathroom)')}
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="bathroomType" value="shared" checked={formData.bathroomType === 'shared'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('호스트 가족 혹은 다른 학생과 공용')}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: 식사 제공 및 친화도 */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                  {t('3단계: 식사 제공 및 한국인 유학생 친화도 (Dietary & Cultural Match)')}
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {t('한국 유학생 조기 정착 플랫폼의 중요 요소입니다. 식습관으로 인한 문화 분쟁을 사전에 필터링합니다.')}
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('식사 제공 형태 *')}</label>
                    <div className="flex flex-col gap-3 mt-2">
                      <label className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="mealType" value="full" checked={formData.mealType === 'full'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        <span><strong>Full Board</strong> {t('(주 7일 아침, 점심, 저녁 3식 모두 제공)')}</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="mealType" value="half" checked={formData.mealType === 'half'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        <span><strong>Half Board</strong> {t('(평일 아침/저녁 2식, 주말 3식 제공)')}</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="mealType" value="none" checked={formData.mealType === 'none'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        <span><strong>Room Only</strong> {t('(식사 제공 없음, 학생이 주방 직접 조리/식재료 보관 지원)')}</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('식사 준비 방식 *')}</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="mealPrep" value="host" checked={formData.mealPrep === 'host'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('호스트가 직접 밥을 준비하여 제공')}
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="mealPrep" value="ingredients" checked={formData.mealPrep === 'ingredients'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        {t('호스트는 식재료만 제공하며 학생이 직접 조리 가능')}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('한식 조리 가능 여부 *')}</label>
                    <select name="koreanFoodSupport" value={formData.koreanFoodSupport} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest">
                      <option value="daily">{t('🍚 매일 한식 조리 가능 (한인 가정 등)')}</option>
                      <option value="weekly">{t('🍳 주 1~2회 한식 제공 가능 (한식 식재료 완비)')}</option>
                      <option value="asian">{t('🍜 한식은 불가능하나 아시안 푸드 이해도가 높음')}</option>
                      <option value="western">{t('🥩 로컬 양식 위주 제공 (서양식 식사)')}</option>
                    </select>
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 한국인 유학생들의 현지 적응과 향수병 예방을 위해 솔직하게 입력해 주세요.')}</span>
                  </div>

                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('키우는 반려동물 정보 및 알레르기 관리 *')}</label>
                    <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary" placeholder={t('예: 골든 리트리버 1마리 사육 중 / 반려동물 없음')} />
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 학생의 동물 털 알레르기 유무와 크로스매칭하기 위해 정확한 정보를 적어주세요.')}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: 가디언십 및 랜딩 지원 서비스 여부 */}
            {currentStep === 4 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
                  {t('4단계: 가디언십 및 랜딩 지원 서비스 여부 (Services)')}
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {t('부가가치가 높은 가디언십 대행이나 현지 초기 정착(랜딩) 서비스 동행 가능 여부를 파악합니다.')}
                </p>

                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-label-md mb-2 text-on-surface font-semibold">{t('미성년 가디언십(법정 보호자) 대행 가능 여부 *')}</label>
                    <div className="flex flex-col gap-3 mt-2">
                      <label className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="guardianSupport" value="yes" checked={formData.guardianSupport === 'yes'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        <span>{t('예, 만 18세 미만 미성년자의 현지 법정 대리인(Custodian/Guardian) 대행이 가능합니다.')}</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                        <input type="radio" name="guardianSupport" value="no" checked={formData.guardianSupport === 'no'} onChange={handleChange} className="accent-secondary w-5 h-5" />
                        <span>{t('아니오, 미성년 가디언십 대행은 불가능하며 성인 유학생만 받겠습니다.')}</span>
                      </label>
                    </div>
                    <span className="text-body-sm text-on-surface-variant block mt-1">{t('※ 호스트가 시민권자 또는 영주권자여야만 캐나다/호주 등 현지법상 합법적인 가디언 등록이 가능합니다.')}</span>
                  </div>

                  <div className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                    <input type="checkbox" name="koreanParentReport" checked={formData.koreanParentReport} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" id="koreanParentReport" />
                    <label htmlFor="koreanParentReport" className="text-body-md text-on-surface cursor-pointer">
                      <strong>{t('한국 학부모용 정기 생활 리포트 작성 동의')}</strong>{t(': 학생의 현지 적응, 학업 상황, 건강 관리에 대해 월 1회 한국에 계신 부모님께 전달될 에듀가드 플랫폼 정기 리포트 양식 작성을 적극 지원하겠습니다. (부모님 안심 킬러 서비스)')}
                    </label>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                    <label className="block text-label-md mb-3 text-on-surface font-bold">{t('초기 정착 (랜딩) 지원 가능 서비스 (중복 선택 가능)')}</label>
                    <div className="flex flex-col gap-3">
                      {[
                        { id: 'pickup', label: t('🚗 공항 안심 픽업 및 배웅 서비스 제공') },
                        { id: 'bank', label: t('🏦 현지 시중은행 동행 및 계좌 개설 조력') },
                        { id: 'telecom', label: t('📱 현지 모바일(유심) 개통 및 버스 카드 발급 지원') }
                      ].map((service) => (
                        <label key={service.id} className="flex items-center gap-3 cursor-pointer text-body-md text-on-surface">
                          <input type="checkbox" checked={formData.landingServices.includes(service.id)} onChange={() => handleLandingChange(service.id)} className="w-5 h-5 accent-secondary" />
                          <span>{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: 국가별 법적 규제 준수 및 필수 서류 (동적 분기) */}
            {currentStep === 5 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
                  {t('5단계: 국가별 법적 규제 준수 및 필수 서류')}
                </h2>
                <p className="text-body-md text-on-surface-variant font-semibold text-secondary flex items-center gap-1">
                  {t('🌐 국가 설정')}: {
                    formData.country === 'canada' ? t('🇨🇦 캐나다') : 
                    formData.country === 'us' ? t('🇺🇸 미국') : 
                    formData.country === 'uk' ? t('🇬🇧 영국') : 
                    formData.country === 'australia' ? t('🇦🇺 호주') : 
                    formData.country === 'nz' ? t('🇳🇿 뉴질랜드') : 
                    formData.country === 'japan' ? t('🇯🇵 일본') : 
                    formData.country === 'china' ? t('🇨🇳 중국') : 
                    formData.country === 'germany' ? t('🇩🇪 독일') : 
                    formData.country === 'singapore' ? t('🇸🇬 싱가포르') : 
                    formData.country === 'france' ? t('🇫🇷 프랑스') : 
                    formData.country === 'philippines' ? t('🇵🇭 필리핀') : 
                    formData.country === 'malaysia' ? t('🇲🇾 말레이시아') : 
                    formData.country === 'taiwan' ? t('🇹🇼 대만') : 
                    formData.country === 'hk' ? t('🇭🇰 홍콩') : t('🌐 기타 국가')
                  }{t('가 감지되어 관련 현지 법적 서류 인증 항목이 활성화되었습니다.')}
                </p>

                {/* 5-1. 캐나다 컴플라이언스 */}
                {formData.country === 'canada' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🛡️ 성인 거주자 신원 조회 동의 (CRC / Vulnerable Sector Check)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="caCrcAgree" checked={formData.caCrcAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('가옥 내에 동거하는 만 18세 이상(BC주 등 일부 주는 만 19세 이상)의 모든 성인 구성원의 **범죄경력조회(Criminal Record Check)** 및 **취약계층 안전 조회(Vulnerable Sector Check)** 서류를 제출하는 데 동의하며, 3년마다 갱신하겠습니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('Vulnerable Sector Check 결과지 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('caVscFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['caVscFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['caVscFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('📄 세무 및 전대차 권리 적격 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="caSubletAgree" checked={formData.caSubletAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('저는 해당 홈스테이 주택의 소유주이거나, 임차인(세입자)인 경우 유학생 유치 및 전대(Sublet) 행위에 대해 주택 소유주(임대인)의 서면 서명 동의를 사전에 완료하였음을 서약합니다.')}
                        </span>
                      </label>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🎒 마니토바주 지역 특별 조건 (해당 주 입점자 한정)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="caManitobaFirstAid" checked={formData.caManitobaFirstAid} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('마니토바주 교육부 규정에 부합하는 유효한 응급처치 자격증(First Aid Certificate)을 보유하고 있습니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('First Aid Certificate 사본 업로드 (선택)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('caFirstAidFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['caFirstAidFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['caFirstAidFile']}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5-2. 호주 컴플라이언스 */}
                {formData.country === 'australia' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('👶 아동 보호 구역 WWCC 안전 인증 (Working with Children Check)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="auWwcAgree" checked={formData.auWwcAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('가옥 내에 동거하는 만 18세 이상의 모든 가족 구성원은 주 정부가 발행한 아동 대상 안전 근무 자격인 **Working with Children Check (WWCC)**를 정상적으로 이수하여 유효한 카드를 보유하고 있음을 서약합니다.')}
                        </span>
                      </label>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <label className="block text-body-sm font-bold text-on-surface-variant mb-1">{t('WWCC 일련번호 (Card/App Number) *')}</label>
                          <input type="text" name="auWwcNumber" value={formData.auWwcNumber} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-outline bg-surface-container-lowest" placeholder="WWC1234567E" />
                        </div>
                        <div>
                          <label className="block text-body-sm font-bold text-on-surface-variant mb-1">{t('WWC 등록 영문 실명 *')}</label>
                          <input type="text" name="auWwcName" value={formData.auWwcName} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-outline bg-surface-container-lowest" placeholder="GILDONG HONG" />
                        </div>
                      </div>
                      <span className="text-body-sm text-on-surface-variant block">{t('※ 주 정부 WWC 검증 시스템과 API로 연동되어 정상 자격 여부가 체크됩니다.')}</span>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🔥 호주 연방 소방안전 규정 준수 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="auFireSafetyAgree" checked={formData.auFireSafetyAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('호주 연방/주 정부 및 지방의회(Council) 규정에 맞춰 침실 및 복도에 연기 감지기(Smoke Detector)를 의무적으로 작동 상태로 유지하고 매월 자체 점검을 실시할 것임을 서약합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-3. 뉴질랜드 컴플라이언스 */}
                {formData.country === 'nz' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🇳🇿 교육 복지 강령 준수 (Pastoral Care Code 2021)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="nzPastoralCodeAgree" checked={formData.nzPastoralCodeAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('뉴질랜드 정부의 유학생 안전 관리 지침인 **Education (Pastoral Care of Tertiary and International Learners) Code of Practice 2021** 규정을 준수하며, 가옥 내 만 18세 이상의 모든 거주인에 대한 NZ Police Vetting(경찰 신원 조회) 진행 및 3년 주기 갱신에 전적으로 동의합니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('뉴질랜드 경찰 신원 조회 동의서 및 신분증 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('nzPoliceVettingFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['nzPoliceVettingFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['nzPoliceVettingFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🏕️ 교육청 비규격 숙소 제한 준수 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="nzAccommodationRestrictAgree" checked={formData.nzAccommodationRestrictAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('뉴질랜드 교육부 규정에 맞춰, 유학생을 마당에 별도 건축된 임시 간이 컨테이너 주택(Sleep-outs)이나 카라반(Caravans)에 숙박시키지 않고, 오직 본 가옥 내부의 독립된 침실에만 배정할 것을 엄숙히 서약합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-4. 영국 컴플라이언스 */}
                {formData.country === 'uk' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('💂 영국 범죄 이력 조회 (Enhanced DBS)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="ukDbsAgree" checked={formData.ukDbsAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('가구 내 만 16세 이상의 모든 구성원은 범죄 이력 체크를 위해 영국 정부가 승인한 **Enhanced DBS**를 보유하고 있음을 보증하며 관련 인증 서류를 제출하는 데 동의합니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('Enhanced DBS 인증서 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('ukDbsFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['ukDbsFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['ukDbsFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🏡 사설 위탁 보호 의무 신고 규정 동의 (Private Fostering)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="ukPrivateFosteringAgree" checked={formData.ukPrivateFosteringAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('영국 현지법(Children Act 1989)에 의거하여, 만 16세 미만의 미성년자가 부모 동반 없이 일반 가정에 **28일 이상 체류**하는 경우, 관할 지자체(Children\'s Social Care)에 매칭 시작 최소 6주 전에 사설 포스터링(Private Fostering) 신고서를 제출해야 할 의무가 호스트 및 플랫폼에 있음을 인지하고 이에 적극 협조 및 동의합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-5. 미국 컴플라이언스 */}
                {formData.country === 'us' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🦅 성범죄 및 배경 조회 자동 연동 동의 (SSN / NSOPR)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="usSsnBackgroundAgree" checked={formData.usSsnBackgroundAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('미국 국무부(Department of State) 및 CSIET 홈스테이 지침에 의거하여, 가구 내 만 18세 이상의 모든 구성원에 대해 사회보장번호(SSN)를 기반으로 한 미국 전역 범죄 경력 조회 및 미국 법무부(DOJ)의 **전국 성범죄자 공개 등록부(NSOPR)**의 자동 정보 조회 및 수집에 전적으로 동의합니다.')}
                        </span>
                      </label>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <label className="block text-body-sm font-bold text-on-surface-variant mb-1">{t('사회보장번호 (SSN) *')}</label>
                          <input type="password" name="usSsnNumber" value={formData.usSsnNumber} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-outline bg-surface-container-lowest" placeholder="***-**-****" />
                        </div>
                        <div className="flex items-end">
                          <label className="flex items-center gap-2 cursor-pointer text-body-sm font-semibold text-on-surface mb-2">
                            <input type="checkbox" name="usNsoprConsent" checked={formData.usNsoprConsent} onChange={handleChange} className="w-5 h-5 accent-secondary" />
                            {t('신원 정보 검증 위탁 서명 동의')}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('📸 유학생 초상권 보호 및 홍보 규제 동의 (CSIET 표준)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="usCsietCompliance" checked={formData.usCsietCompliance} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('매칭 및 광고 노출 과정에서 유학생의 동의 없이 학생의 실제 얼굴 사진을 외부에 공개 게시하지 않으며, 학생의 운동 능력이나 신체 조건을 상업적으로 홍보 및 광고 목적으로 악용하지 않는 미 국무부 법령 가이드라인을 엄격하게 준수할 것을 동의합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-6. 일본 컴플라이언스 */}
                {formData.country === 'japan' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('👶 아동 안전 신원조회 동의 (일본판 DBS 제도 도입 서약)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="jpDbsAgree" checked={formData.jpDbsAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('일본 아동가정청의 **일본판 DBS(日本版DBS)** 가이드라인 취지에 맞춰, 가옥 내 거주하는 만 18세 이상의 모든 구성원은 아동 학대 및 성범죄 이력이 없음을 보증하며, 향후 정부 인증 서류 제출 요청 시 이에 전적으로 협조할 것에 서약합니다.')}
                        </span>
                      </label>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🏡 주택숙박사업법(민박법) 및 지자체 조례 준수')}</h4>
                      <div className="flex flex-col gap-3">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" name="jpOwnerConsentAgree" checked={formData.jpOwnerConsentAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                          <span className="text-body-md text-on-surface">
                            {t('자가 주택이 아닌 임대 주택 또는 맨션의 경우, 관리조합 규약(HOA) 및 집주인의 홈스테이 유치(전대차 행위) 서면 동의를 완료하였음을 증명합니다.')}
                          </span>
                        </label>
                        <div className="mt-2">
                          <label className="block text-body-sm font-bold text-on-surface-variant mb-1">{t('주택숙박사업(민박) 신고번호 (선택 - 180일 영업 제한 대상 여부 확인용)')}</label>
                          <input type="text" name="jpMinpakuNumber" value={formData.jpMinpakuNumber} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-outline bg-surface-container-lowest" placeholder={t('예: 제 M130000000 호')} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5-7. 중국 컴플라이언스 */}
                {formData.country === 'china' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🇨🇳 외국인 임시 주거 등록 동의 (입국 후 24시간 내 의무 신고)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="cnTmpResidenceAgree" checked={formData.cnTmpResidenceAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('중국 출입국관리법 제39조에 의거하여, 유학생이 숙소에 도착한 후 **24시간 이내**에 관할 파출소(派出所) 방문 또는 온라인 플랫폼을 통해 **외국인 임시 주거 등록(外国人临时住宿登记表)**을 차질 없이 마칠 수 있도록 임대 계약서 등 관련 거주 증명 서류 제공 및 행정 신고에 적극 협조하겠습니다.')}
                        </span>
                      </label>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🪪 대표 호스트 신분증 및 소유권 증빙 제출')}</h4>
                      <p className="text-body-sm text-on-surface-variant">{t('공안국 등록 지원을 위해 파출소 제출용 대표 호스트 신분 증빙 파일을 첨부합니다.')}</p>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('중국 신분증(身份证) 또는 거주 증빙 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('cnIdentityFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['cnIdentityFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['cnIdentityFile']}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5-8. 독일 컴플라이언스 */}
                {formData.country === 'germany' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🇩🇪 독일 아동보호법 범죄 이력 조회 동의 (Erweitertes Führungszeugnis)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="deFührungszeugnisAgree" checked={formData.deFührungszeugnisAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('독일 연방아동보호법(Bundeskinderschutzgesetz) 및 연방중앙등록법(BZRG) 제30a조에 따라, 가옥 내 동거하는 만 18세 이상의 모든 거주인은 아동 보호 안전 검증을 위한 **확장 범죄경력증명서(Erweitertes Führungszeugnis)** 사본 제출에 동의하며, 플랫폼 요청 시 갱신된 서류를 제공하겠습니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('Erweitertes Führungszeugnis 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('deFührungszeugnisFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['deFührungszeugnisFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['deFührungszeugnisFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🔥 독일 연방 주택 소방안전 규정 준수 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="deFireSafetyAgree" checked={formData.deFireSafetyAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('독일 각 연방주 소방 법령에 규정된 유학생 거주 침실 내 연기 감지기(Rauchwarnmelder)의 의무 설치 및 비상구 경로 확보, 작동 상태 정기 점검을 실시할 것임을 동의하고 서약합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-9. 싱가포르 컴플라이언스 */}
                {formData.country === 'singapore' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🇸🇬 최소 임대 기간 준수 서약 (HDB / URA 규정)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="sgMinLeaseAgree" checked={formData.sgMinLeaseAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('싱가포르 주택개발청(HDB) 규정에 따라 공공주택(HDB Flats)은 **최소 6개월 이상**, 민간 주택(Private Properties)은 도시개발청(URA) 규정에 따라 **최소 3개월 이상** 유학생 계약 기간을 의무 준수할 것을 동의하고 서약합니다. (단기 주간/일일 렌탈 금지)')}
                        </span>
                      </label>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('👥 가구당 무관련 동거인 수 제한 (Occupancy Cap)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="sgOccupancyCapAgree" checked={formData.sgOccupancyCapAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('싱가포르 현지 법률에 따라 가옥 내에 거주하는 무관련 인원(호스트 가족 외 유학생 및 기타 세입자 포함)의 총합이 **최대 6인**을 초과하지 않음을 서약합니다.')}
                        </span>
                      </label>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🪪 유학생 거주 등록 및 신분 확인 동의')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="sgHdbRegisterAgree" checked={formData.sgHdbRegisterAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('유학생 유치 시 학생의 Student Pass(학생 비자)가 유효한지 상시 검증하며, 입주 후 **7일 이내**에 HDB 또는 URA 포털에 거주자 등록을 완료할 것에 전적으로 동의합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-10. 프랑스 컴플라이언스 */}
                {formData.country === 'france' && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🛡️ 프랑스 사법경찰 범죄경력조회 동의 (Bulletin N°3)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="frCasierJudiciaireAgree" checked={formData.frCasierJudiciaireAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('프랑스 아동 안전 및 보호 법률의 일환으로, 가옥 내 동거하는 만 18세 이상의 모든 구성원의 프랑스 법무부 발행 **사법경찰 범죄경력증명서(Casier Judiciaire Bulletin N°3)** 사본을 제출하는 데 동의합니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('Bulletin N°3 결과지 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('frCasierJudiciaireFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['frCasierJudiciaireFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['frCasierJudiciaireFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('📄 영접 증명 서약 (Attestation d\'Accueil)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="frAttestationAgree" checked={formData.frAttestationAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('프랑스 출입국 규정에 따라 부모를 동반하지 않은 비EU 국가 미성년/성인 유학생 유치 시 관할 시장(Mairie) 또는 지방정부(Prefecture)에 **Attestation d\'Accueil(영접 증명서)** 신청/인증 절차를 진행 및 협조할 것을 동의하고 서약합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* 5-11. 기타 및 아시아 국가 컴플라이언스 */}
                {['canada', 'us', 'uk', 'australia', 'nz', 'japan', 'china', 'germany', 'singapore', 'france'].indexOf(formData.country) === -1 && (
                  <div className="flex flex-col gap-6">
                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🛡️ 현지 경찰 범죄경력조회서 (Police Clearance Certificate)')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="otherPoliceAgree" checked={formData.otherPoliceAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('가옥 내에 거주하는 모든 성인 구성원의 현지 정부 발행 **범죄경력조회서(Police Clearance / Criminal Record)** 사본을 제출하는 데 동의하며, 플랫폼 요청 시 원본을 제시할 것을 서약합니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4 mt-2">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('범죄경력조회서 파일 업로드 (PDF / JPG)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('otherPoliceFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['otherPoliceFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['otherPoliceFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
                      <h4 className="text-title-md font-bold text-on-surface">{t('🪪 합법적 체류 신분 및 비자 증명 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="otherVisaAgree" checked={formData.otherVisaAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('저는 해당 국가에서 유학생을 합법적으로 유치할 수 있는 시민권, 영주권 또는 정식 거주/유학생 유치 가능 비자를 소유하고 있음을 서약합니다.')}
                        </span>
                      </label>
                      <div className="border border-dashed border-outline rounded-xl p-4">
                        <label className="block text-body-sm font-bold text-on-surface-variant mb-2">{t('체류 증명 신분증/비자 사본 업로드 (선택)')}</label>
                        <input type="file" onChange={(e) => handleFileChange('otherVisaFile', e)} className="text-body-sm text-on-surface-variant" />
                        {uploadedFiles['otherVisaFile'] && (
                          <p className="text-body-sm text-secondary font-semibold mt-2">{t('✓ 업로드됨')}: {uploadedFiles['otherVisaFile']}</p>
                        )}
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                      <h4 className="text-title-md font-bold text-on-surface mb-3">{t('🔥 주택 소방 안전 규정 준수 서약')}</h4>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="otherFireSafetyAgree" checked={formData.otherFireSafetyAgree} onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                        <span className="text-body-md text-on-surface">
                          {t('현지 지자체 소방 안전 규정에 부합하는 연기 감지기 및 화재 진화 장비를 구비하고 있으며, 학생들에게 화재 발생 시 비상 대피 경로를 안내할 것을 동의하고 서약합니다.')}
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 6: 호스트 최종 안전 서약 및 약관 동의 */}
            {currentStep === 6 && (
              <div className="flex flex-col gap-6">
                <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">assignment_turned_in</span>
                  {t('6단계: 호스트 최종 안전 서약 및 약관 동의')}
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  {t('최종 가입 완료 및 매칭 대금 정산을 위한 플랫폼 규칙에 서약합니다.')}
                </p>

                <div className="flex flex-col gap-6">
                  <div className="bg-surface-container-low p-6 rounded-2xl border-primary/30 border-2">
                    <h4 className="text-title-md font-bold text-primary flex items-center gap-1.5 mb-2">
                      <span className="material-symbols-outlined text-lg">monetization_on</span>
                      {t('[필수 동의] 안심 결제 에스크로(Escrow) 정산 프로토콜 동의 *')}
                    </h4>
                    <label className="flex items-start gap-3 cursor-pointer mt-3">
                      <input type="checkbox" name="escrowPaymentAgree" checked={formData.escrowPaymentAgree} onChange={handleChange} required className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                      <span className="text-body-md text-on-surface">
                        {t('본 플랫폼은 유학생 보증금 사기 및 입국 불허 분쟁을 근절하기 위해 **안심 에스크로 정산 시스템**을 적용하고 있습니다. 게스트가 결제한 전체 숙박금은 에듀가드 안전 계좌에 보관되며, **유학생이 현지에 무사히 입국 및 체크인하여 객실 상태를 확인하고 웰컴 서명을 한 직후에 호스트 계좌로 대금이 지급**되는 플랫폼 정산 원칙을 완전히 이해하고 이에 전적으로 동의합니다.')}
                      </span>
                    </label>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-2xl border-primary/30 border-2">
                    <h4 className="text-title-md font-bold text-primary flex items-center gap-1.5 mb-2">
                      <span className="material-symbols-outlined text-lg">report_problem</span>
                      {t('[필수 동의] 허위 정보 기재 시 페널티 및 퇴출 조항 동의 *')}
                    </h4>
                    <label className="flex items-start gap-3 cursor-pointer mt-3">
                      <input type="checkbox" name="falseInfoPenaltyAgree" checked={formData.falseInfoPenaltyAgree} required onChange={handleChange} className="w-5 h-5 accent-secondary mt-1 shrink-0" />
                      <span className="text-body-md text-on-surface">
                        {t('본 가입 신청서에 기재한 주택 환경, 신원 증명 서류, 범죄 조회 및 소방 시설 관련 정보 중 허위 사실이 발견되거나 숨겨진 사실이 판명되는 경우 즉각적인 입점 취소 및 강제 퇴출 조치가 취해지며, 이에 따른 학생 재배치 비용 및 위약금 등의 법적 귀책 사유가 호스트 본인에게 있음을 동의하고 보증합니다.')}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center border-t border-outline-variant pt-6 mt-4">
              {currentStep > 1 ? (
                <button type="button" onClick={handleBack} className="px-6 py-3 rounded-full border border-outline text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">arrow_back</span> {t('이전')}
                </button>
              ) : (
                <div />
              )}

              {currentStep < 6 ? (
                <button type="button" onClick={handleNext} className="px-8 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-1.5 ml-auto">
                  {t('다음')} <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              ) : (
                <button type="submit" className="px-8 py-3 rounded-full bg-secondary text-on-secondary font-bold text-label-lg hover:brightness-110 shadow-lg transition-all ml-auto flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">done</span> {t('신청서 최종 제출하기')}
                </button>
              )}
            </div>

          </form>
        </div>

        {/* Sidebar: Photo and Helper info */}
        <div className="space-y-8">
          
          {/* Photo Management Widget */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant">
            <h3 className="font-headline-sm font-bold mb-4 flex items-center gap-2">
              <Camera className="text-secondary" />
              {t('홈스테이 실사진 관리')}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant relative overflow-hidden group shadow-sm">
                  <img src={photo} className="w-full h-full object-cover" alt={`${t('숙소 사진')} ${index + 1}`} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button type="button" onClick={() => setPhotos(prev => prev.filter((_, i) => i !== index))} className="bg-primary text-on-primary p-2 rounded-full text-xs hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </div>
              ))}
              <div onClick={handleAddPhoto} className="aspect-square border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low text-on-surface-variant font-bold transition-all text-display-sm">
                <span>+</span>
              </div>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              ✅ <strong>{t('Premium 파트너 혜택 무상 적용')}</strong>: {t('유학생 및 학부모 매칭 확률 극대화를 위해 **사진 및 동영상을 무제한 업로드**하실 수 있습니다! (모두 무료)')}
            </p>
          </div>

          {/* Platform Guide Widget */}
          <div className="bg-surface-container-high rounded-3xl p-8 shadow-sm border border-outline-variant flex flex-col gap-4">
            <h3 className="font-headline-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-2xl font-bold">translate</span>
              {t('실무 안내 (안심 매칭 가이드)')}
            </h3>
            <ul className="space-y-4 text-body-md text-on-surface-variant">
              <li className="flex gap-2">
                <span className="text-primary font-bold">1.</span>
                <span><strong>{t('다국어 자동 번역 모듈 탑재')}</strong>: {t('입력하신 호스트 정보는 한국 유학생 학부모용 전용 대시보드에 **깔끔한 한글 번역본**으로 자동 제공되어 의사소통 분쟁을 원천 해결합니다.')}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">2.</span>
                <span><strong>{t('학교 거리 자동 매핑')}</strong>: {t('기재하신 주소 정보를 바탕으로 현지 구글 맵 API와 연동되어 인근 중고등학교/대학교까지의 버스/도보 통학 시간이 학생 화면에 실시간으로 표시됩니다.')}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">3.</span>
                <span><strong>{t('실제 현장 안전 실사')}</strong>: {t('서류 제출 완료 후, 현지 EduGuard 가디언 팀이 직접 가옥을 방문하여 소방 설비 및 쾌적도 상태를 2차로 확인하고 최종 안심 등급을 수여합니다.')}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Dashboard;
