import { ItinerarySchedule, StringSchedule, TravelDestination } from "../data/commonType"
import { itineraryArray } from "./itineraryArray";

export const makeReviewItinerary = (
  targetDestinations: TravelDestination[], 
  itinerary: ItinerarySchedule[]
): StringSchedule[] => {
  if (!Array.isArray(itinerary) || itinerary.length === 0) {
    return [];
  }

  // 일차별로 그룹화
  const dayMap = new Map<number, string[]>();
  
  itinerary.forEach((item) => {
    const destination = targetDestinations.find(d => d.id === item.id);
    if (!destination) return;

    const day = item.day;
    if (!dayMap.has(day)) {
      dayMap.set(day, []);
    }
    dayMap.get(day)?.push(destination.name);
  });

  // 일차순으로 정렬하여 결과 생성
  const result: StringSchedule[] = Array.from(dayMap)
    // .sort((a, b) => a[0] - b[0])
    .map(([day, names]) => ({
      day: `${day}일차`,
      schedule: names.join(" → ")
    }));

  return result;
}

export const findItineraryByKey = (
  key: string
): ItinerarySchedule[] => { 
	const plan = itineraryArray.find(item => item.key === key);
	return plan ? plan.value : itineraryArray[0].value;
}