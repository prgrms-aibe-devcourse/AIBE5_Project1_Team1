# 객체명, 함수명 및 API 정의서

프로젝트의 모든 주요 객체명, 함수명, 인터페이스, 그리고 API 엔드포인트를 정의합니다.

---

## 📋 목차
1. [전역 상태 & 타입](#전역-상태--타입)
2. [페이지별 상태](#페이지별-상태)
3. [컴포넌트별 Props](#컴포넌트별-props)
4. [Context & Hooks](#context--hooks)
5. [API 엔드포인트](#api-엔드포인트)
6. [데이터 구조](#데이터-구조)

---

## 전역 상태 & 타입

### 인증 (AuthContext)
```typescript
interface AuthContextType {
  isLoggedIn: boolean;      // 로그인 상태
  userName: string;          // 로그인한 사용자 이름
  login: (name: string) => void;   // 로그인 함수
  logout: () => void;               // 로그아웃 함수
}

// 사용법
const { isLoggedIn, userName, login, logout } = useAuth();
```

### Sidebar Context
```typescript
type SidebarContextProps = {
  state: "expanded" | "collapsed";   // 사이드바 상태
  open: boolean;                     // 사이드바 열림 여부
  setOpen: (open: boolean) => void;  // 사이드바 열기/닫기
  openMobile: boolean;               // 모바일 사이드바 상태
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;                 // 모바일 여부
  toggleSidebar: () => void;         // 사이드바 토글
};
```

### Carousel Context
```typescript
type CarouselContextProps = {
  carouselRef: RefObject<HTMLDivElement>;
  api: CarouselApi;
  scrollPrev: () => void;    // 이전 슬라이드
  scrollNext: () => void;    // 다음 슬라이드
  canScrollPrev: boolean;    // 이전 스크롤 가능 여부
  canScrollNext: boolean;    // 다음 스크롤 가능 여부
} & CarouselProps;
```

---

## 페이지별 상태

### LoginPage
```typescript
// 상태
const [userId, setUserId] = useState<string>("");        // 사용자 ID
const [password, setPassword] = useState<string>("");    // 비밀번호
const [error, setError] = useState<string>("");          // 에러 메시지

// 함수
const handleLogin = () => void;  // 로그인 처리
```

### SignUpPage
```typescript
// 상태 (LoginPage와 유사)
const [username, setUsername] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [confirmPassword, setConfirmPassword] = useState<string>("");
```

### SurveyQuickPage
```typescript
// 설문 상태
const [duration, setDuration] = useState<string>("");      // 여행기간
const [companion, setCompanion] = useState<string>("");    // 동행자
const [region, setRegion] = useState<string>("");          // 여행 지역
const [purpose, setPurpose] = useState<string>("");        // 여행 목적

// UI 상태
const [focusedSection, setFocusedSection] = useState<string | null>(null);
const section1Ref = useRef<HTMLDivElement>(null);
const section2Ref = useRef<HTMLDivElement>(null);

// 유효성
const isComplete: boolean;  // 모든 항목 선택 완료 여부

// 함수
const handleSubmit = () => void;  // 설문 제출
```

### SurveyFullPage
```typescript
// Section 1: 기본 여행 정보
const [duration, setDuration] = useState<string>("");      // 여행기간
const [companion, setCompanion] = useState<string>("");    // 동행자
const [season, setSeason] = useState<string>("");          // 선호 계절

// Section 2: 여행 스타일
const [interests, setInterests] = useState<string[]>([]);  // 여행 관심사 (다중선택)
const [style, setStyle] = useState<string>("");            // 여행 스타일

// Section 3: 숙소 및 음식
const [accommodation, setAccommodation] = useState<string>("");  // 숙소 지역
const [food, setFood] = useState<string>("");              // 음식 우선순위
const [dining, setDining] = useState<string>("");          // 식사 스타일

// UI 상태
const [focusedSection, setFocusedSection] = useState<string | null>(null);
const section1Ref = useRef<HTMLDivElement>(null);
const section2Ref = useRef<HTMLDivElement>(null);
const section3Ref = useRef<HTMLDivElement>(null);

// 함수
const toggleInterest = (interest: string) => void;  // 관심사 토글
const handleSubmit = () => void;                    // 설문 제출
```

### PlannerPage
```typescript
// 여행 계획 정보
const [planName, setPlanName] = useState<string>("");                    // 계획명
const [startDate, setStartDate] = useState<string>("");                  // 시작일
const [description, setDescription] = useState<string>("");              // 설명
const [isPrivate, setIsPrivate] = useState<boolean>(true);               // 비공개 여부

// 일정 정보
interface ItineraryItem {
  id: number;
  day: number;                    // 여행 일차
  time: string;                   // 시간 (HH:MM)
  title: string;                  // 장소/활동명
  price: number;                  // 예상 비용
  hours: string;                  // 소요 시간 범위
  category: string;               // 카테고리 (명소, 음식점 등)
  image: string;                  // 이미지 URL
}

const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);

// 모달 상태
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [isAddDestinationModalOpen, setIsAddDestinationModalOpen] = useState<boolean>(false);

// 선택 상태
const [selectedDestination, setSelectedDestination] = useState<any | null>(null);

// 함수
const handleAddItinerary = (item: ItineraryItem) => void;
const handleDeleteItinerary = (id: number) => void;
const handleSavePlan = () => void;  // 계획 저장
```

### MyPlanPage
```typescript
// 계획 목록 상태
interface PlanItem {
  id: number;
  name: string;              // 계획명
  date: string;              // 여행 기간
  hasReview: boolean;        // 후기 작성 여부
  travelType: string;        // 여행 유형 (힐링형, 맛집형 등)
  images: string[];          // 이미지 배열
}

const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);
const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
const [selectedPlanForReview, setSelectedPlanForReview] = useState<number | null>(null);
const [selectedPlanForShare, setSelectedPlanForShare] = useState<PlanItem | null>(null);
const [selectedReview, setSelectedReview] = useState<any>(null);
```

### TravelReviewPage
```typescript
// 후기 데이터
interface ReviewItem {
  id: number;
  title: string;             // 제목
  author: string;            // 작성자
  date: string;              // 작성일
  category: string;          // 카테고리 (힐링, 액티비티 등)
  rating: number;            // 평점 (1-5)
  content: string;           // 본문
  images: string[];          // 이미지 배열
  likes: number;             // 좋아요 수
  itinerary: Array<{         // 여행 일정
    day: string;
    schedule: string;
  }>;
}

const [selectedCategory, setSelectedCategory] = useState<string>("전체");
const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null);
const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);
const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

// 함수
const handleEditReview = () => void;
const handleCloseEdit = () => void;
```

---

## 컴포넌트별 Props

### Header Component
```typescript
interface HeaderProps {
  // Header는 현재 props를 받지 않음
  // useAuth hook을 직접 사용하여 로그인 상태 확인
}
```

### AddDestinationModal
```typescript
interface AddDestinationModalProps {
  isOpen: boolean;                                 // 모달 열림 여부
  onClose: () => void;                             // 닫기 콜백
  onAdd: (destination: ItineraryItem) => void;    // 추가 콜백
  destinations: ItineraryItem[];                   // 목적지 목록
}
```

### ReviewWriteModal
```typescript
interface ReviewWriteModalProps {
  isOpen: boolean;                                 // 모달 열림 여부
  onClose: () => void;                             // 닫기 콜백
  onSubmit: (review: ReviewItem) => void;         // 제출 콜백
}
```

### ReviewDetailModal
```typescript
interface ReviewDetailModalProps {
  isOpen: boolean;                                 // 모달 열림 여부
  onClose: () => void;                             // 닫기 콜백
  onEdit: () => void;                              // 편집 콜백
  review: ReviewItem;                              // 후기 데이터
}
```

### ReviewEditModal
```typescript
interface ReviewEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: ReviewItem;
  onUpdate: (updatedReview: ReviewItem) => void;  // 수정 제출 콜백
}
```

### SharePlanModal
```typescript
interface SharePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanItem;
  shareUrl: string;  // 공유 URL
}
```

### TravelModal
```typescript
interface TravelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}
```

---

## Context & Hooks

### useAuth Hook
```typescript
function useAuth(): AuthContextType {
  // 사용법
  const { isLoggedIn, userName, login, logout } = useAuth();
}
```

### useSidebar Hook
```typescript
function useSidebar(): SidebarContextProps {
  // 사용법
  const { state, open, setOpen, toggleSidebar } = useSidebar();
}
```

### useCarousel Hook
```typescript
function useCarousel(): CarouselContextProps {
  // 사용법
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
}
```

### useIsMobile Hook
```typescript
function useIsMobile(): boolean {
  // 모바일 여부 반환
}
```

---

## API 엔드포인트

### 라우트 (React Router)

#### 인증 관련
```
GET/POST  /                      // 메인 페이지
GET/POST  /login                 // 로그인 페이지
GET/POST  /signup                // 회원가입 페이지
```

#### 설문 관련
```
GET/POST  /survey                // 설문 시작 페이지 (Quick/Full 선택)
GET/POST  /survey/quick          // Quick 설문 페이지
GET/POST  /survey/full           // Full 설문 페이지
GET       /survey/loading        // 설문 결과 로딩 페이지
GET       /survey/result         // 설문 결과 및 추천 페이지
```

#### 여행 관련
```
GET/POST  /planner               // 여행 계획 작성/편집 페이지
GET       /my-plan               // 내 여행 계획 목록 페이지
GET       /travel-list           // 제주도 여행지 정보 페이지
GET/POST  /travel-review         // 여행 후기 커뮤니티 페이지
GET/POST  /mypage                // 마이페이지 (프로필 관리)
```

---

## 데이터 구조

### Survey Result Object
```typescript
interface SurveyResult {
  surveyType: "Quick" | "Full";  // 설문 유형
  
  // Section 1: 기본 정보 (공통)
  duration: string;              // 여행기간
  companion: string;             // 동행자
  
  // Section 1: 추가 (Full만)
  season?: string;               // 선호 계절
  
  // Section 2: 스타일
  interests?: string[];          // 여행 관심사 (Full)
  region: string;                // 여행 지역 (Quick)
  style?: string;                // 여행 스타일 (Full)
  purpose?: string;              // 여행 목적 (Quick)
  
  // Section 3: 상세 (Full만)
  accommodation?: string;        // 숙소 지역
  food?: string;                 // 음식 우선순위
  dining?: string;               // 식사 스타일
  
  // 추천 결과
  packageName?: string;          // 추천 패키지명
  recommendedDays?: number;      // 추천 일수
}
```

### Local Storage Keys
```typescript
// 인증
"isLoggedIn"    // boolean (true/false)
"userName"      // string (사용자명)

// 설문 결과
"surveyResult"  // JSON string (SurveyResult)

// 사이드바 상태
"sidebar:state" // string ("expanded"/"collapsed")

// 여행 계획 (임시 저장)
"currentPlan"   // JSON string (PlanItem)

// 여행 후기 (임시 저장)
"draftReview"   // JSON string (ReviewItem)
```

---

## 네이밍 컨벤션 정리

### Boolean 변수
```bash
isLogin, isLoggedIn         # 로그인 상태
isOpen, isVisible           # 표시 여부
isComplete, isValid         # 완료/유효성
hasError, hasReview         # 소유 여부
canEdit, canDelete          # 가능 여부
```

### 상태 관련 변수
```bash
selectedCategory            # 선택된 카테고리
focusedSection             # 포커스된 섹션
currentPage                # 현재 페이지
surveyType                 # 설문 유형
```

### 이벤트 핸들러
```bash
handleLogin, handleLogout   # 로그인 처리
handleSubmit               # 폼 제출
handleEdit, handleDelete   # 편집/삭제 처리
handleClose, handleOpen    # 모달 열기/닫기
```

### Ref 변수
```bash
sectionRef, section1Ref    # DOM 참조
carouselRef                # 캐러셀 참조
```