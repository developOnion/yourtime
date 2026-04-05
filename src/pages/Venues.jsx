import { venues } from "../data/venues";
import VenueCard from "../components/cards/VenueCard.jsx";
import Reveal from "../components/effects/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Venues() {
  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal direction="none">
          <SectionHeader
            subtitle="Our Venues"
            title={
              <>
                Exclusive <span className="italic text-primary/80">Properties</span>
              </>
            }
            description="Each venue in our collection has been intentionally curated for its architectural integrity, spatial flow, and capacity to elevate extraordinary events."
            className="mb-20"
          />
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
