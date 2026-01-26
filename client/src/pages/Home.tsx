import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, CheckCircle2, Network, ArrowRight, AlertTriangle, TrendingUp, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";

// Get base path for assets
const basePath = import.meta.env.BASE_URL;

export default function Home() {
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

  // Scrollytelling section refs
  const scrollSectionRef = useRef(null);
  const { scrollYProgress: featureScrollProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"]
  });

  // Dynamic background color based on scroll position
  const [activeColor, setActiveColor] = useState("rgba(6,182,212,0.1)"); // Default Teal
  const [activeImage, setActiveImage] = useState(`${basePath}images/nexus_govern_3d.png`);
  
  useMotionValueEvent(featureScrollProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveColor("rgba(6,182,212,0.1)"); // Teal (Govern)
      setActiveImage(`${basePath}images/nexus_govern_3d.png`);
    } else if (latest < 0.5) {
      setActiveColor("rgba(168,85,247,0.1)"); // Violet (Guide)
      setActiveImage(`${basePath}images/nexus_guide_3d.png`);
    } else if (latest < 0.75) {
      setActiveColor("rgba(74,222,128,0.1)"); // Green (Validate)
      setActiveImage(`${basePath}images/nexus_validate_3d.png`);
    } else {
      setActiveColor("rgba(96,165,250,0.1)"); // Blue (Measure)
      setActiveImage(`${basePath}images/nexus_measure_3d.png`);
    }
  });

  // Transform for the sticky image - Holographic Zoom Effect
  const featureImageScale = useTransform(featureScrollProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 1.1, 1, 1.1, 1, 1.1]);
  const featureImageRotate = useTransform(featureScrollProgress, [0, 1], [0, 5]);
  const featureImageOpacity = useTransform(featureScrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

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
            SYSTEM STATUS: OPERATIONAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-5xl md:text-8xl font-mono font-bold tracking-tighter leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <span className="text-primary text-2xl md:text-3xl block mb-4 font-normal tracking-[0.2em] uppercase">nexus /noun/</span>
            A CONNECTION OR SERIES OF CONNECTIONS LINKING TWO OR MORE THINGS.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            Bridge the GenAI Divide. Scale AI initiatives from pilots to production with measurable ROI.
            <br />
            <span className="text-primary font-semibold">Govern. Guide. Validate. Measure.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-none border-l-4 border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300" onClick={() => window.location.href = "/product/govern"}>
              Initialize System <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-none border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm" onClick={() => window.location.href = "/solutions"}>
              View Schematics
            </Button>
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
              { label: "Active Nodes", value: "8,492" },
              { label: "Threats Blocked", value: "142" },
              { label: "AI Efficiency", value: "+340%" },
              { label: "Data Processed", value: "4.2 PB" },
              { label: "Uptime", value: "99.99%" },
              { label: "Active Nodes", value: "8,492" },
              { label: "Threats Blocked", value: "142" },
              { label: "AI Efficiency", value: "+340%" },
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

      {/* The GenAI Divide - Problem Statement */}
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
                <span>THE GENAI DIVIDE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 tracking-tight">
                95% OF AI PILOTS FAIL.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Despite $30–40 billion in enterprise AI investments, most organizations are stuck in experimentation. 
                Only <span className="text-foreground font-semibold">5%</span> achieve transformative adoption.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: "Brittle Workflows",
                  desc: "Tools that fail to adapt to context and business-specific requirements."
                },
                {
                  icon: Zap,
                  title: "Lack of Integration",
                  desc: "AI tools disconnected from existing systems and enterprise processes."
                },
                {
                  icon: BarChart3,
                  title: "No ROI Visibility",
                  desc: "Inability to measure and attribute AI impact to business outcomes."
                },
                {
                  icon: TrendingUp,
                  title: "Scaling Barriers",
                  desc: "Successful pilots that can't transition to enterprise-wide production."
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
                Nexus is the <span className="text-primary font-semibold">command center</span> that helps enterprises cross the divide.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/solutions">
                  See How We Solve This <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Scrollytelling Core Modules Section */}
      <section ref={scrollSectionRef} className="relative transition-colors duration-1000" style={{ backgroundColor: activeColor }}>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row">
            {/* Sticky Visual Side with Holographic Effect */}
            <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center p-10 perspective-1000">
              <motion.div 
                style={{ 
                  scale: featureImageScale, 
                  rotateY: featureImageRotate,
                  opacity: featureImageOpacity 
                }}
                className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>
                <img 
                  src={activeImage} 
                  alt="Feature Preview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${basePath}grid-pattern.svg')` }}></div>
                
                {/* Dynamic Overlay Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-white/10 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.2)]"></div>
                <div className="absolute top-10 right-10 h-2 w-2 bg-primary rounded-full animate-ping"></div>
                
                {/* Glitch Overlay */}
                <motion.div
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none"
                ></motion.div>
              </motion.div>
            </div>

            {/* Scrolling Content Side */}
            <div className="lg:w-1/2 py-20 lg:py-0">
              {[
                {
                  icon: Network,
                  title: "GOVERN",
                  desc: "Full-spectrum visibility. Connect to core systems and LLM logs to visualize every AI interaction across the network.",
                  color: "text-primary",
                  href: "/product/govern"
                },
                {
                  icon: Shield,
                  title: "GUIDE",
                  desc: "Sanctioned pathways. A centralized, secure workspace for teams to query company data with built-in approval protocols.",
                  color: "text-secondary",
                  href: "/product/guide"
                },
                {
                  icon: CheckCircle2,
                  title: "VALIDATE",
                  desc: "Risk mitigation. Automated routing of low-confidence outputs for expert human review and reinforcement learning.",
                  color: "text-green-400",
                  href: "/product/validate"
                },
                {
                  icon: BarChart3,
                  title: "MEASURE",
                  desc: "ROI attribution. Precise tracking of AI utility mapped to specific projects, teams, and business outcomes.",
                  color: "text-blue-400",
                  href: "/product/measure"
                }
              ].map((feature, i) => (
                <div key={i} className="min-h-[80vh] flex flex-col justify-center p-8 border-l border-border/20 ml-4 lg:ml-0">
                  <motion.div
                    initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`h-16 w-16 flex items-center justify-center mb-8 rounded-2xl bg-accent/10 ${feature.color} shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-5xl md:text-7xl font-mono font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                      {feature.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-md mb-8">
                      {feature.desc}
                    </p>
                    <Button 
                      variant="link" 
                      className={`p-0 text-lg ${feature.color} hover:opacity-80 group`}
                      onClick={() => window.location.href = feature.href}
                    >
                      Explore {feature.title} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-mono font-bold mb-8"
          >
            READY TO TAKE COMMAND?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Join the enterprise leaders who are already governing their AI future with Nexus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
              Book a Demo
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
