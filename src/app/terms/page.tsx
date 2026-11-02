import type { Metadata } from "next";
import Link from "next/link";
import AgencyNav from "@/components/agency/AgencyNav";
import AgencyFooter from "@/components/agency/AgencyFooter";
import AgencyChat from "@/components/agency/AgencyChat";

export const metadata: Metadata = {
  title: "Terms of Service | Excelsus Agency",
  description:
    "Terms of Service for Excelsus Agency. Clear terms, fixed public pricing, system commitments, and client rights for AI Voice Receptionist, Ads Management, and Web systems.",
};

export default function TermsPage() {
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
            <span className="eyebrow">Agreements & Commitments</span>
            <h1 className="h2">
              Terms of <em>Service</em>
            </h1>
            <p className="legal-date">Last updated: {updatedDate}</p>
          </div>

          <div className="legal-body">
            <div className="legal-card">
              <h2>
                1. Agreement to <em>Terms</em>
              </h2>
              <p>
                By scheduling a consultation, purchasing a setup package, or
                engaging Excelsus Agency (&ldquo;Excelsus&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, operated by Miguel Esteves),
                you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) agree to be bound
                by these Terms of Service. If you are entering into this
                agreement on behalf of a company or entity, you warrant that you
                have the authority to bind that entity.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                2. Systems, Pricing &amp; <em>Specific Commitments</em>
              </h2>
              <p>
                Excelsus sells four specialized growth systems. All pricing is
                fixed, public, and transparent:
              </p>
              <ul>
                <li>
                  <strong>AI Voice Receptionist:</strong> $497 one-time setup
                  fee, then $397/month recurring management. Includes 24/7 AI
                  phone answering, appointment booking, caller detail capture,
                  and post-call owner summaries. Cancelable anytime with 30
                  days&apos; written notice before the next billing cycle.
                </li>
                <li>
                  <strong>Ads Management:</strong> $500 one-time setup fee, then
                  $1,250/month management fee. Google and Meta campaigns built,
                  targeted, and optimized weekly with monthly reporting. 90-day
                  minimum initial commitment (advertising requires a proper
                  testing window to optimize). Client pays ad spend directly to
                  Google/Meta (we recommend $1,500+/month). Excelsus never holds
                  or marks up your ad spend.
                </li>
                <li>
                  <strong>Website + AI Booking System:</strong> $997 one-time
                  setup fee, then $497/month recurring maintenance and support.
                  Includes a high-speed custom website, 24/7 AI chat widget,
                  instant lead alerts, follow-up emails, and review requests.
                  6-month minimum initial commitment, then month-to-month.
                </li>
                <li>
                  <strong>Reactivation Campaign:</strong> From $750 one-time fee
                  (exact quote provided on our 15-minute call depending on list
                  size). Includes 2–3 bespoke email sequences to re-engage past
                  customers, reply tracking, and campaign outcome reports.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                3. Straight Talk on <em>Advertising Results</em>
              </h2>
              <div className="legal-highlight">
                <strong>Honest Line:</strong> Ads bring qualified traffic and
                inquiries to your business. Conversion outcomes, sales volume,
                and closing rates ultimately depend on your offer, pricing, local
                market competition, and your team&apos;s sales follow-up. No
                honest agency guarantees sales or revenue, and Excelsus makes no
                such claims.
              </div>
              <p>
                We guarantee high-caliber engineering, meticulous targeting,
                weekly budget optimization toward what works, and complete
                transparency in monthly cost-per-lead reports.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                4. Onboarding, Payment &amp; <em>Build Process</em>
              </h2>
              <p>Every system follows our disciplined 5-step process:</p>
              <ul>
                <li>
                  <strong>Step 1 (Demo Call):</strong> 15-minute diagnostic call
                  to pinpoint your biggest customer leak.
                </li>
                <li>
                  <strong>Step 2 (Say Yes):</strong> The setup fee is paid
                  online via Stripe. Work begins only after the setup fee is
                  confirmed.
                </li>
                <li>
                  <strong>Step 3 (Intake):</strong> You complete a 15-minute
                  form and approve a single-page facts document. That facts
                  document represents the exclusive knowledge your AI is
                  permitted to speak.
                </li>
                <li>
                  <strong>Step 4 (Build &amp; Live Test):</strong> We build your
                  system and test it live with you watching (a live call, live
                  form submission, or campaign preview) prior to launch.
                </li>
                <li>
                  <strong>Step 5 (Report &amp; Grow):</strong> Systems run 24/7
                  under our monitoring, with your first plain-numbers report
                  landing within 30 days of launch.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                5. On-Time Launch <em>Promise</em>
              </h2>
              <p>
                Most systems are live within 7 business days following your
                completed intake and facts approval (advertising campaigns
                launch within 14 business days). If launch is delayed due to
                delays on our end, Excelsus will continue engineering and
                testing at zero additional charge until your system is fully
                operational.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                6. Asset &amp; <em>Account Ownership</em>
              </h2>
              <p>
                Your accounts and your audience are 100% yours:
              </p>
              <ul>
                <li>
                  <strong>Ad Accounts:</strong> Ad campaigns are created inside
                  your own Google and Meta accounts. You retain ownership and
                  access forever.
                </li>
                <li>
                  <strong>Customer Lists:</strong> For reactivation campaigns,
                  your customer database is your confidential property. We will
                  never share, broker, or reuse your list for any purpose
                  whatsoever.
                </li>
                <li>
                  <strong>Client Warranties:</strong> You warrant that any
                  customer list provided was legally collected with appropriate
                  consent under applicable anti-spam and privacy regulations
                  (including CAN-SPAM and TCPA).
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                7. Billing, Renewals &amp; <em>Cancellation</em>
              </h2>
              <p>
                Monthly retainers are billed automatically every 30 days via
                Stripe.
              </p>
              <ul>
                <li>
                  <strong>Voice Receptionist:</strong> Cancel anytime with 30
                  days&apos; written notice before your next invoice date.
                </li>
                <li>
                  <strong>Ads Management:</strong> 90-day initial period.
                  Cancelable anytime thereafter with 30 days&apos; written
                  notice.
                </li>
                <li>
                  <strong>Website + AI Booking:</strong> 6-month initial period.
                  Month-to-month thereafter with 30 days&apos; written notice.
                </li>
                <li>
                  Setup fees are non-refundable once custom engineering and
                  onboarding have commenced.
                </li>
              </ul>
            </div>

            <div className="legal-card">
              <h2>
                8. Limitation of <em>Liability</em>
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Excelsus
                Agency and Miguel Esteves shall not be liable for any indirect,
                incidental, consequential, or punitive damages, including loss
                of revenue, business interruption, or telecommunications outage
                caused by third-party carrier failures. In no event shall our
                total aggregate liability exceed the total fees paid by you to
                Excelsus in the thirty (30) days preceding the claim.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                9. Governing Law &amp; <em>Jurisdiction</em>
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Florida, United States, without
                regard to its conflict of law principles.
              </p>
            </div>

            <div className="legal-card">
              <h2>
                10. Contact <em>Information</em>
              </h2>
              <p>
                Questions regarding these terms may be sent directly to:
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
                <strong>Excelsus Agency · Miguel Esteves</strong>
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
