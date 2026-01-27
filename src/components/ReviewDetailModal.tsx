import { X, ThumbsUp, MessageCircle, Star, MapPin, Calendar, Users, Edit3 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export interface Review {
  id: number;
  author: string;
  date: string;
  tripType: string;
  duration: string;
  rating: number;
  title: string;
  content: string;
  image?: string;
  images?: string[];
  likes: number;
  isLiked?: boolean; // [추가] 좋아요 상태 확인용
  comments: { id: number; author: string; content: string }[];
  planName?: string;
  travelType?: string;
  itinerary?: { day: string; schedule: string }[];
}

interface ReviewDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit?: () => void;
  review: Review;
  onAddComment: (reviewId: number, content: string) => void;
  onLike: (reviewId: number) => void;
}

export default function ReviewDetailModal({ isOpen, onClose, onEdit, review, onAddComment, onLike }: ReviewDetailModalProps) {
  const [comment, setComment] = useState("");
  const [showComments] = useState(true);
  const navigate = useNavigate();
  const { userName, isLoggedIn } = useAuth(); // isLoggedIn은 실제 사용 시 필요할 수 있음

  if (!isOpen || !review) return null;

  const isMyReview = userName === review.author;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFollowPlan = () => {
    navigate("/planner", {
      state: {
        fromReview: true,
        surveyData: {
          packageName: review.planName || "제주도 힐링 여행",
          purpose: review.travelType ? 
            (review.travelType.includes("힐링") ? "느긋하게 쉬기(힐링)" :
             review.travelType.includes("맛집") ? "맛있는거 먹기(맛집)" :
             review.travelType.includes("감성") ? "예쁜 사진 남기기(감성)" :
             review.travelType.includes("액티비티") ? "신나게 놀기(액티비티)" :
             "느긋하게 쉬기(힐링)") :
            "느긋하게 쉬기(힐링)"
        },
        itinerary: review.itinerary
      }
    });
    onClose();
  };

  const handleSubmitComment = () => {
    if (!comment.trim()) return;
    onAddComment(review.id, comment);
    setComment("");
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
              {review.author[0]}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{review.author || "익명"}의 여행 플랜</p>
              <p className="text-sm text-gray-500">{review.planName || "제주도 힐링 여행"}</p>
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{review.title}</h2>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{review.tripType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{review.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{review.date}</span>
              </div>
            </div>
          </div>

          {/* 이미지 갤러리 */}
          <section>
            {review.images && review.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {review.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden aspect-video">
                    <img src={img} alt={`여행 사진 ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            ) : review.image ? (
              <div className="rounded-2xl overflow-hidden">
                <img src={review.image} alt="여행 사진" className="w-full h-auto" />
              </div>
            ) : null}
          </section>

          {/* 본문 */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{review.content}</p>
          </div>

          {/* 여행 일정 */}
          {review.itinerary && (
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">여행 플랜</h3>
                <button
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                  onClick={handleFollowPlan}
                >
                  따라가기 →
                </button>
              </div>
              <div className="space-y-3">
                {review.itinerary.map((item, idx) => (
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
          )}

          {/* 별점 */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">여행 만족도</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-12 h-12 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-4xl font-bold text-gray-900">{review.rating}.0</p>
          </div>

          {/* [수정] 좋아요 버튼 섹션 */}
          <div className="text-center py-4">
            {isMyReview ? (
              <button 
                onClick={onEdit}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Edit3 className="w-5 h-5" />
                <span>후기 수정하기</span>
              </button>
            ) : (
              <button 
                onClick={() => onLike(review.id)}
                className={`inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full shadow-md hover:shadow-lg transition-all border-2 ${
                  review.isLiked 
                    ? "bg-orange-400 border-orange-400 text-white" // 좋아요 On 스타일
                    : "bg-white border-orange-500 text-orange-500 hover:bg-orange-50" // 좋아요 Off 스타일
                }`}
              >
                <ThumbsUp className={`w-5 h-5 transition-colors ${review.isLiked ? "fill-white" : "fill-transparent"}`} />
                <span>좋아요 {review.likes}</span>
              </button>
            )}
          </div>

          {/* 댓글 섹션 */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              댓글 {review.comments?.length || 0}개
            </h3>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 작성해보세요..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button 
                  onClick={handleSubmitComment}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                  댓글 작성
                </button>
              </div>
            </div>

            {showComments && (
              <div className="space-y-4">
                {review.comments?.map((c) => (
                  <div key={c.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {c.author[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{c.author || "익명"}</p>
                      <p className="text-gray-700">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}