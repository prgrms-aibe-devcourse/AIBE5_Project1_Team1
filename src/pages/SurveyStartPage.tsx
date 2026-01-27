import { useNavigate } from "react-router";
import { Zap, ListChecks } from "lucide-react";

export default function SurveyStartPage() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-73px)] bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-6 pb-20">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full border border-gray-100">
        {/* Step Badge */}
        <div className="inline-block mb-8">
          <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold">
            Step 1
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          설문 진행할래요?
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          가장 적합한 답변을 선택해주세요
        </p>

        {/* Options */}
        <div className="space-y-4">
          {/* Full Option */}
          <button
            onClick={() => navigate("/survey/full")}
            className="group w-full p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                <ListChecks className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  네, 성향 기반으로 "완전 패키지" 추천받을래요
                </h3>
                <p className="text-gray-600">
                  상세한 질문으로 나에게 딱 맞는 여행 계획을 받아보세요 (Full)
                </p>
              </div>
            </div>
          </button>

          {/* Quick Option */}
          <button
            onClick={() => navigate("/survey/quick")}
            className="group w-full p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                <Zap className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  귀찮아요… 빠르게 추천해주세요
                </h3>
                <p className="text-gray-600">
                  간단한 질문으로 빠르게 추천받으세요 (Quick)
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}