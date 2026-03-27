import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Venues", path: "/venues" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl tracking-widest text-primary flex-shrink-0"
        >
          YOUR<span className="text-accent ml-1 italic font-light">TIME</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {links
            .filter((link) => link.name !== "Contact")
            .map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-accent
                ${isActive(link.path) ? "text-accent font-medium" : "text-primary"}`}
              >
                {link.name}
              </Link>
            ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-primary text-secondary text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-accent transition-colors"
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-24 left-0 w-full bg-secondary border-b border-primary/5 transition-all duration-300 ease-in-out origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg tracking-widest uppercase hover:text-accent transition-colors
                ${isActive(link.path) ? "text-accent font-medium" : "text-primary"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
