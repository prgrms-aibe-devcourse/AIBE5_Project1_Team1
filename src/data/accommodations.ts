// src/data/accommodations.ts

export type AccommodationCategory =
  | "호텔"
  | "리조트"
  | "게스트하우스"
  | "펜션"
  | "스테이";

export type Accommodation = {
  id: number;
  name: string;
  category: AccommodationCategory;
  pricePerNight: number;
  location: string;
  checkInOut: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb2100d?auto=format&fit=crop&w=1200&q=80";

export const accommodations: Accommodation[] = [
  // ✅ 필수 포함 1) 위드시티호텔
  {
    id: 1,
    name: "위드시티호텔",
    category: "호텔",
    pricePerNight: 120000,
    location: "제주시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "공항 근처 실속형 호텔.",
    fullDescription:
      "이동 동선이 짧아 도착/출발 일정에 유리한 실속형 호텔입니다. 가성비 중심 코스에 잘 맞습니다.",
    image: DEFAULT_IMAGE,
    tags: ["공항근처", "가성비", "편리"],
  },

  // ✅ 필수 포함 2) 루시드엠 펜션
  {
    id: 2,
    name: "루시드엠 펜션",
    category: "펜션",
    pricePerNight: 160000,
    location: "서귀포시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "조용한 감성 숙소.",
    fullDescription:
      "자연 속에서 프라이빗하게 쉬기 좋은 감성 펜션입니다. 커플/힐링 여행 콘셉트에 잘 맞아요.",
    image: DEFAULT_IMAGE,
    tags: ["감성", "힐링", "조용함"],
  },

  // ➕ 더미 8개 추가 (총 10개)
  {
    id: 3,
    name: "제주오션뷰호텔",
    category: "호텔",
    pricePerNight: 150000,
    location: "서귀포시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "바다 전망 중심 호텔.",
    fullDescription:
      "오션뷰 객실이 강점인 호텔입니다. 해변/드라이브 코스와 묶어 추천하기 좋습니다.",
    image: DEFAULT_IMAGE,
    tags: ["오션뷰", "서귀포", "커플"],
  },
  {
    id: 4,
    name: "애월감성스테이",
    category: "스테이",
    pricePerNight: 180000,
    location: "제주시",
    checkInOut: "체크인 16:00 / 체크아웃 11:00",
    shortDescription: "애월 감성 인테리어.",
    fullDescription:
      "사진 찍기 좋은 인테리어와 조용한 분위기의 감성 스테이입니다. 카페 투어 성향과 궁합이 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["감성", "애월", "사진"],
  },
  {
    id: 5,
    name: "중문힐링리조트",
    category: "리조트",
    pricePerNight: 220000,
    location: "서귀포시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "휴식형 리조트.",
    fullDescription:
      "시설 편의성과 휴식에 집중한 리조트 타입 숙소입니다. 가족/부모님 동반에 무난합니다.",
    image: DEFAULT_IMAGE,
    tags: ["리조트", "가족", "휴식"],
  },
  {
    id: 6,
    name: "제주공항비즈호텔",
    category: "호텔",
    pricePerNight: 110000,
    location: "제주시",
    checkInOut: "체크인 14:00 / 체크아웃 11:00",
    shortDescription: "이동 편의 최우선.",
    fullDescription:
      "공항 접근성이 좋아 짧은 일정(당일/1박)이나 이른 비행 스케줄에 적합합니다.",
    image: DEFAULT_IMAGE,
    tags: ["공항근처", "비즈니스", "편리"],
  },
  {
    id: 7,
    name: "성산바다펜션",
    category: "펜션",
    pricePerNight: 140000,
    location: "서귀포시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "동부(성산) 라인 숙소.",
    fullDescription:
      "성산/우도 코스를 묶기 좋은 동부 라인 숙소입니다. 새벽 일출 일정에 유리해요.",
    image: DEFAULT_IMAGE,
    tags: ["성산", "동부", "오션뷰"],
  },
  {
    id: 8,
    name: "한림가든게스트하우스",
    category: "게스트하우스",
    pricePerNight: 35000,
    location: "제주시",
    checkInOut: "체크인 15:00 / 체크아웃 10:00",
    shortDescription: "혼행/가성비 게하.",
    fullDescription:
      "혼자 여행하는 사람에게 부담 없는 가격대의 게스트하우스입니다. 교류형 여행에 잘 맞아요.",
    image: DEFAULT_IMAGE,
    tags: ["혼행", "가성비", "게하"],
  },
  {
    id: 9,
    name: "돌담마을스테이",
    category: "스테이",
    pricePerNight: 200000,
    location: "제주시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "제주 느낌 나는 돌담 감성.",
    fullDescription:
      "제주 돌담/마당 분위기를 살린 감성 숙소입니다. 조용히 쉬고 싶은 사람에게 추천하기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["제주감성", "조용함", "힐링"],
  },
  {
    id: 10,
    name: "서귀포시티호텔",
    category: "호텔",
    pricePerNight: 130000,
    location: "서귀포시",
    checkInOut: "체크인 15:00 / 체크아웃 11:00",
    shortDescription: "시내 접근성 좋은 호텔.",
    fullDescription:
      "서귀포 시내 중심 동선이 좋아 식당/카페 이동이 편합니다. 일정 베이스캠프로 쓰기 좋아요.",
    image: DEFAULT_IMAGE,
    tags: ["시내", "동선좋음", "가성비"],
  },
];
