import Link from "next/link";

interface AgencyFooterProps {
  isSubPage?: boolean;
}

export default function AgencyFooter({ isSubPage = false }: AgencyFooterProps) {
  const homePrefix = isSubPage ? "/" : "";

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark">E</span>
              EXCELSUS AGENCY
            </Link>
            <p className="foot-tag">
              Growth systems for businesses that live on leads
            </p>
          </div>
          <div className="foot-links">
            <Link href={`${homePrefix}#systems`}>Systems</Link>
            <Link href={`${homePrefix}#proof`}>Proof</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/refunds">Refund Policy</Link>
            <a href="mailto:alejandriosity@gmail.com">alejandriosity@gmail.com</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Excelsus Agency · Miguel Esteves</span>
          <span style={{ fontStyle: "italic" }}>Excelsus — semper supra</span>
        </div>
      </div>
    </footer>
  );
}
