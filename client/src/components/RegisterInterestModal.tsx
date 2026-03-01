import SubscriberModal, { SubscriberModalProps } from "./SubscriberModal";

interface RegisterInterestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /**
   * MailerLite popup form ID for static site fallback.
   * If provided, when the backend API is unavailable (e.g., on GitHub Pages),
   * the modal will trigger a native MailerLite popup form instead.
   */
  mailerLiteFormId?: string;
}

/**
 * RegisterInterestModal is a pre-configured SubscriberModal for the
 * "Request a Concierge Pilot" use case.
 *
 * This component is maintained for backward compatibility. For new use cases,
 * consider using the SubscriberModal component directly with custom props.
 *
 * @example
 * ```tsx
 * <RegisterInterestModal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   mailerLiteFormId="abc123" // Optional: for static site fallback
 * />
 * ```
 */
export default function RegisterInterestModal({
  open,
  onOpenChange,
  mailerLiteFormId,
}: RegisterInterestModalProps) {
  const modalProps: SubscriberModalProps = {
    open,
    onOpenChange,
    title: "Request a Concierge Pilot",
    description:
      "Join our 6–8 week guided onboarding program. Get hands-on support, full audit trail, and PII detection included. Limited slots available.",
    submitButtonText: "Request Pilot",
    successTitle: "Thank you for your interest!",
    successDescription: "We'll be in touch soon with updates about Nexus.",
    showMessage: true,
    messageLabel: "Tell us about your AI adoption challenges *",
    messagePlaceholder:
      "What are your biggest challenges moving from AI experimentation to production?",
    messageRequired: true,
    mailerLiteFormId,
  };

  return <SubscriberModal {...modalProps} />;
}
