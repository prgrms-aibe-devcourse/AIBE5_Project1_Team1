// src/data/destinations.ts

export type DestinationCategory = "자연" | "해변" | "섬" | "드라이브" | "테마파크";
export const destinationCategories: string[] = [
  "자연",
  "해변",
  "섬",
  "드라이브",
  "테마파크"
];

export type Destination = {
  id: number;
  name: string;
  category: DestinationCategory;
  duration: string;
  price: number;
  location: string;
  hours: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  lat?: number;
  lng?: number;
};

const DEFAULT_HOURS = "09:00 - 18:00 (연중무휴)";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

export const destinations: Destination[] = [
  // ✅ 기존 1~3 (네가 올려준 내용 기반 + 필드 보강)
  {
    id: 1,
    name: "한라산",
    category: "자연",
    duration: "5~7시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription:
      "대한민국 최고봉이자 제주의 상징. 백록담까지 오르는 트레킹 코스가 유명합니다.",
    fullDescription: `한라산은 제주도 중앙에 위치한 대한민국 최고봉으로 해발 1,947m입니다.
순상화산으로 형성된 휴화산이며, 정상에는 백록담이라는 분화구 호수가 있습니다.
고도에 따라 다양한 식생이 분포해 생태적 가치가 매우 높습니다.
이러한 자연적 가치를 인정받아 유네스코 세계자연유산으로 등재되어 있습니다.`,
    // ✅ 불안정한 검색 링크 대신 안정적인 Unsplash 포맷으로 교체 추천
    image: "https://images.unsplash.com/photo-1740329289241-3adf04a8e3ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwaGFsbGFzYW4lMjBtb3VudGFpbnxlbnwxfHx8fDE3NjkyMzQ2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["자연", "등산", "사진명소"],
    lat: 33.361667, lng: 126.529167
  },
  {
    id: 2,
    name: "성산일출봉",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription:
      "제주를 대표하는 일출 명소. 거대한 분화구와 함께 보는 일출은 평생 잊지 못할 추억이 됩니다.",
    fullDescription: `성산일출봉은 약 5천년 전 해저 화산 폭발로 만들어진 응회구입니다.
높이 182m의 거대한 왕관 모양 화산체로, 정상에서 보는 일출이 장관입니다.
유네스코 세계자연유산으로 등재되어 있으며, 제주의 대표 관광지입니다.
주변 해녀 문화와 함께 제주의 독특한 문화를 경험할 수 있습니다.`,
    image: "https://images.unsplash.com/photo-1758327740342-4e705edea29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwYmVhY2glMjBjb2FzdGFsfGVufDF8fHx8MTc2OTIzNDYzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["일출", "유네스코", "트레킹"],
    lat: 33.45880518948728, lng: 126.94097338703314 
  },
  {
    id: 3,
    name: "협재해수욕장",
    category: "해변",
    duration: "3~4시간",
    price: 0,
    location: "제주시",
    hours: "24시간 개방",
    shortDescription: "에메랄드빛 바다와 흰 모래사장이 아름다운 제주 최고의 해변.",
    fullDescription: `협재해수욕장은 제주 서쪽에 위치한 대표적인 해변입니다.
투명한 에메랄드빛 바다와 고운 백사장이 조화를 이룹니다.
비양도가 보이는 아름다운 석양으로도 유명합니다.
주변에 카페와 식당이 많아 여유로운 휴양을 즐기기 좋습니다.`,
    image: "https://images.unsplash.com/photo-1674606042265-c9f03a77e286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWp1JTIwaXNsYW5kJTIwd2F0ZXJmYWxsJTIwbmF0dXJlfGVufDF8fHx8MTc2OTIzNDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["해변", "석양", "휴양"],
    lat: 33.3941325, lng: 126.239728
  },

  // ✅ TravelListPage에 있던 4~30 (그대로 이관 + hours 기본값 포함)

  {
    id: 4,
    name: "우도",
    category: "섬",
    duration: "4~5시간",
    price: 10500,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "자전거로 한 바퀴 도는 제주 속 작은 섬.",
    fullDescription: "에메랄드빛 바다와 해안도로가 인상적인 섬입니다.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["섬", "자전거", "해변"],
    lat: 33.5064494277481 , lng:126.952985318412
  },
  {
    id: 5,
    name: "섭지코지",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "해안 절벽과 초원이 어우러진 명소.",
    fullDescription: "드라마 촬영지로도 유명한 제주 동부 명소입니다.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    tags: ["절벽", "사진명소"],
    lat: 33.423925527706956, lng: 126.93076085774399
  },
  {
    id: 6,
    name: "만장굴",
    category: "자연",
    duration: "1~2시간",
    price: 4000,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "세계적인 규모의 용암 동굴.",
    fullDescription: "신비로운 지하 세계를 체험할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["동굴", "유네스코"],
    lat: 33.5282463, lng: 126.7702874
  },
  {
    id: 7,
    name: "천지연폭포",
    category: "자연",
    duration: "1~2시간",
    price: 2000,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "도심 속에서 만나는 웅장한 폭포.",
    fullDescription: "산책 코스로도 좋은 대표 폭포입니다.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    tags: ["폭포", "산책"],
    lat: 33.246944 , lng: 126.554417
  },
  {
    id: 8,
    name: "정방폭포",
    category: "자연",
    duration: "1~2시간",
    price: 2000,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "바다로 직접 떨어지는 희귀한 폭포.",
    fullDescription: "아시아에서 보기 드문 해안 폭포입니다.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    tags: ["폭포", "바다"],
    lat:33.2448521, lng: 126.5718032
  },
  {
    id: 9,
    name: "용머리해안",
    category: "자연",
    duration: "1~2시간",
    price: 2000,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "파도와 바람이 만든 장대한 해안 절경.",
    fullDescription: "용의 머리를 닮은 독특한 지형입니다.",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80",
    tags: ["해안", "절벽"],
    lat: 33.2316155 , lng: 126.3148321
  },
  {
    id: 10,
    name: "산방산",
    category: "자연",
    duration: "2~3시간",
    price: 1000,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "종 모양의 독특한 제주 명산.",
    fullDescription: "전설과 지질학적 가치가 공존합니다.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    tags: ["산", "전망"],
    lat: 33.2410682, lng: 126.3134467
  },
  {
    id: 11,
    name: "카멜리아힐",
    category: "테마파크",
    duration: "2~3시간",
    price: 9000,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "동백꽃으로 유명한 힐링 수목원.",
    fullDescription: "사계절 꽃을 즐길 수 있는 정원입니다.",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
    tags: ["정원", "힐링"],
    lat: 33.2898049, lng: 126.3682983
  },
  {
    id: 12,
    name: "비자림",
    category: "자연",
    duration: "1~2시간",
    price: 3000,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "수백 년 된 비자나무 숲길.",
    fullDescription: "천연기념물로 지정된 산책로입니다.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    tags: ["숲", "산책"],
    lat: 33.484272, lng: 126.8064793
  },
  {
    id: 13,
    name: "에코랜드",
    category: "테마파크",
    duration: "3~4시간",
    price: 14000,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "기차로 즐기는 숲 테마파크.",
    fullDescription: "아이와 함께하기 좋은 체험 공간입니다.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    tags: ["기차", "가족"],
    lat: 33.4465682, lng: 126.6670507
  },
  {
    id: 14,
    name: "함덕해수욕장",
    category: "해변",
    duration: "3~4시간",
    price: 0,
    location: "제주시",
    hours: "24시간 개방",
    shortDescription: "맑고 얕은 바다의 대표 해변.",
    fullDescription:
      "에메랄드빛 바다와 하얀 백사장이 어우러진 제주의 대표적인 해수욕장입니다.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["해변", "자연"],
    lat: 33.54301337455566, lng: 126.66925526795818 
  },
  {
    id: 15,
    name: "김녕미로공원",
    category: "테마파크",
    duration: "1~2시간",
    price: 6600,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "돌담으로 만든 미로 공원.",
    fullDescription:
      "제주 현무암으로 만들어진 미로 속에서 길을 찾아가는 재미가 있는 공원입니다.",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=80",
    tags: ["테마파크", "자연"],
    lat: 33.5368768, lng: 126.7725371
  },
  {
    id: 16,
    name: "송악산 둘레길",
    category: "드라이브",
    duration: "2~3시간",
    price: 0,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "바다를 따라 걷는 제주 둘레길.",
    fullDescription:
      "송악산의 해안 절벽과 바다 건너 산방산을 조망하며 걷는 명품 코스입니다.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    tags: ["드라이브", "자연"],
    lat: 33.2043511 , lng: 126.2896137
  },
  {
    id: 17,
    name: "곽지과물해변",
    category: "해변",
    duration: "2~3시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "용천수가 솟는 이색 해변.",
    fullDescription:
      "깨끗한 바다와 더불어 차가운 용천수가 솟아나는 노천탕이 있는 곳입니다.",
    image:
      "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80",
    tags: ["해변", "자연"],
    lat: 33.4505158, lng: 126.3042485
  },
  {
    id: 18,
    name: "사려니숲길",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "힐링 산책로로 유명.",
    fullDescription:
      "울창한 삼나무가 우거진 숲길로 걷는 것만으로도 몸과 마음이 치유되는 곳입니다.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.4273021, lng:126.6616589
  },
  {
    id: 19,
    name: "한담해안산책로",
    category: "드라이브",
    duration: "1~2시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "바다를 따라 걷는 산책로.",
    fullDescription:
      "애월의 굽이치는 해안선을 따라 산책하며 아름다운 일몰을 감상하기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&w=1200&q=80",
    tags: ["드라이브", "해변", "자연"],
    lat: 33.4591293, lng: 126.3103796
  },
  {
    id: 20,
    name: "용눈이오름",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "완만한 곡선의 오름.",
    fullDescription:
      "제주의 중산간을 한눈에 내려다볼 수 있는 곡선미가 아름다운 오름입니다.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.4599676, lng: 126.831477
  },
  {
    id: 21,
    name: "제주돌문화공원",
    category: "테마파크",
    duration: "2~3시간",
    price: 5000,
    location: "제주시",
    hours: "09:00 - 18:00",
    shortDescription: "제주의 돌문화를 체험.",
    fullDescription:
      "설문대할망 설화와 제주의 독특한 돌문화를 자연 속에서 관람할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    tags: ["테마파크", "자연"],
    lat: 33.4485653, lng: 126.6586582
  },
  {
    id: 22,
    name: "중문색달해변",
    category: "해변",
    duration: "3~4시간",
    price: 0,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "서핑으로 유명한 해변.",
    fullDescription:
      "서핑의 성지로 불리며 웅장한 해안 절벽이 감싸고 있는 매력적인 해변입니다.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    tags: ["해변", "자연"],
    lat: 33.2451968, lng: 126.4111861
  },
  {
    id: 23,
    name: "절물자연휴양림",
    category: "자연",
    duration: "2~3시간",
    price: 1000,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "조용한 숲속 휴식 공간.",
    fullDescription:
      "울창한 삼나무 숲 사이로 데크 산책로가 잘 조성되어 힐링하기 최적입니다.",
    image:
      "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.4393622, lng: 126.62991
  },
  {
    id: 24,
    name: "이호테우해변",
    category: "해변",
    duration: "2~3시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "말등대가 있는 해변.",
    fullDescription:
      "제주 시내와 가깝고 조랑말 모양의 빨간색, 흰색 등대가 명물인 곳입니다.",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1200&q=80",
    tags: ["해변", "자연"],
    lat: 33.49793630000001 , lng: 126.4531587
  },
  {
    id: 25,
    name: "산굼부리",
    category: "자연",
    duration: "1~2시간",
    price: 6000,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "분화구 형태의 오름.",
    fullDescription:
      "평지에 움푹 패인 독특한 분화구와 가을철 은빛 억새가 장관을 이루는 명소입니다.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.43303, lng: 126.690658
  },
  {
    id: 26,
    name: "오설록 티뮤지엄",
    category: "테마파크",
    duration: "1~2시간",
    price: 0,
    location: "서귀포시",
    hours: "09:00 - 18:00 (연중무휴)",
    shortDescription: "녹차밭과 박물관.",
    fullDescription:
      "드넓은 녹차밭 풍경을 바라보며 제주 차 문화를 경험할 수 있는 공간입니다.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    tags: ["테마파크", "자연"],
    lat: 33.30594380000001 , lng: 126.289437
  },
  {
    id: 27,
    name: "새별오름",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "억새로 유명한 오름.",
    fullDescription:
      "모양이 새별 같다 하여 이름 붙여진 오름으로, 정상에서의 조망이 매우 뛰어납니다.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.3659432, lng: 126.35644
  },
  {
    id: 28,
    name: "한라수목원",
    category: "자연",
    duration: "1~2시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "도심 속 수목원.",
    fullDescription:
      "제주의 자생식물을 보존하고 있는 수목원으로 사계절 내내 산책하기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.4699272, lng: 126.4932445
  },
  {
    id: 29,
    name: "쇠소깍",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "서귀포시",
    hours: DEFAULT_HOURS,
    shortDescription: "맑은 물의 계곡.",
    fullDescription:
      "민물과 바닷물이 만나는 신비로운 계곡으로 나룻배 체험이 인기입니다.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    tags: ["자연"],
    lat: 33.2524694, lng:  126.6235333
  },
  {
    id: 30,
    name: "용담해안도로",
    category: "드라이브",
    duration: "1~2시간",
    price: 0,
    location: "제주시",
    hours: DEFAULT_HOURS,
    shortDescription: "비행기와 바다를 보는 도로.",
    fullDescription:
      "공항 인근 바다를 끼고 달리는 도로로, 시원한 바다 풍경과 비행기 이착륙을 볼 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&w=1200&q=80",
    tags: ["드라이브", "해변", "자연"],
    lat: 33.5116113, lng: 126.4908822
  },
  {
    id: 31,
    name: "오조포구",
    category: "자연",
    duration: "2~3시간",
    price: 0,
    location: "제주 서귀포시 성산읍 오조리",
    hours: DEFAULT_HOURS,
    shortDescription: "성산일출봉을 마주한 조용한 어촌 포구로, 제주 바다 감성을 느낄 수 있는 사진 명소.",
    fullDescription: "오조포구는 성산일출봉 바로 앞에 위치한 작은 어촌 포구로, 관광지의 번잡함에서 벗어나 제주의 소박한 바다 풍경을 즐길 수 있는 곳입니다. 돌담과 방파제를 따라 펼쳐진 바다와 어선들이 어우러져 감성적인 풍경을 만들어내며, 일출이나 해 질 녘에는 특히 아름다운 사진을 남길 수 있습니다. 근처에는 카페와 산책로가 있어 잠시 쉬어가기 좋고, 조용히 제주 바다를 바라보며 여유를 느끼고 싶은 여행자에게 추천되는 장소입니다.",
    image: "https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6bd8ce15-96fe-4b1d-9034-c55541ff4411%2Fafe20c97-129d-40c7-bbae-fefe983c0800%2F20210415_125422_1.jpg&blockId=3074ba28-9e9b-4ebe-bd3f-2c6e0fd76e0e",
    tags: ["해변", "자연"],
  },
];
