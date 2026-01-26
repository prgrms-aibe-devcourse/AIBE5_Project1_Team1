import { X, Search } from "lucide-react";
import { useState } from "react";

const categories = ["전체", "자연", "해변", "섬", "드라이브", "테마파크"];

interface AddDestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (destination: any) => void;
  destinations: any[];
}

export default function AddDestinationModal({ 
  isOpen, 
  onClose, 
  onAdd,
  destinations
}: AddDestinationModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 본문(shortDescription)만 검색
  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === "전체" || dest.category === selectedCategory;
    const matchesSearch = dest.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">여행지 선택</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-6 border-b border-gray-200 space-y-4">
          {/* 검색바 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="여행지 설명으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          {/* 카테고리 필터 */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 결과 카운트 */}
          <div className="text-sm text-gray-600">
            <span className="font-bold text-orange-500">{filteredDestinations.length}개</span>의 여행지
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => {
                    onAdd(destination);
                    onClose();
                  }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">{destination.name}</h3>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs font-medium flex-shrink-0 ml-2">
                        {destination.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{destination.shortDescription}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>⏱️ {destination.duration}</span>
                      <span>📍 {destination.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-300 mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600 text-sm">다른 검색어나 카테고리를 시도해보세요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
