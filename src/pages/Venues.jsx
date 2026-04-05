import { venues } from "../data/venues";
import VenueCard from "../components/cards/VenueCard.jsx";
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
            <VenueCard
              key={venue.id}
              venue={venue}
              variant="detailed"
              index={index}
              className={index % 2 !== 0 ? "lg:mt-24" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
