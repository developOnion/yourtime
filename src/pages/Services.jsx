const services = [
  {
    title: "Venue Rental",
    description:
      "Exclusive access to our portfolio of architectural masterpieces. Each space is meticulously maintained and features carefully considered layouts for optimal flow, acoustics, and lighting, ensuring your event stands out from the first impression to the final departure.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop",
    icon: "🏛️",
  },
  {
    title: "Food & Drink",
    description:
      "Elevated culinary experiences tailored to your narrative. We partner with world-renowned caterers and mixologists to design bespoke menus, seamlessly integrated into the flow of your event for an unforgettable dining experience.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
    icon: "🥂",
  },
  {
    title: "Entertainment",
    description:
      "Curating the atmosphere through sound and performance. From classical quartets during your ceremony to high-energy international DJ sets, our entertainment partners bring the precise energy your celebration demands.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2000&auto=format&fit=crop",
    icon: "🎶",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="tracking-widest uppercase text-xs text-primary/50 mb-6 font-semibold">
            Our Offerings
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary font-light mb-8 max-w-3xl mx-auto leading-tight">
            Crafting the{" "}
            <span className="italic text-primary/80">Complete</span> Experience
          </h1>
          <div className="w-16 h-px bg-primary/20 mx-auto"></div>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-4/5 md:aspect-3/2 overflow-hidden bg-gray-100 border border-primary/5 shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-4xl mb-6 opacity-80">{service.icon}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                  {service.title}
                </h2>
                <div className="h-px w-12 bg-accent mb-8"></div>
                <p className="text-primary/70 font-light leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
