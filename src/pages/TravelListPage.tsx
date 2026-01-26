import { useState } from "react";
import { Search, Clock, MapPin, Filter } from "lucide-react";
import TravelModal from "../components/TravelModal";
import { destinations } from "../data/destinations";

const categories = ["전체", "자연", "해변", "섬", "드라이브", "테마파크"];

// 더미 데이터로 확장
const allDestinations = [
  ...destinations,
  {
    id: 4,
    name: "우도",
    category: "섬",
    duration: "4~5시간",
    location: "제주시",
    shortDescription: "제주 동쪽의 작은 섬으로 아름다운 해안선과 해녀문화를 경험할 수 있습니다.",
    fullDescription: `우도는 제주 본섬에서 배로 15분 거리에 있는 작은 섬입니다.
소가 누워있는 형상을 닮았다고 하여 우도라는 이름이 붙었습니다.
에메랄드빛 바다와 흰 모래사장, 땅콩 아이스크림으로 유명합니다.
자전거나 전기차를 타고 섬을 한 바퀴 도는 것이 인기 있는 코스입니다.`,
    image: "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["섬", "해변", "자전거"]
  },
  {
    id: 5,
    name: "섭지코지",
    category: "자연",
    duration: "2~3시간",
    location: "서귀포시",
    shortDescription: "아름다운 해안절벽과 등대가 어우러진 제주의 대표 드라마 촬영지.",
    fullDescription: `섭지코지는 성산일출봉 근처에 위치한 아름다운 해안 절벽입니다.
푸른 바다와 기암절벽, 등대가 어우러져 환상적인 풍경을 자랑합니다.
올레길 1코스의 종점이자 시작점으로도 유명합니다.
다양한 드라마와 영화 촬영지로 사용되어 포토존이 많습니다.`,
    image: "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["절벽", "등대", "사진명소"]
  },
  {
    id: 6,
    name: "만장굴",
    category: "자연",
    duration: "1~2시간",
    location: "제주시",
    shortDescription: "세계에서 가장 긴 용암동굴 중 하나로 신비로운 지하 세계를 경험할 수 있습니다.",
    fullDescription: `만장굴은 약 30만년 전 형성된 세계적인 용암동굴입니다.
총 길이 7.4km 중 1km 구간이 일반인에게 개방되어 있습니다.
천연기념물이자 유네스코 세계자연유산으로 등재되어 있습니다.
용암석순, 용암종유 등 독특한 지질구조를 관찰할 수 있습니다.`,
    image: "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["동굴", "유네스코", "지질"]
  }
];

export default function TravelListPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<typeof allDestinations[0] | null>(null);

  const filteredDestinations = allDestinations.filter(dest => {
    const matchesCategory = selectedCategory === "전체" || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 히어로 헤더 */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">제주도 여행지</h1>
          <p className="text-xl opacity-90">제주의 아름다움을 발견하세요</p>
        </div>
      </section>

      {/* 검색 및 필터 섹션 */}
      <section className="bg-white shadow-sm -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {/* 검색바 */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="여행지 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg"
              />
            </div>

            {/* 카테고리 필터 */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 결과 카운트 */}
            <div className="text-center">
              <p className="text-gray-600">
                <span className="font-bold text-orange-500">{filteredDestinations.length}개</span>의 여행지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 여행지 그리드 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                onClick={() => setSelectedDestination(destination)}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
              >
                {/* 이미지 */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      {destination.category}
                    </span>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {destination.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {destination.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 결과 없음 */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600">다른 검색어나 카테고리를 시도해보세요</p>
            </div>
          )}
        </div>
      </section>

      {/* 모달 */}
      {selectedDestination && (
        <TravelModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination}
        />
      )}
    </div>
  );
}
