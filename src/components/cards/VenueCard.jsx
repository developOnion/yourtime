import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import LazyImage from "../effects/LazyImage.jsx";
import Reveal from "../effects/Reveal.jsx";

export default function VenueCard({
  venue,
  variant = "detailed",
  className = "",
  index = 0,
}) {
  const isCompact = variant === "compact";

  return (
    <Reveal delay={index * 150} className={className}>
      <Link to={`/venues/${venue.id}`} className="group block">
        {/* Venue Image */}
        <LazyImage
          src={venue.coverImage}
          alt={venue.name}
          className={clsx(
            "w-full h-full transition-transform ease-out group-hover:scale-105",
            isCompact ? "duration-1000" : "duration-[1.5s]",
          )}
          wrapperClassName={clsx("mb-6 md:mb-8 border border-primary/5", {
            "bg-gray-100": !isCompact,
          })}
          aspectRatio={
            isCompact ? "aspect-[4/5]" : "aspect-[4/3] md:aspect-[3/4]"
          }
        />

        {/* Venue Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-baseline mb-2 md:mb-3">
            <h2
              className={clsx("font-serif text-primary mb-1", {
                "text-2xl": isCompact,
                "text-3xl": !isCompact,
              })}
            >
              {venue.name}
            </h2>
            {!isCompact && (
              <span className="text-xs tracking-widest text-primary/50 border border-primary/20 px-3 py-1 rounded-full uppercase">
                Up to {venue.capacity}
              </span>
            )}
          </div>
          <p className="text-sm font-light text-primary/70 mb-4">
            {venue.location}
          </p>

          {!isCompact && (
            <>
              <div className="h-px w-full bg-primary/10 mb-4 transition-colors group-hover:bg-accent/40"></div>
              <div className="flex justify-between items-center text-sm text-primary uppercase tracking-widest font-medium">
                <span className="group-hover:text-accent transition-colors duration-300">
                  Discover
                </span>
                <ArrowRight
                  size={18}
                  className="text-primary/40 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"
                />
              </div>
            </>
          )}

          {isCompact && (
            <div className="flex justify-end -mt-8 md:-mt-10">
              <ArrowRight className="text-primary/30 group-hover:text-accent transition-colors duration-300" />
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}
