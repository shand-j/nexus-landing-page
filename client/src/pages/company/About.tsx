import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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
              OUR MISSION.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We are building the operating system for the AI-native enterprise. Our goal is to make AI adoption safe, transparent, and measurable for every organization.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20"></div>
              <img
                src="/images/nexus_team_culture.png"
                alt="Nexus Team"
                className="relative rounded-xl border border-border shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Target,
                  title: "Purpose-Built",
                  desc: "We don't just wrap APIs. We build deep integrations that solve the hard problems of governance, compliance, and attribution."
                },
                {
                  icon: Users,
                  title: "Human-Centric",
                  desc: "We believe AI should augment human intelligence, not replace it. Our tools are designed to keep humans in the loop."
                },
                {
                  icon: Globe,
                  title: "Global Scale",
                  desc: "Headquartered in San Francisco with offices in London and Singapore, we support customers across 20+ countries."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
