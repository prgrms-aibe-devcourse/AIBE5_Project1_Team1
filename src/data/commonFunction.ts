import { ItineraryData, ItinerarySchedule, StringSchedule, TravelDestination } from "../data/commonType"
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

export const findItineraryValueByKey = (
  key: string
): ItinerarySchedule[] => { 
	const plan = itineraryArray.find(item => item.key === key);
	return plan ? plan.value : [];
}

export const findItineraryByKey = (
  key: string
): ItineraryData => { 
	const plan = itineraryArray.find(item => item.key === key);
	return plan ? plan : {} as ItineraryData;
}

export const makeDuration = (
  startDate: string, 
  itineraryData: ItineraryData
) : string => {
  const [year, month, day] = startDate.split("-").map(Number);
  const date = new Date(year, month - 1, day); // JS Date: month 0~11

  // n일 더하기
  let travalDay = 0;
  for (const itinerarySchedule of itineraryData.value as ItinerarySchedule[]) {
    if (itinerarySchedule.day > travalDay) {
      travalDay = itinerarySchedule.day;
    }
  }

  date.setDate(date.getDate() + travalDay-1);

  // yyyy-mm-dd 형식으로 다시 변환
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // month 0~11
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

export function getDateForPlan(dateStr: string, n: number): string {
  const [y, m, d] = dateStr.split(".").map(Number);

  const date = new Date(y, m - 1, d); // 로컬 기준
  date.setDate(date.getDate() + n-1);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // month 0~11
  const dd = String(date.getDate()).padStart(2, "0");
  console.log(n);
  return `${dateStr} ~ ${yyyy}.${mm}.${dd}`;
}