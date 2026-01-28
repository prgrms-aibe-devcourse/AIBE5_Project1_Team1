import { useState } from "react";
import { ArrowRight, Check, Compass, MapPin, Calendar } from "lucide-react";
import TravelModal from "../components/TravelModal";
import { destinations } from "../data/destinations";
import { useNavigate } from 'react-router';
import { TravelDestination } from "../data/commonType";



export default function MainPage() {
  const [selectedDestination, setSelectedDestination] = useState<TravelDestination | null>(null);
  const navigate = useNavigate();
  const handleSurvey = () => {
    navigate("/survey");
  };

  const destinationImage = (destination: TravelDestination, index: number) =>{
    return(
      <div className="relative w-full md:w-1/2">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {index + 1}
        </div>
      </div>
    );
  }

  const destinationtext = (destination: TravelDestination) =>{
    return(
      <div className="w-full md:w-1/2 space-y-4">
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full">
          {destination.category}
        </span>

        <h3 className="text-3xl font-bold text-gray-900 hover:text-orange-500 transition-colors">
          {destination.name}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {destination.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>{destination.location}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 텍스트 콘텐츠 */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange-200 text-orange-700 rounded-full text-sm font-bold">
                  개인형 맞춤 여행 플랫폼
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                여행 준비,
                <br />
                이제 <span className="text-orange-500">J</span>에게
                <br />
                맡기세요.
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                제주도 여행, 계획부터 일정까지
                <br />
                똑똑하게 자동으로 준비해드립니다.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-orange-600" />
                  </div>
                  <p>
                    <span className="font-semibold">P에게:</span> "여행 준비 친구에게 맡기자니, 미안하시죠?"
                  </p>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-orange-600" />
                  </div>
                  <p>
                    <span className="font-semibold">J에게:</span> "매번 하는 여행 준비, 머리 아프시죠?"
                  </p>
                </div>
              </div>

              <button
                onClick={ handleSurvey }
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <span>설문 시작하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

              {/* 이미지 */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-orange-200">
                <img
                  src="/src/assets/mainimage2.png"
                  alt="여행 계획"
                  className="w-full h-full object-cover"
                />
              </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

     {/* 추천 여행지 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              제주도 추천 여행지
            </h2>
            <p className="text-lg text-gray-600">
              제주를 대표하는 아름다운 여행지를 만나보세요
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {destinations.slice(0, 6).map((destination, index) => {
              const isReverse = index % 2 === 1;

              return (
                <div
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination)}
                  className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
                    isReverse ? 
                    "md:flex-row-reverse" : 
                    ""
                  }`}
                >
                  {isReverse ? (
                    <>
                      {destinationtext(destination)}
                      {destinationImage(destination, index)}
                    </>
                  ) : (
                    <>
                      {destinationImage(destination, index)}
                      {destinationtext(destination)}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">왜 PLAN Jeju인가요?</h2>
            <p className="text-lg text-gray-600">제주도 여행을 위한 완벽한 계획 솔루션</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">계획 자동화</h3>
              <p className="text-gray-600 leading-relaxed">
                복잡한 일정 짜기는 이제 그만. 설문만 완료하면 맞춤형 여행 계획이 자동으로 완성됩니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">설문 기반 추천</h3>
              <p className="text-gray-600 leading-relaxed">
                당신의 여행 스타일과 취향을 분석하여 가장 적합한 스팟과 동선을 추천해드립니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">제주도 맞춤 일정</h3>
              <p className="text-gray-600 leading-relaxed">
                제주도 전문가가 엄선한 핫플레이스와 숨은 명소를 최적의 동선으로 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-lg mb-4 opacity-90">단 5분이면 완벽한 제주도 여행 계획이 완성됩니다</p>
          <h2 className="text-4xl font-bold mb-8">지금 바로 시작하세요</h2>
          <button
            onClick={ handleSurvey }
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-500 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
          <span>설문 시작하기</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      


      {/* 모달 */}
      {selectedDestination && (
        <TravelModal
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination}
        />
      )}

    </div>
  );
}
