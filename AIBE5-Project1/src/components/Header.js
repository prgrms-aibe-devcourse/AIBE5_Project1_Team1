export function createHeader() {
  const header = document.createElement("header");
  const isLogin = localStorage.getItem("isLogin") === "true";

  header.innerHTML = `
  <div id="menubar">
    <button id="AttractionsBtn" name="관광지안내">제주도 여행지</button>
    <button id="SurveyBtn" name="설문조사">여행설문</button>
    <button id="ReviewsBtn" name="여행리뷰&후기">여행후기</button>
    <button id="PlansBtn" name="여행계획작성">여행계획</button>

    ${isLogin ? `<button id="MypageBtn" name="마이페이지">마이페이지</button>`: ``}
  </div>
  `;

  document.body.prepend(header); // body 맨 위에 추가
}