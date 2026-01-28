import { findItineraryByKey } from "./commonFunction";
import { ItinerarySchedule } from "./commonType";

type RawPlan = {
  id: number,
  key: string,
  travelType: string,
  itinerary: ItinerarySchedule[],
  name: string,
  description: string | null,
  date: string,
  hasReview: boolean,
  images: string[],
  totalPlaces: number
};
export const rawPlans:RawPlan[] = [
  {
    id: 1,
    key: "my01",
    travelType: "힐링",
    itinerary: findItineraryByKey("my01"),
    name: "제주 동부 힐링 여행",
    description: "자연과 함께하는 힐링 여행",
    date: "2024.10.15 ~ 2024.10.17",
    hasReview: true, // 리뷰 작성 완료
    images: [
    "https://images.unsplash.com/photo-1616798249081-30877e213b16?w=200",
    "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?w=200",
    "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=200"
    ],
    totalPlaces: 11
  }, 
  {
    id: 2,
    key: "my02",
    name: "여름 제주 해변 여행",
    travelType: "감성",
    description: "푸른 바다와 함께하는 여름 여행",
    itinerary: findItineraryByKey("my02"),
    date: "2024.07.10 ~ 2024.07.13",
    hasReview: false,
    images: [
      "https://images.unsplash.com/photo-1696335105620-c00aec47521f?w=200",
      "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?w=200",
      "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?w=200"
    ],
    totalPlaces: 7
  },
];
export function getPlanById(id:number):RawPlan {
  const plan = rawPlans.find(item => item.id === id);
  return plan ? plan : {} as RawPlan;
}