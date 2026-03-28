


export default function Image({ src, alt, className }) {
  return (
    <>
        <img src={src} alt={alt} className={className} />
        <div className="image-overlay bg-black/30 absolute inset-0 hover:bg-black/10 transition-colors duration-1000">
        </div>
    </>
  );
}