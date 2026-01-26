import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";

export default function MyProfilePage() {
  const { userName } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"profile" | "plan">("profile");

  const profileData = {
    name: "김철수",
    nickname: "제주러버",
    email: "kimcs@email.com",
    birthdate: "1990.01.15",
    gender: "남자"
  };

  // 내 플랜 탭 클릭 시 바로 /my-plan으로 이동
  const handlePlanTabClick = () => {
    navigate("/my-plan");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 to-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">마이페이지</h1>
          <p className="text-lg opacity-90">나의 여행 정보를 확인하세요</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === "profile"
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            내 프로필
          </button>
          <button
            onClick={handlePlanTabClick}
            className="px-6 py-3 rounded-2xl font-semibold bg-white text-gray-700 hover:bg-orange-50 transition-all"
          >
            내 플랜
          </button>
        </div>

        {/* Profile Content */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">내 프로필</h2>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                수정 (준비중)
              </button>
            </div>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">이름</label>
                <div className="px-5 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-900">{profileData.name}</p>
                </div>
              </div>

              {/* Nickname */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">닉네임</label>
                <div className="px-5 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-900">{profileData.nickname}</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">이메일</label>
                <div className="px-5 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-900">{profileData.email}</p>
                </div>
              </div>

              {/* Birthdate */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">생년월일</label>
                <div className="px-5 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-900">{profileData.birthdate}</p>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">성별</label>
                <div className="px-5 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-gray-900">{profileData.gender}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">안내:</span> 개인정보는 수정 불가합니다. 변경이 필요한 경우 고객센터로 문의해주세요.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}