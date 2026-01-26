import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Plan {
  id: number;
  title: string;
  date: string;
  type: string;
  itinerary: { day: string; schedule: string }[];
}

const dummyPlans: Plan[] = [
  {
    id: 1,
    title: "제주 힐링 2박 3일",
    date: "2026.01.10 - 2026.01.12",
    type: "힐링형",
    itinerary: [
      { day: "1일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
      { day: "2일차", schedule: "성산일출봉 → 섭지코지 → 해산물 맛집 → 숙소" },
      { day: "3일차", schedule: "공항" }
    ]
  },
  {
    id: 2,
    title: "우도 액티비티 투어",
    date: "2026.01.15 - 2026.01.16",
    type: "액티비티형",
    itinerary: [
      { day: "1일차", schedule: "성산항 → 우도 입도 → 전기차 투어" },
      { day: "2일차", schedule: "서빈백사 → 성산일출봉 → 복귀" }
    ]
  },
  
];

export default function PlanSelectModal({ isOpen, onClose, onSelect }: any) {
  // 모달 내부에서만 사용하는 임시 선택 상태가 있다면
  const [tempSelectedId, setTempSelectedId] = useState<number | null>(null);

  // [추가] 모달이 열릴 때마다 내부 상태 초기화
  useEffect(() => {
    if (isOpen) {
      setTempSelectedId(null); 
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
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
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 text-xs font-bold">
                    {i === 3 ? "+ 8" : "이미지"}
                  </div>
                ))}
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