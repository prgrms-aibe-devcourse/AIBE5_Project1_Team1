import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId.trim()) {
      setError("아이디를 입력해주세요");
      return;
    }
    if (!password.trim()) {
      setError("비밀번호를 입력해주세요");
      return;
    }

    // 간단한 로그인 처리 - 실제로는 여기서 서버 통신
    login("김철수"); // 임의의 사용자 이름
    navigate("/");
  };

  return (
    <div className="h-[calc(100vh-73px)] bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center pb-20 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍊</span>
            </div>
            <h1 className="text-4xl font-bold">
              PLAN <span className="text-orange-500">Jeju</span>
            </h1>
          </div>
          <p className="text-gray-600">제주도 여행 계획의 시작</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">로그인</h2>

          <div className="space-y-4">
            {/* User ID */}
            <div>
              <input
                type="text"
                placeholder="아이디"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  setError("");
                }}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-lg"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
            >
              로그인
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
            <button className="hover:text-orange-500 transition-colors">비밀번호 찾기</button>
            <span>|</span>
            <button className="hover:text-orange-500 transition-colors">아이디 찾기</button>
            <span>|</span>
            <Link to="/signup" className="hover:text-orange-500 transition-colors font-medium">
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