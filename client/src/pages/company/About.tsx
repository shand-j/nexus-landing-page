import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Brain, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
              To become the leading platform that enables enterprises to bridge the GenAI Divide, transforming AI from a productivity tool into a <span className="text-primary font-semibold">core driver of business value</span>.
            </motion.p>
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-mono font-bold">OUR VISION</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Despite <span className="text-foreground font-semibold">$30–40 billion</span> in enterprise AI investments, 95% of AI pilots fail to deliver measurable ROI. We're building the operating system that changes this.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By combining <span className="text-primary font-semibold">adaptive AI systems</span>, <span className="text-primary font-semibold">customized workflows</span>, and <span className="text-primary font-semibold">process-specific learning capabilities</span>, we empower enterprises to unlock the full potential of Generative AI for transformative business outcomes.
              </p>
            </div>
          </motion.div>

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
                  icon: Brain,
                  title: "Learning-Capable Systems",
                  desc: "Our persistent memory AI agents adapt, learn, and improve over time to deliver sustained value—not brittle, one-size-fits-all tools."
                },
                {
                  icon: Target,
                  title: "Process-Specific Design",
                  desc: "We build deep integrations tailored to critical enterprise workflows: back-office automation, customer retention, and financial risk management."
                },
                {
                  icon: Users,
                  title: "Human-Centric Approach",
                  desc: "We believe AI should augment human intelligence, not replace it. Our tools address cultural resistance with change management frameworks."
                },
                {
                  icon: LineChart,
                  title: "Measurable ROI",
                  desc: "Real-time tracking of productivity gains, operational efficiencies, and cost savings ensures accountability and transparency."
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

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-mono font-bold mb-6">THE TEAM</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Led by seasoned professionals with expertise in <span className="text-foreground font-medium">AI governance</span>, <span className="text-foreground font-medium">enterprise software</span>, and <span className="text-foreground font-medium">organizational transformation</span>. Our team combines academic rigor with practical business execution, leveraging insights from leading AI research to deliver real-world results.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/company/careers">Join Our Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/company/contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
