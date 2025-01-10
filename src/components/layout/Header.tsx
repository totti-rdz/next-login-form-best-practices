import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-3 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
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
