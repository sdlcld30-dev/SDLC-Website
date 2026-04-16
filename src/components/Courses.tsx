import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Scissors, Wrench, Clock, ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "IT & Software",
    description: "Web design, graphic design, and office productivity tools for the digital economy.",
    duration: "6 Months",
    icon: Monitor,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Beautician",
    description: "Professional makeup, hair styling, and skin care certifications for women entrepreneurs.",
    duration: "4 Months",
    icon: Scissors,
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "Vocational",
    description: "Tailoring, embroidery, and traditional handicrafts to support local livelihoods.",
    duration: "8 Months",
    icon: Wrench,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Short Courses",
    description: "Intensive workshops on financial literacy and small business management.",
    duration: "4 Weeks",
    icon: Clock,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-1">
          <h2 className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Our Programs</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">Explore Courses</h3>
        </div>
        <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50/50 transition-all duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-emerald-400" />
              </div>
              <CardHeader className="p-8 pb-4">
                <div className={`w-12 h-12 rounded-2xl ${course.bg} ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex flex-col gap-6">
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {course.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {course.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
