import LazyImage from "../components/effects/LazyImage";
import Reveal from "../components/effects/Reveal";
import SectionHeader from "../components/SectionHeader";
import { services } from "../data/servies";

export default function Services() {
  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <SectionHeader
            subtitle="Our Offerings"
            title={
              <>
                Crafting the{" "}
                <span className="italic text-primary/80">Complete</span>{" "}
                Experience
              </>
            }
            centered={true}
            showDivider={true}
            className="mb-24"
          />
        </Reveal>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full transition-transform duration-[2s] hover:scale-105"
                    wrapperClassName="bg-gray-100 border border-primary/5 shadow-2xl"
                    aspectRatio="aspect-[4/5] md:aspect-[3/2]"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <service.icon
                    className="w-12 h-12 mb-6 text-accent"
                    strokeWidth={1}
                  />
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                    {service.title}
                  </h2>
                  <div className="h-px w-12 bg-accent mb-8"></div>
                  <p className="text-primary/70 font-light leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
