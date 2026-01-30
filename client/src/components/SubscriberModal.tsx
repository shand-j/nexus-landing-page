import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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

export interface SubscriberFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export interface SubscriberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Modal title */
  title?: string;
  /** Modal description */
  description?: string;
  /** Submit button text */
  submitButtonText?: string;
  /** Success toast title */
  successTitle?: string;
  /** Success toast description */
  successDescription?: string;
  /** Whether to show the message field */
  showMessage?: boolean;
  /** Message field label (if shown) */
  messageLabel?: string;
  /** Message field placeholder (if shown) */
  messagePlaceholder?: string;
  /** Whether message field is required */
  messageRequired?: boolean;
  /**
   * MailerLite popup form ID for static site fallback.
   * If provided, when the backend API is unavailable (e.g., on GitHub Pages),
   * the modal will trigger a native MailerLite popup form instead.
   * Get this ID from your MailerLite dashboard under Forms > Embedded forms.
   */
  mailerLiteFormId?: string;
}

const initialFormData: SubscriberFormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

/**
 * Submit subscriber data to the backend API which integrates with MailerLite.
 * Returns the response for success, or throws an error with details.
 */
async function submitToBackendApi(
  formData: SubscriberFormData
): Promise<Response> {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response;
}

/**
 * Check if the backend API error indicates the server is unavailable
 * (common for static site deployments like GitHub Pages)
 */
function isServerUnavailable(response: Response): boolean {
  // 405: Method Not Allowed (static sites don't support POST)
  // 404: Endpoint not found (static sites don't have /api/register)
  // 5xx: Server errors
  return (
    response.status === 405 ||
    response.status === 404 ||
    response.status >= 500
  );
}

/**
 * Trigger a MailerLite popup form as a fallback for static sites.
 * Returns true if the popup was triggered successfully.
 */
function showMailerLitePopup(formId: string): boolean {
  if (typeof window.ml === "function" && formId) {
    window.ml("show", formId);
    return true;
  }
  return false;
}

/**
 * A reusable subscriber data capture modal component with MailerLite API integration.
 *
 * This component handles subscriber registration in two scenarios:
 *
 * 1. **Server Deployment**: When the backend server is running, it submits data
 *    to the `/api/register` endpoint which integrates with the MailerLite REST API.
 *
 * 2. **Static Site Deployment** (e.g., GitHub Pages): When the backend is unavailable,
 *    it falls back to triggering a native MailerLite popup form using the Universal
 *    JavaScript API. This requires a valid `mailerLiteFormId` prop.
 *
 * Usage:
 * ```tsx
 * <SubscriberModal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Subscribe to our newsletter"
 *   description="Get the latest updates delivered to your inbox."
 *   submitButtonText="Subscribe"
 *   mailerLiteFormId="abc123" // Optional: for static site fallback
 * />
 * ```
 */
export default function SubscriberModal({
  open,
  onOpenChange,
  title = "Request a Concierge Pilot",
  description = "Join our 6–8 week guided onboarding program. Get hands-on support, full audit trail, and PII detection included. Limited slots available.",
  submitButtonText = "Request Pilot",
  successTitle = "Thank you for your interest!",
  successDescription = "We'll be in touch soon with updates about Nexus.",
  showMessage = true,
  messageLabel = "Tell us about your AI adoption challenges *",
  messagePlaceholder = "What are your biggest challenges moving from AI experimentation to production?",
  messageRequired = true,
  mailerLiteFormId,
}: SubscriberModalProps) {
  const [formData, setFormData] = useState<SubscriberFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to handle successful submission
  const handleSuccessfulSubmission = useCallback(() => {
    toast.success(successTitle, {
      description: successDescription,
    });
    onOpenChange(false);
    setFormData(initialFormData);
  }, [onOpenChange, successTitle, successDescription]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try the backend API first (works when server is running)
      const response = await submitToBackendApi(formData);

      if (response.ok) {
        // Backend API worked
        handleSuccessfulSubmission();
        return;
      }

      // Check if this is a server unavailability scenario (static site deployment)
      if (isServerUnavailable(response)) {
        // Try to use MailerLite popup form as fallback
        if (mailerLiteFormId && showMailerLitePopup(mailerLiteFormId)) {
          // Close our modal since MailerLite popup will handle the subscription
          onOpenChange(false);
          setFormData(initialFormData);
          return;
        }

        // No fallback available - show a helpful error
        throw new Error(
          "Registration is temporarily unavailable. Please try again later or contact us directly."
        );
      }

      // For client errors (4xx except 405/404), show the backend's error message
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to submit registration");
    } catch (error) {
      // Network error or other fetch failure
      let displayError: unknown = error;
      if (error instanceof TypeError) {
        // TypeError is thrown for network failures (e.g., "Failed to fetch")
        // Try MailerLite popup as fallback
        if (mailerLiteFormId && showMailerLitePopup(mailerLiteFormId)) {
          onOpenChange(false);
          setFormData(initialFormData);
          return;
        }
        displayError = new Error(
          "Unable to submit registration. Please try again later or contact us directly."
        );
      }

      console.error("Registration error:", displayError);
      toast.error("Something went wrong", {
        description:
          displayError instanceof Error
            ? displayError.message
            : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
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
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              required
            />
          </div>
          {showMessage && (
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {messageLabel}
              </label>
              <Textarea
                id="message"
                placeholder={messagePlaceholder}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                required={messageRequired}
              />
            </div>
          )}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : submitButtonText}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
