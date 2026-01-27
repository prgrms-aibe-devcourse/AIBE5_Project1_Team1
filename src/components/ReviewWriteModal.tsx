import { X, Upload, Star, Plus, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import PlanSelectModal from "./PlanSelectModal";

interface ReviewWriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function ReviewWriteModal({ isOpen, onClose, onSubmit }: ReviewWriteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isLoggedIn, userName, logout } = useAuth();

  // [추가] 모달이 열릴 때 필드 초기화
  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setContent("");
      setRating(0);
      setImages([]);
      setSelectedPlan(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 외부 클릭으로 닫히지 않도록 수정
  const handleBackdropClick = (e: React.MouseEvent) => {
    // 배경 클릭해도 닫히지 않음
    return;
  };

  const handleSubmit = () => {
    // 부모 컴포넌트(TravelReviewPage)의 handleAddReview로 데이터 전달
    onSubmit?.({ title, content, rating, images, selectedPlan });
    onClose();
  };


  // 목데이터
  const mockItinerary = [
    { day: "1일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
    { day: "2일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 저시기숙소" },
    { day: "3일차", schedule: "공항" }
  ];

  // [기능 추가] 이미지 업로드 핸들러
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files)
      .filter(file => file.type.startsWith("image/")) // 이미지 파일만 제한
      .map(file => URL.createObjectURL(file)); // 임시 미리보기 URL 생성

    if (images.length + newImages.length > 10) {
      alert("최대 10장까지 업로드 가능합니다.");
      return;
    }

    setImages(prev => [...prev, ...newImages]);
    
    // 동일 파일 재업로드를 위해 input 초기화
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // [기능 추가] 이미지 삭제 핸들러
  const handleRemoveImage = (index: number) => {
    setImages(prev => {
      const updated = prev.filter((_, i) => i !== index);
      // 메모리 누수 방지를 위해 해제
      URL.revokeObjectURL(prev[index]);
      return updated;
    });
  };

  // 플랜 선택 시 실행될 함수
  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(false); // 선택 후 목록 닫기
  };

  // 모달을 닫을 때 실행 (X, 취소, 배경 클릭 공통)
  const handleClosePlanModal = () => {
    setIsPlanModalOpen(false); // 상태를 false로 만들어 컴포넌트 제거
  };


  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left; // 버튼 내 마우스 X 좌표
    
    // 마우스 위치가 버튼 폭의 절반보다 작으면 0.5점, 크면 1점 추가
    const isHalf = x < width / 2;
    setHoveredRating(index + (isHalf ? 0.5 : 1));
  };

  const handleStarClick = (index: number) => {
    // 현재 hoveredRating에 담긴 (0.5 단위 값)을 확정 점수로 저장
    setRating(hoveredRating);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-[5]">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">후기 작성</h2>
            <p className="text-sm text-gray-500 mt-1">나의 경험을 공유해보세요</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-8">
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
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-lg transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>추가</span>
              </button>
            </div>
            
            {images.length === 0 ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-orange-500 transition-colors cursor-pointer"
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">클릭하거나 드래그하여 사진을 업로드하세요</p>
                <p className="text-sm text-gray-500">최대 10장까지 업로드 가능합니다</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> {/* 그리드 4열로 조정 */}
                {images.map((img, idx) => (
                  <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <img src={img} alt={`미리보기 ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => handleRemoveImage(idx)}
                        className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                {/* 추가 버튼 (이미지가 있을 때 마지막에 표시) */}
                {images.length < 10 && (
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-orange-500 transition-colors group"
                  >
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-orange-500" />
                  </button>
                )}
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

          {/* 여행 플랜 정보 */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <p className="text-gray-700 font-medium">
              <span className="text-orange-600 font-bold">{userName}</span>의 여행플랜: 
              <span className="text-gray-900 ml-2">
                {selectedPlan ? selectedPlan.title : "[불러오기 버튼을 눌러주세요]"}
              </span>
            </p>
          </div>

          {/* 여행 플랜 상세 섹션 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-900">여행 플랜</label>
              <button 
                onClick={() => setIsPlanModalOpen(true)} // 여기서 플랜 선택 창을 엽니다.
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                불러오기
              </button>
            </div>
            {isPlanModalOpen && (
              <PlanSelectModal 
                isOpen={isPlanModalOpen} 
                onClose={() => setIsPlanModalOpen(false)} 
                onSelect={handlePlanSelect} 
              />
            )}

            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              {selectedPlan ? (
                <>
                  <div className="inline-block px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">
                    # {selectedPlan.type}
                  </div>
                  {selectedPlan.itinerary.map((item: any, idx: number) => (
                    <div key={idx} className="bg-orange-50 rounded-lg p-4 flex gap-4">
                      <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium h-fit">
                        {item.day}
                      </span>
                      <p className="text-gray-700 flex-1">{item.schedule}</p>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-10 text-gray-400 text-sm">
                  불러온 여행 일정이 없습니다.
                </div>
              )}
            </div>
          </div>

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
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 relative z-0">
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
              작성 완료
            </button>
          </div>
        </div>
      </div>
      {/* 컴포넌트 하단에 모달 배치 */}
      <PlanSelectModal 
        isOpen={isPlanModalOpen} 
        onClose={() => setIsPlanModalOpen(false)} 
        onSelect={handlePlanSelect} 
      />
    </div>
  );
}