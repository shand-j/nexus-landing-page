import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import RegisterInterestModal from "@/components/RegisterInterestModal";

export default function Pricing() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const plans = [
    {
      name: "Alpha Program",
      price: "FREE",
      desc: "Limited to 1-3 companies for 6-8 weeks.",
      features: [
        "Full platform access",
        "Centralized AI Dashboard",
        "Usage Tracking & Reporting",
        "ROI Calculator",
        "Employee Enablement Resources",
        "Weekly priority support",
        "Direct influence on product roadmap",
        "No long-term commitment"
      ],
      cta: "Apply for Alpha Access",
      popular: true,
      badge: "LIMITED SPOTS"
    },
    {
      name: "Future Pricing",
      price: "TBD",
      desc: "Post-alpha pricing will be announced.",
      features: [
        "All Alpha features",
        "Additional integrations",
        "Enhanced security features",
        "Advanced analytics",
        "Custom workflows",
        "Dedicated support team",
        "SLA guarantees",
        "Enterprise deployment options"
      ],
      cta: "Join Waitlist",
      popular: false,
      badge: "COMING SOON"
    }
  ];

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
              <Sparkles className="h-4 w-4" />
              <span>ALPHA PHASE PRICING</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              START WITH FREE ALPHA ACCESS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We're accepting 1-3 companies for our alpha program. Get full platform access at no cost for 6-8 weeks.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-border bg-card'} p-8 flex flex-col h-full`}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold font-mono">
                  {plan.badge}
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-mono font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  </div>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}
                  onClick={() => setIsRegisterModalOpen(true)}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-24"
          >
            <h2 className="text-3xl font-mono font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What happens after the alpha program?",
                  a: "After the 6-8 week alpha period, we'll work with you to transition to a paid plan based on your feedback and needs. Pricing will be competitive and transparent."
                },
                {
                  q: "Who is eligible for the alpha program?",
                  a: "We're looking for SMBs and mid-market companies (50-500 employees) who are early in their AI journey and want to move from experimentation to structured production use."
                },
                {
                  q: "What's the time commitment?",
                  a: "We ask for weekly check-ins (30-60 minutes) and encourage active use of the platform. Your feedback will directly shape the product roadmap."
                },
                {
                  q: "Is there a contract?",
                  a: "No long-term contract required. The alpha program is completely free with no obligations beyond the testing period."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-mono font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <RegisterInterestModal 
        open={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
      />
    </Layout>
  );
}
