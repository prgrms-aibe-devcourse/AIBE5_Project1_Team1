# JSON 데이터 사용법 정리
이 파일은 프로젝트를 진행하면서 필요한 JSON 데이터를 다루기 위해서 
변수명 및 사용방법을 작성해놓은 파일입니다.


## 1. 네이밍 원칙 (팀공통)

### Boolean 상태
```bash
# 반드시 is, has, can 으로 시작
isLogin
isLoggedIn
hasSurveyResult
canAccessMypage
```

### 상태 값/타입
```bash
# 명사형
userRole
currentPage
surveyType
```

---

## 2. 로그인 / 인증 관련 변수명
```bash
# 로그인 상태
isLogin         # 로그인 여부 ( true / false )

# 로그인 사용자 정보
loginUser       # 로그인한 사용자 객체
userInfo        # 사용자 정보

- 예시
```text
const loginUser = {
  userId: "kws0315",
  userPw: "qwe123",
  nickname: "완석"
};
```

---

## 3. 페이지 이동 변수
```bash
targetPage      # 이동할 페이지 변수
navigateTo      # 페이지 이동 함수
```

---

## 4. 설문조사 데이터 개요
```bash
surveyList.JSON     # 설문 질문 JSON 파일
surveyData          # 설문 질문 데이터목록
```

--- 

## 설문조사 데이터 구조 (surveyList.json)

### 전체 구조
- **SurveyData[0]**: Step 1 - 설문 타입 선택 (Full / Quick)
- **SurveyData[1]**: Step 2 - 질문 목록

### Step 1: 설문 타입 선택
```
id: 1
title: "Step 1"
text: "설문 진행할래요?"
options:
  - Full: "네, 성향 기반으로 '완전 패키지' 추천받을래요 (Full)"
  - Quick: "귀찮아요… 빠르게 추천해주세요 (Quick)"
```

### Step 2: 상세 질문

#### Full 패키지 (8개 질문)
1. **1-1. 여행기간**: 당일치기, 1박 2일, 2박 3일, 3박 4일이상
2. **1-2. 동반자**: 혼자, 연인, 친구, 가족, 아이 동반
3. **1-3. 숙박기간**: 노숙, 1박, 2박, 3박 이상
4. **2-1. 여행 핵심**: 자연/힐링, 맛집/카페, 액티비티, 관광지 정복, 감성 사진
5. **2-2. 이동 스타일**: 동선 최소, 핵심만 찍고 이동, 여기저기 돌아다녀도 OK
6. **3-1. 숙소 지역**: 제주 시내, 서귀포, 애월/한림, 성산/표선, 상관없음
7. **3-2. 숙소 우선순위**: 위치, 가성비, 풍경, 조용함, 편의시설
8. **3-3. 음식 스타일**: 제주 로컬, 인스타감성, 가성비, 가리지 않음

#### Quick 패키지 (4개 질문)
1. **1-1. 여행기간**: 당일치기, 1박 2일, 2박 3일, 3박 4일이상
2. **1-2. 동반자**: 제주시, 연인, 친구, 가족, 아이 동반
3. **2-1. 지역 선택**: 제주 시내, 서귀포, 애월/한림, 성산/표선, 상관없음
4. **2-2. 여행 우선순위**: 느긋하게 쉬기(힐링), 맛있는거 먹기(맛집), 예쁜 사진(감성), 신나게 놀기(액티비티)

### 사용 방법

#### 1. 데이터 임포트
```javascript
import surveyData from '@/assets/data/surveyList.json';

// 설문 Step1 가져오기
const step1 = surveyData.SurveyData[0];

// 설문 Step2 가져오기
const step2 = surveyData.SurveyData[1];
```

#### 2. 설문 타입별 질문 가져오기
```javascript
// Full 패키지 질문 목록 (8개 질문)
const fullQuestions = step2.content.Full;

// Quick 패키지 질문 목록 (4개 질문)
const quickQuestions = step2.content.Quick;
```

#### 3. 특정 질문 접근
```javascript
// Full 패키지의 첫 번째 질문
const firstQuestion = fullQuestions[0];
// 결과: { id: 1, questionText: "1-1. 여행기간을 알려주세요.", options: [...] }

// 질문 옵션 접근
const options = firstQuestion.options;
// 결과: ["당일치기", "1박 2일", "2박 3일", "3박 4일이상"]
```

#### 4. 사용자 응답 저장
```javascript
// 설문 결과 객체
const surveyResult = {
  surveyType: "Full", // 또는 "Quick"
  answers: {
    1: "1박 2일",      // question id: 사용자 선택값
    2: "연인",
    3: "1박",
    4: "자연/힐링",
    5: "여기저기 돌아다녀도 OK",
    6: "제주 시내(제주시)",
    7: "위치",
    8: "제주 로컬(고기국수/해산물)"
  }
};

// storage에 저장
localStorage.setItem('surveyResult', JSON.stringify(surveyResult));
```

#### 5. 저장된 응답 불러오기
```javascript
const savedResult = JSON.parse(localStorage.getItem('surveyResult'));
console.log(savedResult.answers);
```

