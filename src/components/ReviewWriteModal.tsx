import { X, Upload, Star, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

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
  const [images, setImages] = useState<string[]>([]);

  if (!isOpen) return null;

  // 외부 클릭으로 닫히지 않도록 수정
  const handleBackdropClick = (e: React.MouseEvent) => {
    // 배경 클릭해도 닫히지 않음
    return;
  };

  const handleSubmit = () => {
    onSubmit?.({ title, content, rating, images });
    onClose();
  };

  const mockItinerary = [
    { day: "1일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
    { day: "2일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 저시기숙소" },
    { day: "3일차", schedule: "공항" }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto my-8">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
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
          {/* 여행 플랜 정보 */}
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <p className="text-gray-700 font-medium">
              <span className="text-orange-600 font-bold">김아무개</span>의 여행플랜: 
              <span className="text-gray-900 ml-2">[여행플랜이름]</span>
            </p>
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
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-lg transition-colors text-sm font-medium">
                <Plus className="w-4 h-4" />
                <span>추가</span>
              </button>
            </div>
            
            {images.length === 0 ? (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-orange-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">클릭하거나 드래그하여 사진을 업로드하세요</p>
                <p className="text-sm text-gray-500">최대 10장까지 업로드 가능합니다</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative group aspect-video rounded-xl overflow-hidden">
                    <img src={img} alt={`업로드 ${idx + 1}`} className="w-full h-full object-cover" />
                    <button className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button className="aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-orange-500 transition-colors">
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

          {/* 여행 플랜 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-900">여행 플랜</label>
              <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                불러오기
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <div className="inline-block px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">
                # 액티비티형
              </div>
              {mockItinerary.map((item, idx) => (
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

          {/* 별점 */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-3">별점</label>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setHoveredRating(i + 1)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(i + 1)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 transition-colors ${
                        i < (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-4xl font-bold text-gray-900">{rating}.0</p>
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
              작성 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}