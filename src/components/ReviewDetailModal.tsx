import { X, ThumbsUp, MessageCircle, Star, MapPin, Calendar, Users, ExternalLink, Edit3 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface ReviewDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit?: () => void;
  review: {
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
    comments: number;
    planName?: string;
    travelType?: string;
    itinerary?: Array<{ day: string; schedule: string }>;
  };
}

export default function ReviewDetailModal({ isOpen, onClose, onEdit, review }: ReviewDetailModalProps) {
  const [comment, setComment] = useState("");
  const [showComments] = useState(true);
  const navigate = useNavigate();
  const { userName } = useAuth();

  if (!isOpen) return null;

  // 현재 로그인한 사용자가 작성한 리뷰인지 확인
  const isMyReview = userName === review.author;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFollowPlan = () => {
    // 후기의 여행 플랜을 플래너 페이지로 전달
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

  const mockComments = [
    { id: 1, author: "이XX", content: "저도 다음주에 제주 가는데 참고할게요!" },
    { id: 2, author: "최XX", content: "사진 너무 예쁘네요 ㅎㅎ" },
    { id: 3, author: "박XX", content: "일정 공유 감사합니다!" }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto my-8">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
              {review.author[0]}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{review.author}의 여행 플랜</p>
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
          {(review.image || review.images) && (
            <div className="space-y-4">
              {review.image && (
                <div className="rounded-2xl overflow-hidden">
                  <img src={review.image} alt="여행 사진" className="w-full h-auto" />
                </div>
              )}
              {review.images && (
                <div className="grid grid-cols-2 gap-4">
                  {review.images.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden aspect-video">
                      <img src={img} alt={`여행 사진 ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

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

          {/* 추천 버튼 */}
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
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                <ThumbsUp className="w-5 h-5" />
                <span>이 후기가 도움이 되었어요</span>
              </button>
            )}
          </div>

          {/* 댓글 섹션 */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              댓글 {mockComments.length}개
            </h3>

            {/* 댓글 작성 */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 작성해보세요..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors">
                  댓글 작성
                </button>
              </div>
            </div>

            {/* 댓글 리스트 */}
            {showComments && (
              <div className="space-y-4">
                {mockComments.map((c) => (
                  <div key={c.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {c.author[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{c.author}</p>
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