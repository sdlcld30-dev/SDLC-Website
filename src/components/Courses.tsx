import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    title: "IT & Software",
    description: "Web design, graphic design, and office productivity tools for the digital economy.",
    duration: "6 Months",
  },
  {
    title: "Beautician",
    description: "Professional makeup, hair styling, and skin care certifications for women entrepreneurs.",
    duration: "4 Months",
  },
  {
    title: "Vocational",
    description: "Tailoring, embroidery, and traditional handicrafts to support local livelihoods.",
    duration: "8 Months",
  },
  {
    title: "Short Courses",
    description: "Intensive workshops on financial literacy and small business management.",
    duration: "4 Weeks",
  },
];

export function Courses() {
  return (
    <section id="courses">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold text-primary-foreground bg-primary/10 px-4 py-1 rounded-lg">Our Programs</h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors flex flex-col">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-lg text-primary">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-1 flex flex-col gap-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
                <div className="mt-auto">
                  <span className="text-[10px] font-bold text-secondary bg-background px-2 py-1 rounded uppercase tracking-wider">
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
