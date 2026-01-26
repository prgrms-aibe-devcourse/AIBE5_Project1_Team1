import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Calendar, Plus, Save, X, Trash2, GripVertical, Search } from "lucide-react";
import { useDrag, useDrop } from "react-dnd";
import { destinations } from "../data/destinations";
import AddDestinationModal from "../components/AddDestinationModal";
import TravelModal from "../components/TravelModal";

// 모든 여행지 데이터
const allDestinations = [
  ...destinations,
  {
    id: 4,
    name: "우도",
    category: "섬",
    duration: "4~5시간",
    location: "제주시",
    shortDescription: "제주 동쪽의 작은 섬으로 아름다운 해안선과 해녀문화를 경험할 수 있습니다.",
    fullDescription: "우도는 제주도 동쪽에 위치한 작은 섬으로, 배로 약 15분 거리에 있습니다. 아름다운 해안선과 맑은 바다, 그리고 해녀문화를 직접 체험할 수 있는 곳입니다. 자전거를 빌려 섬을 한 바퀴 돌며 여유로운 시간을 보내기에 완벽한 장소입니다.",
    image: "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["섬", "해변", "자���거"],
    price: "무료",
    hours: "09:00 - 18:00"
  },
  {
    id: 5,
    name: "섭지코지",
    category: "자연",
    duration: "2~3시간",
    location: "서귀포시",
    shortDescription: "아름다운 해안절벽과 등대가 어우러진 제주의 대표 드라마 촬영지.",
    fullDescription: "섭지코지는 성산일출봉 근처에 위치한 해안절벽으로, 푸른 바다와 등대가 어우러진 아름다운 풍경을 자랑합니다. 많은 드라마와 영화의 촬영지로도 유명하며, 산책하기 좋은 코스가 잘 조성되어 있습니다.",
    image: "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["절벽", "등대", "사진명소"],
    price: "무료",
    hours: "24시간"
  },
  {
    id: 6,
    name: "만장굴",
    category: "자연",
    duration: "1~2시간",
    location: "제주시",
    shortDescription: "세계에서 가장 긴 용암동굴 중 하나로 신비로운 지하 세계를 경험할 수 있습니다.",
    fullDescription: "만장굴은 세계에서 가장 긴 용암동굴 중 하나로, 총 길이가 약 13km에 달합니다. 현재는 약 1km 구간만 일반에 공개되고 있으며, 용암이 흐르며 만들어진 다양한 지형과 용암종유, 용암석순 등을 관찰할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["동굴", "자연유산"],
    price: "4,000원",
    hours: "09:00 - 18:00"
  },
  {
    id: 7,
    name: "김녕 함덕 해수욕장",
    category: "해변",
    duration: "3~4시간",
    location: "제주시",
    shortDescription: "탁 트인 에메랄드빛 바다와 하얀 모래사장이 아름다운 해수욕장.",
    fullDescription: "김녕 함덕 해수욕장은 제주 동쪽에 위치한 아름다운 백사장 해변입니다. 맑고 투명한 에메랄드빛 바다와 부드러운 백사장이 특징이며, 수심이 얕아 가족 단위 여행객들에게 인기가 많습니다.",
    image: "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=400",
    tags: ["해변", "수영", "가족"],
    price: "무료",
    hours: "24시간"
  },
  {
    id: 8,
    name: "오조포구",
    category: "자연",
    duration: "1~2시간",
    location: "서귀포시",
    shortDescription: "돌담길과 바다 감성이 어우러진 사진 촬영 명소.",
    fullDescription: "오조포구는 제주 남쪽 해안가에 위치한 작은 어촌 마을입니다. 돌담길을 따라 걷다 보면 푸른 바다와 어우러진 아름다운 풍경을 만날 수 있으며, 인생 사진을 남기기 좋은 장소로 유명합니다.",
    image: "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=400",
    tags: ["포구", "사진", "산책"],
    price: "무료",
    hours: "24시간"
  }
];



const categories = ["전체", "자연", "해변", "섬", "드라이브", "테마파크"];

type ItineraryItem = {
  id: string;
  day: number;
  time: string;
  title: string;
  price: string;
  hours: string;
  category: string;
  image: string;
};

// 드래그 가능한 일정 항목 컴포넌트
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
  onDelete: (id: string) => void;
  onDayChange: (id: string, day: number) => void;
  onTimeChange: (id: string, time: string) => void;
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
      ref={(node) => preview(drop(node))}
      className={`grid grid-cols-12 gap-3 items-center py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {/* 드래그 핸들 */}
   <div
      ref={drag}
      className={`col-span-1 flex justify-center ${canEdit ? "cursor-move" : "cursor-not-allowed opacity-40"}`}>
  <GripVertical className="w-5 h-5 text-gray-400" />
</div>

      {/* 일차 */}
      <div className="col-span-1">
        <input
          type="number"
          value={item.day}
          onChange={(e) => onDayChange(item.id, parseInt(e.target.value) || 1)}
          disabled={!canEdit}
          min="1"
          className="w-14 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold text-gray-700 text-sm"
        />
      </div>

      {/* 시간 */}
      <div className="col-span-2">
        <input
          type="time"
          value={item.time}
          onChange={(e) => onTimeChange(item.id, e.target.value)}
          disabled={!canEdit}
          className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
        />
      </div>

      {/* 사진 */}
      <div className="col-span-2">
        <img
          src={item.image}
          alt={item.title}
          onClick={() => onImageClick(item)}
          className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* 관광지 정보 */}
      <div className="col-span-5 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
        <p className="text-xs text-orange-600">{item.price}</p>
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
  const navigate = useNavigate();
  const location = useLocation();
  const surveyData = location.state?.surveyData || {};
  // 여행계획 수정 가능 여부를 따지기 위해 추가
  const isReadOnly = location.state?.isReadOnly || false; 
  const canEdit = !isReadOnly;

  const fromMyPlan = location.state?.fromMyPlan || false; // 내 플랜에서 왔는지 확인
  

  const [planName, setPlanName] = useState(surveyData.packageName || "새 여행 계획");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("여행 계획 / 주말여행 / 바다");
  const [isPrivate, setIsPrivate] = useState(true);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(
    surveyData.packageName ? [
      {
        id: "1",
        day: 1,
        time: "09:00",
        title: "성산일출봉",
        price: "5,000원",
        hours: "07:00 - 19:00",
        category: "명소",
        image: "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=400"
      },
      {
        id: "2",
        day: 1,
        time: "11:30",
        title: "섭지코지",
        price: "무료",
        hours: "24시간",
        category: "자연",
        image: "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?w=400"
      },
      {
        id: "3",
        day: 1,
        time: "14:00",
        title: "김녕 함덕 해수욕장",
        price: "무료",
        hours: "24시간",
        category: "해변",
        image: "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=400"
      },
      {
        id: "4",
        day: 1,
        time: "17:00",
        title: "오조포구",
        price: "무료",
        hours: "24시간",
        category: "자연",
        image: "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=400"
      },
      {
        id: "5",
        day: 2,
        time: "09:30",
        title: "한라산 국립공원",
        price: "무료",
        hours: "05:00 - 18:00",
        category: "자연",
        image: "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?w=400"
      },
      {
        id: "6",
        day: 2,
        time: "14:00",
        title: "우도",
        price: "무료",
        hours: "09:00 - 18:00",
        category: "섬",
        image: "https://images.unsplash.com/photo-1758327740342-4e705edea29b?w=400"
      },
      {
        id: "7",
        day: 3,
        time: "10:00",
        title: "만장굴",
        price: "4,000원",
        hours: "09:00 - 18:00",
        category: "자연",
        image: "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?w=400"
      }
    ] : []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddDestinationModalOpen, setIsAddDestinationModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<any | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // 취향 태그 생성
  const getTravelType = () => {
    const purpose = surveyData.purpose || "";
    const purposeMap: { [key: string]: string } = {
      "느긋하게 쉬기(힐링)": "힐링형",
      "맛있는거 먹기(맛집)": "맛집형",
      "예쁜 사진 남기기(감성)": "감성형",
      "신나게 놀기(액티비티)": "액티비티형"
    };
    return purposeMap[purpose] || null;
  };

  const moveItem = (fromIndex: number, toIndex: number) => {
    const updatedItinerary = [...itinerary];
    const [movedItem] = updatedItinerary.splice(fromIndex, 1);
    updatedItinerary.splice(toIndex, 0, movedItem);
    setItinerary(updatedItinerary);
  };

  const handleDelete = (id: string) => {
    setItinerary(itinerary.filter(item => item.id !== id));
  };

  const handleDayChange = (id: string, day: number) => {
    setItinerary(itinerary.map(item => 
      item.id === id ? { ...item, day } : item
    ));
  };

  const handleTimeChange = (id: string, time: string) => {
    setItinerary(itinerary.map(item => 
      item.id === id ? { ...item, time } : item
    ));
  };

  const handleAddDestination = (destination: any) => {
    const newItem: ItineraryItem = {
      id: Date.now().toString(),
      day: 1,
      time: "09:00",
      title: destination.name,
      price: destination.price || "무료",
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
                {getTravelType() && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    #{getTravelType()}
                  </span>
                )}
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
          <div className="space-y-6">
            {/* 동선 지도 */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">동선 지도</h2>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simple map visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Green island shape */}
                    <div className="absolute inset-0 bg-green-400 rounded-full border-4 border-gray-800 opacity-80"></div>
                    {/* Route points */}
                    {itinerary.slice(0, 5).map((item, idx) => {
                      const positions = [
                        { top: '2rem', right: '4rem' },
                        { top: '4rem', left: '4rem' },
                        { bottom: '3rem', right: '3rem' },
                        { bottom: '2rem', left: '5rem' },
                        { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
                      ];
                      const pos = positions[idx] || positions[4];
                      return (
                        <div
                          key={item.id}
                          className="absolute w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                          style={pos}
                        >
                          {idx + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
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
            onClick={() => navigate("/")}
            disabled={!canEdit}
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