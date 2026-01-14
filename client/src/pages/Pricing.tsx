import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "For small teams exploring AI adoption.",
      features: [
        "Up to 5 users",
        "Basic Governance Logs",
        "1 Team Workspace",
        "Community Support",
        "Standard LLM Gateways"
      ],
      notIncluded: [
        "PII Redaction",
        "SSO Integration",
        "Custom Policies",
        "Audit Export"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Growth",
      price: "$49",
      period: "/user/mo",
      desc: "For scaling companies needing control.",
      features: [
        "Unlimited Users",
        "Advanced Governance & PII",
        "Unlimited Workspaces",
        "Priority Support",
        "Custom Policy Engine",
        "Audit Logs (30 days)"
      ],
      notIncluded: [
        "On-premise Deployment",
        "Dedicated Success Manager"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For organizations requiring full compliance.",
      features: [
        "Everything in Growth",
        "On-premise / VPC Deployment",
        "SSO & SCIM Provisioning",
        "Unlimited Audit Retention",
        "Dedicated Success Manager",
        "SLA Guarantees"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
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
              TRANSPARENT PRICING.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Choose the plan that fits your stage of AI maturity. No hidden fees, cancel anytime.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-border bg-card'} p-8 flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold font-mono">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-mono font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                      <X className="h-5 w-5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
