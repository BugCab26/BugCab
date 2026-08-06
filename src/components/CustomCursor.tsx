"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Disable on mobile / touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setMounted(true);

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let isHovered = false;
    let isMouseDown = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${
          isMouseDown ? 0.5 : isHovered ? 1.6 : 1
        })`;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
      if (dot) {
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(0.5)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(0.75)`;
      }
    };

    const onMouseUp = () => {
      isMouseDown = false;
      if (dot) {
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%) scale(${
          isHovered ? 1.6 : 1
        })`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t &&
        (t.closest("a, button, [data-cursor], .cursor-pointer, input, select, textarea") ||
          t.tagName === "A" ||
          t.tagName === "BUTTON")
      ) {
        isHovered = true;
        if (ring) {
          ring.style.width = "64px";
          ring.style.height = "64px";
          ring.style.borderColor = "#FF3B30";
          ring.style.backgroundColor = "rgba(255, 59, 48, 0.12)";
          ring.style.backdropFilter = "blur(4px)";
        }
      } else {
        isHovered = false;
        if (ring) {
          ring.style.width = "32px";
          ring.style.height = "32px";
          ring.style.borderColor = "rgba(255, 59, 48, 0.4)";
          ring.style.backgroundColor = "rgba(255, 59, 48, 0.03)";
          ring.style.backdropFilter = "blur(0px)";
        }
      }
    };

    const loop = () => {
      // Lerp ring position for smooth magnetic trailing effect
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      if (ring) {
        const scale = isMouseDown ? 0.75 : isHovered ? 1.15 : 1;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    loop();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Magnetic Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-8 w-8 rounded-full border border-[#FF3B30]/40 bg-[#FF3B30]/5 shadow-[0_0_20px_rgba(255,59,48,0.15)] transition-[width,height,background-color,border-color,backdrop-filter] duration-200 ease-out"
        style={{ willChange: "transform" }}
      />
      {/* Inner Red Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-2.5 w-2.5 rounded-full bg-[#FF3B30] shadow-[0_0_12px_rgba(255,59,48,0.8)] transition-transform duration-150 ease-out"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

export default CustomCursor;
