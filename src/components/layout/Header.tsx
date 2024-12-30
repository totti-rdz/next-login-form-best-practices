import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 shadow-md mb-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold"
          title="ACME - Zur Startseite"
        >
          <span aria-hidden="true">ACME</span>
        </Link>
      </div>
    </header>
  );
}
