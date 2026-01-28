import { useState } from "react";
import { Star, ThumbsUp, MessageCircle, Edit3, Users, Calendar } from "lucide-react";
import ReviewWriteModal from "../components/ReviewWriteModal";
import ReviewEditModal from "../components/ReviewEditModal";
import ReviewDetailModal from "../components/ReviewDetailModal";
import { useAuth } from "../contexts/AuthContext";


import { travelTypeCategories } from "../data/commonType";
import { findItineraryByKey, findItineraryValueByKey, makeDuration, makeReviewItinerary } from "../data/commonFunction";

import { reviews, Review } from "../data/reviews";

// (reviews 데이터는 분량상 생략 - 기존 작성하신 데이터 그대로 두시면 됩니다!)
// *중요: TypeScript 에러 방지를 위해 reviews 상수에 : Review[] 타입을 붙여주는 것이 좋지만
// 지금은 아래 state 초기값에서 casting을 하므로 그대로 두셔도 됩니다.
import { destinations } from "../data/destinations";
import { restaurants } from "../data/restaurants";
import { accommodations } from "../data/accommodations";
const allDestinations = [
  ...destinations,
  ...restaurants,
  ...accommodations,
];
const thisTravelTypeCategories = ["전체", ...travelTypeCategories];

export default function TravelReviewPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [allReviews, setAllReviews] = useState<Review[]>(reviews as Review[]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const { isLoggedIn, userName, logout } = useAuth();

  // 수정 모달 open
  const handleEditReview = () => {
    setIsEditModalOpen(true);
  };

  // 수정 모달 close
  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
  };
  
  // 실제 리뷰 수정 로직
  const handleUpdateReview = (updatedData: any) => {
    // 1. 전체 리스트 업데이트
    setAllReviews(prev => prev.map(review => 
      review.id === updatedData.id ? { ...review, ...updatedData } : review
    ));

    // 2. 현재 보고 있는 상세 데이터도 업데이트 (상세창으로 돌아갔을 때 반영됨)
    setSelectedReview(prev => prev ? { ...prev, ...updatedData } : null);

    // 3. 수정창 닫기
    setIsEditModalOpen(false);
  };

  const filteredReviews = allReviews.filter((review) => {
    if (selectedCategory === "전체") return true;
    return review.itinerary.travelType === selectedCategory;
  });

  const handleAddReview = (newReviewData: any) => {
    const itineraryData = findItineraryByKey(newReviewData.planKey);
    const stringDate = new Date().toISOString().slice(0,10);
    const newReview = {
      id: Date.now(),
      author: userName || "익명",
      date: new Date().toLocaleDateString().replace(/\. /g, '.').replace(/\.$/, ''),
      tripType: itineraryData.travelType,
      duration: makeDuration(stringDate, itineraryData),
      rating: newReviewData.rating,
      title: newReviewData.name,
      content: newReviewData.content,
      images: newReviewData.images || [],
      likes: 0,
      itinerary: itineraryData,
      comments: [],
    } satisfies Review;
    setAllReviews([newReview, ...allReviews]);
    setIsWriteModalOpen(false);
  };

  const handleAddComment = (reviewId: number, content: string) => {
    const newComment = {
      id: Date.now(),
      author: userName || "익명",
      content: content,
    };
    
    setAllReviews(prev => prev.map(r => 
      r.id === reviewId ? { ...r, comments: [...(r.comments || []), newComment] } : r
    ));

    setSelectedReview(prev => {
      if (prev && prev.id === reviewId) {
        return { ...prev, comments: [...(prev.comments || []), newComment] };
      }
      return prev;
    });
  };

  // [수정] 좋아요 토글 핸들러
  const handleLikeReview = (reviewId: number) => {
    // 1. 목록 업데이트
    setAllReviews(prev => prev.map(r => {
      if (r.id === reviewId) {
        const isLiked = r.isLiked || false; // 현재 상태 확인
        return {
          ...r,
          isLiked: !isLiked, // 상태 뒤집기
          likes: isLiked ? r.likes - 1 : r.likes + 1 // 켜져있으면 빼고, 꺼져있으면 더하기
        };
      }
      return r;
    }));

    // 2. 현재 모달 업데이트 (화면 즉시 반영)
    setSelectedReview(prev => {
      if (prev && prev.id === reviewId) {
        const isLiked = prev.isLiked || false;
        return {
          ...prev,
          isLiked: !isLiked,
          likes: isLiked ? prev.likes - 1 : prev.likes + 1
        };
      }
      return prev;
    });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 히어로 헤더 */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">여행 후기</h1>
          <p className="text-lg opacity-90">실제 여행자들의 생생한 제주 여행 이야기</p>
        </div>
      </section>

      {/* 통계 카드 */}
      <section className="bg-white shadow-sm relative z-10">
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
            <div className="flex items-center gap-3 flex-wrap">
              {thisTravelTypeCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-white text-gray-700 box-shadow-gray-300 hover:box-shadow-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsWriteModalOpen(true)}
              disabled={!isLoggedIn}
              className={`flex items-center gap-2 px-5 py-2 font-medium rounded-xl transition-colors ${
                isLoggedIn ? "bg-orange-100 hover:bg-orange-200 text-orange-600 cursor-pointer" 
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
                          {review.itinerary.travelType && (
                            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                              #{review.itinerary.travelType}
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

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => {
                        // 점수 계산 (예: 2.5점일 때 3번째 별은 50%)
                        const fillPercentage = Math.max(0, Math.min(100, (review.rating - i) * 100));
                        
                        return (
                          <div key={i} className="relative w-5 h-5">
                            {/* 1. 회색 배경 별 (고정) */}
                            <Star className="absolute top-0 left-0 w-5 h-5 text-gray-200 fill-gray-200" />
                            
                            {/* 2. 노란색 채워지는 별 (width로 마스킹) */}
                            <div 
                              className="absolute top-0 left-0 h-full overflow-hidden" 
                              style={{ width: `${fillPercentage}%` }}
                            >
                              {/* [핵심] 여기서 w-full이 아니라 w-5 h-5로 고정해야 찌그러지지 않고 잘립니다! */}
                              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{review.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{review.content}</p>

                  {/* 이미지 섹션 */}
                  {review.images.length > 1 ? (
                    <div className="mt-4">
                      <div className={`grid gap-2 rounded-xl overflow-hidden ${
                        (review.images?.length ?? 0) === 1 ? "grid-cols-1 aspect-[16/9]" : 
                        (review.images?.length ?? 0) === 2 ? "grid-cols-2 aspect-[16/5]" : 
                        "grid-cols-3 aspect-[16/5]"
                      }`}>
                        {review.images?.slice(0, 3).map((img, idx) => (
                          <div key={idx} className="relative w-full h-full overflow-hidden bg-gray-200">
                            <img
                              src={img}
                              alt={`여행 사진 ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {idx === 2 && (review.images?.length ?? 0) > 3 && (
                              <div 
                                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                              >
                                <span className="text-xl font-bold">+{(review.images?.length ?? 0) - 3}</span>
                                <span className="text-xs font-medium text-white/80">더보기</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : review.images.length > 0 ? (
                    <div className="rounded-xl overflow-hidden mt-4">
                      <img 
                        src={review.images[0]} 
                        alt="여행 사진"
                        className="w-full h-auto max-h-96 object-cover"
                      />
                    </div>
                  ) : null}
                </div>

                {/* 푸터 */}
                <div className="px-6 py-4 bg-gray-50 flex items-center gap-6">
                  {/* [수정] 좋아요 상태에 따른 색상 토글 (CSS만 살짝 조정) */}
                  <button className={`flex items-center gap-2 transition-colors ${review.isLiked ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}>
                    <ThumbsUp className={`w-5 h-5 ${review.isLiked ? 'fill-orange-500' : ''}`} />
                    <span className="text-sm font-medium">{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{review.comments?.length || 0}</span>
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500">해당 카테고리의 후기가 아직 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* 모달들 */}
      {/*상세 모달: 수정 중(isEditModalOpen)이 아닐 때만 보여줌 */}
      {selectedReview && !isEditModalOpen && (
        <ReviewDetailModal
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
          review={selectedReview}
          onEdit={handleEditReview}
          onAddComment={handleAddComment}
          onLike={handleLikeReview}
        />
      )}

      <ReviewWriteModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onSubmit={handleAddReview}
      />

      {/* [수정] 수정 모달: onSubmit 연결 */}
      {isEditModalOpen && selectedReview && (
        <ReviewEditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEdit}
          review={selectedReview}
          onSubmit={handleUpdateReview}
        />
      )}
    </div>
  );
}