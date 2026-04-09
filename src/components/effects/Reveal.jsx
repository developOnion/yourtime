import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-1000 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : ["opacity-0", directionClasses[direction]],
        className,
      )}
    >
      {children}
    </div>
  );
}
