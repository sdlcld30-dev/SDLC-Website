import { Menu, GraduationCap, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-xl py-4 px-6 border-b border-slate-100 flex items-center justify-between shadow-sm">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-emerald-200">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-lg leading-tight tracking-tight">SDLC <span className="text-primary">Talash</span></span>
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-emerald-50">
              <Menu size={24} className="text-slate-600" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] border-r-0 shadow-2xl">
            <div className="flex flex-col h-full py-8">
              <div className="flex items-center gap-3 mb-12 px-2">
                <div className="bg-primary p-2 rounded-xl text-white">
                  <GraduationCap size={24} />
                </div>
                <span className="font-bold text-xl tracking-tight">SDLC Center</span>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.href.substring(1))}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === link.href.substring(1)
                        ? "bg-emerald-50 text-primary"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && <ChevronRight size={16} />}
                  </a>
                ))}
              </nav>
              <div className="mt-auto">
                <Button asChild className="w-full h-12 rounded-xl shadow-lg shadow-emerald-100">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[320px] bg-white border-r border-slate-100 p-10 flex-col gap-10 overflow-y-auto z-40">
        <div className="logo font-extrabold text-2xl text-slate-900 leading-tight border-l-4 border-emerald-500 pl-5 tracking-tighter">
          SKILLS DEVELOPMENT &<br />
          <span className="text-emerald-600">LIVELIHOOD CENTER</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600/70">Mission</h2>
          <p className="text-sm leading-relaxed text-slate-500 font-medium">
            Located in the heart of Lower Dir, our center is dedicated to uplifting the local youth by providing accessible, high-quality vocational training and IT education.
          </p>
        </div>

        <nav className="flex flex-col gap-1">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600/70 mb-4">Navigation</h2>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href.substring(1))}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "bg-emerald-50 text-emerald-700 shadow-sm"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "bg-emerald-500 scale-125 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  : "bg-slate-300 group-hover:bg-slate-400"
              }`} />
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10 space-y-8">
          <div className="space-y-6">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600/70">Connect</h2>
            <div className="space-y-5 text-[13px] font-medium text-slate-600">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-0.5 bg-emerald-50 p-2 rounded-lg text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  <MapPin size={14} />
                </div>
                <span className="group-hover:text-slate-900 transition-colors">Shamshi Khan Talash Lower Dir</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  <Phone size={14} />
                </div>
                <span className="group-hover:text-slate-900 transition-colors">+92 945 123 4567</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                  <Mail size={14} />
                </div>
                <span className="group-hover:text-slate-900 transition-colors">info@talashskills.org.pk</span>
              </div>
            </div>
          </div>
          <Button className="w-full h-14 rounded-2xl uppercase text-[11px] font-bold tracking-[0.15em] shadow-xl shadow-emerald-100 hover:shadow-emerald-200 transition-all active:scale-[0.98]" asChild>
            <a href="#contact">Donate Now</a>
          </Button>
        </div>
      </aside>
    </>
  );
}
