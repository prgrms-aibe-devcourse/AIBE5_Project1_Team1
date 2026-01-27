import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SurveyQuickPage() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState<string>("");
  const [companion, setCompanion] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [focusedSection, setFocusedSection] = useState<string | null>(null);

  const isComplete = duration && companion && region && purpose;
  const isSection1Complete = duration && companion;
  const isSection2Complete = region && purpose;

  // 모든 선택이 완료되면 focusedSection 초기화
  useEffect(() => {
    if (isComplete) {
      setFocusedSection(null);
    }
  }, [isComplete]);

  const handleSubmit = () => {
    if (isComplete) {
      // 로딩 페이지로 이동
      navigate("/survey/loading");
    } else {
      // 첫 번째 미완료 섹션으로 포커스 이동
      if (!duration || !companion) {
        setFocusedSection("section1");
        section1Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (!region || !purpose) {
        setFocusedSection("section2");
        section2Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-6 py-20">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl w-full border border-gray-100">
        {/* Step Badge */}
        <div className="inline-block mb-8">
          <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold">
            Step 2
          </span>
        </div>

        <div className="space-y-10">
          {/* Section 1: 기본 정보 */}
          <div 
            ref={section1Ref}
            className={`p-6 rounded-xl transition-all ${
              focusedSection === "section1" && !isSection1Complete
                ? "border-2 border-orange-500 bg-orange-50 shadow-lg"
                : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                1
              </span>
              기본 정보
            </h2>
            <div className="border-t border-gray-200 pt-6 space-y-6">
              {/* 1-1. 여행기간 */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  1-1. 여행기간을 알려주세요.
                </label>
                <div className="flex flex-wrap gap-3">
                  {["당일", "1박 2일", "2박 3일 이상"].map((option) => (
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
                  {["혼자", "연인", "친구", "가족"].map((option) => (
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
            </div>
          </div>

          {/* Section 2: 빠른 취향 선택 */}
          <div 
            ref={section2Ref}
            className={`p-6 rounded-xl transition-all ${
              focusedSection === "section2" && !isSection2Complete
                ? "border-2 border-orange-500 bg-orange-50 shadow-lg"
                : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                2
              </span>
              빠른 취향 선택
            </h2>
            <div className="border-t border-gray-200 pt-6 space-y-6">
              {/* 2-1. 지역 */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  2-1. 어느 지역을 중심으로 둘러보고 싶나요?
                </label>
                <div className="flex flex-wrap gap-3">
                  {["제주시", "애월(서쪽)", "서귀포(남쪽)", "성산(동쪽)", "상관없음(알아서 추천)"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setRegion(region === option ? "" : option)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        region === option
                          ? "bg-orange-500 text-white shadow-md"
                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-orange-500"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2-2. 여행 목적 */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  2-2. 여행 중 딱 하나만 한다면 무엇이 좋을까요?
                </label>
                <div className="flex flex-wrap gap-3">
                  {["느긋하게 쉬기(힐링)", "맛있는거 먹기(맛집)", "예쁜 사진 남기기(감성)", "신나게 놀기(액티비티)"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setPurpose(purpose === option ? "" : option)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all ${
                        purpose === option
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
  );
}