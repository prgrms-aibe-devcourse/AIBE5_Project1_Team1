import { Calendar, FileText, X } from "lucide-react";
import { useEffect, useState } from "react";
import { rawPlans } from "../data/plans";

interface Plan {
  id: number;
  title: string;
  date: string;
  type: string;
  image?: string;
  images?: string[];
  itinerary: { day: string; schedule: string }[];
}

import { findItineraryValueByKey, makeReviewItinerary } from "../data/commonFunction";
import { destinations } from "../data/destinations";
import { restaurants } from "../data/restaurants";
import { accommodations } from "../data/accommodations";
  const allDestinations = [
    ...destinations,
    ...restaurants,
    ...accommodations
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

        <div className="flex-1 overflow-y-auto overscroll-none p-6 space-y-4">
          {rawPlans.filter(p => !p.hasReview && p.key !== "survey").map((plan) => (
            <div key={plan.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    {plan.travelType && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                        #{plan.travelType}
                      </span>
                    )}
                    {true && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        여행완료
                      </span>
                    )}
                    <button
                      onClick={() => onSelect(plan)}
                      className="flex ml-auto items-center text-sm gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md"
                    >
                      계획 불러오기
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{plan.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Images Preview */}
              <div className="flex items-center gap-3 mb-6">
                {plan.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-28 h-21 rounded-xl overflow-hidden border border-gray-200"
                  >
                    <img
                      src={img}
                      alt={`장소 ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {plan.totalPlaces > 3 && (
                  <div className="w-28 h-21 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">
                      +{plan.totalPlaces - 3}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}