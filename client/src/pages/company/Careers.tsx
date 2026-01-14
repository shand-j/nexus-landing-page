import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
  const jobs = [
    {
      title: "Senior AI Engineer",
      dept: "Engineering",
      loc: "San Francisco / Remote",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      dept: "Design",
      loc: "London / Remote",
      type: "Full-time"
    },
    {
      title: "Enterprise Account Executive",
      dept: "Sales",
      loc: "New York",
      type: "Full-time"
    },
    {
      title: "Security Compliance Manager",
      dept: "Legal",
      loc: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              JOIN THE MISSION.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Help us build the future of safe, governed enterprise AI.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-mono text-primary">{job.dept}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{job.loc}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                  Apply <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
