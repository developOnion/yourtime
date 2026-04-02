import { Link } from "react-router-dom";
import { venues } from "../data/venues";
import { ArrowRight } from "lucide-react";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";

export default function Venues() {
  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <div className="mb-20">
            <p className="tracking-widest uppercase text-xs text-primary/50 mb-4 font-semibold">
              Our Venues
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-primary font-light">
              Exclusive{" "}
              <span className="italic text-primary/80">Properties</span>
            </h1>
            <p className="mt-6 text-primary/70 max-w-2xl font-light">
              Each venue in our collection has been intentionally curated for
              its architectural integrity, spatial flow, and capacity to elevate
              extraordinary events.
            </p>
          </div>
        </Reveal>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-y-24">
          {venues.map((venue, index) => (
            <Reveal key={venue.id} delay={index * 100}>
              <Link
                to={`/venues/${venue.id}`}
                className={`group block ${index % 2 !== 0 ? "lg:mt-24" : ""}`}
              >
                <LazyImage
                  src={venue.coverImage}
                  alt={venue.name}
                  className="w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  wrapperClassName="mb-8 bg-gray-100 border border-primary/5"
                  aspectRatio="aspect-[4/3] md:aspect-[3/4]"
                />
                <div className="flex flex-col">
                  <div className="flex justify-between items-baseline mb-3">
                    <h2 className="text-3xl font-serif text-primary">
                      {venue.name}
                    </h2>
                    <span className="text-xs tracking-widest text-primary/50 border border-primary/20 px-3 py-1 rounded-full uppercase">
                      Up to {venue.capacity}
                    </span>
                  </div>
                  <p className="text-sm font-light text-primary/70 mb-4">
                    {venue.location}
                  </p>
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
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
