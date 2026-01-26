import { useState } from "react";
import { Star, ThumbsUp, MessageCircle, Edit3, Users, Calendar } from "lucide-react";
import ReviewDetailModal from "../components/ReviewDetailModal";
import ReviewWriteModal from "../components/ReviewWriteModal";
import ReviewEditModal from "../components/ReviewEditModal";

const categories = ["전체", "액티비티", "힐링", "맛집", "감성"];

const reviews = [
  {
    id: 1,
    author: "김XX",
    date: "2026.01.10",
    tripType: "커플",
    duration: "2박 3일",
    rating: 5,
    title: "성산일출봉 일출이 정말 환상적이었어요!",
    content: "PLAN Jeju 덕분에 제주 여행을 너무 편하게 다녀왔습니다. 특히 성산일출봉 일정이 완벽했어요. 새벽 일찍 출발했는데, 일출 시간 계산까지 다 되어 있어서 최고의 일출을 볼 수 있었습니다. 추천 일정대로 움직였더니 시간도 절약되고 좋았어요.",
    image: "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: 127,
    comments: 23,
    planName: "제주 힐링 2박 3일",
    travelType: "힐링형",
    itinerary: [
      { day: "1차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
      { day: "2일차", schedule: "성산일출봉 → 섭지코지 → 해산물 맛집 → 숙소" },
      { day: "3일차", schedule: "공항" }
    ]
  },
  {
    id: 2,
    author: "박XX",
    date: "2026.01.08",
    tripType: "친구",
    duration: "2박 3일",
    rating: 4,
    title: "한라산 등반 코스 추천 감사합니다",
    content: "등산 초보자인데 PLAN Jeju에서 추천해준 한라산 코스가 딱 맞았어요. 난이도도 적당하고, 주변 맛집 정보도 정확해서 하산 후 제주 흑돼지도 맛있게 먹었습니다. 다음에 제주 가면 또 이용할게요!",
    images: [
      "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    likes: 98,
    comments: 17,
    planName: "제주 등산 여행",
    travelType: "액티비티형",
    itinerary: [
      { day: "1차", schedule: "한라산 등반" },
      { day: "2일차", schedule: "휴식 및 맛집 투어" },
      { day: "3일차", schedule: "공항" }
    ]
  }
];

export default function TravelReviewPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditReview = () => {
    setSelectedReview(null);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    if (selectedReview) {
      // 수정 완료 후 다시 상세 보기로 돌아가기
      setTimeout(() => {
        // selectedReview 유지하여 다시 열기
      }, 100);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 히어로 헤더 */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">여행 후기</h1>
          <p className="text-xl opacity-90">실제 여행자들의 생생한 제주 여행 이야기</p>
        </div>
      </section>

      {/* 통계 카드 */}
      <section className="bg-white shadow-sm -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 text-center">
              <p className="text-4xl font-bold text-orange-500 mb-2">1,248</p>
              <p className="text-gray-600">총 후기</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-100 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <p className="text-4xl font-bold text-yellow-500">4.8</p>
                <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-gray-600">평균 평점</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 text-center">
              <p className="text-4xl font-bold text-green-500 mb-2">98%</p>
              <p className="text-gray-600">만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* 필터 및 작성 버튼 */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* 카테고리 필터 */}
            <div className="flex items-center gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 후기 작성 버튼 */}
            <button 
              onClick={() => setIsWriteModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2 bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium rounded-xl transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>후기작성</span>
            </button>
          </div>
        </div>
      </section>

      {/* 후기 리스트 */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {reviews.map((review) => (
            <article 
              key={review.id} 
              onClick={() => setSelectedReview(review)}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
            >
              {/* 헤더 */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-gray-900">{review.author}</p>
                        <span className="text-sm text-gray-500">{review.date}</span>
                        {review.travelType && (
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                            #{review.travelType}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{review.tripType}</span>
                        <span>•</span>
                        <Calendar className="w-4 h-4" />
                        <span>{review.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* 별점 */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* 제목 */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{review.title}</h3>

                {/* 내용 */}
                <p className="text-gray-700 leading-relaxed mb-4">{review.content}</p>

                {/* 이미지 */}
                {review.image && (
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={review.image} 
                      alt="여행 사진"
                      className="w-full h-auto max-h-96 object-cover"
                    />
                  </div>
                )}

                {review.images && (
                  <div className="grid grid-cols-2 gap-3">
                    {review.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden aspect-video">
                        <img
                          src={img}
                          alt={`여행 사진 ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 푸터 */}
              <div className="px-6 py-4 bg-gray-50 flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm font-medium">{review.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{review.comments}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 모달들 */}
      {selectedReview && (
        <ReviewDetailModal
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
          onEdit={handleEditReview}
          review={selectedReview}
        />
      )}

      <ReviewWriteModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
      />

      <ReviewEditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEdit}
        review={selectedReview || reviews[0]}
      />
    </div>
  );
}