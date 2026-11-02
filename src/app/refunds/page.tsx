import type { Metadata } from "next";
import Link from "next/link";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyChat from "@/components/agency/AgencyChat";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Excelsus Agency",
  description:
    "Refund and cancellation policy for Excelsus Agency. Clear terms regarding setup fees, monthly retainers, 30-day notice periods, and our on-time launch guarantee.",
};

export default function RefundsPage() {
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
            <span className="eyebrow">Fairness &amp; Accountability</span>
            <h1 className="h2">
              Refund &amp; <em>Cancellation</em> Policy
            </h1>
            <p className="legal-date">Last updated: {updatedDate}</p>
          </div>

          <div className="legal-body">
            <div className="legal-card">
              <h2>
                1. Our Approach to <em>Commitment</em>
              </h2>
              <p>
                At Excelsus Agency, our principle is clear:{" "}
                <em>
                  &ldquo;The setup fee for your system, paid online. No payment,
                  no start. That keeps both of us serious.&rdquo;
                </em>
              </p>
              <p>
                Every system we build involves custom architecture, bespoke
                prompt engineering, facts-sheet verification, and dedicated
                integration labor under the direction of Miguel Esteves. Because
                our engineering resources are reserved immediately upon payment,
                we maintain clear and transparent policies regarding refunds and
                cancellations.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                2. Setup Fees: <em>Policies &amp; Exceptions</em>
              </h2>
              <p>
                Setup fees cover custom engineering, system integration, voice
                model configuration, and account provisioning:
              </p>
              <ul>
                <li>
                  <strong>Once Engineering Starts:</strong> Setup fees are
                  non-refundable once the 15-minute intake form has been
                  submitted or engineering work has commenced.
                </li>
                <li>
                  <strong>Pre-Intake Cancellation Window:</strong> If you
                  purchase a system and request a cancellation in writing before
                  submitting the intake form and before any build work has
                  started, we will issue a full refund minus third-party payment
                  gateway processing fees.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                3. Monthly Retainers &amp; <em>Cancellation Terms</em>
              </h2>
              <p>
                Our cancellation terms vary by system based on the minimum
                operational cycle required to achieve results:
              </p>
              <ul>
                <li>
                  <strong>AI Voice Receptionist ($397/mo):</strong> Month-to-month
                  retainer. You may cancel at any time by providing 30
                  days&apos; advance written notice before your next invoice date.
                  Your system remains live and answers calls through the end of
                  your paid billing period.
                </li>
                <li>
                  <strong>Ads Management ($1,250/mo):</strong> 90-day minimum
                  agreement. Digital advertising requires a multi-week data
                  collection and algorithmic learning window to optimize
                  audiences and reduce cost-per-lead. Following the initial 90
                  days, services continue month-to-month and can be canceled
                  with 30 days&apos; written notice.
                </li>
                <li>
                  <strong>Website + AI Booking ($497/mo):</strong> 6-month
                  minimum agreement. Covers the custom build, hosting, continuous
                  speed maintenance, and conversion optimization. Following 6
                  months, services continue month-to-month and can be canceled
                  with 30 days&apos; written notice.
                </li>
                <li>
                  <strong>Reactivation Campaign (From $750 One-Time):</strong>{" "}
                  One-time bespoke campaign. Non-refundable once custom email
                  copy has been drafted and delivered for your review.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                4. On-Time Launch <em>Guarantee &amp; Remedy</em>
              </h2>
              <div className="legal-highlight">
                <strong>Our Accountability Promise:</strong> Most systems go
                live within 7 business days following your completed intake form
                and approved facts sheet (ad campaigns within 14 business days).
                If we are late due to reasons within our control, Excelsus
                continues all engineering, build, and integration work at zero
                additional charge until your system is live.
              </div>
              <p>
                Your first comprehensive monthly performance report will land
                within 30 days of your system going live.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                5. How to Submit a <em>Cancellation Notice</em>
              </h2>
              <p>
                To cancel an active recurring system, send an email to:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alejandriosity@gmail.com?subject=Cancellation%20Request%20%E2%80%94%20Excelsus%20Agency"
                  style={{ color: "var(--accent)", fontWeight: 600 }}
                >
                  alejandriosity@gmail.com
                </a>
              </p>
              <p>
                Please include your business name and the system you wish to
                cancel. Cancellations are acknowledged and processed within 2
                business days.
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
