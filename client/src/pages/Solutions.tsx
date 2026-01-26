import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code2, Stethoscope, Landmark, Globe, Activity, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const industries = [
    {
      icon: Landmark,
      title: "Banking & Finance",
      desc: "Ensure compliance with SEC and FINRA regulations while leveraging LLMs for fraud detection and market analysis. Early adopters in this sector report positive ROI.",
      features: ["Audit Trails", "PII Redaction", "Model Explainability"],
      highlight: true
    },
    {
      icon: Code2,
      title: "Tech & Telecom",
      desc: "Accelerate development cycles with AI coding assistants while preventing IP leakage and proprietary code exposure. Leading sector for GenAI adoption.",
      features: ["Code Scanning", "Secret Detection", "Repo Governance"],
      highlight: true
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      desc: "Automate contract review, case research, and client deliverables with 100% citation accuracy and zero hallucination risk.",
      features: ["Citation Verification", "Document Isolation", "Privilege Logs"],
      highlight: true
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Protect patient data (HIPAA) while accelerating drug discovery and clinical trial matching with generative AI.",
      features: ["PHI Masking", "Access Controls", "Data Residency"],
      highlight: false
    },
    {
      icon: Globe,
      title: "Manufacturing",
      desc: "Optimize supply chains, predictive maintenance, and quality control with AI while maintaining operational security.",
      features: ["Process Automation", "Predictive Analytics", "Quality Control"],
      highlight: false
    },
    {
      icon: Activity,
      title: "Retail",
      desc: "Personalize customer experiences and optimize inventory with AI while protecting customer data and maintaining brand consistency.",
      features: ["Customer Insights", "Inventory Optimization", "Brand Guardrails"],
      highlight: false
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
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
              Tailored governance frameworks for highly regulated sectors. Process-specific customization for your critical workflows.
            </motion.p>
          </div>

          {/* Market Opportunity Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">$200B</p>
              <p className="text-sm text-muted-foreground">Enterprise AI market by 2030</p>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">88%</p>
              <p className="text-sm text-muted-foreground">Leaders increasing GenAI budgets</p>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">90 Days</p>
              <p className="text-sm text-muted-foreground">Pilot to production timeline</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group bg-card border ${industry.highlight ? 'border-primary/30' : 'border-border'} p-8 rounded-xl hover:border-primary/50 transition-colors relative`}
              >
                {industry.highlight && (
                  <div className="absolute -top-3 right-6 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full text-xs font-mono text-primary flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Early Adopter
                  </div>
                )}
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
            <p className="text-lg text-muted-foreground mb-6">
              We target mid-market enterprises ($250M–$2B revenue) and Tier 1 corporations, focusing on industries where adoption complexity and ROI measurement remain key blockers.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore All Use Cases <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
