"use client";

import { useEffect, useRef } from "react";

const CONTAINER_ID = "my-cal-inline-30min";

/**
 * Cal.com inline embed. Script is injected client-side to avoid SSR/hydration issues.
 * Container must exist in DOM before the script runs.
 */
export default function CalComEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || typeof document === "undefined") return;
    if (!document.getElementById(CONTAINER_ID)) return;
    initRef.current = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
// Cal inline embed (JS only)
(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () {
        p(api, arguments);
      };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal, ["initNamespace", namespace]);
        p(cal.ns[namespace], ar);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "30min", { origin: "https://app.cal.com" });

Cal.ns["30min"]("inline", {
  elementOrSelector: "#${CONTAINER_ID}",
  config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
  calLink: "vanderson-machado-fnozya/30min",
});

Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
`;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      id={CONTAINER_ID}
      className="min-h-[520px] w-full overflow-auto rounded-xl bg-white/5 p-2 sm:min-h-[560px] md:min-h-[600px] md:p-4"
      style={{ width: "100%", minHeight: "520px" }}
    />
  );
}
