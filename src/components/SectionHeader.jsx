export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = false,
  showDivider = false,
  className = "",
}) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <p
          className={`tracking-widest uppercase text-xs text-primary/50 font-semibold ${
            centered ? "mb-6" : "mb-4"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h1
        className={`font-serif text-primary font-light ${
          centered
            ? "text-4xl md:text-6xl mb-8 max-w-3xl mx-auto leading-tight"
            : "text-5xl md:text-6xl mb-6 leading-tight"
        }`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-primary/70 font-light ${
            centered
              ? "max-w-xl mx-auto"
              : "max-w-2xl text-lg leading-relaxed mt-6"
          }`}
        >
          {description}
        </p>
      )}
      {showDivider && (
        <div className="w-16 h-px bg-primary/20 mx-auto"></div>
      )}
    </div>
  );
}
