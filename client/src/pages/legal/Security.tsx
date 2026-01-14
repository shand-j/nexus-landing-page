import Layout from "@/components/Layout";
import { Streamdown } from "streamdown";
import { ShieldCheck, Lock, Server } from "lucide-react";

export default function Security() {
  const content = `
# Security at Nexus

**Last Updated: January 14, 2026**

Security is not an afterthought at Nexus; it is the foundation of our platform. We are committed to protecting your data with the highest standards of security and compliance.

## Compliance Certifications

### SOC 2 Type II
Nexus successfully completes a SOC 2 Type II audit annually. Our report covers the Trust Services Criteria for Security, Availability, and Confidentiality.

### GDPR
We are fully compliant with the General Data Protection Regulation (GDPR). We provide tools to help you manage data subject requests and ensure data residency compliance.

### ISO 27001
Nexus is ISO 27001 certified, demonstrating our commitment to a systematic approach to managing sensitive company information.

## Infrastructure Security

### Encryption
All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We use AWS Key Management Service (KMS) to manage encryption keys.

### Access Control
We employ the principle of least privilege for all internal access. Multi-factor authentication (MFA) is enforced for all employees.

### Penetration Testing
We conduct regular third-party penetration testing and maintain a bug bounty program to identify and resolve potential vulnerabilities.
  `;

  return (
    <Layout>
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border p-6 rounded-xl text-center">
                <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="font-bold">SOC 2 Type II</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl text-center">
                <Lock className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="font-bold">GDPR</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl text-center">
                <Server className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="font-bold">ISO 27001</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <Streamdown>{content}</Streamdown>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
