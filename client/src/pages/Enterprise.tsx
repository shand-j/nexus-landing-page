import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Brain, Zap, LineChart, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import RegisterInterestModal from "@/components/RegisterInterestModal";

export default function Enterprise() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const mvpCapabilities = [
    {
      icon: Brain,
      title: "Centralized AI Access",
      desc: "Single dashboard for your team to access pre-integrated AI tools. No more scattered subscriptions or fragmented workflows."
    },
    {
      icon: Zap,
      title: "Usage Tracking",
      desc: "Real-time visibility into how teams use AI. Track adoption rates, time saved, and productivity gains across departments."
    },
    {
      icon: LineChart,
      title: "ROI Measurement",
      desc: "Built-in calculator to quantify AI's business impact. Turn usage data into clear ROI metrics for leadership."
    },
    {
      icon: Users,
      title: "Team Enablement",
      desc: "On-demand training resources to upskill employees. Build internal AI capabilities with best practices and guides."
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>ALPHA PROGRAM FOR SMBs</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              ACCELERATE YOUR AI JOURNEY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Join our alpha program to transform how your organization adopts AI. Move from fragmented experiments to structured, measurable production use.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {mvpCapabilities.map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Alpha Program Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">WHAT YOU GET IN THE ALPHA</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be among the first to test Nexus and influence the product roadmap.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Free Platform Access",
                  desc: "Full access to all MVP features for 6-8 weeks at no cost. No credit card required."
                },
                {
                  title: "Priority Support",
                  desc: "Weekly check-ins with our team. Direct line to engineering for any issues or questions."
                },
                {
                  title: "Product Influence",
                  desc: "Your feedback directly shapes features and priorities. Help build the product you need."
                },
                {
                  title: "Fast Setup",
                  desc: "Get up and running in less than 7 days. Simple onboarding process with guided setup."
                },
                {
                  title: "No Commitment",
                  desc: "No long-term contracts or obligations. Test risk-free during the alpha period."
                },
                {
                  title: "Early Adopter Perks",
                  desc: "Exclusive pricing and features when we launch. Position yourself as an AI leader."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-mono font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
            </div>
          </motion.div>

                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">Ready to Join the Alpha Program?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Limited to 1-3 companies. Apply now to get free access, priority support, and help shape the future of AI adoption.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Apply for Alpha Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RegisterInterestModal 
        open={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
      />
    </Layout>
  );
}
