import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SurveyFullPage() {
  const navigate = useNavigate();
  
  // Section 1: 기본 여행 정보
  const [duration, setDuration] = useState<string>("");
  const [companion, setCompanion] = useState<string>("");
  const [season, setSeason] = useState<string>("");

  // Section 2: 여행 스타일
  const [interests, setInterests] = useState<string[]>([]);
  const [style, setStyle] = useState<string>("");

  // Section 3: 숙소 및 음식
  const [accommodation, setAccommodation] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [dining, setDining] = useState<string>("");
  const [focusedSection, setFocusedSection] = useState<string | null>(null);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const isComplete = duration && companion && season && interests.length > 0 && style && accommodation && food && dining;

  const handleSubmit = () => {
    if (isComplete) {
      // 로딩 페이지로 이동
      navigate("/survey/loading");
    } else {
      // 첫 번째 미완료 섹션 감지 및 스크롤
      if (!duration || !companion || !season) {
        setFocusedSection("section1");
        section1Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (interests.length === 0 || !style) {
        setFocusedSection("section2");
        section2Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (!accommodation || !food || !dining) {
        setFocusedSection("section3");
        section3Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          {/* Step Badge */}
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold">
              Step 2
            </span>
          </div>

          <div className="space-y-12">
            {/* Section 1: 기본 여행 정보 (필수) */}
            <div 
              ref={section1Ref}
              className={`${focusedSection === "section1" ? "border-2 border-orange-500 bg-orange-50 shadow-lg p-4" : ""}`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  1
                </span>
                기본 여행 정보(필수)
              </h2>
              <div className="border-t border-gray-200 pt-6 space-y-6">
                {/* 1-1. 여행기간 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    1-1. 여행기간을 알려주세요.
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["당일치기", "1박 2일", "2박 3일", "3박 4일 이상"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setDuration(duration === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          duration === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 1-2. 동행자 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    1-2. 누구와 함께인가요?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["혼자", "연인", "친구", "가족", "반려 동물"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setCompanion(companion === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          companion === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 1-3. 선호 계절 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    1-3. 선호할 때 떠나세요?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["노을", "1월", "2월", "3월 이상"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSeason(season === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          season === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: 여행 스타일 (패키지 선정 결정) */}
            <div 
              ref={section2Ref}
              className={`${focusedSection === "section2" ? "border-2 border-orange-500 bg-orange-50 shadow-lg p-4" : ""}`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  2
                </span>
                여행 스타일(패키지 선정 결정)
              </h2>
              <div className="border-t border-gray-200 pt-6 space-y-6">
                {/* 2-1. 여행 관심사 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    2-1. 이번 여행의 목적은?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["가족여행", "액티비티", "휴대미", "공공기 엄선", "공부 사람"].map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleInterest(option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          interests.includes(option)
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2-2. 여행 스타일 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    2-2. 여행 스타일은?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["촘촘히 채워진 일정", "여유 많은 일정", "자기의기 좋아서는 OK"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setStyle(style === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          style === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: 숙소 및 음식 (상세 취향) */}
            <div 
              ref={section3Ref}
              className={`${focusedSection === "section3" ? "border-2 border-orange-500 bg-orange-50 shadow-lg p-4" : ""}`}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  3
                </span>
                숙소 및 음식(상세 취향)
              </h2>
              <div className="border-t border-gray-200 pt-6 space-y-6">
                {/* 3-1. 숙소 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    3-1. 숙소 지역 선호도?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["제주 시내(중심가)", "시포트", "여행(게릭터레트)", "음이보기지속", "신라건룡"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setAccommodation(accommodation === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          accommodation === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3-2. 음식 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    3-2. 음식에서 가장 중요한건?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["양식", "기타식", "음식", "고유한", "면넥식양"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setFood(food === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          food === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3-3. 식사 스타일 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    3-3. 식사는는 음식 스타일은?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["제주 로컬가기/수작레식점", "일식알립", "가타어", "가타찌 엄선"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setDining(dining === option ? "" : option)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all ${
                          dining === option
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <button
                onClick={() => navigate("/survey")}
                className="flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>돌아가기</span>
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <span>결과 보기</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//하이요