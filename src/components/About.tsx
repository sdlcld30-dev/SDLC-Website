import { motion } from "motion/react";

export function About() {
  return (
    <section id="about">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold text-primary-foreground bg-primary/10 px-4 py-1 rounded-lg">About Our Center</h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-video rounded-xl overflow-hidden border border-border"
        >
          <img
            src="https://picsum.photos/seed/talash/800/450"
            alt="Center"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Skills Development & Livelihood Center is a beacon of hope for the youth of Lower Dir. We provide a supportive environment where students can acquire practical skills that are directly applicable to the local and global job markets.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our programs are designed to be inclusive, offering both free and affordable options to ensure that financial constraints do not hinder anyone's potential for growth and self-reliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
