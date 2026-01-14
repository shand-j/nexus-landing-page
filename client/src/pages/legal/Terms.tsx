import Layout from "@/components/Layout";
import { Streamdown } from "streamdown";

export default function Terms() {
  const content = `
# Terms of Service

**Last Updated: January 14, 2026**

## 1. Acceptance of Terms
By accessing and using the Nexus platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.

## 2. Description of Service
Nexus provides an enterprise AI governance platform that includes logging, routing, validation, and analytics features. You are responsible for obtaining access to the Service and that access may involve third party fees (such as Internet service provider or airtime charges).

## 3. User Conduct
You agree to not use the Service to:
- Upload, post, email or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.
- Harm minors in any way.
- Impersonate any person or entity.
- Forge headers or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the Service.

## 4. Intellectual Property
All content included on the Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Nexus or its content suppliers and protected by international copyright laws.

## 5. Termination
You agree that Nexus may, under certain circumstances and without prior notice, immediately terminate your Nexus account and access to the Service. Cause for such termination shall include, but not be limited to, (a) breaches or violations of the TOS or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by you (self-initiated account deletions).
  `;

  return (
    <Layout>
      <div className="container py-20 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <Streamdown>{content}</Streamdown>
        </div>
      </div>
    </Layout>
  );
}
