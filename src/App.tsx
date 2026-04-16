import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col md:flex-row">
      <Navbar />
      <div className="flex-1 flex flex-col md:ml-[320px]">
        <main className="flex-1 p-6 md:p-12 space-y-24 md:space-y-32">
          <Hero />
          <About />
          <Courses />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-2xl shadow-emerald-200 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500"
          size="icon"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
}
