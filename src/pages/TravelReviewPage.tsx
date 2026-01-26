import { useState } from "react";
import { Star, ThumbsUp, MessageCircle, Edit3, Users, Calendar } from "lucide-react";
import ReviewDetailModal from "../components/ReviewDetailModal";
import ReviewWriteModal from "../components/ReviewWriteModal";
import ReviewEditModal from "../components/ReviewEditModal";
import { useAuth } from "../contexts/AuthContext";

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
    travelType: "힐링",
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
    travelType: "액티비티",
    itinerary: [
      { day: "1차", schedule: "한라산 등반" },
      { day: "2일차", schedule: "휴식 및 맛집 투어" },
      { day: "3일차", schedule: "공항" }
    ]
  },
  {
    id: 3,
    author: "최XX",
    date: "2026.01.20",
    tripType: "가족",
    duration: "3박 4일",
    rating: 5,
    title: "부모님과 함께한 최고의 효도 여행이었어요!",
    content: "처음으로 부모님 모시고 가는 제주도라 걱정이 많았는데, PLAN Jeju의 추천 코스 덕분에 칭찬 많이 들었습니다. 특히 주상절리와 천제연 폭포 동선이 너무 좋았어요. 이동 거리도 적당하고 부모님이 힘들어하지 않으면서도 제주의 절경을 만끽할 수 있었습니다.",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg", 
      "../src/images/img6.jpg", 
      "../src/images/img5.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img1.jpg"  
    ],
    likes: 156,
    comments: 42,
    planName: "부모님 맞춤 힐링 투어",
    travelType: "힐링",
    itinerary: [
      { day: "1일차", schedule: "공항 → 서귀포 숙소 → 주상절리 → 천제연 폭포" },
      { day: "2일차", schedule: "카멜리아 힐 → 오설록 티 뮤지엄 → 갈치조림 맛집" },
      { day: "3일차", schedule: "정방폭포 → 올레시장 → 호텔 휴식" },
      { day: "4일차", schedule: "공항" }
    ]
  },
  {
    id: 4,
    author: "정XX",
    date: "2026.01.22",
    tripType: "친구",
    duration: "2박 3일",
    rating: 5,
    title: "먹다 끝난 제주 맛집 정복기! 흑돼지는 진리입니다.",
    content: "이번 여행의 테마는 오직 '맛'이었어요. 추천해주신 애월쪽 흑돼지집이랑 함덕 해녀의 집 진짜 대박입니다. 뷰도 환상적이고 맛은 더 환상적이었어요. 특히 웨이팅 꿀팁 알려주신 덕분에 시간 낭비 없이 완벽하게 먹방 찍고 왔습니다!",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1080", // 제주 음식/고기 느낌
    likes: 210,
    comments: 58,
    planName: "제주 먹방 올인원",
    travelType: "맛집",
    itinerary: [
      { day: "1일차", schedule: "함덕 해수욕장 → 해녀의 집 → 고기국수" },
      { day: "2일차", schedule: "애월 카페거리 → 흑돼지 구이 → 루프탑 바" },
      { day: "3일차", schedule: "동문시장 투어 → 공항" }
    ]
  },
  {
    id: 5,
    author: "강XX",
    date: "2026.01.24",
    tripType: "솔로",
    duration: "1박 2일",
    rating: 4,
    title: "혼자 떠난 제주, 감성 카페에서 힐링하고 왔어요.",
    content: "짧은 일정이었지만 오로지 나만을 위한 시간을 보냈습니다. 구좌읍 쪽 조용한 카페들을 추천받았는데, 통창 너머로 보이는 에메랄드빛 바다를 보며 책 읽던 시간이 이번 여행 최고의 순간이었어요. 혼자 가기 좋은 숙소 추천도 정말 만족스러웠습니다.",
    images: [
      "../src/images/img3.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img_food7.jpg", 
      "../src/images/img8.jpg",
      "../src/images/img7.jpg"
    ],
    likes: 85,
    comments: 12,
    planName: "나홀로 제주 감성 여행",
    travelType: "감성",
    itinerary: [
      { day: "1일차", schedule: "공항 → 구좌읍 카페 → 해안도로 산책 → 독립서점" },
      { day: "2일차", schedule: "평대리 바다 → 소품샵 투어 → 공항" }
    ]
  },
  {
    id: 6,
    author: "한XX",
    date: "2026.01.25",
    tripType: "커플",
    duration: "2박 3일",
    rating: 5,
    title: "우도에서 전기차 타고 달린 추억 잊지 못할 거예요.",
    content: "우도 일정 넣을까 말까 고민했는데 안 갔으면 후회할 뻔했습니다! 추천해주신 대로 아침 일찍 배 타고 들어갔더니 사람도 적고 여유로웠어요. 검멀레 해변에서 먹은 땅콩 아이스크림은 진짜 역대급이었습니다. 날씨까지 도와줘서 사진이 다 화보처럼 나왔네요.",
    images: [
       "../src/images/img4.jpg",  
       "../src/images/img5.jpg",   // 제주 해안 도로
    ],
    likes: 189,
    comments: 31,
    planName: "우도 & 동부 완전정복",
    travelType: "액티비티",
    itinerary: [
      { day: "1일차", schedule: "성산항 → 우도 입도 → 전기차 투어 → 검멀레 해변" },
      { day: "2일차", schedule: "비자림 삼림욕 → 월정리 서핑 → 바비큐" },
      { day: "3일차", schedule: "공항" }
    ]
  }
];

export default function TravelReviewPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // 1. 후기 데이터를 상태로 관리 (초기값은 기존 mock 데이터)
  const [allReviews, setAllReviews] = useState(reviews);

  const { isLoggedIn, userName, logout } = useAuth();

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

  // 필터링 로직 수정 (allReviews 기준)
  const filteredReviews = allReviews.filter((review) => {
    if (selectedCategory === "전체") return true;
    return review.travelType === selectedCategory;
  });

  // 후기 추가 핸들러
  const handleAddReview = (newReviewData: any) => {
    const newReview = {
      id: Date.now(), // 중복 방지를 위해 timestamp 사용
      author: userName || "익명",
      date: new Date().toLocaleDateString().replace(/\. /g, '.').replace(/\.$/, ''),
      tripType: newReviewData.selectedPlan?.type || "자유여행",
      duration: "일정 참고",
      rating: newReviewData.rating,
      title: newReviewData.title,
      content: newReviewData.content,
      // 핵심 수정: images 배열에 데이터가 있을 때만 저장
      images: newReviewData.images.length > 0 ? newReviewData.images : [], 
      // image 필드는 제거하거나, images[0]만 참조하도록 수정
      likes: 0,
      comments: 0,
      planName: newReviewData.selectedPlan?.title || "선택된 플랜 없음",
      travelType: newReviewData.selectedPlan?.type || "전체",
      itinerary: newReviewData.selectedPlan?.itinerary || []
    };
    setAllReviews([newReview, ...allReviews]); // 새 후기를 맨 앞에 추가
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
            {}
            <button 
              onClick={() => setIsWriteModalOpen(true)}
              disabled={!isLoggedIn}
              className={`flex items-center gap-2 px-5 py-2 font-medium rounded-xl transition-colors ${
                isLoggedIn ? "bg-orange-100 hover:bg-orange-200 text-orange-600 cursor-pointer" // 로그인 시 스타일 
                            : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-70"
              }`}
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
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
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
                {review.images && review.images.length > 0 ? (
                    /* 1. 새로 작성한 후기(배열)가 있는 경우 */
                    <div className="mt-4">
                      <div className={`grid gap-2 rounded-xl overflow-hidden ${
                        review.images.length === 1 ? "grid-cols-1 aspect-[16/9]" : 
                        review.images.length === 2 ? "grid-cols-2 aspect-[16/5]" : 
                        "grid-cols-3 aspect-[16/5]"
                      }`}>
                        {review.images.slice(0, 3).map((img, idx) => (
                          <div key={idx} className="relative w-full h-full overflow-hidden bg-gray-200">
                            <img
                              src={img}
                              alt={`여행 사진 ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {idx === 2 && review.images.length > 3 && (
                              <div 
                                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                              >
                                <span className="text-xl font-bold">+{review.images.length - 3}</span>
                                <span className="text-xs font-medium text-white/80">더보기</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : review.image ? (
                    /* 2. 배열은 없지만 단일 image 필드가 있는 경우 (기존 mock 데이터 대응) */
                    <div className="rounded-xl overflow-hidden mt-4">
                      <img 
                        src={review.image} 
                        alt="여행 사진"
                        className="w-full h-auto max-h-96 object-cover"
                      />
                    </div>
                  ) : null
                }
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
            ))
          ) : (
            /* [추가] 필터링 결과가 없을 때 보여줄 화면 */
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500">해당 카테고리의 후기가 아직 없습니다.</p>
            </div>
          )}
          
        </div>
      </section>

      {/* 모달들 */}
      {selectedReview && (
        <ReviewDetailModal
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
          review={selectedReview}
          onEdit={handleEditReview}
        />
      )}

      <ReviewWriteModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onSubmit={handleAddReview} // 작성 완료 시 실행될 함수 전달
      />

      <ReviewEditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEdit}
        review={selectedReview || reviews[0]}
      />
    </div>
  );
}