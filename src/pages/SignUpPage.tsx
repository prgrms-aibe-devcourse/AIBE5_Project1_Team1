import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUpPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    password: "",
    name: "",
    nickname: "",
    birthdate: "",
    gender: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.userId.trim()) newErrors.userId = "아이디를 입력해주세요";
    if (!formData.email.trim()) newErrors.email = "이메일을 입력해주세요";
    if (!formData.password.trim()) newErrors.password = "비밀번호를 입력해주세요";
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요";
    if (!formData.nickname.trim()) newErrors.nickname = "별명을 입력해주세요";
    if (!formData.birthdate.trim()) newErrors.birthdate = "생년월일을 입력해주세요";
    if (formData.birthdate && formData.birthdate.length !== 8) {
      newErrors.birthdate = "생년월일 8자리를 입력해주세요";
    }
    if (!formData.gender) newErrors.gender = "성별을 선택해주세요";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // 회원가입 성공 - 로그인 페이지로 이동
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍊</span>
            </div>
            <h1 className="text-4xl font-bold">
              PLAN <span className="text-orange-500">Jeju</span>
            </h1>
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">회원가입</h2>

          <div className="space-y-4">
            {/* Account Info Section */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="아이디"
                  value={formData.userId}
                  onChange={(e) => handleChange("userId", e.target.value)}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.userId ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.userId && <p className="text-red-500 text-xs mt-1 ml-2">{errors.userId}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.password ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>}
              </div>
            </div>

            <div className="h-px bg-gray-200 my-6"></div>

            {/* Personal Info Section */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="이름"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.name ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="별명"
                  value={formData.nickname}
                  onChange={(e) => handleChange("nickname", e.target.value)}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.nickname ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.nickname && <p className="text-red-500 text-xs mt-1 ml-2">{errors.nickname}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="생년월일 8자리 (예: 19900101)"
                  value={formData.birthdate}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 8);
                    handleChange("birthdate", value);
                  }}
                  maxLength={8}
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                    errors.birthdate ? "border-red-300" : "border-gray-200"
                  }`}
                />
                {errors.birthdate && <p className="text-red-500 text-xs mt-1 ml-2">{errors.birthdate}</p>}
              </div>

              {/* Gender Selection */}
              <div>
                <div className="grid grid-cols-3 gap-2">
                  {["남자", "여자", "선택안함"].map((gender) => (
                    <button
                      key={gender}
                      type="button"
                      onClick={() => handleChange("gender", gender)}
                      className={`px-4 py-3 rounded-xl border-2 transition-all font-medium ${
                        formData.gender === gender
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white text-gray-700 border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
                {errors.gender && <p className="text-red-500 text-xs mt-1 ml-2">{errors.gender}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg mt-6"
            >
              회원가입
            </button>
          </div>
        </div>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
          >
            이미 계정이 있으신가요? <span className="font-medium">로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}