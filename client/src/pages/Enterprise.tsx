import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Server, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Enterprise() {
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
              Nexus is architected to meet the rigorous demands of global enterprises. Deploy anywhere, govern everywhere.
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
