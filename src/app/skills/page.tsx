import type { Metadata } from "next";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  SKILL_COLUMNS,
} from "@/lib/data";
import { GiantWord, Reveal } from "@/components/motion-bits";

export const metadata: Metadata = {
  title: "skills.ts",
  description:
    "Languages, backend, AI/realtime, frontend and cloud tooling Aryan Vashishth ships with.",
};

export default function SkillsPage() {
  const rowCount = Math.max(...SKILL_COLUMNS.map((c) => c.items.length));
  const rows = Array.from({ length: rowCount }, (_, r) =>
    SKILL_COLUMNS.map((c) => c.items[r] ?? "")
  );

  return (
    <>
      <section className="sec">
        <GiantWord vw={26}>Skills</GiantWord>

        <Reveal className="over-giant">
          {/* row-major grid on wide screens: rules run edge-to-edge like the reference */}
          <div className="sk-table wide-only" data-ascii-exclude>
            <div className="xt-label">/ PROFESSIONAL SKILLS</div>
            <div className="xt-rule eq" aria-hidden="true" />
            <div className="trow sk-head">
              {SKILL_COLUMNS.map((c) => (
                <span className="cell" key={c.title}>
                  {c.title}
                </span>
              ))}
            </div>
            <div className="xt-rule eq" aria-hidden="true" />
            {rows.map((cells, i) => (
              <div key={i}>
                <div className="trow">
                  {cells.map((c, j) => (
                    <span className="cell" key={j}>
                      {c}
                    </span>
                  ))}
                </div>
                <div className="xt-rule" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* stacked, column-major fallback for small screens */}
          <div className="sk-stack narrow-only" data-ascii-exclude>
            <div className="xt-label">/ PROFESSIONAL SKILLS</div>
            <div className="xt-rule eq" aria-hidden="true" />
            {SKILL_COLUMNS.map((col) => (
              <div className="sk-group" key={col.title}>
                <h3 className="cell strong">{col.title}</h3>
                <div className="xt-rule eq" aria-hidden="true" />
                {col.items.map((item) => (
                  <div key={item}>
                    <span className="cell">{item}</span>
                    <div className="xt-rule" aria-hidden="true" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mono-cols" data-ascii-exclude>
          <div>
            <div className="xt-label">/ EDUCATION</div>
            <div className="xt-rule eq" aria-hidden="true" />
            <p className="mono-p strong">{EDUCATION.degree}</p>
            <p className="mono-p">{EDUCATION.school}</p>
            <p className="mono-p dim">
              {EDUCATION.period} · {EDUCATION.detail}
            </p>
          </div>
          <div>
            <div className="xt-label">/ CERTIFICATIONS</div>
            <div className="xt-rule eq" aria-hidden="true" />
            {CERTIFICATIONS.map((c) => (
              <p className="mono-p" key={c}>
                {c}
              </p>
            ))}
            <div className="xt-label pad-top">/ ALSO</div>
            <div className="xt-rule eq" aria-hidden="true" />
            {ACHIEVEMENTS.map((a) => (
              <p className="mono-p dim" key={a}>
                {a}
              </p>
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
