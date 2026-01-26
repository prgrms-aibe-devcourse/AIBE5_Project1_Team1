import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";

// 일정 데이터
const itinerary = {
  packageName: "동쪽에 머무는 조용한 제주 2박 3일",
  packageEmoji: "🌿",
  keywords: ["감성", "성산", "바다", "천천히"],
  days: [
    {
      day: 1,
      schedule: [
        {
          time: "12:30",
          emoji: "🍜",
          title: "점심 - 자매국수",
          description: "고기국수 or 멸치국수 맛집!"
        },
        {
          time: "14:00",
          emoji: "🌊",
          title: "김녕 함덕 해수욕장",
          description: "탁 트인 서귀포 앞바다를 볼 수 있는 산책로 포함.\n사진 + 커피 테이크아웃"
        },
        {
          time: "15:30",
          emoji: "📸",
          title: "오조포구",
          description: "돌담 길 + 바다 감성 포인트\n사진 예시로 쓰기 딱 좋은 장소"
        },
        {
          time: "16:00",
          emoji: "🏨",
          title: "숙소 - 성산 오션뷰 호텔",
          description: "조용한 동네 / 바다 전망"
        }
      ]
    },
    {
      day: 2,
      schedule: [
        {
          time: "10:00",
          emoji: "☕",
          title: "아침 - 숙소 근처 카페",
          description: "여유있게 아침 식사"
        },
        {
          time: "11:00",
          emoji: "⛰️",
          title: "성산일출봉",
          description: "제주 대표 명소 방문"
        },
        {
          time: "13:00",
          emoji: "🍚",
          title: "점심 - 제주 해물식당",
          description: "신선한 해산물 요리"
        },
        {
          time: "14:30",
          emoji: "🌿",
          title: "섭지코지",
          description: "감성 사진 촬영 명소"
        }
      ]
    },
    {
      day: 3,
      schedule: [
        {
          time: "10:00",
          emoji: "☕",
          title: "아침 - 브런치 카페",
          description: "여유로운 아침 시간"
        },
        {
          time: "12:00",
          emoji: "🍽️",
          title: "점심 - 흑돼지 맛집",
          description: "제주도에서의 마지막 식사"
        },
        {
          time: "14:00",
          emoji: "🛍️",
          title: "동문시장",
          description: "기념품 구매"
        },
        {
          time: "16:00",
          emoji: "✈️",
          title: "제주 공항",
          description: "집으로 돌아가기"
        }
      ]
    }
  ]
};

export default function SurveyResultPage() {
  const navigate = useNavigate();

  const handlePlannerClick = () => {
    navigate("/planner", { 
      state: { 
        surveyData: {
          purpose: "예쁜 사진 남기기(감성)",
          packageName: itinerary.packageName
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">제주 여행 성향 진단</h1>
          <p className="text-lg opacity-90">나만의 맞춤 제주 여행 계획을 만들어보세요</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Package Title Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 text-center">
              <div className="text-white">
                <p className="text-3xl mb-2">{itinerary.packageEmoji} AI 추천 여행 패키지</p>
                <p className="text-2xl font-bold">「{itinerary.packageName}」</p>
              </div>
            </div>

            {/* Keywords */}
            <div className="p-5 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <span className="text-sm font-medium text-gray-600">키워드:</span>
                {itinerary.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                      idx === 0
                        ? "bg-orange-500 text-white"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Itinerary */}
          {itinerary.days.map((dayData) => (
            <div key={dayData.day} className="space-y-3">
              {/* Day Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full px-5 py-2 shadow-md">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-lg font-bold text-white">Day {dayData.day}</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-200"></div>
              </div>

              {/* Schedule Items */}
              <div className="space-y-3">
                {dayData.schedule.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      {/* Emoji Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-3xl">
                        {item.emoji}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Time Badge */}
                        <div className="inline-block mb-2">
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-sm font-medium">
                            {item.time}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>

                      {/* Location Icon */}
                      <div className="flex-shrink-0">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-6 pb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-300 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>처음으로</span>
            </button>
            <button 
              onClick={handlePlannerClick}
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              <span>상세 계획 만들기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}