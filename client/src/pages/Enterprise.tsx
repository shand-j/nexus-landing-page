import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Server, Lock, Brain, Zap, LineChart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Enterprise() {
  const competitiveAdvantages = [
    {
      icon: Brain,
      title: "Learning-Capable Systems",
      desc: "Persistent, adaptive AI agents that continuously improve over time—not brittle, one-size-fits-all tools that break at the first edge case."
    },
    {
      icon: Zap,
      title: "Deep Workflow Integration",
      desc: "Tailored solutions for process-specific needs. Seamless alignment with existing enterprise software like Salesforce and Microsoft Dynamics."
    },
    {
      icon: LineChart,
      title: "Proven ROI Metrics",
      desc: "Built-in dashboards to track productivity gains, cost savings, and operational impact with real-time measurement and attribution."
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      desc: "Address cultural resistance with change management frameworks, employee training programs, and intuitive interfaces."
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-foreground text-sm font-mono mb-6"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>ENTERPRISE GRADE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              BUILT FOR SCALE.<br />SECURED FOR BUSINESS.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              The command center for AI governance, ROI tracking, and deployment scaling. Deploy anywhere, govern everywhere.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20"></div>
              <img
                src="/images/nexus_enterprise_security_architecture.png"
                alt="Enterprise Architecture"
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
                  icon: Globe,
                  title: "Global Infrastructure",
                  desc: "Multi-region deployment options to ensure data residency compliance and low-latency performance worldwide."
                },
                {
                  icon: Server,
                  title: "Private Cloud & On-Prem",
                  desc: "Deploy Nexus within your own VPC or on-premise data centers for complete control over your data and models."
                },
                {
                  icon: Lock,
                  title: "SSO & SCIM",
                  desc: "Seamless integration with Okta, Azure AD, and other identity providers for automated user provisioning and access control."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Competitive Advantage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">WHY NEXUS WINS</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unlike generic AI tools, we differentiate through deep integration and measurable outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {competitiveAdvantages.map((advantage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <advantage.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-mono font-bold">{advantage.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{advantage.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="bg-card border border-border p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">Secure your future.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our enterprise sales team to discuss custom deployment options and volume pricing.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
