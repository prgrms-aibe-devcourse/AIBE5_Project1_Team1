// src/components/AddDestinationModal.tsx
import { X, Search, Clock, Calendar, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

const PRIMARY_TABS = ["전체", "여행지", "숙소", "식당"] as const;
type PrimaryTab = (typeof PRIMARY_TABS)[number];

const SECONDARY_CATEGORIES: Record<PrimaryTab, string[]> = {
  전체: ["전체"],
  여행지: ["전체", "자연", "해변", "섬", "드라이브", "테마파크"],
  식당: ["전체", "한식", "해산물", "카페", "고기", "흑돼지", "양식", "시장"],
  숙소: ["전체", "호텔", "리조트", "게스트하우스", "펜션", "스테이"],
};

type AnyItem = {
  id: number | string;
  name: string;
  category?: string;
  location?: string;
  duration?: string;
  price?: number | string;
  hours?: string;
  shortDescription?: string;
  fullDescription?: string;
  image?: string;
};

interface AddDestinationModalProps {
  isOpen: boolean;
  onClose: () => void;

  // ✅ item + 1차탭 타입 같이 넘김
  onAdd: (item: AnyItem, type: PrimaryTab) => void;

  // ✅ 데이터 3종류
  destinations: AnyItem[];
  restaurants: AnyItem[];
  accommodations: AnyItem[];

  // (선택) 헤더 타이틀 바꾸고 싶을 때
  title?: string;
}

export default function AddDestinationModal({
  isOpen,
  onClose,
  onAdd,
  destinations,
  restaurants,
  accommodations,
  title = "일정 추가",
}: AddDestinationModalProps) {
  const [selectedTab, setSelectedTab] = useState<PrimaryTab>("전체");
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleTabChange = (tab: PrimaryTab) => {
    setSelectedTab(tab);
    setSelectedCategory("전체");
    setSearchQuery("");
  };

  const currentCategories = SECONDARY_CATEGORIES[selectedTab] ?? ["전체"];

  // ✅ 2차 카테고리 노출 조건: '전체' 탭이 아닐 때만
  const showSecondary = selectedTab !== "전체";

  const currentList = useMemo(() => {
    if (selectedTab === "여행지") return destinations;
    if (selectedTab === "식당") return restaurants;
    if (selectedTab === "숙소") return accommodations;

    // 전체 탭이면 3개 합쳐서 보여주기
    return [
      ...destinations.map((d) => ({ ...d, __type: "여행지" as const })),
      ...accommodations.map((a) => ({ ...a, __type: "숙소" as const })),
      ...restaurants.map((r) => ({ ...r, __type: "식당" as const })),
    ];
  }, [selectedTab, destinations, restaurants, accommodations]);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return (currentList as any[]).filter((item: any) => {
      const category = item.category || "기타";
      const matchesCategory =
        selectedCategory === "전체" || category === selectedCategory;

      const haystack = `${item.name ?? ""} ${item.shortDescription ?? ""} ${
        item.location ?? ""
      }`.toLowerCase();

      const matchesSearch = q === "" ? true : haystack.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [currentList, selectedCategory, searchQuery]);

  const resultCountText = useMemo(() => {
    if (selectedTab === "전체") return `${filteredList.length}개 결과`;
    return `${filteredList.length}개의 ${selectedTab}`;
  }, [selectedTab, filteredList.length]);

  const getBadgeText = (item: any) => {
    if (selectedTab === "전체") return item.__type ?? "";
    return item.category ?? "";
  };

  const getPlaceholder = () => {
    if (selectedTab === "식당") return "식당 이름/설명으로 검색...";
    if (selectedTab === "숙소") return "숙소 이름/설명으로 검색...";
    if (selectedTab === "여행지") return "여행지 이름/설명으로 검색...";
    return "이름/설명으로 검색...";
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-6 border-b border-gray-200 space-y-4">
          {/* ✅ 1) 검색바를 맨 위로 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={getPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          {/* ✅ 2) 1차 탭 */}
          <div className="flex items-center gap-2 flex-wrap">
            {PRIMARY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedTab === tab
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ✅ 3) 2차 카테고리: 항상 렌더링 + opacity로만 숨김 (줄 안 밀림) */}
          <div
            className={[
              "flex items-center gap-2 flex-wrap",
              "h-[56px]", // ✅ 고정 높이 (필요하면 64px, 72px로 조절)
              "transition-opacity",
              selectedTab === "전체"
                ? "opacity-0 pointer-events-none"
                : "opacity-100",
            ].join(" ")}
          >
            {currentCategories.map((category) => (
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
            <span className="font-bold text-orange-500">{resultCountText}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {filteredList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredList.map((item: any) => (
                <div
                  key={`${item.__type ?? selectedTab}-${item.id}`}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => {
                    const typeToSend: PrimaryTab =
                      selectedTab === "전체"
                        ? (item.__type as PrimaryTab)
                        : selectedTab;
                    onAdd(item, typeToSend);
                    onClose();
                  }}
                >
                  <img
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={item.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                        {item.name}
                      </h3>

                      {getBadgeText(item) ? (
                        <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs font-medium flex-shrink-0 ml-2">
                          {getBadgeText(item)}
                        </span>
                      ) : null}
                    </div>

                    {/* ✅ (선택) 설명은 1줄만 */}
                    {item.shortDescription ? (
                      <p className="text-sm text-gray-600 line-clamp-1 mb-4">
                        {item.shortDescription}
                      </p>
                    ) : (
                      <div className="mb-4" />
                    )}

                    {/* ✅ 아이콘 + 정보 4종 */}
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>{item.duration ?? "시간 정보 없음"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>{item.hours ?? "운영시간 정보 없음"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{item.location ?? "위치 정보 없음"}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 flex items-center justify-center border-2 border-orange-500 rounded-full text-[9px] font-bold text-orange-500">
                          ₩
                        </div>
                        <span>
                          {typeof item.price === "number"
                            ? item.price === 0
                              ? "무료"
                              : `${item.price.toLocaleString()}원`
                            : item.price
                            ? String(item.price)
                            : "가격 정보 없음"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-300 mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600 text-sm">
                다른 검색어나 카테고리를 시도해보세요
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
