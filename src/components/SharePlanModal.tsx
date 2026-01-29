import { X } from "lucide-react";
import { useState } from "react";

interface SharePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    date: string;
    totalPlaces: number;
  };
}

// 계획 공유 컴포넌트
export default function SharePlanModal({ isOpen, onClose, plan }: SharePlanModalProps) {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const shareUrl = `${window.location.href.slice(0, -7)}survey/result?share=true`;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  // 클립보드 복사 함수
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyMessage("클립보드에 복사되었습니다");
      setTimeout(() => setCopyMessage(null), 2000);
    } catch (err) {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = shareUrl;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        setCopyMessage("클립보드에 복사되었습니다");
        setTimeout(() => setCopyMessage(null), 2000);
      } catch {
        setCopyMessage("복사에 실패했습니다. 링크를 직접 복사해주세요.");
        setTimeout(() => setCopyMessage(null), 2500);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overscroll-none animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 text-white px-8 py-16 text-center rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="mb-6">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
              <span className="text-5xl">✈️</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">플랜 공유하기</h1>
            <p className="text-lg opacity-90">친구들과 함께 제주 여행을 계획해보세요</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* ✅ 복사 완료 메시지 */}
          {copyMessage && (
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-semibold text-center">
              {copyMessage}
            </div>
          )}

          {/* Plan Info */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h2>
            <div className="flex items-center gap-6 text-gray-700">
              <div>
                <span className="text-sm text-gray-600">여행 기간</span>
                <p className="font-semibold">{plan.date}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">여행지 수</span>
                <p className="font-semibold">{plan.totalPlaces}곳</p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">공유 방법 선택</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-6 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors shadow-md hover:shadow-lg group">
                <div className="text-4xl mb-3">💬</div>
                <p className="font-bold text-lg">카카오톡</p>
                <p className="text-sm opacity-90 mt-1">카카오톡으로 공유하기</p>
              </button>

              {/* ✅ 여기! 링크 복사 버튼 */}
              <button
                onClick={handleCopyLink}
                className="p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors shadow-md hover:shadow-lg group"
              >
                <div className="text-4xl mb-3">🔗</div>
                <p className="font-bold text-lg">링크 복사</p>
                <p className="text-sm opacity-90 mt-1">URL 링크 복사하기</p>
              </button>

              <button className="p-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors shadow-md hover:shadow-lg group">
                <div className="text-4xl mb-3">📱</div>
                <p className="font-bold text-lg">SNS 공유</p>
                <p className="text-sm opacity-90 mt-1">인스타그램, 페이스북</p>
              </button>

              <button className="p-6 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition-colors shadow-md hover:shadow-lg group">
                <div className="text-4xl mb-3">📧</div>
                <p className="font-bold text-lg">이메일</p>
                <p className="text-sm opacity-90 mt-1">이메일로 전송하기</p>
              </button>
            </div>
          </div>

          {/* (선택) 링크 미리보기도 보여주고 싶으면 아래 블록 추가 가능 */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">공유 링크</p>
            <p className="text-sm break-all font-semibold text-gray-900">{shareUrl}</p>
          </div>

          {/* QR Code */}
          <div className="text-center py-6 bg-gray-50 rounded-2xl">
            <p className="text-sm text-gray-600 mb-4">QR코드로 간편하게 공유하세요</p>
            <div className="inline-block p-6 bg-white rounded-xl shadow-md">
              <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-2">💡 공유 팁</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 공유받은 사람도 플랜을 수정하고 저장할 수 있습니다</li>
              <li>• QR코드를 스캔하면 바로 플랜 페이지로 이동합니다</li>
              <li>• 비공개로 설정하면 링크를 아는 사람만 볼 수 있습니다</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
