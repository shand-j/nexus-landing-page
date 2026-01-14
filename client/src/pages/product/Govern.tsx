import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Govern() {
  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Shield className="h-4 w-4" />
              <span>MODULE: GOVERN</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              TOTAL VISIBILITY.<br />ZERO COMPROMISE.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Eliminate shadow AI. Nexus integrates directly with your identity provider and LLM gateways to log, categorize, and audit every prompt and completion in real-time.
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
                src="/images/nexus_govern_dashboard.png"
                alt="Governance Dashboard"
                className="relative rounded-xl border border-primary/20 shadow-2xl"
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
                  icon: Lock,
                  title: "PII Redaction",
                  desc: "Automatic masking of sensitive data before it leaves your perimeter. Detects names, SSNs, credit cards, and custom regex patterns."
                },
                {
                  icon: Eye,
                  title: "Real-time Monitoring",
                  desc: "Watch AI interactions as they happen. Flag policy violations instantly and block unauthorized model access."
                },
                {
                  icon: Activity,
                  title: "Audit Trails",
                  desc: "Immutable logs for compliance with SOC2, GDPR, and ISO standards. Export comprehensive reports for auditors."
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

          <div className="bg-card border border-border p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">Ready to take control?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start governing your AI infrastructure today with a 14-day free trial of the Nexus platform.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
