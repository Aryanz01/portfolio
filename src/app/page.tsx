import Link from "next/link";
import { Reveal } from "@/components/motion-bits";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="headline">
          <span className="sr-only">Aryan Vashishth — </span>
          Full-stack engineer
          <br />
          &amp; agentic AI builder
          <span className="caret" aria-hidden="true" />
        </h1>
        <div className="giant-name" aria-hidden="true">
          <span>Aryan</span>
          <span>Vashishth</span>
        </div>
      </section>

      <section className="statement-wrap">
        <Reveal>
          <p className="statement">
            The portfolio of Aryan Vashishth — a full-stack engineer building
            realtime backends &amp; agentic AI for production products, based
            in Bangalore&nbsp;(IN).
          </p>
          <nav className="jump" aria-label="Quick links">
            <Link href="/experience/">→ open experience.ts</Link>
            <Link href="/projects/">→ open projects.ts</Link>
          </nav>
        </Reveal>
      </section>

      <Reveal>
        <section className="facts" data-ascii-exclude>
          <div className="fact-label">/ QUICK CONTEXT</div>
          <div className="xt-rule eq" aria-hidden="true" />
          <dl>
            <div className="frow">
              <dt>/ CURRENTLY</dt>
              <dd>
                Software Engineer (Contract) @ Basethesis Labs — building
                Synth, an AI CFO on TallyPrime
              </dd>
            </div>
            <div className="xt-rule" aria-hidden="true" />
            <div className="frow">
              <dt>/ PREVIOUSLY</dt>
              <dd>
                Full-Stack Engineer Intern @ Stimuler — realtime voice + LLM
                infrastructure for ~3K users
              </dd>
            </div>
            <div className="xt-rule" aria-hidden="true" />
            <div className="frow">
              <dt>/ EDUCATION</dt>
              <dd>BE Computer Engineering, Thapar Institute · 2022 — 2026</dd>
            </div>
            <div className="xt-rule" aria-hidden="true" />
            <div className="frow">
              <dt>/ HEADLINE</dt>
              <dd>
                94% p50 latency cut on Conversation V3 · voice calling on
                Gemini Live · multi-LLM orchestration across 4+ providers
              </dd>
            </div>
          </dl>
        </section>
      </Reveal>
    </>
  );
}
