import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export type MapItem = {
  id: string | number;
  title: string;
  day: number; // 1,2,3...
  seq: number; // 1~4
  lat: number;
  lng: number;
};

function loadKakaoMapScript(appKey: string) {
  return new Promise<void>((resolve, reject) => {
    // 이미 로드되어 있으면 끝
    if (window.kakao && window.kakao.maps) return resolve();

    const script = document.createElement("script");
    script.async = true;
    // https 고정 추천
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.onload = () => resolve();
    script.onerror = () => {
      console.error("Kakao Maps script load failed:", script.src);
      reject(new Error("Failed to load Kakao Maps script"));
    };
    document.head.appendChild(script);
  });
}

// 일차별 스타일
const DAY_STYLE: Record<number, { markerBg: string; line: string }> = {
  1: { markerBg: "#F97316", line: "#F97316" }, // orange
  2: { markerBg: "#3B82F6", line: "#3B82F6" }, // blue
  3: { markerBg: "#10B981", line: "#10B981" }, // green
};

export default function KakaoMap({
  items,
  className,
}: {
  items: MapItem[];
  className?: string;
}) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  const overlaysRef = useRef<any[]>([]);
  const polylinesRef = useRef<any[]>([]);

  const [isReady, setIsReady] = useState(false);

  // 1) 맵 초기화 (한 번만)
  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_MAP_KEY as string | undefined;
    if (!appKey) {
      console.error("VITE_KAKAO_MAP_KEY is missing in .env");
      return;
    }
    if (!mapRef.current) return;

    let cancelled = false;

    (async () => {
      await loadKakaoMapScript(appKey);
      if (cancelled) return;

      window.kakao.maps.load(() => {
        if (cancelled) return;

        // ✅ StrictMode/HMR에서 중복 생성 방지
        if (mapInstanceRef.current) {
          setIsReady(true);
          return;
        }

        const kakao = window.kakao;
        const center = new kakao.maps.LatLng(33.361666, 126.529166); // 제주 중심

        const map = new kakao.maps.Map(mapRef.current, {
          center,
          level: 11,
        });

        mapInstanceRef.current = map;
        setIsReady(true);
      });
    })().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  // 2) items/isReady 변경 시 다시 그림
  useEffect(() => {
    const kakao = window.kakao;
    const map = mapInstanceRef.current;

    console.log(
      "[KakaoMap] items:",
      items?.length,
      "ready:",
      isReady,
      "map:",
      !!map,
      "kakao:",
      !!kakao
    );

    if (!isReady || !kakao || !map) return;

    // clear overlays
    overlaysRef.current.forEach((o) => o.setMap(null));
    overlaysRef.current = [];

    // clear polylines
    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    // ✅ items 없으면 제주 전체만 보여주기
    if (!items || items.length === 0) {

      return;
    }

    // day별 그룹
    const grouped = items.reduce((acc: Record<number, MapItem[]>, it) => {
      acc[it.day] = acc[it.day] || [];
      acc[it.day].push(it);
      return acc;
    }, {});

    // 전체 bounds
    const bounds = new kakao.maps.LatLngBounds();

    Object.entries(grouped).forEach(([dayStr, dayItems]) => {
      const day = Number(dayStr);
      const style = DAY_STYLE[day] ?? { markerBg: "#111827", line: "#111827" };

      const sorted = dayItems.slice().sort((a, b) => a.seq - b.seq);

      // 1) 폴리라인(일차별)
      const path = sorted.map((p) => {
        const latlng = new kakao.maps.LatLng(p.lat, p.lng);
        bounds.extend(latlng);
        return latlng;
      });

      if (path.length >= 2) {
        const polyline = new kakao.maps.Polyline({
          path,
          strokeWeight: 5,
          strokeColor: style.line,
          strokeOpacity: 0.9,
          strokeStyle: "dashed",
        });
        polyline.setMap(map);
        polylinesRef.current.push(polyline);
      }

      // 2) 마커(커스텀 오버레이)
      sorted.forEach((p) => {
        const position = new kakao.maps.LatLng(p.lat, p.lng);

        const content = document.createElement("div");
        content.style.display = "flex";
        content.style.alignItems = "center";
        content.style.gap = "8px";

        const badge = document.createElement("div");
        badge.innerText = String(p.seq);
        badge.style.width = "28px";
        badge.style.height = "28px";
        badge.style.borderRadius = "9999px";
        badge.style.background = style.markerBg;
        badge.style.color = "white";
        badge.style.display = "flex";
        badge.style.alignItems = "center";
        badge.style.justifyContent = "center";
        badge.style.fontWeight = "800";
        badge.style.fontSize = "12px";
        badge.style.border = "2px solid white";
        badge.style.boxShadow = "0 6px 16px rgba(0,0,0,0.18)";

        const label = document.createElement("div");
        label.innerText = p.title;
        label.style.background = "rgba(255,255,255,0.95)";
        label.style.border = "1px solid rgba(0,0,0,0.08)";
        label.style.borderRadius = "10px";
        label.style.padding = "6px 8px";
        label.style.fontSize = "12px";
        label.style.fontWeight = "600";
        label.style.color = "#111827";
        label.style.whiteSpace = "nowrap";
        label.style.boxShadow = "0 6px 16px rgba(0,0,0,0.10)";

        content.appendChild(badge);
//        content.appendChild(label); 마커에 이름 지우기

        const overlay = new kakao.maps.CustomOverlay({
          position,
          content,
          yAnchor: 1,
        });

        overlay.setMap(map);
        overlaysRef.current.push(overlay);
      });
    });

    // ✅ 마커들 보이게 bounds 맞추기
    map.setBounds(bounds);
  }, [items, isReady]);

  return <div ref={mapRef} className={className ?? "w-full h-full"} />;
}
