import { Link } from "react-router-dom";
import { MapPin, Users, DollarSign, CalendarHeart } from "lucide-react";
import Reveal from "./effects/Reveal.jsx";

export default function VenueSpecsSidebar({ venue }) {
  return (
    <div className="sticky top-32">
      <Reveal>
        <h3 className="text-sm tracking-widest uppercase text-primary/60 mb-8 font-semibold">
          Specifications
        </h3>

        <div className="space-y-8 mb-12">
          <div className="flex flex-col border-b border-primary/10 pb-4">
            <div className="flex items-center text-primary mb-2">
              <Users size={18} className="mr-3 text-accent" />
              <span className="font-medium text-sm tracking-wide uppercase">
                Capacity
              </span>
            </div>
            <p className="text-primary/70 font-light pl-8">
              Up to {venue.capacity} guests
            </p>
          </div>

          <div className="flex flex-col border-b border-primary/10 pb-4">
            <div className="flex items-center text-primary mb-2">
              <MapPin size={18} className="mr-3 text-accent" />
              <span className="font-medium text-sm tracking-wide uppercase">
                Location
              </span>
            </div>
            <p className="text-primary/70 font-light pl-8">{venue.location}</p>
          </div>

          <div className="flex flex-col border-b border-primary/10 pb-4">
            <div className="flex items-center text-primary mb-2">
              <DollarSign size={18} className="mr-3 text-accent" />
              <span className="font-medium text-sm tracking-wide uppercase">
                Investment
              </span>
            </div>
            <p className="text-primary/70 font-light pl-8">
              Starting at ${venue.pricingStartingAt.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-12">
          <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-4 font-semibold">
            Notable Features
          </h4>
          <ul className="space-y-3">
            {venue.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start text-sm font-light text-primary/80"
              >
                <span className="text-accent mr-3">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Booking CTA */}
      <Reveal delay={200}>
        <div className="bg-primary p-8 text-center">
          <CalendarHeart
            size={32}
            className="mx-auto text-accent mb-4"
            strokeWidth={1}
          />
          <h4 className="text-secondary font-serif text-xl mb-6">
            Begin Your Journey
          </h4>
          <Link
            to={`/contact?venue=${venue.id}`}
            className="block w-full border border-secondary text-secondary py-4 tracking-widest uppercase text-xs hover:bg-secondary hover:text-primary transition-colors duration-300"
          >
            Inquire Availability
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
