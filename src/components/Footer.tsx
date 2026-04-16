import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Skills Development & Livelihood Center. Empowering Youth Through Skills.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
