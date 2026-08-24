import Link from "next/link";

type NavKey = "about" | "service" | "contact" | null;

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "about", label: "会社概要", href: "/about" },
  { key: "service", label: "サービス", href: "/#service" },
  { key: "contact", label: "連絡先", href: "/#contact" },
];

export default function Header({ active = null }: { active?: NavKey }) {
  return (
    <header>
      <Link href="/" className="logo">
        WILL<span>OA</span>
      </Link>
      <nav className="section-nav">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            data-target={item.key ?? undefined}
            className={item.key === active ? "active" : undefined}
          >
            <span className="leaf" />
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="cta-btn" href="/#contact">
        ちょっと聞いてみる
      </Link>
    </header>
  );
}
