import { Link, useNavigate } from "react-router";
import { Calendar, MapPin, Share2, FileText, Eye } from "lucide-react";
import { useState } from "react";
import ReviewWriteModal from "../components/ReviewWriteModal";
import ReviewDetailModal from "../components/ReviewDetailModal";
import SharePlanModal from "../components/SharePlanModal";

export default function MyPlanPage() {
  const navigate = useNavigate();
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [selectedPlanForReview, setSelectedPlanForReview] = useState<number | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedPlanForShare, setSelectedPlanForShare] = useState<typeof plans[0] | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<any>(null);

  const rawPlans = [
    {
      id: 1,
      name: "제주 동부 힐링 여행",
      date: "2024.03.15 ~ 2024.03.17",
      hasReview: true, // 리뷰 작성 완료
      travelType: "힐링형",
      images: [
        "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=200",
        "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?w=200",
        "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=200"
      ],
      totalPlaces: 11
    },
    {
      id: 2,
      name: "제주 서부 맛집 투어",
      date: "2026.04.20 ~ 2026.04.22",
      hasReview: false, // 리뷰 미작성
      travelType: "맛집형",
      images: [
        "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?w=200",
        "https://images.unsplash.com/photo-1758327740342-4e705edea29b?w=200",
        "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=200"
      ],
      totalPlaces: 9
    },
    {
      id: 3,
      name: "여름 제주 해변 여행",
      date: "2024.07.10 ~ 2024.07.13",
      hasReview: false,
      travelType: "감성형",
      images: [
        "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=200",
        "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?w=200",
        "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?w=200"
      ],
      totalPlaces: 7
    },
  ];

   // 여행 완료 여부 판단 함수
  const isPlanCompleted = (dateRange: string) => {
    const endDateStr = dateRange.split("~")[1]?.trim(); 
    if (!endDateStr) return false;

    const [year, month, day] = endDateStr.split(".").map(Number);
    const endDate = new Date(year, month - 1, day);
    const today = new Date();

    // 시간 제거해서 날짜만 비교
    endDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return endDate < today;
  };


  
  // 여행 완료 여부를 포함한 플랜 데이터 생성
  const plans = rawPlans.map((plan) => ({
  ...plan,
  isCompleted: isPlanCompleted(plan.date),
}));


  // 플랜 ID로 리뷰 데이터를 찾는 mock 함수
  const getReviewByPlanId = (planId: number) => {
    const plan = plans.find(p => p.id === planId);
    if (!plan || !plan.hasReview) return null;

    // Mock review data - 실제로는 서버에서 가져와야 함
    return {
      id: planId,
      author: "김XX",
      date: plan.date,
      tripType: "커플",
      duration: "2박 3일",
      rating: 5,
      title: `${plan.name} 후기`,
      content: "정말 좋은 여행이었습니다. 계획대로 잘 다녀왔어요!",
      image: plan.images[0],
      images: plan.images,
      likes: 127,
      comments: 23,
      planName: plan.name,
      travelType: plan.travelType,
      itinerary: [
        { day: "1일차", schedule: "카페거리 → 애월 → 한라산 → 돼지고기 → 머시기숙소" },
        { day: "2일차", schedule: "성산일출봉 → 섭지코지 → 해산물 맛집 → 숙소" },
        { day: "3일차", schedule: "공항" }
      ]
    };
  };

  const handleLoadPlan = (planId: number) => {
    // 계획 불러오기 - 미리 채워진 데이터로 플래너 페이지 이동
    navigate("/planner", {
      state: {
        fromMyPlan: true, // 내 플랜에서 왔다는 표시
        surveyData: {
          packageName: plans.find(p => p.id === planId)?.name || "여행 계획",
          purpose: "느긋하게 쉬기(힐링)"
        }
      }
    });
  };

  const handleWriteReview = (planId: number) => {
    setSelectedPlanForReview(planId);
    setIsWriteModalOpen(true);
  };

  const handleViewReview = (planId: number) => {
    // 해당 플랜의 리뷰 데이터를 가져와서 모달로 표시
    const review = getReviewByPlanId(planId);
    if (review) {
      setSelectedReview(review);
      setIsDetailModalOpen(true);
    }
  };

  const handleEditReview = () => {
    // 리뷰 수정 - 여기서는 리뷰 작성 모달을 다시 열어서 수정 모드로 사용
    setIsDetailModalOpen(false);
    setIsWriteModalOpen(true);
  };

  const handleSharePlan = (plan: typeof plans[0]) => {
    setSelectedPlanForShare(plan);
    setIsShareModalOpen(true);
  };

 
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">내 플랜</h1>
          <p className="text-lg opacity-90">나의 제주도 여행 계획을 관리하세요</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <Link
            to="/mypage"
            className="px-6 py-3 rounded-2xl font-semibold bg-white text-gray-700 hover:bg-orange-50 transition-all"
          >
            내 프로필
          </Link>
          <button className="px-6 py-3 rounded-2xl font-semibold bg-orange-500 text-white shadow-lg">
            내 플랜
          </button>
        </div>

        {/* Plans List */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">나의 여행 계획</h2>

          <div className="space-y-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all bg-gradient-to-r from-white to-gray-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      {plan.travelType && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                          #{plan.travelType}
                        </span>
                      )}
                      {plan.isCompleted && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          여행완료
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{plan.date}</span>
                    </div>
                  </div>
                </div>

                {/* Images Preview */}
                <div className="flex items-center gap-3 mb-6">
                  {plan.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="w-32 h-24 rounded-xl overflow-hidden border border-gray-200"
                    >
                      <img
                        src={img}
                        alt={`장소 ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {plan.totalPlaces > 3 && (
                    <div className="w-32 h-24 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 font-semibold">
                        +{plan.totalPlaces - 3}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    onClick={() => handleLoadPlan(plan.id)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    계획 불러오기
                  </button>

                  <button
                    onClick={() => handleSharePlan(plan)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    공유하기
                  </button>

                  {/* 여행 완료 시 리뷰 작성/보기 버튼 (둘 중 하나만) */}
                  {plan.isCompleted && !plan.hasReview && (
                    <button 
                      onClick={() => handleWriteReview(plan.id)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 rounded-xl font-semibold hover:bg-blue-200 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      리뷰 쓰기
                    </button>
                  )}

                  {plan.isCompleted && plan.hasReview && (
                    <button 
                      onClick={() => handleViewReview(plan.id)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-100 text-green-700 rounded-xl font-semibold hover:bg-green-200 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      리뷰 보기
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {plans.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                아직 여행 계획이 없습니다
              </h3>
              <p className="text-gray-600 mb-6">새로운 제주도 여행을 계획해보세요!</p>
              <Link
                to="/planner"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl font-bold hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
              >
                여행 계획 만들기
              </Link>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-8 p-5 bg-orange-50 rounded-xl border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-2">💡 사용 팁</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>계획 불러오기:</strong> 저장된 계획을 수정하거나 재사용할 수 있습니다</li>
              <li>• <strong>공유하기:</strong> 친구들과 여행 계획을 공유해보세요</li>
              <li>• <strong>리뷰 쓰기/보기:</strong> 완료된 여행의 후기를 작성하고 확인할 수 있습니다</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 리뷰 작성 모달 */}
      {isWriteModalOpen && (
        <ReviewWriteModal
          isOpen={isWriteModalOpen}
          onClose={() => {
            setIsWriteModalOpen(false);
            setSelectedPlanForReview(null);
          }}
        />
      )}

      {/* 계획 공유 모달 */}
      {isShareModalOpen && (
        <SharePlanModal
          isOpen={isShareModalOpen}
          onClose={() => {
            setIsShareModalOpen(false);
            setSelectedPlanForShare(null);
          }}
          plan={selectedPlanForShare}
        />
      )}

      {/* 리뷰 상세 보기 모달 */}
      {isDetailModalOpen && selectedReview && (
        <ReviewDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedReview(null);
          }}
          onEdit={handleEditReview}
          review={selectedReview}
        />
      )}
    </div>
  );
}