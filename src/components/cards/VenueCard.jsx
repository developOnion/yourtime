
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Image from "../Image";

export default function VenueCard({ venue }) {
    return(
              <Link key={venue.id} to={`/venues/${venue.id}`} className="group block">
                <div className="relative overflow-hidden aspect-4/5 mb-6 border border-primary/5">
                  <Image 
                    src={venue.coverImage} 
                    alt={venue.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-serif text-primary mb-1">{venue.name}</h4>
                    <p className="text-sm font-light text-primary/70">{venue.location}</p>
                  </div>
                  <ArrowRight className="text-primary/30 group-hover:text-accent transition-colors duration-300" />
                </div>
              </Link>
    );
}