// src/pages/TravelListPage.tsx
import { useMemo, useState } from "react";
import { Search, Clock, MapPin, Filter, Calendar } from "lucide-react";
import TravelModal from "../components/TravelModal";
import { destinations } from "../data/destinations";
import { destinationCategories } from "../data/commonType";

const categories = [
  "전체", 
  ...destinationCategories
] as const;

export default function TravelListPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<(typeof destinations)[number] | null>(null);

  // ✅ destinations.ts 기반으로 기본값 보정 (누락 필드 대비)
  const normalizedDestinations = useMemo(() => {
    return destinations.map((d: any) => ({
      ...d,
      price: d.price ?? 0,
      hours: d.hours ?? "09:00 - 18:00 (연중무휴)",
      tags: d.tags ?? [d.category],
      shortDescription: d.shortDescription ?? (d.fullDescription ? String(d.fullDescription).slice(0, 40) + "..." : ""),
    }));
  }, []);

  // ✅ 필터링
  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return normalizedDestinations.filter((dest: any) => {
      const matchesCategory = selectedCategory === "전체" || dest.category === selectedCategory;

      const matchesSearch =
        q.length === 0 ||
        String(dest.name).toLowerCase().includes(q) ||
        String(dest.shortDescription).toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [normalizedDestinations, selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20">
      {/* ✅ 히어로 헤더 (네가 말한 예쁜 버전 유지) */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">제주도 여행지</h1>
          <p className="text-lg opacity-90">제주의 아름다움을 발견하세요</p>
        </div>
      </section>

      {/* ✅ 검색 및 필터 섹션 (네가 올린 코드 그대로) */}
      <section className="bg-white shadow-sm  relative z-10">
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
                      : "bg-white text-gray-700 box-shadow-gray-300 hover:box-shadow-orange-500"
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

      {/* ✅ 카드 그리드 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination: any) => (
              <div
                key={destination.id}
                onClick={() => setSelectedDestination(destination)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-lg shadow-sm">
                      {destination.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{destination.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{destination.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-orange-600">
                      <span className="text-xs border border-orange-600 rounded-full w-4 h-4 flex items-center justify-center">
                        ₩
                      </span>
                      <span>{destination.price === 0 ? "무료" : `${Number(destination.price).toLocaleString()}원`}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">상세보기 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-16 text-center text-gray-500">
              <Filter className="w-14 h-14 mx-auto mb-3 text-gray-300" />
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </section>

      {/* ✅ 모달 */}
      {selectedDestination && (
        <TravelModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination as any}
        />
      )}
    </div>
  );
}
