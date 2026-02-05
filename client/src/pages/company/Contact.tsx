import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SubscriberModal from "@/components/SubscriberModal";

export default function Contact() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
              GET IN TOUCH.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Ready to secure your AI infrastructure? Our team is standing by.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border p-8 rounded-xl">
                <h3 className="text-2xl font-mono font-bold mb-6">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Headquarters</div>
                      <div className="text-muted-foreground">
                        100 Cyberpunk Avenue
                        <br />
                        San Francisco, CA 94103
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <div className="text-muted-foreground">
                        contact@get-nexus.app
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Phone</div>
                      <div className="text-muted-foreground">
                        +1 (555) 012-3456
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <h3 className="text-2xl font-mono font-bold mb-6">
                Send a Message
              </h3>
              <p className="text-muted-foreground mb-6">
                Have questions about Nexus? Want to learn more about how we can
                help your team adopt AI? Fill out the form and we'll get back to
                you promptly.
              </p>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Modal - Uses the reusable SubscriberModal component */}
      <SubscriberModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Contact Us"
        description="Have questions about Nexus? Fill out the form below and we'll get back to you as soon as possible."
        submitButtonText="Send Message"
        successTitle="Thank you for reaching out!"
        successDescription="We'll get back to you as soon as possible."
        showMessage={true}
        messageLabel="How can we help you? *"
        messagePlaceholder="Tell us about your AI governance needs..."
        messageRequired={true}
      />
    </Layout>
  );
}
