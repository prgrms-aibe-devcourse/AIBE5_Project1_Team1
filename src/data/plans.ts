import { findItineraryValueByKey } from "./commonFunction";
import { ItinerarySchedule } from "./commonType";
import { itineraryArray } from "./itineraryArray";
import { destinations } from "../data/destinations";
import { restaurants } from "../data/restaurants";
import { accommodations } from "../data/accommodations";


export type RawPlan = {
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

//대표 여행지 3개 이미지 뽑기
function getTopScheduleImagesByKey(key: string, limit = 3): string[] {
  const itineraryData = itineraryArray.find((it) => it.key === key);
  if (!itineraryData) return [];

  // 1) day → time 순으로 정렬 후 앞에서 limit개
  const topItems = itineraryData.value
    .slice()
    .sort((a, b) =>
      a.day !== b.day ? a.day - b.day : a.time.localeCompare(b.time)
    )
    .slice(0, limit);

  // 2) id로 어느 데이터인지 찾아서 image 매핑
  return topItems
    .map((item) => {
      const id = item.id;

      // 여행지
      const d = destinations.find((x) => x.id === id);
      if (d?.image) return d.image;

      // 식당
      const r = restaurants.find((x) => x.id === id);
      if (r?.image) return r.image;

      // 숙소
      const a = accommodations.find((x) => x.id === id);
      if (a?.image) return a.image;

      // 못 찾으면 null
      return null;
    })
    .filter((img): img is string => Boolean(img));
}

export const rawPlans:RawPlan[] = [
  {
    id: 1,
    key: "my01",
    travelType: "힐링",
    itinerary: findItineraryValueByKey("my01"),
    name: "제주 동부 힐링 여행",
    description: "자연과 함께하는 힐링 여행",
    date: "2024.10.15 ~ 2024.10.17",
    hasReview: true, // 리뷰 작성 완료
    images: getTopScheduleImagesByKey("my01"),
    totalPlaces: 11
  }, 
  {
    id: 2,
    key: "my02",
    name: "여름 제주 해변 여행",
    travelType: "감성",
    description: "푸른 바다와 함께하는 여름 여행",
    itinerary: findItineraryValueByKey("my02"),
    date: "2024.07.10 ~ 2024.07.13",
    hasReview: false,
    images: getTopScheduleImagesByKey("my02"),
    totalPlaces: 7
  },
  {
  id: 3,
  key: "survey",
  name: "동쪽에 머무는 조용한 제주 2박 3일",
  travelType: "감성",
  description: "동부 제주에서 여유롭고 조용하게 머무는 감성 여행",
  itinerary: findItineraryValueByKey("survey"),
  date: "2024.10.15 ~ 2024.10.17",
  hasReview: false,
  images: getTopScheduleImagesByKey("survey"),
  totalPlaces: 11
}
];
export function getPlanById(id:number):RawPlan {
  const plan = rawPlans.find(item => item.id === id);
  return plan ? plan : {} as RawPlan;
}