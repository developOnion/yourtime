import LazyImage from "../components/effects/LazyImage.jsx";
import PageHero from "../components/PageHero";
import Reveal from "../components/effects/Reveal.jsx";
import { pastConceptionImages } from "../data/pastConceptionImages";

export default function About() {
  return (
    <div className="w-full bg-secondary">
      {/* Hero Header */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Elegant tablescape"
        heightClass="h-[60vh]"
        overlayClass="bg-secondary/60 md:bg-secondary/30 backdrop-blur-[2px]"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="tracking-widest uppercase text-xs text-primary/70 mb-4 font-semibold">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight font-light">
            Rooted in <span className="italic">Intention</span>
          </h1>
        </div>
      </PageHero>

      {/* Philosophy Section */}
      <Reveal>
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-primary mb-8 text-center uppercase tracking-widest">
            The Philosophy
          </h2>
          <div className="w-8 h-px bg-accent mx-auto mb-12"></div>
          <div className="space-y-8 text-primary/80 font-light leading-loose text-lg text-justify md:text-center">
            <p>
              Founded on the belief that environment dictates experience, Your
              Time was established to transform the way milestones are
              celebrated. We recognized a gap in the luxury events space: a true
              lack of venue curation guided by aesthetic integrity and seamless
              flow.
            </p>
            <p>
              We don't just rent out spaces; we match profound life moments with
              architectural masterpieces. Our background in high-end hospitality
              and modern design ensures that every venue in our portfolio serves
              as a flawless, unobtrusive canvas.
            </p>
            <p className="italic text-xl text-primary font-serif pt-8">
              "An event space should never compete with the celebration—it
              should unconsciously elevate it."
            </p>
          </div>
        </section>
      </Reveal>

      {/* Portfolio Snippet Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F0] border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-sm font-serif text-primary/60 mb-12 text-center uppercase tracking-widest">
              Glimpses of Past Conceptions
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {pastConceptionImages.map((item, index) => (
              <Reveal key={index} delay={item.delay}>
                <div
                  className={`aspect-square bg-gray-200 overflow-hidden group ${index % 2 !== 0 ? "md:mt-12" : ""}`}
                >
                  <LazyImage
                    src={item.src}
                    alt="Event detail"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                    wrapperClassName="!aspect-square"
                    aspectRatio="aspect-square"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
