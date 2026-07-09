import type { Metadata } from "next";
import Link from "next/link";
import { GiantWord } from "@/components/motion-bits";

export const metadata: Metadata = {
  title: "404 — module not found",
};

export default function NotFound() {
  return (
    <section className="sec">
      <GiantWord vw={30}>404</GiantWord>
      <div className="over-giant nf" data-ascii-exclude>
        <div className="xt-label">/ MODULE NOT FOUND</div>
        <div className="xt-rule eq" aria-hidden="true" />
        <p className="mono-p">
          Cannot find module <span className="strong">&apos;./this-page&apos;</span> — it
          isn&apos;t part of this project.
        </p>
        <p className="mono-p dim">
          Did you mean one of: home.ts · skills.ts · experience.ts ·
          projects.ts · contact.ts?
        </p>
        <div className="xt-rule" aria-hidden="true" />
        <p className="mono-p">
          <Link href="/">→ open home.ts</Link>
        </p>
      </div>
    </section>
  );
}
