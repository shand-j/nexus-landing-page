import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, AlertTriangle, UserCheck, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function Validate() {
  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-green-500/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-mono mb-6"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>MODULE: VALIDATE</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              HUMAN-IN-THE-LOOP<br />VERIFICATION.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Prevent hallucinations from reaching production. Nexus automatically routes low-confidence outputs to subject matter experts, creating a virtuous cycle of model improvement.
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
              <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full opacity-20"></div>
              <img
                src="/images/nexus_mobile_app_mockup.png"
                alt="Validation App"
                className="relative rounded-xl border border-green-500/20 shadow-2xl mx-auto max-w-sm"
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
                  icon: AlertTriangle,
                  title: "Confidence Thresholds",
                  desc: "Set custom confidence scores for different use cases. Outputs below the threshold are automatically flagged for review."
                },
                {
                  icon: UserCheck,
                  title: "Expert Routing",
                  desc: "Route flagged queries to the specific team member best qualified to answer them based on topic and expertise."
                },
                {
                  icon: BrainCircuit,
                  title: "RLHF Integration",
                  desc: "Every human correction is fed back into the model as training data, constantly improving accuracy over time."
                }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                    <feature.icon className="h-6 w-6 text-green-500" />
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
            <h2 className="text-3xl font-mono font-bold mb-6">Trust your AI.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build confidence in your automated systems with robust human oversight.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Start Validating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
