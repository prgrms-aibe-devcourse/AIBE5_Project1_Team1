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
    content: "PLAN Jeju 덕분에 제주 2박 3일 여행이 정말 편안하게 완성됐습니다.\n\n첫날에는 위드시티호텔에 체크인한 뒤 자매국수로 이동했는데, 동선이 잘 짜여 있어서 이동에 대한 스트레스가 전혀 없었어요. 든든하게 식사를 하고 바로 함덕해수욕장으로 넘어가 바다를 보며 산책하니, 제주 여행이 시작됐다는 실감이 확 들었습니다.\n\n둘째 날은 이번 여행의 하이라이트였어요. 새벽에 성산일출봉으로 이동했는데, 일출 시간까지 계산된 일정 덕분에 서두르지 않고 여유롭게 움직일 수 있었습니다. 정상에서 바라본 일출은 정말 압도적이었고, 사진보다 실제로 보는 감동이 훨씬 컸어요.\n\n이후 섭지코지로 이동해 바다와 초원을 따라 걷는 시간도 너무 좋았습니다. 자연스럽게 이어지는 동선 덕분에 풍경에만 집중할 수 있었고, 여행의 감성이 한층 더 살아났어요. 점심은 성산수산식당에서 해결했는데, 신선한 해산물 덕분에 제주다운 한 끼를 제대로 즐길 수 있었습니다.\n\n마지막 날에는 우도에서 여유롭게 시간을 보내고, 동문시장에서 먹거리와 기념품을 챙기며 여행을 마무리했습니다. 관광, 자연, 맛집, 휴식이 균형 있게 구성된 일정이라 2박 3일 동안 알차게 제주를 즐길 수 있었어요.\n\n전체적으로 일정만 따라갔을 뿐인데 이동 시간은 줄고, 체력 소모도 적어서 여행 만족도가 정말 높았습니다. 처음 제주를 가는 분들뿐만 아니라, 다시 찾는 분들께도 추천하고 싶은 플랜이에요.",
    images: [
      // 제주 바다 / 해안
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",

      // 성산일출봉
      "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?auto=format&fit=crop&w=1080&q=80",

      // 함덕해수욕장
      "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",

      // 우도 바다
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1080&q=80",

      // 제주 숙소 감성
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80",
    ],
    likes: 127,
    itinerary: findItineraryByKey("review01"),
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
    content: "처음으로 부모님을 모시고 제주 여행을 가는 거라 걱정이 많았는데, PLAN Jeju 덕분에 정말 편안한 여행이 됐어요.\n\n이동 거리가 과하지 않게 구성돼 있어서 부모님이 힘들어하지 않으셨고, 차에서 내려 잠깐씩만 걸어도 제주 풍경을 충분히 즐길 수 있는 코스들이라 만족도가 높았습니다.\n\n특히 주상절리와 천제연 폭포 일정이 너무 좋았어요. 자연 경관이 뛰어나면서도 동선이 안정적이라 부모님께서 계속 감탄하시더라고요.\n\n부모님과 함께하는 여행을 고민 중이라면 꼭 추천하고 싶은 플랜입니다. 덕분에 칭찬도 많이 듣고, 기억에 남는 효도 여행이 되었어요.",
    images: [
      "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      // 제주 일몰 풍경
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=80",

    ],
    likes: 98,
    itinerary: findItineraryByKey("review02"),
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
    content: "이번 제주 여행의 테마는 오직 ‘맛’이었는데, PLAN Jeju 추천이 정말 정확했어요.\n\n애월 쪽 흑돼지 맛집이랑 함덕 해녀의 집은 기대 이상이었고, 분위기부터 음식 퀄리티까지 모두 만족스러웠습니다. 특히 해산물은 신선함이 바로 느껴질 정도였어요.\n\n가장 좋았던 점은 웨이팅 팁까지 함께 안내돼 있어서, 불필요하게 기다리는 시간 없이 효율적으로 움직일 수 있었다는 거예요.\n\n덕분에 먹는 데에만 집중하면서도 일정이 흐트러지지 않았고, 완벽한 먹방 여행을 즐길 수 있었습니다. 제주 맛집 여행을 계획 중이라면 강력 추천합니다.",
    images: [
      "../src/images/img9.jpg", 
      "../src/images/img10.jpg", 
      "../src/images/img6.jpg", 
      "../src/images/img5.jpg", 
      "../src/images/img4.jpg", 
      "../src/images/img1.jpg",
      // 제주 식당 분위기
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1080&q=80",
 
    ],
    likes: 156,
    itinerary: findItineraryByKey("review03"),
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
    content: "이번 여행의 테마는 오직 ‘맛’이었어요.\n\nPLAN Jeju에서 추천해준 애월 쪽 흑돼지집이랑 함덕 해녀의 집이 진짜 대박이었습니다. 분위기도 좋았고, 무엇보다 음식 퀄리티가 기대 이상이었어요.\n\n흑돼지는 육즙이 살아 있어서 한 입 먹자마자 감탄했고, 해녀의 집 해산물은 신선함이 바로 느껴질 정도였어요. ‘제주 오면 이건 꼭 먹어야 한다’는 말이 딱 맞았습니다.\n\n특히 웨이팅 꿀팁까지 함께 알려줘서 시간 낭비 없이 이동할 수 있었던 점이 정말 좋았어요. 덕분에 먹는 데에만 집중하면서도 일정이 흐트러지지 않았습니다.\n\n완벽하게 먹방 찍고 온 제주 여행이었고, 맛집 위주 여행을 계획 중이라면 이 플랜은 무조건 추천입니다.",
    images: [
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1080", // 제주 음식/고기 느낌

      // 고기 요리(흑돼지 느낌)
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1080&q=80"

    ],
    likes: 210,
    itinerary: findItineraryByKey("review04"),
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
  },
  {
  id: 7,
  author: "김XX",
  date: "2024.10.15",
  tripType: "커플",
  duration: "2박 3일",
  rating: 5,
  title: "제주 동부에서 제대로 쉬고 온 힐링 여행이었어요.",
  content: "바쁘게 돌아다니는 여행보다 쉬면서 제주를 느끼고 싶어서 선택한 일정이었는데, 정말 딱 맞는 플랜이었어요.\n\n첫날에는 성산바다펜션에 체크인하고 섭지코지로 이동했는데, 이동 동선이 짧아서 도착하자마자 여유가 생기더라고요. 바다 보면서 천천히 걷는 것만으로도 여행 온 기분이 제대로 났습니다.\n\n둘째 날에는 용눈이오름이랑 비자림 코스가 정말 좋았어요. 오름은 힘들지 않으면서도 전망이 훌륭했고, 비자림에서는 공기부터 달라서 걷는 내내 힐링되는 느낌이었어요. 저녁에 성산수산식당에서 먹은 해산물도 신선해서 하루 마무리가 완벽했습니다.\n\n마지막 날에는 김녕미로공원과 함덕해수욕장에서 가볍게 일정 마무리했는데, 복잡하지 않아서 체력 부담 없이 끝까지 만족스러웠어요. 관광 욕심보다는 힐링 위주 여행을 원하신다면 정말 추천하고 싶은 코스입니다.",
  images: [
    // 함덕해수욕장
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
  ],
  likes: 203,
  itinerary: findItineraryByKey("my01"),
  comments: [],
  }
];