import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Calendar, Plus, Save, X, Trash2, GripVertical, Search, ChevronDown } from "lucide-react";
import { useDrag, useDrop } from "react-dnd";
import AddDestinationModal from "../components/AddDestinationModal";
import TravelModal from "../components/TravelModal";

import { useAuth } from "../contexts/AuthContext";
import { sampleItinerary } from "../data/surveyResult"
import { itinerary } from "../data/surveyResult"
import KakaoMap from "../components/KakaoMap";

// 관광지 카테고리, 장소
import { destinations } from "../data/destinations";

// 식당, 호텔 장소 
import DraggableItineraryItem from "../components/DraggableItineraryItem";
import type { ItineraryItem }  from "../components/DraggableItineraryItem";

import { itineraryArray } from "../data/itineraryArray";

import { destinationCategories, accommodationCategories, restaurantCategories } from "../data/commonType";
import { travelTypeCategories } from "../data/commonType";
import type { TotalPrice } from "../data/commonType";
import type { PlanState } from "../data/commonType";

// 모든 여행지 데이터
const allDestinations = [
  ...destinations,
  ...restaurants,
  ...accommodations,
];

const categories = ["전체", 
  ...destinationCategories, 
  ...accommodationCategories, 
  ...restaurantCategories
];

const thisTravelTypeCategories = ["미분류", ...travelTypeCategories];

export default function PlannerPage() {
  // 예상 비용 계산용
  const [totalPrice, setTotalPrice] = useState<TotalPrice>({
    attractionPrice: 0, 
    hotelPrice: 0, 
    foodPrice: 0
  });
  
  const findItineraryByKey = (planName: string) => { 
    const plan = itineraryArray.find(item => item.key === planName);
    return plan ? plan.value : itineraryArray[0].value;
  }
  const updateTotalPrice = ({
    attractionPrice = 0, 
    hotelPrice = 0, 
    foodPrice = 0
  }: Partial<TotalPrice>) => {
    setTotalPrice(prev => ({
      attractionPrice: prev.attractionPrice + (attractionPrice || 0),
      hotelPrice: prev.hotelPrice + (hotelPrice || 0),
      foodPrice: prev.foodPrice + (foodPrice || 0)
    }));
  };

  const navigate = useNavigate();
  const location = useLocation();
  const planState = {
    sourcePage: location.state?.sourcePage || null,
    isReadOnly: location.state?.isReadOnly || false,
    travelType: location.state?.travelType || null,
    myPlan: location.state?.myPlan || [],
    planInfo: location.state?.planInfo || {
      title: "새 여행 계획",
      date: Date().toString().slice(0, 10),
      description: null,
      isPrivate: false
    }
  } as PlanState;

  // 여행 일자별 표시 상태
  const [visibleDays, setVisibleDays] = useState<Record<number, boolean>>(()=> {
    // 설문 진입이면 처음부터 true로
    if (planState.sourcePage) {
      return { 1: true, 2: true, 3: true };
    }
    return {} as Record<number, boolean>;
  });

  const [planName, setPlanName] = useState(planState.planInfo.title || "새 여행 계획");
  const [startDate, setStartDate] = useState(planState.planInfo.date);
  const [description, setDescription] = useState(planState.planInfo.description || "");
  const [isPrivate, setIsPrivate] = useState(planState.planInfo.isPrivate);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(
    planState.myPlan ? planState.myPlan.map((item: any, idx: number) => {
      const matchedData = allDestinations.find((d: any) => d.id === item.id);
      return {
        id: idx + 1,
        day: item.day || Math.floor(idx / 3) + 1,
        time: item.time || "09:00",
        title: matchedData?.name || item.title || item.name,
        price: matchedData?.price || 0,
        hours: item.hours || "09:00 - 18:00",
        category: matchedData?.category || item.category || "명소",
        image: matchedData?.image || item.image || "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=400",
        lat: matchedData?.lat ?? item.lat,
          lng: matchedData?.lng ?? item.lng,
      };
    }) : []
  );

    // ✅ itinerary에 존재하는 day 목록 (예: [1,2,4])
  const availableDays = Array.from(new Set(itinerary.map(i => i.day)))
    .filter((d) => Number.isFinite(d))
    .sort((a, b) => a - b);


useEffect(() => {
  setVisibleDays((prev) => {
    const next: Record<number, boolean> = { ...prev };

    // 새로 등장한 day는 기본 true
    for (const d of availableDays) {
      if (next[d] === undefined) next[d] = true;
    }

    // 더 이상 존재하지 않는 day는 제거
    Object.keys(next).forEach((key) => {
      const day = Number(key);
      if (!availableDays.includes(day)) {
        delete next[day];
      }
    });

    return next;
  });
}, [availableDays.join(",")]);




  // itinerary 전체를 순회하여 카테고리별 가격 계산
  const calculateTotalPrice = (items: ItineraryItem[]) => {
    let attractionPrice = 0;
    let hotelPrice = 0;
    let foodPrice = 0;

    items.forEach(item => {
      if (destinationCategories.includes(item.category)) {
        attractionPrice += item.price;
      } else if (accommodationCategories.includes(item.category)) {
        hotelPrice += item.price;
      } else if (restaurantCategories.includes(item.category)) {
        foodPrice += item.price;
      }
    });

    setTotalPrice({ attractionPrice, hotelPrice, foodPrice });
  };

  // itinerary 변경시마다 전체 가격 재계산
  useEffect(() => {
    calculateTotalPrice(itinerary);
  }, [itinerary]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddDestinationModalOpen, setIsAddDestinationModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [travelType, setTravelType] = useState<string>(planState.travelType || '미분류');

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedItinerary = [...itinerary];
    const [movedItem] = updatedItinerary.splice(fromIndex, 1);  
    updatedItinerary.splice(toIndex, 0, movedItem);
    setItinerary(updatedItinerary);
  };

  const handleDelete = (id: number) => {
    setItinerary(itinerary.filter(item => item.id !== id));
  };

  const handleDayChange = (id: number, day: number) => {
    setItinerary(itinerary.map(item => 
      item.id === id ? { ...item, day } : item
    ));
  };

  const handleTimeChange = (id: number, time: string) => {
    setItinerary(itinerary.map(item => 
      item.id === id ? { ...item, time } : item
    ));
  };

  const handleAddDestination = (destination: any) => {
    const newItem: ItineraryItem = {
      id: Date.now(),
      day: 1,
      time: "09:00",
      title: destination.name,
      price: destination.price,
      hours: destination.hours || "09:00 - 18:00",
      category: destination.category,
      image: destination.image,
      lat: destination.lat,
      lng: destination.lng,

    };
    setItinerary([...itinerary, newItem]);
  };
  


const mapItemsFromItinerary = itinerary
  .filter((i: any) => i.lat != null && i.lng != null)
  .slice()
  .sort((a, b) => (a.day - b.day) || a.time.localeCompare(b.time))
  .reduce((acc: any[], cur) => {
    const countInDay = acc.filter((x) => x.day === cur.day).length;
    const seq = countInDay + 1;

    acc.push({
      id: String(cur.id),
      title: cur.title,
      day: cur.day,
      seq,
      lat: cur.lat,
      lng: cur.lng,
    });

    return acc;
  }, []);

// ✅ 이제 activeMapItems 필요 없음. 그냥 itinerary 기반 사용
const filteredMapItems = mapItemsFromItinerary.filter((it) => {
  return visibleDays[it.day] ?? true;
});

  const handleGoBack = (sourcePage: string) => {
    navigate(`/${sourcePage}`);
  };

  const handleImageClick = (item: ItineraryItem) => {
    // allDestinations에서 해당 여행지 찾기
    const destination = allDestinations.find(d => d.name === item.title);
    if (destination) {
      setSelectedDestination({
        ...destination,
        fullDescription: destination.fullDescription || destination.shortDescription
      });
    } else {
      // 기본 정보로 모달 열기
      setSelectedDestination({
        name: item.title,
        category: item.category,
        duration: "2~3시간",
        location: "제주도",
        shortDescription: item.title,
        fullDescription: `${item.title}에 대한 상세 정보입니다.`,
        image: item.image
      });
    }
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">나의 여행 계획</h1>
          <p className="text-lg opacity-90">일차별로 시간과 장소를 지정하여 상세한 여행 일정을 만들어보세요</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 플랜 정보 & 여행 일정표 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 플랜 정보 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">플랜 정보</h2>
                  <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl">
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                      여행 유형
                    </span>

                    <div className="relative">
                      <select
                        value={travelType}
                        onChange={(e) => setTravelType(e.target.value)}
                        disabled={planState.isReadOnly}
                        className="
                          appearance-none
                          bg-white
                          border border-gray-300
                          rounded-lg
                          px-3 py-1.5 pr-8
                          text-sm text-gray-700
                          cursor-pointer
                          focus:outline-none
                          focus:ring-2 focus:ring-orange-400
                          focus:border-transparent
                        "
                      >
                        {thisTravelTypeCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>        
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">플랜 이름</label>
                    <input
                      type="text"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      disabled={planState.isReadOnly}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">출발일</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      disabled={planState.isReadOnly}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm text-gray-600">설명</label>
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={(e) => setIsPrivate(e.target.checked)}
                        disabled={planState.isReadOnly}
                        className="rounded"
                      />
                      나만보기
                    </label>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={planState.isReadOnly}
                    rows={3}
                    placeholder="여행 계획 / 주말여행 / 바다"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 여행 일정표 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">여행 일정표</h2>
                <button 
                  onClick={() => !planState.isReadOnly && setIsModalOpen(true)} 
                  disabled={planState.isReadOnly}      
                  className={!planState.isReadOnly ? 
                    "flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium" : 
                    "flex items-center gap-2 px-4 py-2 bg-gray-300 text-black rounded-lg text-sm font-medium cursor-not-allowed"}
                >
                  <Plus className="w-4 h-4" />
                  일정 추가
                </button>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-3 pb-3 border-b border-gray-200 text-xs font-semibold text-gray-600">
                <div className="col-span-1"></div>
                <div className="col-span-1 text-center">일차</div>
                <div className="col-span-2">시간</div>
                <div className="col-span-2">사진</div>
                <div className="col-span-5">관광지 정보</div>
                <div className="col-span-1 text-center">삭제</div>
              </div>

              {/* Table Body */}
              <div className="space-y-1 mt-3">
                {itinerary.length === 0 ? (
                  <div className="py-12 text-center text-gray-400">
                    <p>일정을 추가해보세요!</p>
                  </div>
                ) : (
                  itinerary.map((item, idx) => (
                    <DraggableItineraryItem
                      key={item.id}
                      item={item}
                      index={idx}
                      canEdit={!planState.isReadOnly}
                      moveItem={moveItem}
                      onDelete={handleDelete}
                      onDayChange={handleDayChange}
                      onTimeChange={handleTimeChange}
                      onImageClick={handleImageClick}
                    />
                  ))
                )}
              </div>

              {/* 사용 팁 */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">사용 팁</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• 드래그하여 일정 순서를 변경할 수 있습니다</li>
                  <li>• 일차와 시간을 직접 수정할 수 있습니다</li>
                  <li>• 여행 경로가 자동으로 지도에 표시됩니다</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - 동선 지도 & 예상 비용 */}
          <div className="max-h-screen">
  <div className="space-y-6 h-fit sticky top-45">
    {/* 동선 지도 */}
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
  <h2 className="text-lg font-bold text-gray-900 mb-2">동선 지도</h2>

{availableDays.length > 0 && (
  <div className="flex flex-wrap gap-3 mb-3">
    {availableDays.map((d) => (
      <label key={d} className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={visibleDays[d] ?? true}
          onChange={(e) =>
            setVisibleDays((prev) => ({ ...prev, [d]: e.target.checked }))
          }
        />
        {d}일차
      </label>
    ))}
  </div>
)}




  <div className="aspect-square rounded-lg overflow-hidden">
    <KakaoMap items={filteredMapItems} className="w-full h-full" fitBounds={false} />
  </div>
</div>

              {/* 예상 비용 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">예상 비용</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">관광지 입장료</span>
                    <span className="font-semibold text-gray-900">{totalPrice.attractionPrice.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">숙박비</span>
                    <span className="font-semibold text-gray-900">{totalPrice.hotelPrice.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">식비</span>
                    <span className="font-semibold text-gray-900">{totalPrice.foodPrice.toLocaleString()}원</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">총 예상 비용</span>
                      <span className="font-bold text-orange-600 text-lg">{(totalPrice.attractionPrice + totalPrice.hotelPrice + totalPrice.foodPrice).toLocaleString()}원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 저장하기/뒤로가기 버튼 */}
        <div className="mt-8 flex justify-center gap-4">
          {["my-plan"].includes(planState.sourcePage) && (
            <button
              onClick={() => handleGoBack(planState.sourcePage)}
              className="flex items-center gap-2 px-12 py-4 bg-gray-500 text-white rounded-xl font-bold text-lg hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
            >
              뒤로가기
            </button>
          )}
          {!planState.isReadOnly && (
            <button
              onClick={() => navigate("/my-plan")}
              className="flex items-center gap-2 px-12 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Save className="w-5 h-5" />
              저장하기
            </button>
          )}

        </div>
      </div>

      {/* 여행지 선택 모달 */}
      <AddDestinationModal
        isOpen={!planState.isReadOnly && isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(item, type) => {
          if (planState.isReadOnly) return;

          // ✅ type별 필드 통일(정규화)
          const normalized = {
            ...item,

            // 여행지: price
            // 식당: priceRange(문자) → 숫자로 바꾸기 어려우니 0 처리 or 문자열 유지 전략 필요
            // 숙소: (아마) pricePerNight 같은 필드일 것
            price:
              typeof (item as any).price === "number"
                ? (item as any).price
                : typeof (item as any).pricePerNight === "number"
                ? (item as any).pricePerNight
                : 0, // 식당은 가격 합산이 목적이면 0으로 두는 게 안전

            hours: (item as any).hours ?? (item as any).openHours ?? "운영시간 정보 없음",

            category: (item as any).category ?? type,

            // (선택) 식당 가격대 표시용으로 따로 저장하고 싶으면:
            priceRange: (item as any).priceRange,
          };

          handleAddDestination(normalized);
        }}
        destinations={destinations}
        restaurants={restaurants}
        accommodations={accommodations}
        title="일정 추가"
      />

      {/* 여행지 상세 정보 모달 */}
      {selectedDestination && (
        <TravelModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          destination={selectedDestination}

        />
      )}
    </div>
  );
}

