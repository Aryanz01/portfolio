import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCE } from "@/lib/data";
import ExpandTable, { type XRow } from "@/components/ExpandTable";
import Mockup from "@/components/Mockup";
import { GiantWord, Reveal } from "@/components/motion-bits";

export const metadata: Metadata = {
  title: "experience.ts",
  description:
    "Basethesis Labs, Stimuler and ELC — the roles where Aryan Vashishth shipped realtime and agentic systems.",
};

export default function ExperiencePage() {
  const rows: XRow[] = EXPERIENCE.map((e) => ({
    id: e.id,
    cells: [e.company, e.role, e.period, e.focus],
    body: (
      <div className="xp-body">
        <div className="xp-main">
          <p className="xp-intro">{e.intro}</p>
          <ul className="scope">
            {e.scope.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <aside className="xp-side">
          {e.mock && (
            <>
              <Mockup kind={e.mock} title={e.mockTitle ?? `${e.id}.preview`} />
              <div className="xp-caption">
                <span>— {e.caption} </span>
              </div>
            </>
          )}
          <dl className="meta">
            {e.meta.map((m, i) => (
              <div key={i}>
                <dt>{m.label}</dt>
                <dd>
                  {m.href ? (
                    m.href.startsWith("/") ? (
                      <Link href={m.href}>{m.value}</Link>
                    ) : (
                      <a href={m.href} target="_blank" rel="noreferrer">
                        {m.value}
                      </a>
                    )
                  ) : (
                    m.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    ),
  }));

  return (
    <section className="sec">
      <GiantWord vw={16.5}>Experience</GiantWord>
      <Reveal className="over-giant">
        <ExpandTable
          label="WHERE I'VE SHIPPED — click a row"
          head={["COMPANY", "ROLE", "PERIOD", "FOCUS"]}
          cols="1.2fr 1.5fr 1.1fr 1.6fr"
          rows={rows}
        />
      </Reveal>
    </section>
  );
}
