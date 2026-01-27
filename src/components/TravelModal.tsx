import { X, Clock, MapPin, ExternalLink, Calendar } from "lucide-react";
import { createPortal } from "react-dom";

/* ✅ 이미지 포지션 자동 결정 함수 */
const getImagePosition = (destination: any) => {
  if (!destination) return "center";

  switch (destination.category) {
    case "해변":
      return "center";
    case "자연":
      if (
        destination.name.includes("한라") ||
        destination.name.includes("오름") ||
        destination.name.includes("산")
      ) {
        return "bottom";
      }
      if (
        destination.name.includes("숲") ||
        destination.name.includes("휴양림") ||
        destination.name.includes("비자림")
      ) {
        return "top";
      }
      return "center";
    default:
      return "center";
  }
};

interface TravelModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: any;
}

export default function TravelModal({
  isOpen,
  onClose,
  destination,
}: TravelModalProps) {
  // 모달이 닫혀있거나 데이터가 없으면 아무것도 렌더링하지 않음
  if (!isOpen || !destination) return null;

  // ✅ 포털을 렌더링할 대상 엘리먼트 확인
  const modalRoot = document.getElementById("modal-root");

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  // 모달 레이아웃 정의
  const modalContent = (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="relative z-[1000000] bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300 text-left flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= 왼쪽: 이미지 ================= */}
        <div className="md:w-1/2 w-full relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover scale-105"
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundPosition: getImagePosition(destination),
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/30" />
        </div>

        {/* ================= 오른쪽: 콘텐츠 ================= */}
        <div className="md:w-1/2 p-8 overflow-y-auto relative flex flex-col min-h-[500px]">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* 제목 및 카테고리 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {destination.name}
              </h2>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-semibold">
                {destination.category}
              </span>
            </div>

            {/* 상세 정보 리스트 */}
            <div className="grid grid-cols-1 gap-3 text-gray-600">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">여행시간: {destination.duration}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span className="font-medium">운영시간: {destination.hours || "09:00 - 18:00 (연중무휴)"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="font-medium">위치: {destination.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 flex items-center justify-center border-2 border-orange-500 rounded-full text-[10px] font-bold text-orange-500">₩</div>
                <span className="font-bold text-orange-600">
                  입장료: {destination.price === 0 ? "무료" : `${destination.price?.toLocaleString()}원`}
                </span>
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className="mb-8">
            <p className="text-gray-800 font-bold mb-3 text-lg leading-snug">
              {destination.shortDescription}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
              {destination.fullDescription}
            </p>
          </div>

          {/* 외부 링크 버튼 모음 */}
          <div className="mt-auto flex gap-2">
            {/* 네이버 버튼 */}
            <a
              href={`https://search.naver.com/search.naver?query=${encodeURIComponent(destination.name)}`}
              target="_blank"
              rel="noreferrer"
              className="social-btn naver flex-1 flex items-center shadow-sm hover:shadow-md active:scale-95 transition-all"
            >
              <div className="btn-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path fill="#fff" d="M16.48 15.15L8.43 4H4v16h4.63v-10.8l7.85 10.8H20V4h-3.52v11.15z"/>
                </svg>
              </div>
              <span className="btn-text text-[13px]">네이버</span>
            </a>

            {/* 카카오(다음) 버튼 */}
            <a
              href={`https://search.daum.net/search?q=${encodeURIComponent(destination.name)}`}
              target="_blank"
              rel="noreferrer"
              className="social-btn kakao flex-1 flex items-center shadow-sm hover:shadow-md active:scale-95 transition-all"
            >
              <div className="btn-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path fill="#3C1E1E" d="M16 4C9.925 4 5 8.256 5 13.5c0 3.52 2.22 6.565 5.56 8.16l-1.09 4.18c-.09.34.25.64.55.48l4.88-3.32c.36.03.73.04 1.1.04 6.075 0 11-4.256 11-9.5S22.075 4 16 4z"/>
                </svg>
              </div>
              <span className="btn-text text-[13px]">카카오</span>
            </a>

            {/* 구글 버튼 (이미지 디자인 핵심) */}
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(destination.name)}`}
              target="_blank"
              rel="noreferrer"
              className="social-btn google flex-1 flex items-center shadow-sm hover:shadow-md active:scale-95 transition-all"
            >
              <div className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <span className="btn-text text-[13px]">Google</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );

  // ✅ modal-root가 있으면 그곳에, 없으면 body에 렌더링 (최종 안전장치)
  return createPortal(modalContent, modalRoot || document.body);
}