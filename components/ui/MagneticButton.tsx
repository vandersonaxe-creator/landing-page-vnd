"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  style: externalStyle,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    gsap.to(btn, { x: deltaX, y: deltaY, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 28px",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.02em",
    fontFamily: "var(--font-body), sans-serif",
    willChange: "transform",
    textDecoration: "none",
    transition: "background 0.25s, box-shadow 0.25s",
  };

  const variantStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "var(--color-accent)",
          color: "white",
          border: "none",
          boxShadow: "0 8px 24px rgba(232,76,30,0.25)",
        }
      : {
          background: "transparent",
          color: "var(--color-text)",
          border: "0.5px solid var(--color-border-hover)",
        };

  const mergedStyle = { ...baseStyle, ...variantStyle, ...externalStyle };

  const sharedProps = {
    ref: btnRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className,
    style: mergedStyle,
    "data-cursor-expand": true,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </button>
  );
}
