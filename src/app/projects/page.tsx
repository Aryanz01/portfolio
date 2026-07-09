import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import ExpandTable, { type XRow } from "@/components/ExpandTable";
import Mockup from "@/components/Mockup";
import { GiantWord, Reveal } from "@/components/motion-bits";

export const metadata: Metadata = {
  title: "projects.ts",
  description:
    "Selected builds — FlowForge, a distributed exchange engine, ShopXar, a blockchain voting dApp, TOPSIS on PyPI and TGNN fraud detection.",
};

export default function ProjectsPage() {
  const rows: XRow[] = PROJECTS.map((p) => ({
    id: p.id,
    cells: [p.name, p.what, p.stack, p.where],
    body: (
      <div className="xp-body">
        <div className="xp-main">
          <p className="xp-intro">{p.intro}</p>
          <ul className="scope">
            {p.scope.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <dl className="meta">
            {p.meta.map((m, i) => (
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
        </div>
        <aside className="xp-side">
          <Mockup kind={p.mock} title={`${p.id}.preview`} />
          <div className="xp-caption">
            <span>— {p.caption} </span>
          </div>
        </aside>
      </div>
    ),
  }));

  return (
    <section className="sec">
      <GiantWord vw={22}>Projects</GiantWord>
      <Reveal className="over-giant">
        <ExpandTable
          label="SELECTED PROJECTS — click a row"
          head={["PROJECT", "WHAT", "STACK", "WHERE"]}
          cols="1.4fr 1.7fr 1.3fr 1fr"
          rows={rows}
        />
      </Reveal>
    </section>
  );
}
