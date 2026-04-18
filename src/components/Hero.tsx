import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/building.png')] bg-cover bg-center opacity-[0.03] grayscale" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-emerald-100 shadow-sm"
          >
            <Sparkles size={12} />
            <span>Empowering the Next Generation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900 leading-[1.05]"
          >
            Empowering Youth <br />
            <span className="text-emerald-600 relative inline-block">
              Through Skills
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Building a better future through free and affordable skill-based education and livelihood programs in the heart of Lower Dir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-8 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-emerald-100 hover:shadow-emerald-200 transition-all group" asChild>
              <a href="#contact">
                Join Us Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl text-xs font-bold uppercase tracking-widest border-2 hover:bg-slate-50 transition-all" asChild>
              <a href="#courses">View Our Courses</a>
            </Button>
          </motion.div>

          {/* Stats/Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-slate-100"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl font-extrabold text-slate-900">500+</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Graduates</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl font-extrabold text-slate-900">12+</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Courses</div>
            </div>
            <div className="hidden md:flex flex-col items-center gap-1">
              <div className="text-3xl font-extrabold text-slate-900">95%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Employment</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
