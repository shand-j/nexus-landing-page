import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, CheckCircle2, Network, ArrowRight, AlertTriangle, TrendingUp, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import RegisterInterestModal from "@/components/RegisterInterestModal";

// Get base path for assets
const basePath = import.meta.env.BASE_URL;

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring physics for scroll effects
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // "Fly-through" effect: Scale UP and fade out
  const opacity = useTransform(smoothScroll, [0, 0.4], [1, 0]);
  const scale = useTransform(smoothScroll, [0, 0.4], [1, 1.5]); // Scale UP
  const y = useTransform(smoothScroll, [0, 0.4], [0, 100]); // Move DOWN slightly as we fly "over" it
  const blur = useTransform(smoothScroll, [0, 0.4], ["0px", "10px"]); // Blur as it gets closer

  return (
    <Layout>
      {/* Immersive Hero Section with Fly-Through Effect */}
      <section ref={targetRef} className="relative min-h-[120vh] flex flex-col items-center justify-start overflow-hidden bg-background pt-32">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/40 rounded-full blur-[1px]"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity, scale, y, filter: `blur(${blur})` }}
          className="container relative z-10 flex flex-col items-center text-center pt-20 origin-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/50 border border-primary/20 text-primary text-sm font-mono mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NOW ACCEPTING ALPHA TESTERS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-5xl md:text-8xl font-mono font-bold tracking-tighter leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <span className="text-primary text-2xl md:text-3xl block mb-4 font-normal tracking-[0.2em] uppercase">ACCELERATE AI ADOPTION</span>
            FROM EXPERIMENTATION TO PRODUCTION-READY AI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10"
          >
            A centralized platform that simplifies AI adoption for SMBs and mid-market companies. Access tools, track usage, measure ROI, and empower your teams—all in one place.
            <br />
            <span className="text-primary font-semibold text-2xl md:text-3xl mt-2 block">Simple. Measurable. Scalable.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-none border-l-4 border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Join Alpha Program <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-none border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Book Discovery Call
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Free Alpha Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>No Long-Term Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Priority Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Shape the Product</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Dashboard Preview with Fly-Through Tilt */}
        <motion.div
          style={{ 
            rotateX: useTransform(smoothScroll, [0, 0.5], [20, 0]), 
            scale: useTransform(smoothScroll, [0, 0.5], [0.9, 1.1]),
            opacity: useTransform(smoothScroll, [0, 0.2], [0, 1]),
            y: useTransform(smoothScroll, [0, 0.5], [100, 0])
          }}
          className="relative mt-20 w-full max-w-7xl px-4 perspective-1000 mx-auto z-20"
        >
          <div className="relative rounded-t-xl border-t border-x border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_-20px_80px_-20px_rgba(6,182,212,0.3)] overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <img 
              src={`${basePath}images/nexus_dashboard_mockup.png`}
              alt="Nexus Dashboard" 
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_20px_rgba(6,182,212,0.5)] z-20"
            ></motion.div>
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('${basePath}grid-pattern.svg')` }}></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Ticker */}
      <div className="border-y border-border/50 bg-accent/30 backdrop-blur-sm overflow-hidden z-30 relative">
        <div className="container flex items-center justify-between py-6">
          <div className="flex gap-20 animate-marquee whitespace-nowrap">
            {[
              { label: "Alpha Spots", value: "3" },
              { label: "Program Duration", value: "6-8 Weeks" },
              { label: "Avg. Time Saved", value: "15%" },
              { label: "Setup Time", value: "<7 Days" },
              { label: "Weekly Support", value: "Included" },
              { label: "Alpha Spots", value: "3" },
              { label: "Program Duration", value: "6-8 Weeks" },
              { label: "Avg. Time Saved", value: "15%" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">{stat.label}</span>
                <span className="text-foreground font-mono font-bold text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The AI Adoption Challenge - Problem Statement */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-destructive/5"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-mono mb-6">
                <AlertTriangle className="h-4 w-4" />
                <span>THE AI ADOPTION GAP</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                TEAMS ARE EXPERIMENTING. NOT ADOPTING.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SMBs and mid-market companies struggle to move AI from ad-hoc experiments to structured, production-ready workflows. 
                The result? <span className="text-foreground font-semibold">Low adoption, fragmented tools, and no visibility into ROI.</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: "Low AI Adoption",
                  desc: "Employees lack easy access to AI tools and training, leading to siloed experimentation."
                },
                {
                  icon: BarChart3,
                  title: "No ROI Visibility",
                  desc: "Companies can't track AI usage or measure value, making it hard to justify investments."
                },
                {
                  icon: Zap,
                  title: "Fragmented Workflows",
                  desc: "Without a centralized platform, AI initiatives are disorganized with no visibility into costs or risks."
                }
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-xl p-6 hover:border-destructive/30 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 border border-destructive/20">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-mono font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-xl text-muted-foreground mb-6">
                Nexus provides a <span className="text-primary font-semibold">centralized platform</span> to solve these foundational barriers.
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MVP Features - What You Get */}
      <section className="py-24 relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <span>ALPHA MVP FEATURES</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                EVERYTHING YOU NEED TO START
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A lean, focused platform designed to solve the core pain points of AI adoption for SMBs and mid-market companies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Network,
                  title: "Centralized AI Dashboard",
                  desc: "Single login access to pre-integrated generative AI tools (text generation, image creation, data analysis). Role-based access and quick-start templates for common tasks.",
                  metric: "One Platform, All Tools",
                  color: "text-primary"
                },
                {
                  icon: BarChart3,
                  title: "Usage Tracking & Reporting",
                  desc: "Automated logging of AI interactions with simple visualizations. Track adoption rates by team, time saved, and estimated cost savings. Export reports as PDF or CSV.",
                  metric: "Real-Time Insights",
                  color: "text-secondary"
                },
                {
                  icon: Shield,
                  title: "Employee Enablement",
                  desc: "On-demand training library with short videos and guides on AI best practices, prompt engineering, and ethical usage. Built-in feedback loop for continuous improvement.",
                  metric: "Build Team Skills",
                  color: "text-green-400"
                },
                {
                  icon: TrendingUp,
                  title: "ROI Calculator",
                  desc: "Built-in, configurable calculator that estimates ROI based on tracked data. Input manual vs AI-assisted time to see productivity gains in dollars. Ties directly to reporting.",
                  metric: "Measure Value",
                  color: "text-blue-400"
                }
              ].map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-background border border-border rounded-xl p-8 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 ${value.color}`}>
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-xl mb-2">{value.title}</h3>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-mono ${value.color} bg-accent/20 mb-3`}>
                        {value.metric}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                Ready to Join the Alpha Program?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be among the first 1-3 companies to test Nexus. Get free access, priority support, and shape the product roadmap.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
                  onClick={() => setIsRegisterModalOpen(true)}
                >
                  Apply for Alpha Access <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8"
                  onClick={() => setIsRegisterModalOpen(true)}
                >
                  Book Discovery Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alpha Program Benefits */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <span>ALPHA PROGRAM</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                WHY JOIN AS AN ALPHA TESTER?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Be among the first 1-3 companies to shape the future of AI adoption. Low risk, high impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Rapid AI Adoption Boost",
                  desc: "Gain immediate access to a centralized hub that simplifies AI experimentation. Reduce setup time from weeks to days and increase team-wide usage with tools and training in one place.",
                  color: "text-primary"
                },
                {
                  icon: BarChart3,
                  title: "Actionable ROI Insights",
                  desc: "For the first time, quantify AI's impact with data like 'We saved 20 hours/week on content creation.' Make data-driven decisions to scale initiatives and justify budgets.",
                  color: "text-secondary"
                },
                {
                  icon: Shield,
                  title: "Exclusive Early Access",
                  desc: "As an alpha partner, receive priority support with weekly check-ins and custom tweaks based on your feedback. Shape the product roadmap and position yourself as an AI leader.",
                  color: "text-green-400"
                },
                {
                  icon: TrendingUp,
                  title: "Low-Risk Testing",
                  desc: "Free access during alpha with no long-term commitments. Experiment in a controlled setting while building internal AI capabilities and employee skills.",
                  color: "text-blue-400"
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                >
                  <div className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-mono font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Alpha Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-8 text-center">
                WHAT SUCCESS LOOKS LIKE
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "50%+",
                    label: "Active User Adoption",
                    desc: "Weekly engagement target"
                  },
                  {
                    metric: "15%",
                    label: "Productivity Gain",
                    desc: "Average time saved"
                  },
                  {
                    metric: "6-8 Weeks",
                    label: "Alpha Duration",
                    desc: "Fast, focused testing"
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl md:text-6xl font-mono font-bold text-primary mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-lg font-mono font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5"></div>
        <div className="container relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-mono font-bold mb-8"
          >
            READY TO ACCELERATE YOUR AI JOURNEY?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
          >
            Join our alpha program and be among the first companies to move from <span className="text-primary font-semibold">AI experimentation to structured production use</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Limited to 1-3 companies. Free access, priority support, and the opportunity to shape the product roadmap.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="h-16 px-12 text-xl bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Apply for Alpha Access <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 px-12 text-xl rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Book Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Register Interest Modal */}
      <RegisterInterestModal 
        open={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
      />
    </Layout>
  );
}
