import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "The State of Enterprise AI Governance in 2026",
      excerpt: "Why shadow AI is the biggest threat to your security posture, and how to fix it.",
      date: "Jan 12, 2026",
      author: "Sarah Chen, CEO",
      category: "Thought Leadership"
    },
    {
      title: "Introducing Nexus 2.0: The Command Center",
      excerpt: "A deep dive into our new dashboard, improved routing engine, and expanded integrations.",
      date: "Jan 05, 2026",
      author: "Product Team",
      category: "Product Update"
    },
    {
      title: "How to Calculate AI ROI: A Practical Guide",
      excerpt: "Stop guessing. Here is the formula for attributing efficiency gains to specific models.",
      date: "Dec 28, 2025",
      author: "Marcus Johnson, CFO",
      category: "Strategy"
    }
  ];

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-mono font-bold mb-6 tracking-tight"
            >
              LATEST INTEL.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Insights, updates, and strategies from the front lines of enterprise AI adoption.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="h-48 bg-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-mono text-primary mb-4 uppercase tracking-wider">{post.category}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground/70">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
