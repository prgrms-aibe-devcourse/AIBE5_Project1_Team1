import { ItineraryData } from "./commonType";
import { itineraryArray } from "./itineraryArray";
import { findItineraryByKey, findItineraryValueByKey } from "./commonFunction";

export type Comment = {
  id: number;
  author: string;
  content: string;
};

export type Review = {
  id: number;
  author: string;
  date: string;
  tripType: string;
  duration: string;
  rating: number;
  title: string;
  content: string;
  images: string[];
  likes: number;
  itinerary: ItineraryData;
  comments: Comment[];

  isLiked?: boolean;
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "김XX",
    date: "2026.01.10",
    tripType: "커플",
    duration: "2박 3일",
    rating: 5,
    title: "성산일출봉 일출이 정말 환상적이었어요!",
    content: "PLAN Jeju 덕분에 제주 여행을 너무 편하게 다녀왔습니다.\n 특히 성산일출봉 일정이 완벽했어요. 새벽 일찍 출발했는데, 일출 시간 계산까지 다 되어 있어서 최고의 일출을 볼 수 있었습니다. 추천 일정대로 움직였더니 시간도 절약되고 좋았어요.",
    images: [
      "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    likes: 127,
    itinerary: findItineraryByKey("survey"),
    comments: [ 
      { id: 1, author: "이XX", content: "성산일출봉 정보 감사합니다!" },
      { id: 2, author: "최XX", content: "사진이 너무 예술이네요." }
    ],
  },
  {
    id: 2,
    author: "박XX",
    date: "2026.01.08",
    tripType: "친구",
    duration: "2박 3일",
    rating: 4,
    title: "한라산 등반 코스 추천 감사합니다",
    content: "등산 초보자인데 PLAN Jeju에서 추천해준 한라산 코스가 딱 맞았어요. 난이도도 적당하고, 주변 맛집 정보도 정확해서 하산 후 제주 흑돼지도 맛있게 먹었습니다. 다음에 제주 가면 또 이용할게요!",
    images: [
      "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    likes: 98,
    itinerary: findItineraryByKey("02"),
    comments: [
      { id: 1, author: "한XX", content: "한라산 코스 난이도 어땠나요?" }
    ],
  },
  {
    id: 3,
    author: "최XX",
    date: "2026.01.20",
    tripType: "가족",
    duration: "3박 4일",
    rating: 5,
    title: "부모님과 함께한 최고의 효도 여행이었어요!",
    content: "처음으로 부모님 모시고 가는 제주도라 걱정이 많았는데, PLAN Jeju의 추천 코스 덕분에 칭찬 많이 들었습니다. 특히 주상절리와 천제연 폭포 동선이 너무 좋았어요. 이동 거리도 적당하고 부모님이 힘들어하지 않으면서도 제주의 절경을 만끽할 수 있었습니다.",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg", 
      "../src/images/img6.jpg", 
      "../src/images/img5.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img1.jpg"  
    ],
    likes: 156,
    itinerary: findItineraryByKey("03"),
    comments: [],
  },
  {
    id: 4,
    author: "정XX",
    date: "2026.01.22",
    tripType: "친구",
    duration: "2박 3일",
    rating: 5,
    title: "먹다 끝난 제주 맛집 정복기! 흑돼지는 진리입니다.",
    content: "이번 여행의 테마는 오직 '맛'이었어요. 추천해주신 애월쪽 흑돼지집이랑 함덕 해녀의 집 진짜 대박입니다. 뷰도 환상적이고 맛은 더 환상적이었어요. 특히 웨이팅 꿀팁 알려주신 덕분에 시간 낭비 없이 완벽하게 먹방 찍고 왔습니다!",
    images: [
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1080", // 제주 음식/고기 느낌
    ],
    likes: 210,
    itinerary: findItineraryByKey("my01"),
    comments: [],
  },
  {
    id: 5,
    author: "강XX",
    date: "2026.01.24",
    tripType: "솔로",
    duration: "1박 2일",
    rating: 4,
    title: "혼자 떠난 제주, 감성 카페에서 힐링하고 왔어요.",
    content: "짧은 일정이었지만 오로지 나만을 위한 시간을 보냈습니다. 구좌읍 쪽 조용한 카페들을 추천받았는데, 통창 너머로 보이는 에메랄드빛 바다를 보며 책 읽던 시간이 이번 여행 최고의 순간이었어요. 혼자 가기 좋은 숙소 추천도 정말 만족스러웠습니다.",
    images: [
      "../src/images/img3.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img_food7.jpg", 
      "../src/images/img8.jpg",
      "../src/images/img7.jpg"
    ],
    likes: 85,
    itinerary: findItineraryByKey("review01"),
    comments: [],
  },
  {
    id: 6,
    author: "한XX",
    date: "2026.01.25",
    tripType: "커플",
    duration: "2박 3일",
    rating: 5,
    title: "우도에서 전기차 타고 달린 추억 잊지 못할 거예요.",
    content: "우도 일정 넣을까 말까 고민했는데 안 갔으면 후회할 뻔했습니다! 추천해주신 대로 아침 일찍 배 타고 들어갔더니 사람도 적고 여유로웠어요. 검멀레 해변에서 먹은 땅콩 아이스크림은 진짜 역대급이었습니다. 날씨까지 도와줘서 사진이 다 화보처럼 나왔네요.",
    images: [
       "../src/images/img4.jpg",  
       "../src/images/img5.jpg",   // 제주 해안 도로
    ],
    likes: 189,
    itinerary: findItineraryByKey("04"),
    comments: [],
  }
];