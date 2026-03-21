"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * Garante que a landing abra no topo (Hero).
 * - Desativa scroll restoration automática do navegador (evita “voltar” no meio da página).
 * - Com URL sem hash, força scroll para (0,0) no primeiro paint e após hidratação
 *   (cobre foco/embeds que rodem depois).
 * - Se houver hash (#agendar), não interfere — o navegador posiciona na âncora.
 */
export function ScrollResetOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }

    const hasHash =
      typeof window.location.hash === "string" &&
      window.location.hash.length > 1;
    if (!hasHash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasHash =
      typeof window.location.hash === "string" &&
      window.location.hash.length > 1;
    if (hasHash) return;

    const t = window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
