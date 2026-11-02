import Link from "next/link";

interface AgencyNavProps {
  isSubPage?: boolean;
}

export default function AgencyNav({ isSubPage = false }: AgencyNavProps) {
  const homePrefix = isSubPage ? "/" : "";

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <Link className="brand" href="/">
          <span className="brand-mark">E</span>
          EXCELSUS
        </Link>
        <div className="nav-links">
          <Link href={`${homePrefix}#systems`}>Systems</Link>
          <Link href={`${homePrefix}#process`}>Process</Link>
          <Link href={`${homePrefix}#proof`}>Proof</Link>
          <Link href={`${homePrefix}#faq`}>FAQ</Link>
          <Link href={`${homePrefix}#book-call`} className="btn btn-primary">
            Book a call
          </Link>
        </div>
      </div>
    </nav>
  );
}
