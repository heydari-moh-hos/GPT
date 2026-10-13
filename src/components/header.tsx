"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpLeft, AudioLines } from "lucide-react";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="بلوتل، صفحه اصلی">
      <span className="brand-symbol">
        <AudioLines size={25} />
      </span>
      <span>
        Bulut<span className="brand-tel">Tel</span>
        <small>بلوتل؛ ارتباط بدون مرز</small>
      </span>
    </Link>
  );
}
const links = [
  { href: "/cloud-telephony/", label: "تلفن ابری چیست؟" },
  { href: "/features/", label: "امکانات" },
  { href: "/solutions/", label: "راهکارها" },
  { href: "/pricing/", label: "تعرفه‌ها" },
  { href: "/blog/", label: "مجله بلوتل" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("mobile-menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav
          id="main-navigation"
          aria-label="منوی اصلی"
          className={open ? "navigation open" : "navigation"}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="button small header-cta" href="/contact/">
          مسیر مشاوره <ArrowUpLeft size={16} />
        </Link>
        <button
          id="mobile-menu-toggle"
          className="menu-toggle"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
