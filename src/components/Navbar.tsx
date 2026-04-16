import { Menu, GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-md py-4 px-4 border-b border-border flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded text-primary-foreground">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-lg leading-tight">Skills Development &<br />Livelihood Center</span>
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#contact">Join Us</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[320px] bg-card border-r border-border p-10 flex-col gap-10 overflow-y-auto">
        <div className="logo font-extrabold text-2xl text-primary leading-tight border-l-4 border-primary pl-4">
          SKILLS DEVELOPMENT &<br />
          LIVELIHOOD CENTER
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Located in the heart of Lower Dir, our center is dedicated to uplifting the local youth by providing accessible, high-quality vocational training and IT education.
          </p>
        </div>

        <nav className="flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Navigation</h2>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10 space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Contact Us</h2>
          <div className="space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Shamshi Khan Talash Lower Dir</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>+92 945 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>info@talashskills.org.pk</span>
            </div>
          </div>
          <Button className="w-full uppercase text-xs font-bold tracking-widest py-6" asChild>
            <a href="#contact">Donate Now</a>
          </Button>
        </div>
      </aside>
    </>
  );
}
