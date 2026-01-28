import { X, Upload, Star, Plus, Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import PlanSelectModal from "./PlanSelectModal"; // [추가] 패키지 선택 모달 import

interface ReviewEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
  review: {
    id: number;
    title: string;
    content: string;
    rating: number;
    image?: string;
    images?: string[];
    planName?: string;
    travelType?: string;
    itinerary?: Array<{ day: string; schedule: string }>;
  };
}

export default function ReviewEditModal({ isOpen, onClose, onSubmit, review }: ReviewEditModalProps) {
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [images, setImages] = useState<string[]>(review.images || (review.image ? [review.image] : []));

  // [추가] 패키지 변경을 위한 상태값들
  const [planName, setPlanName] = useState(review.planName);
  const [travelType, setTravelType] = useState(review.travelType);
  const [itinerary, setItinerary] = useState(review.itinerary);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  // [추가] 파일 업로드용 Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 모달이 열릴 때마다 기존 데이터로 상태 초기화
  useEffect(() => {
    if (isOpen && review) {
      setTitle(review.title);
      setContent(review.content);
      setRating(review.rating);
      setImages(review.images || (review.image ? [review.image] : []));
      // 패키지 정보 초기화
      setPlanName(review.planName);
      setTravelType(review.travelType);
      setItinerary(review.itinerary);
    }
  }, [isOpen, review]);

  if (!isOpen) return null;

  // 외부 클릭으로 닫히지 않도록 수정
  const handleBackdropClick = (e: React.MouseEvent) => {
    return;
  };

  // [기능 추가] 이미지 업로드 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files)
      .filter(file => file.type.startsWith("image/"))
      .map(file => URL.createObjectURL(file));

    if (images.length + newImages.length > 10) {
      alert("최대 10장까지 업로드 가능합니다.");
      return;
    }

    setImages(prev => [...prev, ...newImages]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // [기능 추가] 플랜 선택 핸들러
  const handlePlanSelect = (plan: any) => {
    setPlanName(plan.title);
    setTravelType(plan.type);
    setItinerary(plan.itinerary); // 일정 정보도 함께 업데이트
    setIsPlanModalOpen(false);
  };

  const handleSubmit = () => {
    onSubmit?.({ 
      id: review.id, 
      title, 
      content, 
      rating, 
      images,
      // 수정된 패키지 정보도 함께 전달
      planName,
      travelType,
      itinerary
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto my-8">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">후기 수정</h2>
            <p className="text-sm text-gray-500 mt-1">나의 경험을 수정해보세요</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-8">
          {/* 여행 플랜 정보 (변경 기능 추가) */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 flex items-center justify-between">
            <p className="text-gray-700 font-medium">
              <span className="text-orange-600 font-bold">나의</span> 여행플랜: 
              <span className="text-gray-900 ml-2">{planName || "[여행플랜이름]"}</span>
            </p>
            <button 
              onClick={() => setIsPlanModalOpen(true)}
              className="text-sm text-orange-600 hover:text-orange-700 font-bold bg-white px-3 py-1.5 rounded-lg border border-orange-200 hover:border-orange-300 transition-all shadow-sm"
            >
              변경하기
            </button>
          </div>

          {/* 제목 */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="후기 제목을 입력하세요"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          {/* 사진 업로드 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-900">사진 업로드</label>
              {/* [수정] 숨겨진 input 추가 */}
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <button 
                onClick={() => fileInputRef.current?.click()} // 버튼 클릭 시 input 트리거
                className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-lg transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>추가</span>
              </button>
            </div>
            
            {images.length === 0 ? (
              <div 
                onClick={() => fileInputRef.current?.click()} // 영역 클릭 시 input 트리거
                className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-orange-500 transition-colors cursor-pointer"
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">클릭하거나 드래그하여 사진을 업로드하세요</p>
                <p className="text-sm text-gray-500">최대 10장까지 업로드 가능합니다</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative group aspect-video rounded-xl overflow-hidden">
                    <img src={img} alt={`업로드 ${idx + 1}`} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setImages(images.filter((_, i) => i !== idx))}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => fileInputRef.current?.click()} // 추가 버튼 클릭 시 input 트리거
                  className="aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-orange-500 transition-colors"
                >
                  <Plus className="w-8 h-8 text-gray-400" />
                </button>
              </div>
            )}
          </div>

          {/* 본문 */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3">본문</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="여행 경험을 자세히 공유해주세요..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              rows={8}
            />
          </div>

          {/* 여행 일정 (미리보기 - 수정은 플랜 변경으로만 가능) */}
          {itinerary && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-bold text-gray-900">선택된 여행 플랜</label>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                {travelType && (
                  <div className="inline-block px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">
                    # {travelType}
                  </div>
                )}
                {itinerary.map((item, idx) => (
                  <div key={idx} className="bg-orange-50 rounded-lg p-4 flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">
                        {item.day}
                      </span>
                    </div>
                    <p className="text-gray-700 flex-1">{item.schedule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 별점 */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3">별점</label>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className="relative transition-transform hover:scale-110 focus:outline-none z-0"
                    // 마우스 움직임에 따라 0.5점 단위 계산
                    onMouseMove={(e) => {
                      const { left, width } = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - left;
                      const isHalf = x < width / 2;
                      setHoveredRating(i + (isHalf ? 0.5 : 1));
                    }}
                    // 마우스가 나가면 호버 점수 초기화
                    onMouseLeave={() => setHoveredRating(0)}
                    // 클릭 시 호버 중인 점수를 최종 점수로 확정
                    onClick={() => setRating(hoveredRating)}
                  >
                    {/* 기본 배경 별 (회색) */}
                    <Star className="w-12 h-12 fill-gray-200 text-gray-200" />

                    {/* 색이 채워지는 별 (노란색) */}
                    <div
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                      style={{
                        // 호버 중이면 호버 점수를, 아니면 확정 점수를 기준으로 너비 결정
                        width: (hoveredRating || rating) > i 
                          ? (hoveredRating || rating) - i >= 1 
                            ? "100%" 
                            : (hoveredRating || rating) - i === 0.5 
                              ? "50%" 
                              : "0%"
                          : "0%",
                      }}
                    >
                      <Star className="w-12 h-12 fill-yellow-400 text-yellow-400" />
                    </div>
                  </button>
                ))}
              </div>

              {/* 점수 확인 부분: 호버 중일 땐 호버 점수를, 아닐 땐 확정 점수를 보여줌 */}
              {(hoveredRating || rating) > 0 && (
                <p className="text-4xl font-bold text-gray-900">
                  {(hoveredRating || rating).toFixed(1)}
                </p>
              )}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleSubmit}
              disabled={!title || !content || rating === 0}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              수정 완료
            </button>
          </div>
        </div>
      </div>

      {/* 패키지 선택 모달 (맨 위에 뜨도록 z-index 확인 필요하지만, PlanSelectModal 자체에 z-[9999]가 있어서 괜찮음) */}
      <PlanSelectModal 
        isOpen={isPlanModalOpen} 
        onClose={() => setIsPlanModalOpen(false)} 
        onSelect={handlePlanSelect} 
      />
    </div>
  );
}