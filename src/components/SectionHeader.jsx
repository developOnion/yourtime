import { clsx } from "clsx";

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = false,
  showDivider = false,
  className = "",
}) {
  return (
    <div className={clsx(className, centered && "text-center")}>
      {subtitle && (
        <p
          className={clsx(
            "tracking-widest uppercase text-xs text-primary/50 font-semibold",
            centered ? "mb-6" : "mb-4",
          )}
        >
          {subtitle}
        </p>
      )}
      <h1
        className={clsx(
          "font-serif text-primary font-light",
          centered
            ? "text-4xl md:text-6xl mb-8 max-w-3xl mx-auto leading-tight"
            : "text-5xl md:text-6xl mb-6 leading-tight",
        )}
      >
        {title}
      </h1>
      {description && (
        <p
          className={clsx(
            "text-primary/70 font-light",
            centered
              ? "max-w-xl mx-auto"
              : "max-w-2xl text-lg leading-relaxed mt-6",
          )}
        >
          {description}
        </p>
      )}
      {showDivider && <div className="w-16 h-px bg-primary/20 mx-auto"></div>}
    </div>
  );
}
