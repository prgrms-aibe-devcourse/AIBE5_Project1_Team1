import { useEffect, useRef, useState } from "react";

function decodeJwtPayload(token) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT");

  const base64Url = parts[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}

function loadGsiScript() {
  return new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve();

    const existing = document.querySelector(
      'script[src="https://accounts.google.com/gsi/client"]'
    );
    if (existing) {
      existing.addEventListener("load", resolve);
      existing.addEventListener("error", () => reject(new Error("GSI load failed")));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error("GSI load failed"));
    document.body.appendChild(script);
  });
}

/**
 * onSuccess(user): 로그인 성공 시 호출
 * user 예시: { name, email, picture, sub }
 */
export default function GoogleLoginButton({ onSuccess }) {
  const btnRef = useRef(null);
  const [error, setError] = useState("");

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


  useEffect(() => {
    let canceled = false;

    async function init() {
      try {
        setError("");
        if (!clientId) throw new Error("REACT_APP_GOOGLE_CLIENT_ID가 없습니다.");

        await loadGsiScript();
        if (canceled) return;

        window.google.accounts.id.initialize({
          client_id: clientId,
          ux_mode: "popup",
          callback: (response) => {
            try {
              const payload = decodeJwtPayload(response.credential);

              const user = {
                provider: "google",
                sub: payload.sub,
                name: payload.name,
                email: payload.email,
                picture: payload.picture,
              };

              // (선택) 프론트에서 유지하고 싶으면 저장
              localStorage.setItem("google_user", JSON.stringify(user));

              onSuccess?.(user);
            } catch (e) {
              setError(e?.message || String(e));
            }
          },
        });

        if (btnRef.current) {
          window.google.accounts.id.renderButton(btnRef.current, {
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "pill",
            width: 320,
          });
        }
      } catch (e) {
        if (!canceled) setError(e?.message || String(e));
      }
    }

    init();
    return () => {
      canceled = true;
    };
  }, [clientId, onSuccess]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div ref={btnRef} />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
