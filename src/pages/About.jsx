export default function About() {
  return (
    <div className="w-full bg-secondary">
      {/* Hero Header */}
      <section className="relative h-[60vh] w-full mt-[-6rem]">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop"
          alt="Elegant tablescape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/60 md:bg-secondary/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="tracking-widest uppercase text-xs text-primary/70 mb-4 font-semibold">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tight font-light">
            Rooted in <span className="italic">Intention</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif text-primary mb-8 text-center uppercase tracking-widest text-sm">
          The Philosophy
        </h2>
        <div className="w-8 h-px bg-accent mx-auto mb-12"></div>
        <div className="space-y-8 text-primary/80 font-light leading-loose text-lg text-justify md:text-center">
          <p>
            Founded on the belief that environment dictates experience, Your
            Time was established to transform the way milestones are celebrated.
            We recognized a gap in the luxury events space: a true lack of venue
            curation guided by aesthetic integrity and seamless flow.
          </p>
          <p>
            We don't just rent out spaces; we match profound life moments with
            architectural masterpieces. Our background in high-end hospitality
            and modern design ensures that every venue in our portfolio serves
            as a flawless, unobtrusive canvas.
          </p>
          <p className="italic text-xl text-primary font-serif pt-8">
            "An event space should never compete with the celebration—it should
            unconsciously elevate it."
          </p>
        </div>
      </section>

      {/* Portfolio Snippet Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F0] border-t border-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-serif text-primary/60 mb-12 text-center uppercase tracking-widest">
            Glimpses of Past Conceptions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="aspect-square bg-gray-200 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop"
                alt="Event detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden group md:mt-12">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop"
                alt="Event detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"
                alt="Event detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden group md:mt-12">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop"
                alt="Event detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
