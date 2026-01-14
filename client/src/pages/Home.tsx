import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BarChart3, CheckCircle2, Network, ArrowRight, Lock, Eye, Zap, Cpu, Activity, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <Layout>
      {/* Immersive Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/30 rounded-full"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity, scale, y }}
          className="container relative z-10 flex flex-col items-center text-center pt-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/20 text-primary text-sm font-mono mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM STATUS: OPERATIONAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-mono font-bold tracking-tighter leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
          >
            COMMAND<br />THE NEXUS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            The enterprise-grade operating system for AI adoption.
            <br />
            <span className="text-primary">Govern. Guide. Validate. Measure.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-none border-l-4 border-white/20">
              Initialize System <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-none border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
              View Schematics
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 perspective-1000"
        >
          <div className="relative rounded-t-xl border-t border-x border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_-20px_80px_-20px_rgba(6,182,212,0.3)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <img 
              src="/images/nexus_dashboard_mockup.png" 
              alt="Nexus Dashboard" 
              className="w-full h-auto opacity-90"
            />
            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-20"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Ticker */}
      <div className="border-y border-border/50 bg-accent/30 backdrop-blur-sm overflow-hidden">
        <div className="container flex items-center justify-between py-6">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[
              { label: "Active Nodes", value: "8,492" },
              { label: "Threats Blocked", value: "142" },
              { label: "AI Efficiency", value: "+340%" },
              { label: "Data Processed", value: "4.2 PB" },
              { label: "Uptime", value: "99.99%" },
              { label: "Active Nodes", value: "8,492" },
              { label: "Threats Blocked", value: "142" },
              { label: "AI Efficiency", value: "+340%" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-wider">{stat.label}</span>
                <span className="text-foreground font-mono font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Modules Section */}
      <section id="solutions" className="py-32 relative">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">CORE MODULES</h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The Nexus architecture is built on four fundamental pillars, designed to provide total control over your enterprise AI ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Network,
                title: "GOVERN",
                desc: "Full-spectrum visibility. Connect to core systems and LLM logs to visualize every AI interaction across the network.",
                color: "text-primary",
                border: "border-primary/20",
                bg: "bg-primary/5"
              },
              {
                icon: Shield,
                title: "GUIDE",
                desc: "Sanctioned pathways. A centralized, secure workspace for teams to query company data with built-in approval protocols.",
                color: "text-secondary",
                border: "border-secondary/20",
                bg: "bg-secondary/5"
              },
              {
                icon: CheckCircle2,
                title: "VALIDATE",
                desc: "Risk mitigation. Automated routing of low-confidence outputs for expert human review and reinforcement learning.",
                color: "text-green-400",
                border: "border-green-400/20",
                bg: "bg-green-400/5"
              },
              {
                icon: BarChart3,
                title: "MEASURE",
                desc: "ROI attribution. Precise tracking of AI utility mapped to specific projects, teams, and business outcomes.",
                color: "text-blue-400",
                border: "border-blue-400/20",
                bg: "bg-blue-400/5"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-none border ${feature.border} ${feature.bg} p-8 transition-all duration-300 hover:bg-accent/50`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <feature.icon className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <div className={`h-12 w-12 flex items-center justify-center mb-6 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Governance */}
      <section className="py-32 bg-accent/20 border-y border-border/50 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20"></div>
              <div className="relative rounded-lg border border-primary/30 bg-card/50 backdrop-blur-md p-2 shadow-2xl">
                <img 
                  src="/images/nexus_social_media_banner.png" 
                  alt="Governance Visualization" 
                  className="rounded border border-border/50"
                />
                {/* Overlay Data Points */}
                <div className="absolute top-10 right-10 bg-black/80 border border-primary/50 p-4 rounded font-mono text-xs text-primary shadow-lg backdrop-blur-md">
                  <div>&gt; THREAT DETECTED</div>
                  <div className="text-white mt-1">Source: External API</div>
                  <div className="text-red-500 mt-1">Action: BLOCKED</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-6">
                <Lock className="h-4 w-4" />
                <span>PROTOCOL: SECURITY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">TOTAL VISIBILITY.<br/>ZERO COMPROMISE.</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Eliminate shadow AI. Nexus integrates directly with your identity provider and LLM gateways to log, categorize, and audit every prompt and completion in real-time.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "PII Redaction", desc: "Automatic masking of sensitive data before it leaves your perimeter." },
                  { title: "RBAC Enforcement", desc: "Granular role-based access control for specific models and datasets." },
                  { title: "Audit Trails", desc: "Immutable logs for compliance with SOC2, GDPR, and ISO standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                    <div>
                      <h4 className="font-mono font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Validation */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-secondary font-mono text-sm mb-6">
                <Eye className="h-4 w-4" />
                <span>PROTOCOL: ACCURACY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">HUMAN-IN-THE-LOOP<br/>VERIFICATION.</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Prevent hallucinations from reaching production. Nexus automatically routes low-confidence outputs to subject matter experts, creating a virtuous cycle of model improvement.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 border border-border bg-accent/10 rounded-none">
                  <div className="text-3xl font-mono font-bold text-secondary mb-2">99.8%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="p-6 border border-border bg-accent/10 rounded-none">
                  <div className="text-3xl font-mono font-bold text-secondary mb-2">&lt; 20ms</div>
                  <div className="text-sm text-muted-foreground">Routing Latency</div>
                </div>
              </div>

              <Button variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 rounded-none h-12 px-6">
                Explore Validation Workflows
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full opacity-20"></div>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-b from-secondary to-primary opacity-30 blur-lg"></div>
                <img 
                  src="/images/nexus_mobile_app_mockup.png" 
                  alt="Validation App" 
                  className="relative rounded-2xl border border-border shadow-2xl"
                />
                
                {/* Floating Approval Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-12 top-1/3 bg-card border border-green-500/30 p-4 rounded shadow-xl backdrop-blur-md max-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="font-mono font-bold text-green-500">APPROVED</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Output validated by Senior Engineer. Confidence score updated.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-mono font-bold mb-8 tracking-tighter">
            INITIALIZE<br/>YOUR COMMAND CENTER
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the forward-thinking enterprises using Nexus to turn AI chaos into a strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-12 text-xl rounded-none border-l-4 border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-none border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
