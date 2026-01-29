import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { PlanState } from "../data/commonType";
import logo from "@/assets/logo2.png";
type GoogleUser = {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId.trim()) return setError("아이디를 입력해주세요");
    if (!password.trim()) return setError("비밀번호를 입력해주세요");

// 일반 로그인 표시용 provider 저장
  localStorage.setItem("auth_provider", "local");

    login("김철수");
    if (planState && planState.sourcePage === "planner") {
      navigate("/planner", {
        state: { ...planState },
      });
    } else {
      navigate("/");
    }
  };


  const location = useLocation();
  const planState = location.state?.sourcePage === "planner" ? {
    sourcePage: location.state.sourcePage,
    isReadOnly: location.state.isReadOnly,
    travelType: location.state.travelType,
    myPlan: location.state.myPlan,
    planInfo: location.state.planInfo
  } as PlanState : null;

  return (
    <div className="h-[calc(100vh-73px)] bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center pb-20 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center shadow-lg">
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            </div>
            <h1 className="text-4xl font-bold">
              PLAN <span className="text-orange-500">Jeju</span>
            </h1>
          </div>
          <p className="text-gray-600">제주도 여행 계획의 시작</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            로그인
          </h2>

          <div className="space-y-4">
            {/* User ID */}
            <input
              type="text"
              placeholder="아이디"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              로그인
            </button>

            {/* 구분선 */}
            <div className="flex items-center gap-3 py-2">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">또는</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

{/* 구글 로그인 */}
<div className="google-btn-wrapper">
<GoogleLoginButton
  onSuccess={(user: GoogleUser) => {
    localStorage.setItem("auth_provider", "google");

    const googleProfile = {
      name: user.name ?? "Google User",
      email: user.email ?? "",
    };
    localStorage.setItem("google_profile", JSON.stringify(googleProfile));

    login(googleProfile.name);
    if (planState && planState.sourcePage === "planner") {
      navigate("/planner", {
        state: { ...planState },
      });
    } else {
      navigate("/");
    }
  }}
/>
</div>


          </div>

          {/* Links */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
            <button className="hover:text-orange-500 transition-colors">
              비밀번호 찾기
            </button>
            <span>|</span>
            <button className="hover:text-orange-500 transition-colors">
              아이디 찾기
            </button>
            <span>|</span>
            <Link
              to="/signup"
              className="hover:text-orange-500 transition-colors font-medium"
            >
              회원가입
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>테스트용 로그인: 아이디와 비밀번호를 입력하면 로그인됩니다</p>
        </div>
      </div>
    </div>
  );
}
