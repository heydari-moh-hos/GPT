"use client";
import { useEffect, useRef } from "react";
/** Content stays visible and indexable with JavaScript disabled. */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !ref.current || !("IntersectionObserver" in window))
      return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!media.matches)
              animations.push(
                entry.target.animate(
                  [
                    { opacity: 0.25, transform: "translateY(22px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
                  { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" },
                ),
              );
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    observer.observe(ref.current);
    const cancel = () => {
      if (media.matches) animations.forEach((a) => a.cancel());
    };
    media.addEventListener("change", cancel);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      media.removeEventListener("change", cancel);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
