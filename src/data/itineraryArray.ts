
type ItineraryItem = {
  id: number;
  day: number;
  time: string;
};

type singleItinerary = {
    key: string;
    value: ItineraryItem[];
};

export const itineraryArray: singleItinerary[] = [
    {
        key: 'survey',
        value: [
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
        ]
    },
    {
        key: 'review01',
        value: [
            {
                "id": 18,
                "day": 1,
                "time": "09:00"
            },
            {
                "id": 14,
                "day": 1,
                "time": "11:30"
            },
            {
                "id": 19,
                "day": 1,
                "time": "14:00"
            },
            {
                "id": 20,
                "day": 1,
                "time": "17:00"
            },
            
            // 2일차 리에또 카페, 성산일출봉, 섭산코지, 성산 수산 식당
            {
                "id": 7,
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
                "id": 11,
                "day": 2,
                "time": "14:00"
            },
            // 3일차 - 뷰스트, 사계흑돼지 산방산본점, 동문시장, 제주공항
            {
                "id": 14,
                "day": 3,
                "time": "10:00"
            },
            {
                "id": 6,
                "day": 3,
                "time": "10:00"
            },
            {
                "id": 8,
                "day": 3,
                "time": "10:00"
            },
        ]
    },
];