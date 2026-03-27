import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-secondary/10 pb-12">
        
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-3xl tracking-widest block mb-4">
            YOUR<span className="text-secondary/60 italic font-light ml-1">TIME</span>
          </Link>
          <p className="font-sans text-secondary/70 text-sm max-w-sm leading-relaxed font-light">
            Curating high-end venue experiences for life’s most profound moments. 
            Embracing intentionality, beauty, and seamless execution.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-secondary/50">Explore</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><Link to="/venues" className="hover:text-accent transition-colors">Our Venues</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-6 text-secondary/50">Say Hello</h4>
          <ul className="space-y-4 font-light text-sm text-secondary/80">
            <li>hello@yourtimevenues.com</li>
            <li>+1 (212) 555-0199</li>
            <li className="pt-2"><Link to="/contact" className="text-accent underline hover:text-white transition-colors">Book a Consultation</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-secondary/40">
        <p>© {new Date().getFullYear()} Your Time Venues. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed with intention.</p>
      </div>
    </footer>
  );
}
