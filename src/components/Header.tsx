import { Link, useLocation, useNavigate } from "react-router";
import { Plane, LogOut, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import logo2 from "@/assets/logo2.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, userName, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 및 네비게이션 */}
          <div className="flex items-center gap-12">
            {/* 로고 */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={logo2}
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-semibold text-gray-900">PLAN</span>
                <span className="text-xl font-bold text-orange-500">Jeju</span>
              </div>
            </Link>

            {/* 네비게이션 메뉴 */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/travel-list" 
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive('/travel-list') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                제주도 여행지
              </Link>
              <Link 
                to="/survey" 
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive('/survey') || location.pathname.startsWith('/survey/') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                여행 설문
              </Link>
              <Link 
                to="/travel-review" 
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive('/travel-review') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                여행 후기
              </Link>
              <Link 
                to="/planner" 
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive('/planner') ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                여행 계획
              </Link>
              {isLoggedIn && (
                <Link 
                  to="/mypage" 
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    isActive('/mypage') || isActive('/my-plan') ? 'text-orange-500' : 'text-gray-700'
                  }`}
                >
                  마이페이지
                </Link>
              )}
            </nav>
          </div>

          {/* 사용자 정보 */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 hidden sm:inline">
                    {userName}님, 안녕하세요
                  </span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  <LogOut className="w-4 h-4" />
                  <span>로그아웃</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                <User className="w-4 h-4" />
                <span>로그인</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}