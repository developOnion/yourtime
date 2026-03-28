import Image from '../Image';

export default function VenueHero({ venue }) {
    return(
      <section className="relative h-[70vh] w-full -mt-24">
        <Image 
          src={venue.coverImage} 
          alt={venue.name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 max-w-7xl mx-auto flex flex-col items-start text-secondary">
          <p className="tracking-widest text-xs uppercase opacity-80 mb-4 font-semibold">{venue.location}</p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4 text-accent">{venue.name}</h1>
          <p className="text-lg md:text-xl italic font-light opacity-90">{venue.tagline}</p>
        </div>
      </section>        
    );
}