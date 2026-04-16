import { motion } from "motion/react";

const items = [
  "Computer Lab",
  "Sewing Class",
  "Workshop",
  "Graduation",
  "Field Trip",
];

export function Gallery() {
  return (
    <section id="gallery">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold text-primary-foreground bg-primary/10 px-4 py-1 rounded-lg">Campus Life</h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="aspect-video md:aspect-square bg-accent rounded-lg flex items-center justify-center p-4 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dark">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
