import { services } from '../data/services';
import ServiceCard from '../components/cards/ServiceCard';
export default function Services() {
  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="tracking-widest uppercase text-xs text-primary/50 mb-6 font-semibold">Our Offerings</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary font-light mb-8 max-w-3xl mx-auto leading-tight">
            Crafting the <span className="italic text-primary/80">Complete</span> Experience
          </h1>
          <div className="w-16 h-px bg-primary/20 mx-auto"></div>
        </div>

        <div className="service-list space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
