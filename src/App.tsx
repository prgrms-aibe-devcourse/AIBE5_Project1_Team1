import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import TravelListPage from "./pages/TravelListPage";
import TravelReviewPage from "./pages/TravelReviewPage";
import SurveyStartPage from "./pages/SurveyStartPage";
import SurveyQuickPage from "./pages/SurveyQuickPage";
import SurveyFullPage from "./pages/SurveyFullPage";
import SurveyLoadingPage from "./pages/SurveyLoadingPage";
import SurveyResultPage from "./pages/SurveyResultPage";
import PlannerPage from "./pages/PlannerPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MyProfilePage from "./pages/MyProfilePage";
import MyPlanPage from "./pages/MyPlanPage";
import ScrollToTop from "./components/ScrollTop";
import { useEffect } from "react";

export default function App() {
  return (
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter basename="/AIBE5_Project1_Team1">
          <ScrollToTop />
          <div className="min-h-screen bg-white w-full">
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/travel-list" element={<TravelListPage />} />
              <Route path="/travel-review" element={<TravelReviewPage />} />
              <Route path="/survey" element={<SurveyStartPage />} />
              <Route path="/survey/quick" element={<SurveyQuickPage />} />
              <Route path="/survey/full" element={<SurveyFullPage />} />
              <Route path="/survey/loading" element={<SurveyLoadingPage />} />
              <Route path="/survey/result" element={<SurveyResultPage />} />
              <Route path="/planner" element={<PlannerPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/mypage" element={<MyProfilePage />} />
              <Route path="/my-plan" element={<MyPlanPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DndProvider>
    </AuthProvider>
  );
}