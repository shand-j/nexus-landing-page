import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, FileText, TrendingUp, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import RegisterInterestModal from "@/components/RegisterInterestModal";

export default function Solutions() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const useCases = [
    {
      icon: Users,
      title: "Boost Team Adoption",
      problem: "Teams are experimenting with AI in silos, leading to fragmented tools and low adoption rates.",
      solution: "Centralized dashboard gives everyone access to AI tools with role-based permissions. Training resources help teams learn best practices quickly.",
      outcome: "50%+ active user adoption within weeks"
    },
    {
      icon: TrendingUp,
      title: "Measure ROI",
      problem: "Leadership can't justify AI investments because there's no way to track usage or measure business impact.",
      solution: "Automated tracking logs every AI interaction. Built-in ROI calculator quantifies productivity gains in dollars for easy reporting.",
      outcome: "15% average productivity improvement"
    },
    {
      icon: FileText,
      title: "Standardize Workflows",
      problem: "AI usage is ad-hoc with no consistency, making it hard to scale what works or identify risks.",
      solution: "Quick-start templates for common tasks like content creation and data analysis. Usage reports show what's working across teams.",
      outcome: "Structured, repeatable AI processes"
    },
    {
      icon: GraduationCap,
      title: "Build Internal Capabilities",
      problem: "Employees lack skills and confidence to use AI effectively, limiting value extraction.",
      solution: "On-demand training library with videos and guides on prompt engineering, ethical usage, and AI best practices.",
      outcome: "Team upskilling at scale"
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>MVP USE CASES</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              SOLVE REAL AI ADOPTION CHALLENGES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              From experimentation to structured production use. Nexus addresses the core barriers SMBs and mid-market companies face when scaling AI.
            </motion.p>
          </div>

          {/* Alpha Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">50%+</p>
              <p className="text-sm text-muted-foreground">Active user adoption target</p>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">15%</p>
              <p className="text-sm text-muted-foreground">Average productivity gain</p>
            </div>
            <div className="bg-card border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-2">&lt;7 Days</p>
              <p className="text-sm text-muted-foreground">Setup and onboarding time</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border p-8 rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold mb-4">{useCase.title}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm font-mono font-bold text-destructive mb-2">THE PROBLEM</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{useCase.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-mono font-bold text-primary mb-2">THE SOLUTION</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-mono font-bold text-green-400 mb-2">THE OUTCOME</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{useCase.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-mono font-bold mb-4">
              See These Solutions in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our alpha program to test Nexus and solve these challenges in your organization. Limited to 1-3 companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Apply for Alpha Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RegisterInterestModal 
        open={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
      />
    </Layout>
  );
}
