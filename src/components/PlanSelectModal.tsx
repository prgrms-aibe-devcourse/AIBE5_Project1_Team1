import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Plan {
  id: number;
  title: string;
  date: string;
  type: string;
  image?: string;
  images?: string[];
  itinerary: { day: string; schedule: string }[];
}

const dummyPlans: Plan[] = [
  {
    id: 1,
    title: "제주 힐링 2박 3일",
    date: "2026.01.10 - 2026.01.12",
    type: "힐링",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg",
      "../src/images/img2.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img6.jpg", 
      "../src/images/img8.jpg", 
      "../src/images/img6.jpg"  
    ],
    itinerary: [
      { day: "1일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
      { day: "2일차", schedule: "성산일출봉 → 섭지코지 → 해산물 맛집 → 숙소" },
      { day: "3일차", schedule: "공항" }
    ]
  },
  {
    id: 2,
    title: "우도 액티비티 투어",
    date: "2026.01.01 - 2026.01.05",
    type: "액티비티",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg",
      "../src/images/img_plc3.jpg", 
      "../src/images/img_plc4.jpg", 
      "../src/images/img_plc2.jpg"  
    ],
    itinerary: [
      { day: "1일차", schedule: "성산항 → 우도 입도 → 전기차 투어" },
      { day: "2일차", schedule: "서빈백사 → 성산일출봉 → 복귀" }
    ]
  },
  {
    id: 3,
    title: "제주도 힐링 투어",
    date: "2025.11.15 - 2025.11.20",
    type: "힐링",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg", 
      "../src/images/img6.jpg"  
    ],
    itinerary: [
      { day: "1일차", schedule: "공항 → 서귀포 숙소 → 주상절리 → 천제연 폭포" },
      { day: "2일차", schedule: "카멜리아 힐 → 오설록 티 뮤지엄 → 갈치조림 맛집" },
      { day: "3일차", schedule: "정방폭포 → 올레시장 → 호텔 휴식" },
    ]
  },
  
];

export default function PlanSelectModal({ isOpen, onClose, onSelect }: any) {
  // 모달 내부에서만 사용하는 임시 선택 상태가 있다면
  const [tempSelectedId, setTempSelectedId] = useState<number | null>(null);

  // 모달이 열릴 때마다 내부 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setTempSelectedId(null); 
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
      >
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-2xl font-black text-gray-900">내 플랜</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {dummyPlans.map((plan) => (
            <div key={plan.id} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.date}</p>
                </div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">여행완료</span>
              </div>
              
              <div className="flex gap-2">
                {/* 실제 데이터(plan.images)가 있을 때만 실행 */}
                {plan.images && plan.images.length > 0 ? (
                  plan.images.slice(0, 3).map((img, idx) => {
                    const isThirdSlot = idx === 2; // 세 번째 칸인지 확인
                    const hasMoreThanThree = plan.images!.length > 3; // 3장을 초과하는지 확인

                    return (
                      <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border border-gray-50">
                        {/* 이미지 표시: 3번째 칸이면서 더 많은 사진이 있다면 흐릿하게 처리 */}
                        <img 
                          src={img} 
                          alt="여행 사진" 
                          className={`w-full h-full object-cover ${
                            isThirdSlot && hasMoreThanThree ? 'blur-[1.5px] brightness-75' : ''
                          }`} 
                        />
                        
                        {/* 3번째 칸에만 남은 사진 개수(+N) 표시 */}
                        {isThirdSlot && hasMoreThanThree && (
                          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                            {/* + 숫자 표시 */}
                            <span className="text-white font-bold text-base leading-tight">
                              + {plan.images!.length - 2}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  /* 이미지가 없는 경우 (기존 회색 박스 유지) */
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 text-xs font-bold">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => onSelect(plan)}
                  className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors"
                >
                  계획 불러오기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}