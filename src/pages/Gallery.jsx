import { useState, useEffect } from "react";
import { pastEvents } from "../data/pastEvents";
import { Search, X, Calendar, MapPin, Tag } from "lucide-react";

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(pastEvents.map((e) => e.category))];

  const filteredEvents =
    filter === "All"
      ? pastEvents
      : pastEvents.filter((e) => e.category === filter);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedEvent]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6 leading-tight">
              Past <span className="text-accent italic font-light">Events</span>
            </h1>
            <p className="text-primary/70 text-lg leading-relaxed font-light">
              Explore a curated selection of moments we have helped bring to life. 
              Each event is a testament to our commitment to romantic minimalism and intentionality.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm tracking-widest uppercase transition-all duration-300
                  ${
                    filter === cat
                      ? "bg-primary text-secondary border-primary"
                      : "border-primary/10 text-primary hover:border-accent hover:text-accent"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-primary/5">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-secondary/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary">
                    <Search size={20} />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-accent mb-2 font-medium">
                    <span>{event.category}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/30" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-primary/60 text-sm mt-2 line-clamp-1 italic font-light">
                    {event.venueName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-primary/95 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          />
          
          <div className="relative w-full max-w-6xl max-h-full bg-secondary overflow-y-auto rounded-sm shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-secondary/50 backdrop-blur-md text-primary hover:text-accent transition-colors rounded-full"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Event Content */}
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center bg-secondary border-r border-primary/5">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-accent mb-4 font-bold">
                  <Tag size={12} />
                  <span>{selectedEvent.category}</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                  {selectedEvent.title}
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-primary/70 text-sm">
                    <Calendar size={16} strokeWidth={1.5} className="text-accent" />
                    <span className="font-light tracking-wide">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary/70 text-sm">
                    <MapPin size={16} strokeWidth={1.5} className="text-accent" />
                    <span className="font-light tracking-wide">{selectedEvent.venueName}</span>
                  </div>
                </div>

                <p className="text-primary/80 leading-relaxed font-light text-lg mb-12">
                  {selectedEvent.description}
                </p>

                <div className="mt-auto pt-8 border-t border-primary/5">
                   <p className="text-[10px] tracking-[0.3em] uppercase text-primary/40 font-medium">
                      Inspired by Intentionality
                   </p>
                </div>
              </div>

              {/* Event Images */}
              <div className="lg:col-span-3 bg-primary/5 p-4 md:p-8 space-y-8 overflow-y-auto max-h-[70vh] lg:max-h-none">
                {selectedEvent.images.map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden group/img">
                    <img
                      src={img}
                      alt={`${selectedEvent.title} ${idx + 1}`}
                      className="w-full h-auto object-cover transform transition-transform duration-1000"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
