// src/data/restaurants.ts

export type RestaurantCategory =
  | "한식"
  | "해산물"
  | "카페"
  | "고기"
  | "흑돼지"
  | "양식"
  | "시장";

export type Restaurant = {
  id: number;
  name: string;
  category: RestaurantCategory;
  priceRange: string; // 예: ₩, ₩₩, ₩₩₩
  location: string;
  hours: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80";

export const restaurants: Restaurant[] = [
  // ✅ 필수 포함 1) 자매국수
  {
    id: 1,
    name: "자매국수",
    category: "한식",
    priceRange: "₩",
    location: "제주시",
    hours: "10:00 - 20:00",
    shortDescription: "제주 고기국수 대표 맛집.",
    fullDescription:
      "진한 돼지고기 육수와 부드러운 면발이 조화를 이루는 제주 대표 국수집입니다. 부담 없이 한 끼 해결하기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["국수", "가성비", "로컬"],
  },

  // ✅ 필수 포함 2) 리에또 (카카오 링크 참고 요청 → 공개 확인 가능한 정보로 보정)
  {
    id: 2,
    name: "리에또",
    category: "카페",
    priceRange: "₩₩",
    location: "제주시",
    hours: "평일 13:30 - 22:00 / 토 10:00 - 22:00 / 일 휴무",
    shortDescription: "노형 쪽 디저트 카페(빙수/바스크치즈케이크).",
    fullDescription:
      "노형 인근에서 디저트(빙수, 바스크치즈케이크 등)와 커피를 즐길 수 있는 카페입니다. 조용한 동네 카페 느낌으로 쉬어가기 좋아요. (주소: 제주시 원노형로 49-1)",
    image: DEFAULT_IMAGE,
    tags: ["디저트", "카페", "노형", "조용한분위기"],
  },

  // ✅ 필수 포함 3) 뷰스트
  {
    id: 3,
    name: "뷰스트",
    category: "카페",
    priceRange: "₩₩",
    location: "서귀포시",
    hours: "10:00 - 19:00",
    shortDescription: "뷰(전망) 좋은 감성 카페.",
    fullDescription:
      "탁 트인 전망을 보며 커피를 즐기기 좋은 감성 카페입니다. 사진 찍기 좋은 포인트가 많아 잠깐 쉬어가기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["카페", "뷰맛집", "사진"],
  },

  // ✅ 필수 포함 4) 동문시장
  {
    id: 4,
    name: "동문시장",
    category: "시장",
    priceRange: "₩",
    location: "제주시",
    hours: "09:00 - 21:00",
    shortDescription: "제주 대표 전통시장 & 먹거리 천국.",
    fullDescription:
      "제주 먹거리와 특산물을 한자리에서 즐길 수 있는 대표 재래시장입니다. 간식/회/야시장 분위기까지 한 번에 가능해요.",
    image: DEFAULT_IMAGE,
    tags: ["시장", "먹거리", "야시장"],
  },

  // ✅ 필수 포함 5) 성산수산식당
  {
    id: 5,
    name: "성산수산식당",
    category: "해산물",
    priceRange: "₩₩₩",
    location: "서귀포시",
    hours: "10:00 - 20:00",
    shortDescription: "성산 근처 해산물 한 상.",
    fullDescription:
      "성산 일출봉 인근에서 신선한 회와 해산물 메뉴를 즐길 수 있는 식당입니다. 일정이 동부 라인이면 묶기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["해산물", "성산", "회"],
  },

  // ✅ 필수 포함 6) 사계흑돼지 산방산본점
  {
    id: 6,
    name: "사계흑돼지 산방산본점",
    category: "흑돼지",
    priceRange: "₩₩₩",
    location: "서귀포시",
    hours: "12:00 - 22:00",
    shortDescription: "산방산 라인 흑돼지 맛집.",
    fullDescription:
      "산방산/사계 라인 일정에 넣기 좋은 흑돼지 전문점입니다. 드라이브 + 자연 코스 후 식사로 궁합이 좋습니다.",
    image: DEFAULT_IMAGE,
    tags: ["흑돼지", "산방산", "고기"],
  },

  // ➕ 나머지 더미 4개 (총 10개 맞춤)
  {
    id: 7,
    name: "우진해장국",
    category: "한식",
    priceRange: "₩₩",
    location: "제주시",
    hours: "06:00 - 22:00",
    shortDescription: "고사리 해장국으로 유명.",
    fullDescription:
      "제주 특산물 고사리를 활용한 해장국이 대표 메뉴입니다. 아침/점심에 넣기 좋은 코스예요.",
    image: DEFAULT_IMAGE,
    tags: ["해장국", "로컬", "아침식사"],
  },
  {
    id: 8,
    name: "숙성도",
    category: "고기",
    priceRange: "₩₩₩",
    location: "제주시",
    hours: "15:00 - 23:00",
    shortDescription: "숙성 돼지고기 전문.",
    fullDescription:
      "저온 숙성 고기 특유의 풍미가 강점인 고깃집입니다. 고기 좋아하면 실패 확률 낮은 선택지로 두기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["고기", "숙성", "저녁"],
  },
  {
    id: 9,
    name: "네거리식당",
    category: "한식",
    priceRange: "₩₩",
    location: "서귀포시",
    hours: "08:00 - 20:00",
    shortDescription: "갈치조림/고등어조림 한식.",
    fullDescription:
      "제주에서 인기 많은 생선조림류 한식을 즐길 수 있는 식당입니다. 가족/부모님 동반 코스에 잘 맞아요.",
    image: DEFAULT_IMAGE,
    tags: ["한식", "생선조림", "가족"],
  },
  {
    id: 10,
    name: "봄날카페",
    category: "카페",
    priceRange: "₩₩",
    location: "서귀포시",
    hours: "09:00 - 19:00",
    shortDescription: "바다 앞 감성 카페.",
    fullDescription:
      "제주 바다를 바라보며 쉬기 좋은 카페입니다. 이동 중 휴식/사진 스팟으로 활용하기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["카페", "바다", "감성"],
  },
];
