"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TABS = [
  { href: "/", file: "home.ts" },
  { href: "/experience/", file: "experience.ts" },
  { href: "/projects/", file: "projects.ts" },
  { href: "/skills/", file: "skills.ts" },
  { href: "/contact/", file: "contact.ts" },
];

function normalize(path: string) {
  return path.endsWith("/") ? path : path + "/";
}

export default function Chrome() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const tabsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    if (t === "light" || t === "dark") setTheme(t);
  }, []);

  // keep the active tab visible when the strip scrolls on small screens
  useEffect(() => {
    const strip = tabsRef.current;
    const active = strip?.querySelector<HTMLElement>(".tab.on");
    if (!strip || !active) return;
    const target =
      active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, target) });
  }, [pathname]);

  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("av-theme", next);
    } catch {}
  };

  const current = normalize(pathname);

  return (
    <header className="chrome">
      <nav className="tabs" aria-label="Sections" ref={tabsRef}>
        {TABS.map((t) => {
          const active =
            t.href === "/" ? current === "/" : current.startsWith(t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              className={"tab" + (active ? " on" : "")}
              aria-current={active ? "page" : undefined}
            >
              {t.file}
            </Link>
          );
        })}
      </nav>
      <div className="chrome-actions">
        <button
          type="button"
          className="icon-btn"
          onClick={flip}
          title="Toggle theme"
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          {theme === "dark" ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="4.4" />
              <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
