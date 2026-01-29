import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, CheckCircle2, Network, ArrowRight, AlertTriangle, TrendingUp, Zap, Upload, Play, Link2, FileText, Clock } from "lucide-react";
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
            CONCIERGE PILOT — LIMITED SLOTS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-5xl md:text-7xl font-mono font-bold tracking-tighter leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Accelerate AI Adoption —{" "}
            <span className="text-primary">Measure Value in 14 Days</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10"
          >
            Centralized usage, lightweight governance, and turnkey enablement so SMB teams move from experiment → measurable ROI fast.
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
              Request a Concierge Pilot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-none border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              <Upload className="mr-2 h-5 w-5" /> Try ROI Preview
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
              <span>Pilot Support Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Full Audit Trail</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>PII Detection Included</span>
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
              { label: "Time to First Value", value: "≤14 Days" },
              { label: "Pilot Duration", value: "6-8 Weeks" },
              { label: "Guided Onboarding", value: "Included" },
              { label: "Limited Slots", value: "Available Now" },
              { label: "Time to First Value", value: "≤14 Days" },
              { label: "Pilot Duration", value: "6-8 Weeks" },
              { label: "Guided Onboarding", value: "Included" },
              { label: "Limited Slots", value: "Available Now" },
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

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Central Dashboard",
                  desc: "Adoption KPIs, initiative-level ROI snapshots, and alerting — all in one place for real-time visibility into your AI investments.",
                  metric: "Adoption KPIs & ROI",
                  color: "text-primary"
                },
                {
                  icon: Link2,
                  title: "Quick Connectors",
                  desc: "Validate and map your existing apps (Drive, Slack, CRM) in minutes. No complex integrations or lengthy setup required.",
                  metric: "Connect in Minutes",
                  color: "text-secondary"
                },
                {
                  icon: FileText,
                  title: "Enablement Playbooks",
                  desc: "Role-based templates that get teams running and measuring immediately. Pre-built workflows for common AI use cases.",
                  metric: "Start Measuring Fast",
                  color: "text-green-400"
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

            {/* ROI Teaser Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono mb-4">
                    <TrendingUp className="h-4 w-4" />
                    <span>ROI PREVIEW</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                    See Projected Savings in Minutes
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Import a CSV or use our template to estimate time and cost savings, then watch realized impact appear in your dashboard as your team adopts AI workflows.
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50"
                    onClick={() => setIsRegisterModalOpen(true)}
                  >
                    <Upload className="mr-2 h-4 w-4" /> Try ROI Preview (Upload CSV)
                  </Button>
                </div>
                <div className="w-full md:w-64 h-48 bg-card rounded-xl border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Projected vs. Realized ROI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - 3 Steps */}
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
                <Clock className="h-4 w-4" />
                <span>TIME TO FIRST VALUE ≤ 14 DAYS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                HOW IT WORKS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Three simple steps to measurable AI impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: "01",
                  icon: Link2,
                  title: "Connect",
                  desc: "Link your existing apps and data sources. Our Quick Connectors validate and map Drive, Slack, CRM, and more in minutes.",
                  color: "text-primary"
                },
                {
                  step: "02",
                  icon: Play,
                  title: "Run a Playbook",
                  desc: "Choose from role-based templates designed for your team. Launch AI workflows immediately with pre-built best practices.",
                  color: "text-secondary"
                },
                {
                  step: "03",
                  icon: TrendingUp,
                  title: "Measure ROI & Scale",
                  desc: "Track adoption KPIs and watch realized savings appear in your dashboard. Scale what works across your organization.",
                  color: "text-green-400"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                >
                  <div className={`text-6xl font-mono font-bold ${step.color} opacity-20 absolute top-4 right-4`}>
                    {step.step}
                  </div>
                  <div className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 ${step.color}`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-mono font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Connecting arrows for desktop */}
            <div className="hidden md:flex justify-center items-center gap-4 -mt-8 mb-8">
              <div className="flex items-center text-muted-foreground">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Pilot Benefits */}
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
                <span>CONCIERGE PILOT</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                6–8 WEEK GUIDED ONBOARDING
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Limited slots available. Get hands-on support to accelerate your AI adoption journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Rapid Time to Value",
                  desc: "Go from setup to measurable ROI in 14 days or less. Our Quick Connectors and Enablement Playbooks eliminate the typical months-long implementation cycle.",
                  color: "text-primary"
                },
                {
                  icon: BarChart3,
                  title: "Actionable ROI Insights",
                  desc: "Track adoption KPIs and initiative-level ROI snapshots in real-time. Quantify AI's impact with data like 'We saved 20 hours/week on content creation.'",
                  color: "text-secondary"
                },
                {
                  icon: Shield,
                  title: "Guided Support & Compliance",
                  desc: "Weekly check-ins with our team, full audit trail, and built-in PII detection. Feel confident scaling AI across your organization.",
                  color: "text-green-400"
                },
                {
                  icon: TrendingUp,
                  title: "Scale What Works",
                  desc: "Once you see results, use our playbooks and dashboards to expand successful AI workflows to other teams and use cases.",
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

            {/* Pilot Success Metrics */}
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
                    metric: "≤14",
                    label: "Days to First Value",
                    desc: "Time to first measurable ROI"
                  },
                  {
                    metric: "6-8",
                    label: "Week Pilot Duration",
                    desc: "Guided onboarding program"
                  },
                  {
                    metric: "100%",
                    label: "Pilot Support",
                    desc: "Audit trail + PII detection"
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
            READY TO MEASURE AI VALUE IN 14 DAYS?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
          >
            Request a Concierge Pilot — <span className="text-primary font-semibold">6–8 week guided onboarding</span> with hands-on support to accelerate your AI adoption.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Limited slots available. Pilot support + audit trail + PII detection included.
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
              Request a Concierge Pilot <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 px-12 text-xl rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              <Upload className="mr-2 h-5 w-5" /> Try ROI Preview
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
