// src/data/accommodations.ts
import { TravelDestination } from "./commonType";

// ✅ 숙소별 고정 이미지(각각 다른 URL)
// - Unsplash는 가끔 핫링크/파라미터 문제로 깨질 수 있어서
//   "사진 ID 기반"으로 고정해두면 제일 안정적임.
const IMAGES = {
  HOTEL_AIRPORT:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  PENSION_COZY:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  HOTEL_OCEAN:
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
  STAY_AEWOL:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  RESORT_HEALING:
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  HOTEL_BUSINESS:
    "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1200&q=80",
  PENSION_SEONGSAN:
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  GUESTHOUSE_BUDGET:
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
  STAY_STONEWALL:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  HOTEL_CITY:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
};

export const accommodations: TravelDestination[] = [
  {
    id: 201,
    name: "위드시티호텔",
    category: "호텔",
    price: 120000,
    location: "제주시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "공항 근처 실속형 호텔.",
    fullDescription:
      "이동 동선이 짧아 도착/출발 일정에 유리한 실속형 호텔입니다. 가성비 중심 코스에 잘 맞습니다.",
    image: IMAGES.HOTEL_AIRPORT,
    tags: ["공항근처", "가성비", "편리"],
    lat:33.4858483,
    lng: 126.4838622,
  },

  {
    id: 202,
    name: "루시드엠 펜션",
    category: "펜션",
    price: 160000,
    location: "서귀포시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "조용한 감성 숙소.",
    fullDescription:
      "자연 속에서 프라이빗하게 쉬기 좋은 감성 펜션입니다. 커플/힐링 여행 콘셉트에 잘 맞아요.",
    image: IMAGES.PENSION_COZY,
    tags: ["감성", "힐링", "조용함"],
    lat: 33.2509451,
    lng: 126.4156784,
  },

  {
    id: 203,
    name: "제주오션뷰호텔",
    category: "호텔",
    price: 150000,
    location: "서귀포시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "바다 전망 중심 호텔.",
    fullDescription:
      "오션뷰 객실이 강점인 호텔입니다. 해변/드라이브 코스와 묶어 추천하기 좋습니다.",
    image: IMAGES.HOTEL_OCEAN,
    tags: ["오션뷰", "서귀포", "커플"],
    lat: 33.2430966,
    lng: 126.424143, 
  },

  {
    id: 204,
    name: "애월감성스테이",
    category: "스테이",
    price: 180000,
    location: "제주시",
    hours: "체크인 16:00 / 체크아웃 11:00",
    shortDescription: "애월 감성 인테리어.",
    fullDescription:
      "사진 찍기 좋은 인테리어와 조용한 분위기의 감성 스테이입니다. 카페 투어 성향과 궁합이 좋아요.",
    image: IMAGES.STAY_AEWOL,
    tags: ["감성", "애월", "사진"],
    lat: 33.4110784,
    lng: 126.3939276,
  },

  {
    id: 205,
    name: "중문힐링리조트",
    category: "리조트",
    price: 220000,
    location: "서귀포시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "휴식형 리조트.",
    fullDescription:
      "시설 편의성과 휴식에 집중한 리조트 타입 숙소입니다. 가족/부모님 동반에 무난합니다.",
    image: IMAGES.RESORT_HEALING,
    tags: ["리조트", "가족", "휴식"],
    lat: 33.2467691,
    lng: 126.4194223,
  },

  {
    id: 206,
    name: "제주공항비즈호텔",
    category: "호텔",
    price: 110000,
    location: "제주시",
    hours: "체크인 14:00 / 체크아웃 11:00",
    shortDescription: "이동 편의 최우선.",
    fullDescription:
      "공항 접근성이 좋아 짧은 일정(당일/1박)이나 이른 비행 스케줄에 적합합니다.",
    image: IMAGES.HOTEL_BUSINESS,
    tags: ["공항근처", "비즈니스", "편리"],
    lat: 33.5070772,
    lng: 126.4934311, 
  },

  {
    id: 207,
    name: "성산바다펜션",
    category: "펜션",
    price: 140000,
    location: "서귀포시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "동부(성산) 라인 숙소.",
    fullDescription:
      "성산/우도 코스를 묶기 좋은 동부 라인 숙소입니다. 새벽 일출 일정에 유리해요.",
    image: IMAGES.PENSION_SEONGSAN,
    tags: ["성산", "동부", "오션뷰"],
    lat: 33.4359478,
    lng: 126.9131075,
  },

  {
    id: 208,
    name: "한림가든게스트하우스",
    category: "게스트하우스",
    price: 35000,
    location: "제주시",
    hours: "체크인 15:00 / 체크아웃 10:00",
    shortDescription: "혼행/가성비 게하.",
    fullDescription:
      "혼자 여행하는 사람에게 부담 없는 가격대의 게스트하우스입니다. 교류형 여행에 잘 맞아요.",
    image: IMAGES.GUESTHOUSE_BUDGET,
    tags: ["혼행", "가성비", "게하"],
    lat: 33.3942591,
    lng: 126.2636781,
  },

  {
    id: 209,
    name: "돌담마을스테이",
    category: "스테이",
    price: 200000,
    location: "제주시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "제주 느낌 나는 돌담 감성.",
    fullDescription:
      "제주 돌담/마당 분위기를 살린 감성 숙소입니다. 조용히 쉬고 싶은 사람에게 추천하기 좋아요.",
    image: IMAGES.STAY_STONEWALL,
    tags: ["제주감성", "조용함", "힐링"],
    lat: 33.4692631,
    lng: 126.5656789,
  },

  {
    id: 210,
    name: "서귀포시티호텔",
    category: "호텔",
    price: 130000,
    location: "서귀포시",
    hours: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "시내 접근성 좋은 호텔.",
    fullDescription:
      "서귀포 시내 중심 동선이 좋아 식당/카페 이동이 편합니다. 일정 베이스캠프로 쓰기 좋아요.",
    image: IMAGES.HOTEL_CITY,
    tags: ["시내", "동선좋음", "가성비"],
    lat: 33.2532177,
    lng: 126.5609945,
  },
];
