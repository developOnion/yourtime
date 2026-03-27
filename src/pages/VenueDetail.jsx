import { useParams, Link, Navigate } from 'react-router-dom';
import { venues } from '../data/venues';
import { MapPin, Users, DollarSign, CalendarHeart } from 'lucide-react';

export default function VenueDetail() {
  const { id } = useParams();
  const venue = venues.find(v => v.id === id);

  if (!venue) {
    return <Navigate to="/venues" />;
  }

  return (
    <div className="w-full bg-secondary">
      {/* Hero Header */}
      <section className="relative h-[70vh] w-full mt-[-6rem]">
        <img 
          src={venue.coverImage} 
          alt={venue.name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 max-w-7xl mx-auto flex flex-col items-start text-secondary">
          <p className="tracking-widest text-xs uppercase opacity-80 mb-4 font-semibold">{venue.location}</p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4">{venue.name}</h1>
          <p className="text-lg md:text-xl italic font-light opacity-90">{venue.tagline}</p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Description */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-serif text-primary mb-8 underline decoration-accent/30 underline-offset-8">The Experience</h3>
            <p className="text-primary/80 font-light leading-loose text-lg mb-16">
              {venue.description}
            </p>
            
            {/* Gallery Grid */}
            <h3 className="text-sm tracking-widest uppercase text-primary/60 mb-8 font-semibold">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venue.gallery.map((imgUrl, idx) => (
                <div key={idx} className={`relative aspect-[4/3] bg-gray-100 overflow-hidden ${idx === 0 ? 'md:col-span-2 aspect-[16/9]' : ''}`}>
                  <img src={imgUrl} alt={`${venue.name} detail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar Specs */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-primary/10">
            <div className="sticky top-32">
              <h3 className="text-sm tracking-widest uppercase text-primary/60 mb-8 font-semibold">Specifications</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex flex-col border-b border-primary/10 pb-4">
                  <div className="flex items-center text-primary mb-2">
                    <Users size={18} className="mr-3 text-accent" />
                    <span className="font-medium text-sm tracking-wide uppercase">Capacity</span>
                  </div>
                  <p className="text-primary/70 font-light pl-8">Up to {venue.capacity} guests</p>
                </div>

                <div className="flex flex-col border-b border-primary/10 pb-4">
                  <div className="flex items-center text-primary mb-2">
                    <MapPin size={18} className="mr-3 text-accent" />
                    <span className="font-medium text-sm tracking-wide uppercase">Location</span>
                  </div>
                  <p className="text-primary/70 font-light pl-8">{venue.location}</p>
                </div>

                <div className="flex flex-col border-b border-primary/10 pb-4">
                  <div className="flex items-center text-primary mb-2">
                    <DollarSign size={18} className="mr-3 text-accent" />
                    <span className="font-medium text-sm tracking-wide uppercase">Investment</span>
                  </div>
                  <p className="text-primary/70 font-light pl-8">Starting at ${venue.pricingStartingAt.toLocaleString()} / {venue.priceTier}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-12">
                <h4 className="text-xs uppercase tracking-widest text-primary/50 mb-4 font-semibold">Notable Features</h4>
                <ul className="space-y-3">
                  {venue.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm font-light text-primary/80">
                      <span className="text-accent mr-3">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="bg-primary p-8 text-center">
                <CalendarHeart size={32} className="mx-auto text-accent mb-4" strokeWidth={1} />
                <h4 className="text-secondary font-serif text-xl mb-6">Begin Your Journey</h4>
                <Link 
                  to={`/contact?venue=${venue.id}`}
                  className="block w-full border border-secondary text-secondary py-4 tracking-widest uppercase text-xs hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  Inquire Availability
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
