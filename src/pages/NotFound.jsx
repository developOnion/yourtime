import ActionLink from "../components/ui/ActionLink";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center max-w-7xl mx-auto min-h-[60vh]">
      <div className="relative">
        <h1 className="text-8xl md:text-[12rem] font-serif text-primary/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>
        <div className="relative z-10">
          <p className="tracking-widest uppercase text-xs text-accent mb-6 font-semibold">
            Departure from the Path
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 font-light">
            Lost in the <span className="italic">Moment</span>
          </h2>
          <div className="w-12 h-px bg-accent/30 mx-auto mb-10"></div>
          <p className="text-primary/70 mb-12 leading-relaxed font-light max-w-md mx-auto text-lg">
            The space you are looking for doesn't exist or has been moved to a
            different destination.
          </p>
          <ActionLink to="/" variant="primary" className="px-10 py-4 uppercase tracking-widest text-xs">
            Return Home
          </ActionLink>
        </div>
      </div>
    </div>
  );
}
