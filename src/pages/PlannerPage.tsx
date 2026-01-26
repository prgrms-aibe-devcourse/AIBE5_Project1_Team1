import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { Calendar, Plus, Save, X, Trash2, GripVertical, Search, ChevronDown } from "lucide-react";
import { useDrag, useDrop } from "react-dnd";
import { destinations } from "../data/destinations";
import AddDestinationModal from "../components/AddDestinationModal";
import TravelModal from "../components/TravelModal";

import data from "../data/myPlanPageTempData.json"
import data2 from "../data/myPlanPageTempPackageData.json"
import { useAuth } from "../contexts/AuthContext";

import KakaoMap from "../components/KakaoMap";

// 모든 여행지 데이터
const allDestinations = [
  ...data,
];



const categories = ["전체", "자연", "해변", "섬", "드라이브", "테마파크"];

type ItineraryItem = {
  id: number;
  day: number;
  time: string;
  title: string;
  price: number;
  hours: string;
  category: string;
  image: string;
};

// 드래그 가능한 일정 항목 컴포넌트
/* 20260125: 드래그 드롭을 마구 흔들 시, 예상 위치가 이상해지는 버그 있음 */
const DraggableItineraryItem = ({ 
  item, 
  index, 
  moveItem, 
  onDelete, 
  onDayChange, 
  onTimeChange,
  onImageClick,
  canEdit
}: { 
  item: ItineraryItem; 
  index: number; 
  moveItem: (fromIndex: number, toIndex: number) => void;
  onDelete: (id: number) => void;
  onDayChange: (id: number, day: number) => void;
  onTimeChange: (id: number, time: string) => void;
  onImageClick: (item: ItineraryItem) => void;
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'ITINERARY_ITEM',
    item: { index },
    canDrag: () => canEdit,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ITINERARY_ITEM',
    hover: (draggedItem: { index: number }) => {
      if (!canEdit) return;
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => { if (node) { preview(drop(node)); } }}
      className={`grid grid-cols-14 gap-2 items-center py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {/* 드래그 핸들 */}
      <div ref={(node) => { if (node) { drag(node); } }} className="w-8 col-span-1 cursor-move flex justify-center">
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>

      {/* 일차 */}
      {/* 20260126: w 줄임. h 대신 py로 대체 -> 크기 줄임 */}
      <div className="col-span-1">
        <input
          type="number"
          value={item.day}
          onChange={(e) => onDayChange(item.id, parseInt(e.target.value) || 1)}
          disabled={!canEdit}
          min="1"
          className="w-10 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold text-gray-700 text-sm"
        />
      </div>

      {/* 시간 */}
      {/* 20260125: 시간은 24시간 체제로 변경 불가. 이는 OS에 따라 다름. 단, 시간 필드의 row를 100 이상으로 두면 해결됨. */}
      <div className="col-span-3">
        <input
          type="time"
          value={item.time}
          onChange={(e) => onTimeChange(item.id, e.target.value)}
          className="w-100 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
        />
      </div>

      {/* 사진 */}
      <div className="col-span-3">
        <img
          src={item.image}
          alt={item.title}
          onClick={() => onImageClick(item)}
          className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* 관광지 정보 */}
      <div className="col-span-5 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
        <p className="text-xs text-orange-600">{item.price === 0 ? '무료' : `${item.price.toLocaleString()}원`}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>● {item.hours}</span>
          <span>● {item.category}</span>
        </div>
      </div>

      {/* 삭제 */}
      <div className="col-span-1 flex justify-center">
        <button 
          onClick={() => canEdit && onDelete(item.id)}
          disabled={!canEdit}                         
          className="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
          title="삭제"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};



export default function PlannerPage() {

  // 여행 일자별 표시 상태
  const [visibleDays, setVisibleDays] = useState<{ 1: boolean; 2: boolean; 3: boolean }>({
  1: true,
  2: true,
  3: true,
});
// KakaoMap에 넘길 여행지 데이터
type MapItem = {
  id: string;
  title: string;
  day: number;
  seq: number;
  lat: number;
  lng: number;
};

const mapItems: MapItem[] = [
  { id: "1-1", day: 1, seq: 1, title: "자매국수", lat: 33.49860561714938, lng: 126.45914739166322 },
  { id: "1-2", day: 1, seq: 2, title: "함덕 해수욕장", lat: 33.54301337455566, lng: 126.66925526795818 },
  { id: "1-3", day: 1, seq: 3, title: "오조포구", lat: 33.46315108350201, lng: 126.92097300674901 },
  { id: "1-4", day: 1, seq: 4, title: "위드시티호텔", lat: 33.4857206402737, lng: 126.4836896813416 },

  { id: "2-1", day: 2, seq: 1, title: "리에또", lat: 33.484166274040284, lng: 126.48498466666912 },
  { id: "2-2", day: 2, seq: 2, title: "성산일출봉", lat: 33.45880518948728, lng: 126.94097338703314 },
  { id: "2-3", day: 2, seq: 3, title: "섭지코지", lat: 33.423925527706956, lng: 126.93076085774399 },
  { id: "2-4", day: 2, seq: 4, title: "성산 수산 식당", lat: 33.46256965940773, lng: 126.93261800885692 },

  { id: "3-1", day: 3, seq: 1, title: "뷰스트", lat: 33.22771220274194, lng: 126.30353852782778 },
  { id: "3-2", day: 3, seq: 2, title: "사계흑돼지 산방산본점", lat: 33.24814566114882, lng: 126.30243758799476 },
  { id: "3-3", day: 3, seq: 3, title: "동문시장", lat: 33.51282933037489, lng: 126.52837848272551 },
  { id: "3-4", day: 3, seq: 4, title: "제주공항", lat: 33.506955052495, lng: 126.4928945703136 },
];
const filteredMapItems = mapItems.filter(
  (it) => visibleDays[it.day as 1 | 2 | 3]
);
  const navigate = useNavigate();
  const location = useLocation();
  const surveyData = location.state?.surveyData || {};
  // 여행계획 수정 가능 여부를 따지기 위해 추가
  const isReadOnly = location.state?.isReadOnly || false; 
  const canEdit = !isReadOnly;

  const fromMyPlan = location.state?.fromMyPlan || false; // 내 플랜에서 왔는지 확인
  
  const handleSurvey = () => {
    navigate("/survey");
  };
  const { isLoggedIn, userName, logout } = useAuth();

  const [planName, setPlanName] = useState(surveyData.packageName || "새 여행 계획");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("여행 계획 / 주말여행 / 바다");
  const [isPrivate, setIsPrivate] = useState(true);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(
    surveyData.packageName ? data2.map((item: any, idx: number) => {
      const matchedData = data.find((d: any) => d.id === item.id);
      return {
        id: idx + 1,
        day: item.day || Math.floor(idx / 3) + 1,
        time: item.time || "09:00",
        title: matchedData?.name || item.title || item.name,
        price: item.price || 0,
        hours: item.hours || "09:00 - 18:00",
        category: matchedData?.category || item.category || "명소",
        image: matchedData?.image || item.image || "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=400"
      };
    }) : []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddDestinationModalOpen, setIsAddDestinationModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // 취향 태그 생성
  // const getTravelType = () => {
  //   const purpose = surveyData.purpose || "";
  //   const purposeMap: { [key: string]: string } = {
  //     "느긋하게 쉬기(힐링)": "힐링형",
  //     "맛있는거 먹기(맛집)": "맛집형",
  //     "예쁜 사진 남기기(감성)": "감성형",
  //     "신나게 놀기(액티비티)": "액티비티형"
  //   };
  //   return purposeMap["느긋하게 쉬기(힐링)"];
  // };
  const [travelType, setTravelType] = useState<string>('전체');

  const getTravelType = () => travelType;
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
      image: destination.image
    };
    setItinerary([...itinerary, newItem]);
  };

  const handleGoBack = () => {
    navigate("/my-plan");
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
                        {categories.map((category) => (
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
                      disabled={!canEdit} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">출발일</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      disabled={!canEdit} 
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
                        disabled={!canEdit} 
                        className="rounded"
                      />
                      나만보기
                    </label>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={!canEdit} 
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
                  onClick={() => canEdit && setIsModalOpen(true)} 
                  disabled={!canEdit}                            
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
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
                      moveItem={moveItem}
                      onDelete={handleDelete}
                      onDayChange={handleDayChange}
                      onTimeChange={handleTimeChange}
                      onImageClick={handleImageClick}
                      canEdit={canEdit}
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

  {/* ✅ 일차 필터 체크박스 */}
  <div className="flex gap-3 mb-3">
    {[1, 2, 3].map((d) => (
      <label key={d} className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={visibleDays[d as 1 | 2 | 3]}
          onChange={(e) =>
            setVisibleDays((prev) => ({ ...prev, [d]: e.target.checked }))
          }
        />
        {d}일차
      </label>
    ))}
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <KakaoMap items={filteredMapItems} className="w-full h-full" />
  </div>
</div>


              {/* 예상 비용 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4">예상 비용</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">관광지 입장료</span>
                    <span className="font-semibold text-gray-900">123,456,789원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">숙박비</span>
                    <span className="font-semibold text-gray-900">123,456,789원</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">식비</span>
                    <span className="font-semibold text-gray-900">123,456,789원</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">총 예상 비용</span>
                      <span className="font-bold text-orange-600 text-lg">370,370,367원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 저장하기/뒤로가기 버튼 */}
        <div className="mt-8 flex justify-center gap-4">
          {fromMyPlan && (
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 px-12 py-4 bg-gray-500 text-white rounded-xl font-bold text-lg hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
            >
              뒤로가기
            </button>
          )}
          <button
            onClick={isLoggedIn ? () => navigate("/") : handleSurvey}
            className="flex items-center gap-2 px-12 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Save className="w-5 h-5" />
            저장하기
          </button>
        </div>
      </div>

      {/* 여행지 선택 모달 */}
      <AddDestinationModal
        isOpen={canEdit && isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(d) => canEdit && handleAddDestination(d)}
        destinations={allDestinations}
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

