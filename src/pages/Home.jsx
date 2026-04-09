import { venues } from "../data/venues";
import { ArrowRight } from "lucide-react";
import ActionLink from "../components/ui/ActionLink";
import VenueCard from "../components/cards/VenueCard.jsx";
import PageHero from "../components/PageHero";
import Reveal from "../components/effects/Reveal.jsx";

export default function Home() {
  const featuredVenues = venues.slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Elegant Venue"
        heightClass="h-[85vh]"
        overlayClass="bg-black/30 backdrop-blur-[3px]"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-secondary text-5xl md:text-7xl font-light tracking-tight mb-6 mt-16 font-serif">
            Intentional <span className="italic text-secondary/80">Spaces</span>
          </h1>
          <p className="text-secondary text-sm md:text-base tracking-widest uppercase max-w-xl font-normal mb-10">
            Curating exclusive venues for unforgettable narrative moments
          </p>
          <ActionLink variant="secondary" to="/venues" className="shadow-xl">
            Explore Venues
          </ActionLink>
        </div>
      </PageHero>

      {/* Mission Statement */}
      <Reveal>
        <section className="py-24 px-6 md:px-12 bg-secondary text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-primary font-serif leading-relaxed font-light mb-8">
            We believe the environment dictates the experience. Our portfolio of
            architectural masterpieces offers a blank canvas for your most
            significant celebrations.
          </h2>
          <div className="w-16 h-px bg-primary/20 mx-auto"></div>
        </section>
      </Reveal>

      {/* Featured Venues */}
      <section className="py-20 px-6 md:px-12 bg-[#EAE8E4]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="tracking-widest uppercase text-xs text-primary/60 mb-2 font-semibold">
                  The Collection
                </p>
                <h3 className="text-4xl font-serif text-primary">
                  Featured Venues
                </h3>
              </div>
              <ActionLink variant="text" to="/venues" className="hidden md:flex">
                View All <ArrowRight size={16} className="ml-2" />
              </ActionLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredVenues.map((venue, index) => (
              <VenueCard
                key={venue.id}
                venue={venue}
                variant="compact"
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <ActionLink variant="outline" to="/venues">
              View All Venues
            </ActionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
