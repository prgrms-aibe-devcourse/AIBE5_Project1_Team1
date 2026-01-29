import { useEffect } from "react";
import { useNavigate } from "react-router";
import loadingGIF from "@/assets/PlanJejuLoading.gif";

export default function SurveyLoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 5초 후 결과 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/survey/result");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full border border-gray-100">
        <div className="flex flex-col items-center gap-8">
          {/* ============================================
              GIF 애니메이션 영역
              아래 src 속성의 경로를 원하는 GIF 파일로 변경하세요
              예: src="/path/to/your/animation.gif"
              또는: src={loadingGif} (import한 경우)
          ============================================ */}
          <div className="w-64 h-64 flex items-center justify-center">
            {/* TODO: 여기에 GIF 이미지를 넣으세요 */}
            <img
              src={loadingGIF}
              alt="로딩 중"
              className="w-full h-full object-contain"
            />
            {/* 
              실제 사용 예시:
              import loadingGif from "/assets/loading-animation.gif";
              <img src={loadingGif} alt="로딩 중" className="w-full h-full object-contain" />
            */}
          </div>

          {/* 로딩 메시지 */}
          <div className="w-full">
            <div className="bg-white border-2 border-gray-900 rounded-xl p-5 text-center">
              <p className="text-xl text-gray-900 font-medium">
                Plan J가 최적의 여행을 구현중입니다. 잠시만 기다려주세요...
              </p>
            </div>
          </div>

          {/* 로딩 바 (선택사항) */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-orange-500 h-full rounded-full animate-[loading_5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* 애니메이션 정의 */}
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}