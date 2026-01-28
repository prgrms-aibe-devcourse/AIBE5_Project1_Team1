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
    content: "PLAN Jeju 덕분에 제주 여행을 너무 편하게 다녀왔습니다. 특히 성산일출봉 일정이 완벽했어요. 새벽 일찍 출발했는데, 일출 시간 계산까지 다 되어 있어서 최고의 일출을 볼 수 있었습니다. 추천 일정대로 움직였더니 시간도 절약되고 좋았어요.",
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
    itinerary: findItineraryByKey("05"),
    comments: [],
  },
  {
    id: 5,
    author: "강XX",
    date: "2026.01.24",
    tripType: "솔로",
    duration: "2박 3일",
    rating: 4,
    title: "초록색만 봐도 힐링되는 2박 3일 제주 완벽 동선! (사려니부터 용머리해안까지)",
    content: `이번 제주 여행은 정말 '쉼' 그 자체였어요. 2박 3일이라는 짧은 시간이었지만, 이 플랜대로 움직이니 동선이 꼬이지 않아서 너무 좋았습니다.\n\n`+
              `첫날 도착해서 바로 달려간 사려니숲길은 입구에 들어서자마자 뿜어져 나오는 삼나무 향 덕분에 머리가 맑아지는 기분이었어요. 비가 살짝 온 뒤라 안개가 끼어 있었는데, 그 덕분에 더 몽환적이고 감성적인 사진을 건질 수 있었습니다. 저녁으로 먹은 사계흑돼지는 정말... 인생 맛집 등극입니다! 멜젓에 콕 찍어 먹는 그 맛은 서울에서는 절대 못 느낄 맛이에요.\n\n`+
              `둘째 날 오설록 티뮤지엄에서는 푸른 녹차밭을 보며 시원한 녹차 아이스크림 한 입 하니까 이게 바로 행복이지 싶더라고요. 바로 이어진 카멜리아힐 산책로도 너무 예쁘게 관리되어 있어서 친구랑 사진 찍느라 시간 가는 줄 몰랐네요. 뷰스트 카페의 널찍한 통창 너머로 보이는 바다 뷰는 이번 여행의 하이라이트 중 하나였습니다.\n\n`+
              `마지막 날 용머리해안은 파도가 높으면 관람이 제한된다고 해서 조마조마했는데, 다행히 날씨가 좋아 입장할 수 있었어요! 자연이 억겁의 세월 동안 깎아 만든 그 웅장한 지층 앞에 서니 사람이 참 작게 느껴지더라고요. 공항 가기 전 자매국수에서 든든하게 고기국수로 마무리하니 완벽한 여행이었습니다. 여유로운 힐링을 원하시는 분들이라면 이 플랜 무조건 저장하세요!\n\n`,
    images: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1080", // 숲 (사려니숲길)
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1080", // 고기/BBQ (사계흑돼지)
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=1080", // 녹차/다도 (오설록)
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1080", // 해안 (용머리해안)
      "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&q=80&w=1080"  // 면/국수 (자매국수)
    ],
    likes: 85,
    itinerary: findItineraryByKey("03"),
    comments: [],
  },
  {
    id: 6,
    author: "한XX",
    date: "2026.01.25",
    tripType: "솔로",
    duration: "2박 3일",
    rating: 5,
    title: "뚜벅이 혼행족 주목! 가성비와 힐링을 다 잡은 완벽한 2박 3일",
    content: `혼자 떠나는 첫 제주 여행이라 걱정이 많았는데, 이 플랜 덕분에 정말 알차고 든든하게 보내고 왔습니다.\n\n`+
              `첫날 숙소였던 한림가든게스트하우스는 사장님도 친절하시고 혼자 머물기에 딱 아늑했어요. 짐 풀고 바로 앞 곽지과물해변에서 노을을 보는데 '아, 이게 진짜 여행이지' 싶더라고요. 저녁으로 먹은 우진해장국은 명성대로 웨이팅이 좀 있었지만, 한 입 먹자마자 기다림의 피로가 싹 가시는 고소한 맛이었습니다.\n\n`+
              `둘째 날은 제주 동쪽의 자연을 온전히 느낀 하루였어요. 만장굴의 서늘하고 신비로운 기운에 압도당했다가, 비자림으로 넘어가서 숲 내음을 맡으며 걷는데 일상의 스트레스가 다 씻겨 내려가는 기분이었습니다. 특히 함덕해수욕장의 에메랄드빛 바다는 그냥 멍하니 보고만 있어도 행복해지는 풍경이었어요.\n\n`+
              `마지막 날 동문시장에서 가족들 줄 기념품도 사고, 시장 특유의 활기찬 분위기를 즐긴 뒤 자매국수로 깔끔하게 마무리했습니다. 가성비를 챙기면서도 제주의 핵심 명소는 다 가볼 수 있는 최고의 동선이었어요. 저처럼 혼자 여행 계획하시는 분들께 이 루트 강력 추천합니다!`,
    images: [
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1080", // 곽지해변 (바다/노을)
      "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1080", // 우진해장국 (따뜻한 국물 요리 느낌)
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080", // 비자림 (숲/피톤치드)
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1080", // 함덕 (투명한 바다)
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=1080"  // 동문시장 (북적이는 시장 느낌)
    ],
    likes: 189,
    itinerary: findItineraryByKey("05"),
    comments: [],
  }
];