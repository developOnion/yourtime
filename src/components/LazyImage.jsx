import { useState, useEffect, useRef } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  aspectRatio = "aspect-4/3",
  objectFit = "object-cover",
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${aspectRatio} ${wrapperClassName}`}
    >
      {/* Shimmer placeholder */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 bg-size-[200%_100%] ${
          isLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 animate-shimmer`}
      />

      {/* Blur up image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          className={`absolute inset-0 w-full h-full ${objectFit} ${className} ${
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-105 blur-xl"
          } transition-all duration-700 ease-out`}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
          <span className="text-primary/30 text-xs uppercase tracking-widest">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
}
