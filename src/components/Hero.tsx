import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-primary-foreground p-10 md:p-16 rounded-2xl overflow-hidden relative"
      >
        {/* Decorative background circle */}
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
            Empowering Youth<br />Through Skills
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            Building a better future through market-oriented education and sustainable livelihood programs in KP.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-10 text-sm font-bold uppercase tracking-widest bg-white text-primary hover:bg-white/90" asChild>
            <a href="#contact">Join Us Today</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
