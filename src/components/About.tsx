import { motion } from "motion/react";
import { Target, Heart, Shield, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Mission Driven", desc: "Focused on real-world impact and youth empowerment." },
  { icon: Heart, title: "Inclusive", desc: "Free and affordable education for all backgrounds." },
  { icon: Shield, title: "Quality", desc: "Industry-standard training and certifications." },
  { icon: Zap, title: "Innovation", desc: "Modern tools and market-oriented curriculum." },
];

export function About() {
  return (
    <section id="about" className="py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-1">
          <h2 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Our Story</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">About the Center</h3>
        </div>
        <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-emerald-100/50 group relative">
            <img
              src="/building.png" 
              alt="Skills Development & Livelihood Center Building"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-emerald-600 p-8 rounded-3xl text-white shadow-xl hidden md:block">
            <div className="text-3xl font-black">10+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years of Impact</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-slate-600 font-medium">
              The Skills Development & Livelihood Center is a beacon of hope for the youth of Lower Dir. We provide a supportive environment where students can acquire practical skills that are directly applicable to the local and global job markets.
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              Our programs are designed to be inclusive, offering both free and affordable options to ensure that financial constraints do not hinder anyone's potential for growth and self-reliance.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 bg-emerald-50 p-2 rounded-xl text-emerald-600 h-fit">
                  <v.icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
