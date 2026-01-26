import { X, Clock, MapPin, ExternalLink } from "lucide-react";

interface TravelModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    name: string;
    category: string;
    duration: string;
    location: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
  };
}

export default function TravelModal({ isOpen, onClose, destination }: TravelModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col md:flex-row h-full max-h-[600px]">
          {/* 이미지 섹션 */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 콘텐츠 섹션 */}
          <div className="md:w-1/2 p-8 overflow-y-auto relative">
            {/* 닫기 버튼 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* 제목과 카테고리 */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-3xl font-bold text-gray-900">{destination.name}</h2>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  {destination.category}
                </span>
              </div>

              {/* 정보 태그 */}
              <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>여행시간: {destination.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>위치: {destination.location}</span>
                </div>
              </div>
            </div>

            {/* 간단 설명 */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              {destination.shortDescription}
            </p>

            {/* 상세 설명 */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {destination.fullDescription}
            </p>

            {/* 링크 버튼들 */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>네이버 링크</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>카카오 링크</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>구글 링크</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
