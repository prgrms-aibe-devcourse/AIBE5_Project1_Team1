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
  fitBounds = false, //  기본은 포커스 유지
}: {
  items: MapItem[];
  className?: string;
  fitBounds?: boolean;
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

  // ✅ items 바뀔 때 마커/선만 갱신
  useEffect(() => {
    const kakao = window.kakao;
    const map = mapInstanceRef.current;
    if (!kakao || !map) return;

    overlaysRef.current.forEach((o) => o.setMap(null));
    overlaysRef.current = [];

    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    if (!items?.length) return;

    const grouped = items.reduce((acc: Record<number, MapItem[]>, it) => {
      acc[it.day] = acc[it.day] || [];
      acc[it.day].push(it);
      return acc;
    }, {});

    const bounds = new kakao.maps.LatLngBounds();

    Object.entries(grouped).forEach(([dayStr, dayItems]) => {
      const day = Number(dayStr);
      const style = DAY_STYLE[day] ?? { markerBg: "#111827", line: "#111827" };
      const sorted = dayItems.slice().sort((a, b) => a.seq - b.seq);

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
          strokeStyle: "shortdash",
        });
        polyline.setMap(map);
        polylinesRef.current.push(polyline);
      }

      sorted.forEach((p) => {
        const position = new kakao.maps.LatLng(p.lat, p.lng);

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

        const overlay = new kakao.maps.CustomOverlay({
          position,
          content: badge,
          yAnchor: 1,
        });

        overlay.setMap(map);
        overlaysRef.current.push(overlay);
      });
    });

    if (fitBounds) {
      map.setBounds(bounds);
    }
  }, [items, fitBounds]);   // ← 여기 세미콜론 꼭 있어야 함

  // ✅ 이 return 이 "컴포넌트 return" 이어야 함
  return <div ref={mapRef} className={className ?? "w-full h-full"} />;
}
