import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col md:flex-row">
      <Navbar />
      <div className="flex-1 flex flex-col md:ml-[320px]">
        <main className="flex-1 p-4 md:p-10 space-y-10">
          <Hero />
          <About />
          <Courses />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
