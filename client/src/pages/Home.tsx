import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BarChart3, CheckCircle2, Network, ArrowRight, Lock, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Abstract Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise AI Governance 2.0
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-mono font-bold tracking-tight leading-[1.1]">
              The Command Center for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Enterprise AI</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Govern, guide, validate, and measure every AI interaction across your organization. Connect to core systems and gain total visibility.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5">
                View Documentation
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-muted-foreground grayscale opacity-70">
              {/* Placeholder for logos */}
              <div className="font-mono font-bold text-xl">ACME Corp</div>
              <div className="font-mono font-bold text-xl">Globex</div>
              <div className="font-mono font-bold text-xl">Soylent</div>
              <div className="font-mono font-bold text-xl">Umbrella</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"></div>
              <img 
                src="/images/nexus_dashboard_mockup.png" 
                alt="Nexus Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg border border-border/10"
              />
              
              {/* Floating UI Elements for depth */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-20 bg-card border border-border p-4 rounded-lg shadow-xl max-w-[200px] hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">Status</div>
                    <div className="text-sm font-bold">Approved</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[98%]"></div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-20 bg-card border border-border p-4 rounded-lg shadow-xl max-w-[200px] hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground">ROI</div>
                    <div className="text-sm font-bold">+340%</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="solutions" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">Complete AI Governance</h2>
            <p className="text-lg text-muted-foreground">
              Nexus provides the infrastructure to safely adopt AI at scale, ensuring every interaction is tracked, validated, and optimized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Network,
                title: "Govern",
                desc: "Connect to core systems and LLM logs to show you every AI interaction across the company.",
                color: "text-blue-500"
              },
              {
                icon: Shield,
                title: "Guide",
                desc: "A single, sanctioned place for teams to ask questions of company data, with built-in approval workflows.",
                color: "text-primary"
              },
              {
                icon: CheckCircle2,
                title: "Validate",
                desc: "Low-confidence or high-risk outputs are automatically routed for expert sign-off.",
                color: "text-green-500"
              },
              {
                icon: BarChart3,
                title: "Measure",
                desc: "Attribute every AI use to a project, team, and outcome. The first real dashboard of AI ROI.",
                color: "text-secondary"
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-lg bg-background border border-border flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-mono text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive - Govern */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-30"></div>
              <img 
                src="/images/nexus_social_media_banner.png" 
                alt="Governance Visualization" 
                className="relative rounded-xl border border-border shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                <Lock className="h-4 w-4" /> Governance
              </div>
              <h2 className="text-3xl md:text-4xl font-mono font-bold">Total Visibility & Control</h2>
              <p className="text-lg text-muted-foreground">
                Stop shadow AI. Nexus connects directly to your identity provider and LLM gateways to log, categorize, and audit every prompt and completion.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time PII redaction and data masking",
                  "Role-based access control (RBAC) for models",
                  "Full audit trails for compliance and security",
                  "Custom policy enforcement engine"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-4">Learn about Security</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive - Validate */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                <Eye className="h-4 w-4" /> Human-in-the-Loop
              </div>
              <h2 className="text-3xl md:text-4xl font-mono font-bold">Accuracy You Can Trust</h2>
              <p className="text-lg text-muted-foreground">
                Don't let hallucinations reach production. Nexus automatically routes low-confidence outputs to subject matter experts for review, creating a virtuous cycle of improvement.
              </p>
              <ul className="space-y-4">
                {[
                  "Configurable confidence thresholds",
                  "Slack and Teams integration for approvals",
                  "Fine-tuning datasets generated from corrections",
                  "Version control for prompt engineering"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-4">Explore Validation</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full opacity-30"></div>
              <img 
                src="/images/nexus_mobile_app_mockup.png" 
                alt="Validation Workflow" 
                className="relative rounded-xl border border-border shadow-2xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">Ready to govern your AI future?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join forward-thinking enterprises using Nexus to turn AI chaos into a strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg w-full sm:w-auto">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
