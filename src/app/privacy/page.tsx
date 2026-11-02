import type { Metadata } from "next";
import Link from "next/link";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyChat from "@/components/agency/AgencyChat";

export const metadata: Metadata = {
  title: "Privacy Policy | Excelsus Agency",
  description:
    "Privacy Policy for Excelsus Agency. Learn how we handle client data, customer lists, voice AI records, and payment information with complete security and transparency.",
};

export default function PrivacyPage() {
  const updatedDate = "November 2026";

  return (
    <>
      <AgencyNav isSubPage />

      <main className="legal-page">
        <div className="wrap">
          <div className="legal-header">
            <Link href="/" className="legal-back">
              ← Back to Excelsus Agency
            </Link>
            <span className="eyebrow">Legal & Transparency</span>
            <h1 className="h2">
              Privacy <em>Policy</em>
            </h1>
            <p className="legal-date">Last updated: {updatedDate}</p>
          </div>

          <div className="legal-body">
            <div className="legal-card">
              <h2>
                1. Overview &amp; <em>Who We Are</em>
              </h2>
              <p>
                Excelsus Agency (&ldquo;Excelsus&rdquo;, &ldquo;we&rdquo;,
                &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is run by AI engineer
                Miguel Esteves. We build, manage, and report on high-leverage AI
                growth systems for businesses worldwide: AI Voice Receptionists,
                Google &amp; Meta Ads Management, High-Converting Websites with
                AI Booking, and Customer Reactivation Campaigns.
              </p>
              <p>
                We believe in straightforward terms, honest engineering, and
                uncompromising client data protection. This Privacy Policy
                explains clearly what information we collect, why we collect it,
                and how your data and your customers&apos; data are guarded.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                2. Client Customer Lists: <em>100% Owned by You</em>
              </h2>
              <div className="legal-highlight">
                <strong>Our Absolute List Guarantee:</strong> For Reactivation
                Campaigns and lead capture systems, your customer list remains
                100% yours. We will never sell, rent, lease, share, broker, or
                reuse your customer contacts. Your list is used exclusively to
                execute the specific campaign you approve in writing.
              </div>
              <p>
                When you share a past customer list for a reactivation campaign,
                we treat that information as confidential. You must confirm in
                writing that you own the list and have the lawful right to
                contact those individuals. Once the campaign is completed, your
                data remains sequestered to your account and is never aggregated
                or shared with other clients or external marketing brokers.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                3. Information <em>We Collect</em>
              </h2>
              <p>We collect information in the following contexts:</p>
              <ul>
                <li>
                  <strong>Consultation &amp; Onboarding:</strong> Your name,
                  business name, email address, phone number, website, and
                  service details provided when you schedule a 15-minute call
                  via our Cal.com booking tool or complete our 15-minute intake
                  form.
                </li>
                <li>
                  <strong>Interactive AI Assistant:</strong> Questions, answers,
                  and inquiries you submit while interacting with the Excelsus
                  AI Assistant chat widget on this site.
                </li>
                <li>
                  <strong>Approved Facts Sheet:</strong> The one-page facts
                  document you approve (your services, pricing, business hours,
                  and policies) that defines what your AI systems are authorized
                  to state.
                </li>
                <li>
                  <strong>Billing &amp; Payment Data:</strong> Setup fees and
                  monthly retainers are processed securely through Stripe.
                  Excelsus never sees, captures, or stores your full credit card
                  number or CVV code.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                4. AI Voice Receptionist &amp; <em>Call Recordings</em>
              </h2>
              <p>
                For clients utilizing our AI Voice Receptionist system:
              </p>
              <ul>
                <li>
                  <strong>Fact-Based Operation:</strong> Your voice AI answers
                  strictly from the one-page facts document you approve. It is
                  never granted autonomy to invent prices, terms, or policies.
                </li>
                <li>
                  <strong>Caller Data:</strong> The system captures caller
                  name, phone number, and service need to schedule appointments
                  and immediately transmit lead summaries to you.
                </li>
                <li>
                  <strong>No Model Training:</strong> Call audio, transcripts,
                  and caller inputs processed for your business are never used
                  to train public AI models.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                5. Ad Accounts &amp; <em>Marketing Assets</em>
              </h2>
              <p>
                For our Google &amp; Meta Ads Management service, all ad
                accounts, pixel data, and campaign assets remain 100% owned by
                you. You grant Excelsus manager or partner-level access to build
                and optimize campaigns. Your ad spend is billed directly by
                Google or Meta to your corporate payment card — Excelsus never
                holds or marks up your ad spend.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                6. Third-Party <em>Integrations</em>
              </h2>
              <p>
                We only partner with established, industry-standard service
                providers to deliver our platform and systems:
              </p>
              <ul>
                <li>
                  <strong>Stripe:</strong> Secure, PCI-DSS Level 1 compliant
                  payment processing.
                </li>
                <li>
                  <strong>Cal.com:</strong> Embedded calendar scheduling for
                  demo calls and consultations.
                </li>
                <li>
                  <strong>Google &amp; Meta:</strong> Advertising platforms
                  where client campaigns are deployed and monitored.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                7. Data Security &amp; <em>Engineering Standards</em>
              </h2>
              <p>
                Security is built into our systems by design, not added as an
                afterthought. We adhere to OWASP security principles, SSL/TLS
                encryption in transit, secure tokenization, and strict access
                controls. Access to your systems is invite-only, and we will
                never ask you to email us raw passwords.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                8. Your <em>Rights &amp; Controls</em>
              </h2>
              <p>
                Regardless of your location, we respect your rights to your
                personal data. You have the right to:
              </p>
              <ul>
                <li>Request a copy of the personal data we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>
                  Request permanent deletion of your intake records and customer
                  lists from our operational stores upon conclusion of our
                  services.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                9. Contact <em>Us</em>
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how your
                data is handled, contact Miguel Esteves directly:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alejandriosity@gmail.com"
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  alejandriosity@gmail.com
                </a>
                <br />
                <strong>Business:</strong> Excelsus Agency · Miguel Esteves
                <br />
                <strong>Jurisdiction:</strong> Florida, United States
              </p>
            </div>
          </div>
        </div>
      </main>

      <AgencyFooter isSubPage />
      <AgencyChat />
    </>
  );
}
