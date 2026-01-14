import Layout from "@/components/Layout";
import { Streamdown } from "streamdown";

export default function Privacy() {
  const content = `
# Privacy Policy

**Last Updated: January 14, 2026**

## 1. Introduction
Nexus AI Inc. ("Nexus", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services.

## 2. Data We Collect
We collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
- **Identity Data:** First name, last name, username or similar identifier.
- **Contact Data:** Billing address, delivery address, email address and telephone numbers.
- **Technical Data:** Internet protocol (IP) address, your login data, browser type and version, time zone setting and location.
- **Usage Data:** Information about how you use our website, products and services.

## 3. How We Use Your Data
We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
- Where we need to perform the contract we are about to enter into or have entered into with you.
- Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
- Where we need to comply with a legal or regulatory obligation.

## 4. Data Security
We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.

## 5. Your Legal Rights
Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
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
