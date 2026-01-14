import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code2, Stethoscope, Landmark, Globe, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      desc: "Ensure compliance with SEC and FINRA regulations while leveraging LLMs for fraud detection and market analysis.",
      features: ["Audit Trails", "PII Redaction", "Model Explainability"]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Protect patient data (HIPAA) while accelerating drug discovery and clinical trial matching with generative AI.",
      features: ["PHI Masking", "Access Controls", "Data Residency"]
    },
    {
      icon: Code2,
      title: "Technology",
      desc: "Accelerate development cycles with AI coding assistants while preventing IP leakage and proprietary code exposure.",
      features: ["Code Scanning", "Secret Detection", "Repo Governance"]
    },
    {
      icon: Briefcase,
      title: "Legal",
      desc: "Automate contract review and case research with 100% citation accuracy and zero hallucination risk.",
      features: ["Citation Verification", "Document Isolation", "Privilege Logs"]
    },
    {
      icon: Globe,
      title: "Go-to-Market",
      desc: "Accelerate campaign launches and content creation while maintaining brand voice and compliance.",
      features: ["Brand Guardrails", "Content Approval", "Multi-Channel Sync"]
    },
    {
      icon: Activity,
      title: "Sales",
      desc: "Empower reps with AI-driven insights and automated follow-ups, ensuring every interaction is on-message.",
      features: ["Call Analysis", "Deal Intelligence", "Automated Coaching"]
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
              SOLUTIONS BY INDUSTRY.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Tailored governance frameworks for highly regulated sectors.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-mono font-bold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{industry.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-accent/50 border border-border text-xs font-mono text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore All Use Cases <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
