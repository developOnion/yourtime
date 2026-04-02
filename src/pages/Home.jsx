import { Link } from "react-router-dom";
import { venues } from "../data/venues";
import { ArrowRight } from "lucide-react";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";

export default function Home() {
  const featuredVenues = venues.slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full -mt-24">
        <LazyImage
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
          alt="Elegant Venue"
          className="w-full h-full"
          wrapperClassName="!h-full !aspect-auto"
          aspectRatio="!h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-secondary text-5xl md:text-7xl font-light tracking-tight mb-6 mt-16 font-serif">
            Intentional <span className="italic text-secondary/80">Spaces</span>
          </h1>
          <p className="text-secondary text-sm md:text-base tracking-widest uppercase max-w-xl font-normal mb-10">
            Curating exclusive venues for unforgettable narrative moments
          </p>
          <Link
            to="/venues"
            className="border border-secondary text-secondary px-8 py-3.5 tracking-widest uppercase text-xs hover:bg-secondary hover:text-primary transition-colors duration-500"
          >
            Explore Portfolio
          </Link>
        </div>
      </section>

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
              <Link
                to="/venues"
                className="hidden md:flex items-center text-sm uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-accent transition-colors duration-300"
              >
                View All <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredVenues.map((venue, index) => (
              <Reveal key={venue.id} delay={index * 150}>
                <Link to={`/venues/${venue.id}`} className="group block">
                  <LazyImage
                    src={venue.coverImage}
                    alt={venue.name}
                    className="w-full h-full transition-transform duration-1000 group-hover:scale-105"
                    wrapperClassName="mb-6 border border-primary/5"
                    aspectRatio="aspect-[4/5]"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-serif text-primary mb-1">
                        {venue.name}
                      </h4>
                      <p className="text-sm font-light text-primary/70">
                        {venue.location}
                      </p>
                    </div>
                    <ArrowRight className="text-primary/30 group-hover:text-accent transition-colors duration-300" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/venues"
              className="inline-flex items-center text-xs uppercase tracking-widest border border-primary px-8 py-4 hover:bg-primary hover:text-secondary transition-colors duration-300"
            >
              View All Venues
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
