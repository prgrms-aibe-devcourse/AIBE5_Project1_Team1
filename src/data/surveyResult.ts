// 일정 데이터
export interface ScheduleItem {
  time: string;
  emoji: string;
  title: string;
  description: string;
}

export interface DaySchedule {
  day: number;
  schedule: ScheduleItem[];
}

export interface Itinerary {
  packageName: string;
  packageEmoji: string;
  keywords: string[];
  days: DaySchedule[];
}

export const itinerary = {
  packageName: "동쪽에 머무는 조용한 제주 2박 3일",
  packageEmoji: "🌿",
  keywords: ["감성", "성산", "바다", "천천히"],
  days: [
    {
      day: 1,
      schedule: [
        {
          time: "12:30",
          emoji: "🍜",
          title: "점심 - 자매국수",
          description: "고기국수 or 멸치국수 맛집!"
        },
        {
          time: "14:00",
          emoji: "🌊",
          title: "김녕 함덕 해수욕장",
          description: "탁 트인 서귀포 앞바다를 볼 수 있는 산책로 포함.\n사진 + 커피 테이크아웃"
        },
        {
          time: "15:30",
          emoji: "📸",
          title: "오조포구",
          description: "돌담 길 + 바다 감성 포인트\n사진 예시로 쓰기 딱 좋은 장소"
        },
        {
          time: "16:00",
          emoji: "🏨",
          title: "숙소 - 성산 오션뷰 호텔",
          description: "조용한 동네 / 바다 전망"
        }
      ]
    },
    {
      day: 2,
      schedule: [
        {
          time: "10:00",
          emoji: "☕",
          title: "아침 - 숙소 근처 카페",
          description: "여유있게 아침 식사"
        },
        {
          time: "11:00",
          emoji: "⛰️",
          title: "성산일출봉",
          description: "제주 대표 명소 방문"
        },
        {
          time: "13:00",
          emoji: "🍚",
          title: "점심 - 제주 해물식당",
          description: "신선한 해산물 요리"
        },
        {
          time: "14:30",
          emoji: "🌿",
          title: "섭지코지",
          description: "감성 사진 촬영 명소"
        }
      ]
    },
    {
      day: 3,
      schedule: [
        {
          time: "10:00",
          emoji: "☕",
          title: "아침 - 브런치 카페",
          description: "여유로운 아침 시간"
        },
        {
          time: "12:00",
          emoji: "🍽️",
          title: "점심 - 흑돼지 맛집",
          description: "제주도에서의 마지막 식사"
        },
        {
          time: "14:00",
          emoji: "🛍️",
          title: "동문시장",
          description: "기념품 구매"
        },
        {
          time: "16:00",
          emoji: "✈️",
          title: "제주 공항",
          description: "집으로 돌아가기"
        }
      ]
    }
  ]
};

export const sampleItinerary = [
  // 1일차 - 자매국수, 함덕해수욕장, 오조포구, 위드시티호텔
    {
        "id": 31,
        "day": 1,
        "time": "09:00"
    },
    {
        "id": 14,
        "day": 1,
        "time": "11:30"
    },
    {
        "id": 32,
        "day": 1,
        "time": "14:00"
    },
    {
        "id": 33,
        "day": 1,
        "time": "17:00"
    },
    
    // 2일차 리에또 카페, 성산일출봉, 섭산코지, 성산 수산 식당
    {
        "id": 34,
        "day": 2,
        "time": "09:30"
    },
    {
        "id": 2,
        "day": 2,
        "time": "14:00"
    },
    {
        "id": 5,
        "day": 2,
        "time": "14:00"
    },
    {
        "id": 35,
        "day": 2,
        "time": "14:00"
    },
    // 3일차 - 뷰스트, 사계흑돼지 산방산본점, 동문시장, 제주공항
    {
        "id": 36,
        "day": 3,
        "time": "10:00"
    },
    {
        "id": 37,
        "day": 3,
        "time": "10:00"
    },
    {
        "id": 38,
        "day": 3,
        "time": "10:00"
    },
    {
        "id": 39,
        "day": 3,
        "time": "10:00"
    },
];