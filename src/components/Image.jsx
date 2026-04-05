


export default function Image({ src, alt, className }) {
  return (
    <>
        <img src={src} alt={alt} className={className} />
          <div className="image-overlay absolute bg-secondary/40 inset-0 hover:bg-black/20 transition-colors duration-1000">
        </div>
    </>
  );
}