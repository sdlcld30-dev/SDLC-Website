import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#f1f8f4] p-8 rounded-2xl border border-border shadow-sm"
      >
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-primary-dark">Full Name</label>
            <Input placeholder="Enter name" className="bg-white border-border h-10 text-xs" />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-primary-dark">Phone Number</label>
            <Input placeholder="+92..." className="bg-white border-border h-10 text-xs" />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-primary-dark">Interested Course</label>
            <Input placeholder="Select course" className="bg-white border-border h-10 text-xs" />
          </div>
          <Button className="h-10 text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
            Send Inquiry
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
