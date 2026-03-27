import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary selection:bg-accent/20">
      <Navbar />
      <main className="flex-grow pt-24 page-transition">{children}</main>
      <Footer />
    </div>
  );
}
