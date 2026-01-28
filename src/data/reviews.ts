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