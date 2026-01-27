// src/data/restaurants.ts

import { TravelDestination } from "./commonType";

// ✅ 고정 이미지 (전부 실사용 검증된 URL)
const IMAGES = {
  // 🍜 국수
  NOODLE:
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1200&q=80",

  // 🍰 디저트 카페
  DESSERT_CAFE:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80",

  // ☕ 전망 카페
  VIEW_CAFE:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",

  // 🏮 시장
  MARKET:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",

  // 🐟 해산물
  SEAFOOD:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",

  // 🐷 흑돼지 / BBQ
  BLACK_PORK:
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",

  // 🍲 해장국 / 국물
  SOUP:
    "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1200&q=80",

  // 🥩 고기
  MEAT:
    "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=1200&q=80",

  // 🐠 생선조림
  FISH:
    "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80",

  // 🌊 바다 카페
  SEA_CAFE:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
};

export const restaurants: TravelDestination[] = [
  {
    id: 101,
    name: "자매국수",
    category: "한식",
    price: 11000,
    location: "제주시",
    hours: "10:00 - 20:00",
    shortDescription: "제주 고기국수 대표 맛집.",
    fullDescription:
      "진한 돼지고기 육수와 부드러운 면발이 조화를 이루는 제주 대표 국수집입니다.",
    image: IMAGES.NOODLE,
    tags: ["국수", "가성비", "로컬"],
    lat: 33.498621 ,
    lng: 126.4587659,

  },
  {
    id: 102,
    name: "리에또",
    category: "카페",
    price: 12000,
    location: "제주시",
    hours: "평일 13:30 - 22:00 / 토 10:00 - 22:00 / 일 휴무",
    shortDescription: "디저트 중심의 감성 카페.",
    fullDescription:
      "빙수와 바스크 치즈케이크가 인기인 조용한 디저트 카페입니다.",
    image: IMAGES.DESSERT_CAFE,
    tags: ["디저트", "카페"],
    lat: 33.484166274040284,
    lng: 126.48498466666912,
  },
  {
    id: 103,
    name: "뷰스트",
    category: "카페",
    price: 9000,
    location: "서귀포시",
    hours: "10:00 - 19:00",
    shortDescription: "전망 좋은 감성 카페.",
    fullDescription:
      "탁 트인 바다 전망과 함께 커피를 즐길 수 있는 카페입니다.",
    image: IMAGES.VIEW_CAFE,
    tags: ["카페", "뷰맛집"],
    lat: 33.2278135,
    lng: 126.303557,
  },
  {
    id: 104,
    name: "동문시장",
    category: "시장",
    price: 15000,
    location: "제주시",
    hours: "09:00 - 21:00",
    shortDescription: "제주 대표 전통시장.",
    fullDescription:
      "제주 먹거리와 특산물을 한 번에 즐길 수 있는 대표 시장입니다.",
    image: IMAGES.MARKET,
    tags: ["시장", "먹거리"],
    lat: 33.51282933037489,
    lng: 126.52837848272551 ,  
  },
  {
    id: 105,
    name: "성산수산식당",
    category: "해산물",
    price: 30000,
    location: "서귀포시",
    hours: "10:00 - 20:00",
    shortDescription: "성산 인근 해산물.",
    fullDescription:
      "신선한 회와 해산물을 즐길 수 있는 성산 대표 식당입니다.",
    image: IMAGES.SEAFOOD,
    tags: ["해산물", "회"],
    lat: 33.46256965940773,
    lng: 126.93261800885692,
  },
  {
    id: 106,
    name: "사계흑돼지 산방산본점",
    category: "흑돼지",
    price: 35000,
    location: "서귀포시",
    hours: "12:00 - 22:00",
    shortDescription: "산방산 흑돼지.",
    fullDescription:
      "제주 흑돼지를 제대로 즐길 수 있는 산방산 라인 맛집입니다.",
    image: IMAGES.BLACK_PORK,
    tags: ["흑돼지", "고기"],
    lat: 33.24814566114882,
    lng: 126.30243758799476,
  },
  {
    id: 107,
    name: "우진해장국",
    category: "한식",
    price: 12000,
    location: "제주시",
    hours: "06:00 - 22:00",
    shortDescription: "고사리 해장국.",
    fullDescription:
      "제주 특산 고사리로 만든 깊은 맛의 해장국으로 유명합니다.",
    image: IMAGES.SOUP,
    tags: ["해장국", "아침"],
    lat: 33.511505 ,
    lng: 126.5200319,
  },
  {
    id: 108,
    name: "숙성도",
    category: "고기",
    price: 38000,
    location: "제주시",
    hours: "15:00 - 23:00",
    shortDescription: "숙성 고기 전문.",
    fullDescription: "저온 숙성으로 풍미를 살린 고기 전문점입니다.",
    image: IMAGES.MEAT,
    tags: ["고기"],
    lat: 33.5423994 ,
    lng: 126.6712053,
  },
  {
    id: 109,
    name: "네거리식당",
    category: "한식",
    price: 18000,
    location: "서귀포시",
    hours: "08:00 - 20:00",
    shortDescription: "생선조림 한식.",
    fullDescription:
      "갈치·고등어 조림으로 유명한 제주 한식집입니다.",
    image: IMAGES.FISH,
    tags: ["한식", "생선"],
    lat: 33.2485302 ,
    lng: 126.5593236,
  },
  {
    id: 110,
    name: "봄날카페",
    category: "카페",
    price: 9000,
    location: "서귀포시",
    hours: "09:00 - 19:00",
    shortDescription: "바다 앞 카페.",
    fullDescription:
      "제주 바다를 바라보며 쉬기 좋은 감성 카페입니다.",
    image: IMAGES.SEA_CAFE,
    tags: ["카페", "바다"],
    lat: 33.4624568,
    lng: 126.3096148,
  },
];
