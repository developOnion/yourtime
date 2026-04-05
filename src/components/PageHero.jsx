import LazyImage from "./effects/LazyImage.jsx";

export default function PageHero({
  imageSrc,
  imageAlt = "Hero image",
  heightClass = "h-[85vh]",
  overlayClass = "bg-black/30 backdrop-blur-[3px]",
  children,
}) {
  return (
    <section className={`relative ${heightClass} w-full -mt-24`}>
      <LazyImage
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full"
        wrapperClassName="!h-full !aspect-auto"
        aspectRatio="!h-full"
      />
      <div className={`absolute inset-0 ${overlayClass}`}></div>
      {children}
    </section>
  );
}
