import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Camera, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  const { user, upgradeToPremium } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    country: 'canada',
    businessName: '',
    ownerName: '',
    phone: '',
    address: '',
    pricePerNight: '',
    description: '',
    licenseNumber: '',
    insuranceDocs: null as File | null,
    policeCheck: false
  });

  if (!user) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("정보가 성공적으로 저장되었습니다!");
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pt-24 min-h-screen">
      <section className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="font-headline-xl text-headline-xl mb-2">파트너 대시보드</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">환영합니다, {user.email.split('@')[0]}님! 업체 정보를 관리하세요.</p>
        </div>
        <div>
          <span className={`px-4 py-2 rounded-full font-bold text-label-md ${user.membershipTier === 'premium' ? 'bg-secondary text-on-secondary' : 'bg-surface-container-high text-on-surface-variant'}`}>
            {user.membershipTier === 'premium' ? '👑 Premium 파트너' : 'Free 파트너'}
          </span>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4">기본 정보 및 서비스</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-label-md mb-2 text-on-surface">국가</label>
                <select name="country" value={formData.country} onChange={handleChange as any} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-secondary">
                  <option value="canada">🇨🇦 캐나다</option>
                  <option value="us">🇺🇸 미국</option>
                  <option value="uk">🇬🇧 영국</option>
                  <option value="australia">🇦🇺 호주</option>
                  <option value="nz">🇳🇿 뉴질랜드</option>
                  <option value="philippines">🇵🇭 필리핀</option>
                  <option value="malaysia">🇲🇾 말레이시아</option>
                  <option value="taiwan">🇹🇼 대만</option>
                  <option value="hk">🇭🇰 홍콩</option>
                </select>
              </div>
              <div>
                <label className="block text-label-md mb-2 text-on-surface">업체명 (상호)</label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="예: 밴쿠버 행복 홈스테이" />
              </div>
              <div>
                <label className="block text-label-md mb-2 text-on-surface">운영자 이름</label>
                <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-label-md mb-2 text-on-surface">연락처</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="+1 123-456-7890" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-label-md mb-2 text-on-surface">1박당 요금 (KRW/USD)</label>
                <input type="text" name="pricePerNight" value={formData.pricePerNight} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="예: 100,000원" />
              </div>
            </div>

            <div>
              <label className="block text-label-md mb-2 text-on-surface">상세 주소 (위치)</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="123 Main St, Vancouver, BC" />
            </div>

            <div>
              <label className="block text-label-md mb-2 text-on-surface">서비스 소개</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="우리 홈스테이만의 장점을 자유롭게 적어주세요."></textarea>
            </div>

            <h2 className="text-headline-md font-bold text-on-surface border-b border-outline-variant pb-4 mt-8 flex items-center gap-2">
              <ShieldCheck className="text-secondary" /> 컴플라이언스 및 인증 (필수/선택)
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-label-md mb-2 text-on-surface">정부 승인/라이선스 번호</label>
                <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest" placeholder="Business License Number" />
              </div>
              
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                <label className="block text-label-md mb-2 text-on-surface font-bold">주택/상해 보험 증권 사본 업로드</label>
                <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-highest transition">
                  <FileText className="text-on-surface-variant mb-2" size={32} />
                  <p className="text-body-md text-on-surface-variant">클릭하여 파일 업로드 (PDF, JPG)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
                <input type="checkbox" name="policeCheck" checked={formData.policeCheck} onChange={handleChange} className="w-5 h-5 accent-secondary" id="policeCheck" />
                <label htmlFor="policeCheck" className="text-body-md text-on-surface cursor-pointer">
                  범죄 이력 조회서(Police Check)를 보유하고 있으며, 고객 요청 시 제시할 수 있습니다.
                </label>
              </div>
            </div>

            <button type="submit" className="mt-8 w-full bg-primary text-on-primary py-4 rounded-full font-label-lg hover:opacity-90 transition-opacity">
              정보 저장하기
            </button>
          </form>
        </div>

        <div className="space-y-8">
          {/* Photo Upload Widget */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
            <h3 className="font-headline-sm font-bold mb-4 flex items-center gap-2"><Camera /> 사진 관리</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="aspect-square bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADbKyEttGkCNBgh6EQh1cDIkjSa6jRSDZkwGHEChO642wJt4ymzLQzHAfsjz9ttMscynuK01Zq8BR6PBEmCu4vOREqhn6oeZiFGy2h9Tlh88e35DJiPMMlEA0QItN5fcRsIvBVSATJVOobG7x1evKaCmhHt-ErGMmGSEADThRvXgaCcvvEMqCryH0AMwnvJEWj7mJHkZT67XwGzCEOMyMCY9kD3clCqdf0GbJ6FssekwM88H6jQKWv3aCehgcIJauR0vMkxsM8z-E" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low">
                <span className="text-display-sm text-on-surface-variant">+</span>
              </div>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              {user.membershipTier === 'free' ? '무료 요금제는 최대 3장까지 등록 가능합니다.' : 'Premium 파트너: 무제한 등록 가능!'}
            </p>
          </div>

          {/* Membership Widget */}
          <div className="bg-surface-container-highest rounded-3xl p-8 shadow-sm border border-secondary-container">
            <h3 className="font-headline-sm font-bold mb-4">내 멤버십 관리</h3>
            {user.membershipTier === 'free' ? (
              <>
                <p className="text-body-md mb-6">현재 <strong className="text-on-surface">무료 요금제</strong>를 사용 중입니다. 더 많은 예약과 노출을 원하시나요?</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-body-sm"><CheckCircle2 size={16} className="text-secondary" /> 최상단 고정 노출</li>
                  <li className="flex gap-2 text-body-sm"><CheckCircle2 size={16} className="text-secondary" /> 안심 마크 뱃지</li>
                  <li className="flex gap-2 text-body-sm"><CheckCircle2 size={16} className="text-secondary" /> 다이렉트 연락처 오픈</li>
                </ul>
                <button onClick={() => navigate('/pricing')} className="w-full bg-secondary text-on-secondary py-3 rounded-full font-label-md hover:bg-secondary-container hover:text-on-secondary-container transition">
                  프리미엄 요금제 알아보기
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
                  <p className="font-bold text-headline-sm text-secondary">Premium 이용 중</p>
                </div>
                <p className="text-body-md mb-4 text-on-surface-variant">모든 프리미엄 혜택이 적용되고 있습니다. 결제일: 2026.05.25</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
