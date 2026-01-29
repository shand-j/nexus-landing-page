import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useCallback } from "react";
import { toast } from "sonner";

// Declare MailerLite's global function type
declare global {
  interface Window {
    ml?: (action: string, ...args: unknown[]) => void;
  }
}

interface RegisterInterestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: ""
};

/**
 * Submit to MailerLite using their Universal JavaScript API (for static site deployment).
 * Note: The MailerLite Universal API is fire-and-forget and doesn't provide direct confirmation
 * of successful subscription. This function returns true if the API was available and called,
 * but the actual subscription is processed asynchronously by MailerLite.
 */
function submitToMailerLite(formData: FormData): boolean {
  // Validate required fields (matching backend validation at server/index.ts:42-44)
  if (!formData.email || !formData.firstName || !formData.lastName || !formData.company) {
    return false;
  }

  if (typeof window.ml === "function") {
    window.ml("subscribe", {
      email: formData.email,
      fields: {
        name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        ...(formData.message && { notes: formData.message }),
      },
    });
    return true;
  }
  return false;
}

export default function RegisterInterestModal({ open, onOpenChange }: RegisterInterestModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to handle successful submission
  const handleSuccessfulSubmission = useCallback(() => {
    toast.success("Thank you for your interest!", {
      description: "We'll be in touch soon with updates about Nexus.",
    });
    onOpenChange(false);
    setFormData(initialFormData);
  }, [onOpenChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try the backend API first (works when server is running)
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Backend API worked
        handleSuccessfulSubmission();
        return;
      }

      // If the backend API returned an error, try MailerLite as fallback.
      // Common cases: 405 (Method Not Allowed) on static sites, 404, or server errors.
      // This approach is more robust than checking specific status codes.
      if (submitToMailerLite(formData)) {
        handleSuccessfulSubmission();
        return;
      }

      // MailerLite not available either - parse the error response for details
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Unable to submit registration. Please try again later.");
    } catch (error) {
      // Network error or other fetch failure - try MailerLite as fallback
      // TypeError is thrown for network failures (e.g., "Failed to fetch")
      let displayError: unknown = error;
      if (error instanceof TypeError) {
        if (submitToMailerLite(formData)) {
          handleSuccessfulSubmission();
          return;
        }
        // MailerLite not available after a network error - use a clear error message
        displayError = new Error("Unable to submit registration. Please try again later.");
      }

      console.error("Registration error:", displayError);
      toast.error("Something went wrong", {
        description: displayError instanceof Error ? displayError.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono">Join the Alpha Program</DialogTitle>
          <DialogDescription>
            Apply to be one of 1-3 companies testing Nexus. Get free access, priority support, and help shape the product roadmap. Book a discovery call to discuss your AI challenges.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name *
              </label>
              <Input
                id="firstName"
                placeholder="Jane"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Work Email *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company *
            </label>
            <Input
              id="company"
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your AI adoption challenges *
            </label>
            <Textarea
              id="message"
              placeholder="What are your biggest challenges moving from AI experimentation to production?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Apply for Alpha"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
