import type { Metadata } from "next";
import Link from "next/link";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyChat from "@/components/agency/AgencyChat";

export const metadata: Metadata = {
  title: "Cookie Policy | Excelsus Agency",
  description:
    "Cookie Policy for Excelsus Agency. Information on how we use cookies, local storage, and third-party integrations to deliver a secure and smooth user experience.",
};

export default function CookiePolicyPage() {
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
            <span className="eyebrow">Cookies &amp; Local Storage</span>
            <h1 className="h2">
              Cookie <em>Policy</em>
            </h1>
            <p className="legal-date">Last updated: {updatedDate}</p>
          </div>

          <div className="legal-body">
            <div className="legal-card">
              <h2>
                1. What Are <em>Cookies</em>?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile
                device when you visit websites. They are widely used to make
                websites work efficiently, provide security against malicious
                requests, remember your preferences, and ensure seamless
                functionality across sessions.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                2. How Excelsus Agency <em>Uses Cookies</em>
              </h2>
              <p>
                Excelsus Agency uses cookies and browser local storage strictly
                for functional, technical, and operational needs. We do not sell
                your browsing profile or trade tracking data to data brokers.
              </p>
              <ul>
                <li>
                  <strong>Essential &amp; Security Cookies:</strong> Necessary
                  to load pages properly, prevent cross-site request forgery,
                  and maintain safe network communication.
                </li>
                <li>
                  <strong>Chat &amp; Interface State:</strong> Used by our AI
                  Assistant widget to maintain your active conversation history
                  during a visit so you do not lose context while navigating the
                  site.
                </li>
                <li>
                  <strong>Scheduling Embeds (Cal.com):</strong> When you
                  interact with our 15-minute consultation calendar, Cal.com
                  uses essential cookies to recognize your timezone, check live
                  slot availability, and confirm your appointment.
                </li>
                <li>
                  <strong>Payment Processing (Stripe):</strong> During checkout,
                  Stripe places specialized security tokens to prevent payment
                  fraud and process transactions safely in compliance with PCI
                  standards.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                3. Third-Party <em>Technologies</em>
              </h2>
              <p>
                Our third-party technical providers (such as Stripe for payments
                and Cal.com for calendar scheduling) may set their own cookies
                governed by their respective privacy and cookie policies. We
                vet these partners carefully to ensure they adhere to modern
                privacy and data protection standards.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                4. Managing &amp; <em>Disabling Cookies</em>
              </h2>
              <p>
                Most modern web browsers allow you to control and delete cookies
                through their settings. You can configure your browser to reject
                all non-essential cookies, alert you when a cookie is placed, or
                clear your history upon exit.
              </p>
              <p>
                Please note that disabling strictly necessary cookies may impact
                the functionality of the interactive calendar embed and the AI
                chat assistant.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                5. Questions &amp; <em>Contact</em>
              </h2>
              <p>
                If you have questions about our use of cookies or privacy
                practices, please reach out to Miguel Esteves:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alejandriosity@gmail.com"
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  alejandriosity@gmail.com
                </a>
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
