import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Measure() {
  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-mono mb-6"
            >
              <BarChart3 className="h-4 w-4" />
              <span>MODULE: MEASURE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              ROI ATTRIBUTION.<br />PRECISE TRACKING.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Stop guessing the value of AI. Nexus attributes every AI use to a project, team, and outcome, giving you the first real dashboard of AI ROI and efficiency gains.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-8"
            >
              {[
                {
                  icon: TrendingUp,
                  title: "Efficiency Metrics",
                  desc: "Quantify time saved per task. Compare AI-assisted workflows against traditional baselines to prove value."
                },
                {
                  icon: PieChart,
                  title: "Cost Allocation",
                  desc: "Break down token usage and API costs by department, project, or individual user. Eliminate billing surprises."
                },
                {
                  icon: LineChart,
                  title: "Adoption Trends",
                  desc: "Visualize adoption rates across the organization. Identify power users and teams that need more support."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <feature.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-20"></div>
              <img
                src="/images/nexus_dashboard_mockup.png"
                alt="Analytics Dashboard"
                className="relative rounded-xl border border-blue-500/20 shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="bg-card border border-border p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-mono font-bold mb-6">Prove the value.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the data you need to justify your AI investment and scale what works.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                See the Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request Report Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
