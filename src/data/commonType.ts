export type AccommodationCategory =
  | "호텔"
  | "리조트"
  | "게스트하우스"
  | "펜션"
  | "스테이";
export type RestaurantCategory =
  | "한식"
  | "해산물"
  | "카페"
  | "고기"
  | "흑돼지"
  | "양식"
  | "시장";
export type DestinationCategory = 
  | "자연"
  | "해변"
  | "섬"
  | "드라이브"
  | "테마파크";
export type TravelDestinationCategory =
  | AccommodationCategory
  | RestaurantCategory
  | DestinationCategory;

export const destinationCategories: string[] = [
  "자연",
  "해변",
  "섬",
  "드라이브",
  "테마파크"
];
export const accommodationCategories: string[] = [
  "호텔",
  "리조트",
  "게스트하우스",
  "펜션",
  "스테이",
];
export const restaurantCategories: string[] = [
  "한식",
  "해산물",
  "카페",
  "고기",
  "흑돼지",
  "양식",
  "시장"
];

export type TravelDestination = {
  id: number;
  name: string;
  category: TravelDestinationCategory;
  duration?: string;
  price: number;
  location: string;
  hours: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  lat: number;
  lng: number;
};




export type TravelTypeCategory = "감성" | "힐링" | "맛집" | "액티비티";
export const travelTypeCategories: string[] = [
  "감성",
  "힐링",
  "맛집",
  "액티비티"
];





export type TotalPrice = {
  attractionPrice: number;
  hotelPrice: number;
  foodPrice: number;
}



// 지도
export type MapItem = {
  id: string;
  title: string;
  day: number;
  seq: number;
  lat: number;
  lng: number;
};

export type ItinerarySchedule = {
  id: number;
  day: number;
  time: string;
}

export type PlanInfo = {
  title: string;
  date: string;
  description: string | null;
  isPrivate: boolean;
}

export type PlanState = {
  sourcePage: string;
  isReadOnly: boolean;
  travelType: string | null;
  myPlan: ItinerarySchedule[];
  planInfo: PlanInfo;
};

export type ItineraryData = {
  key: string;
  travelType: TravelTypeCategory;
  planName: string;
  value: ItinerarySchedule[];
}

export type StringSchedule = {
  day: string;
  schedule: string;
}