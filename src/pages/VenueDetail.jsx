import { useParams, Link, Navigate } from "react-router-dom";
import { venues } from "../data/venues";
import { ArrowLeft } from "lucide-react";
import LazyImage from "../components/LazyImage";
import Reveal from "../components/Reveal";
import VenueSpecsSidebar from "../components/VenueSpecsSidebar";

export default function VenueDetail() {
  const { id } = useParams();
  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    return <Navigate to="/venues" />;
  }

  return (
    <div className="w-full bg-secondary">
      {/* Hero Header */}
      <section className="relative h-[70vh] w-full -mt-24">
        <LazyImage
          src={venue.coverImage}
          alt={venue.name}
          className="w-full h-full"
          wrapperClassName="!h-full !aspect-auto"
          aspectRatio="!h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 max-w-7xl mx-auto flex flex-col items-start text-secondary">
          <p className="tracking-widest text-xs uppercase opacity-80 mb-4 font-semibold">
            {venue.location}
          </p>

          <h1 className="text-accent text-5xl md:text-7xl font-serif tracking-tight mb-4">
            {venue.name}
          </h1>
          <p className="text-lg md:text-xl italic font-light opacity-90">
            {venue.tagline}
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          to="/venues"
          className="flex items-center text-xs uppercase tracking-widest mb-8 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
        >
          <ArrowLeft
            size={14}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Back to Venues
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Description */}
          <div className="lg:col-span-8">
            <Reveal>
              <h3 className="text-2xl font-serif text-primary mb-8 underline decoration-accent/30 underline-offset-8">
                The Experience
              </h3>
              <p className="text-primary/80 font-light leading-loose text-lg mb-16">
                {venue.description}
              </p>
            </Reveal>

            {/* Gallery Grid */}
            <Reveal>
              <h3 className="text-sm tracking-widest uppercase text-primary/60 mb-8 font-semibold">
                Gallery
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venue.gallery.map((imgUrl, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <LazyImage
                    src={imgUrl}
                    alt={`${venue.name} detail ${idx + 1}`}
                    className="w-full h-full"
                    wrapperClassName={`bg-gray-100 ${idx === 0 ? "md:col-span-2 !aspect-[16/9]" : "!aspect-[4/3]"}`}
                    aspectRatio={idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar Specs */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-primary/10">
            <VenueSpecsSidebar venue={venue} />
          </div>
        </div>
      </section>
    </div>
  );
}
