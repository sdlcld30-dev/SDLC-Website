import { motion } from "motion/react";

const items = [
  { title: "Main Campus", category: "Our Building", img: "/building.png" },
  { title: "Computer Lab", category: "IT Training", img: "https://picsum.photos/seed/lab/600/600" },
  { title: "Sewing Class", category: "Vocational", img: "https://picsum.photos/seed/sewing/600/800" },
  { title: "Workshop", category: "Technical", img: "https://picsum.photos/seed/workshop/800/600" },
  { title: "Graduation", category: "Event", img: "https://picsum.photos/seed/grad/600/600" },
  { title: "Field Trip", category: "Activity", img: "https://picsum.photos/seed/trip/600/800" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-1">
          <h2 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Our Campus</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">Life at Center</h3>
        </div>
        <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">{item.category}</span>
              <h4 className="text-white font-bold text-lg">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
