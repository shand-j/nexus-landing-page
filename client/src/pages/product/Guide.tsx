import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Database, CheckCircle2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Guide() {
  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono mb-6"
            >
              <MessageSquare className="h-4 w-4" />
              <span>MODULE: GUIDE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              SANCTIONED PATHWAYS.<br />VERIFIED ANSWERS.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A centralized, secure workspace for teams to ask questions of company data. Built-in approval workflows ensure every answer is accurate and compliant.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-8"
            >
              {[
                {
                  icon: Database,
                  title: "Unified Knowledge Base",
                  desc: "Connect Notion, Google Drive, Slack, and Jira into a single vector database. Nexus indexes your entire organization's knowledge."
                },
                {
                  icon: CheckCircle2,
                  title: "Citation & Attribution",
                  desc: "Every AI response includes direct links to source documents. Users can verify claims instantly with one click."
                },
                {
                  icon: Users,
                  title: "Team Workspaces",
                  desc: "Create isolated environments for HR, Engineering, and Sales. Control data access with granular permissions."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full opacity-20"></div>
              <img
                src="/images/nexus_guide_interface.png"
                alt="Guide Interface"
                className="relative rounded-xl border border-secondary/20 shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="bg-card border border-border p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">Empower your workforce.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Give your team the tools they need to leverage AI safely and effectively.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
