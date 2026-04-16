import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-1">
          <h2 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Get In Touch</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">Contact Us</h3>
        </div>
        <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                  <Input placeholder="Enter your name" className="bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 h-14 rounded-2xl px-6 transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                  <Input type="email" placeholder="Enter your email" className="bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 h-14 rounded-2xl px-6 transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Interested Course</label>
                <Input placeholder="Select a course" className="bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 h-14 rounded-2xl px-6 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Your Message</label>
                <Textarea placeholder="How can we help you?" className="bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 min-h-[150px] rounded-2xl px-6 py-4 transition-all" />
              </div>
              <Button className="h-14 px-10 rounded-2xl text-xs font-bold uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all group">
                Send Message
                <Send className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="space-y-8">
          <div className="bg-emerald-600 p-10 rounded-3xl text-white shadow-xl shadow-emerald-100">
            <h4 className="text-xl font-bold mb-8">Visit Our Center</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Location</p>
                  <p className="text-sm font-medium">Shamshi Khan Talash Lower Dir, Pakistan</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Phone</p>
                  <p className="text-sm font-medium">+92 945 123 4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Email</p>
                  <p className="text-sm font-medium">info@talashskills.org.pk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-3xl text-white">
            <h4 className="text-lg font-bold mb-4 italic">"Empowering youth is the key to a prosperous future."</h4>
            <p className="text-xs text-slate-400 font-medium">— Director, SDLC</p>
          </div>
        </div>
      </div>
    </section>
  );
}
