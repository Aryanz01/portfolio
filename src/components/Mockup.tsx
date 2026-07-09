import type { MockKind } from "@/lib/data";

/** Hand-built monochrome UI vignettes shown inside project expansions. */
export default function Mockup({ kind, title }: { kind: MockKind; title: string }) {
  return (
    <figure className="window">
      <div className="win-bar">
        <i /> <i /> <i />
        <span>{title}</span>
      </div>
      <div className={`win-body mock-${kind}`}>{SCENES[kind]}</div>
    </figure>
  );
}

const SCENES: Record<MockKind, React.ReactNode> = {
  chat: (
    <>
      <div className="badges">
        <span className="pill accent">p50 1.42s</span>
        <span className="pill">▼ 94%</span>
        <span className="pill dim">ws · streaming</span>
      </div>
      <div className="bubble ai">How did the standup go — did you use the phrases we practised?</div>
      <div className="bubble user">It went great. I led with the summary first!</div>
      <div className="bubble ai">
        Nice. Let&apos;s tighten your opener next<span className="mini-caret" />
      </div>
      <div className="mock-foot">ws › frame 24ms · tokens 41/s · gate: qwen3 ok</div>
    </>
  ),

  voice: (
    <>
      <div className="badges">
        <span className="pill live">● LIVE</span>
        <span className="pill">02:41</span>
        <span className="pill dim">past the 2-min cliff</span>
      </div>
      <div className="wave" aria-hidden="true">
        {[38, 62, 24, 78, 52, 90, 34, 68, 46, 84, 28, 58, 72, 40, 62, 30].map((h, i) => (
          <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>
      <div className="mock-foot">RMS gate OPEN · barge-in 500ms stitch · 24kHz PCM</div>
    </>
  ),

  ledger: (
    <>
      <div className="ledger-head">TallyPrime › statement engine</div>
      <div className="ledger-rows">
        <div><span>Revenue</span><span className="fill" /><span>42,00,000 Cr</span></div>
        <div><span>COGS</span><span className="fill" /><span>18,40,000 Dr</span></div>
        <div><span>GST payable</span><span className="fill" /><span>2,10,000 Cr</span></div>
        <div><span>Net profit</span><span className="fill" /><span>9,72,000 Cr</span></div>
      </div>
      <div className="leds">
        <span><i className="led warn" />circuit HALF-OPEN</span>
        <span><i className="led ok" />mutex single-flight</span>
        <span><i className="led ok" />dedup fail-closed</span>
      </div>
      <div className="mock-foot">&lt;ENVELOPE&gt;&lt;TALLYREQUEST&gt;Import&lt;/TALLYREQUEST&gt;…</div>
    </>
  ),

  orderbook: (
    <>
      <div className="ob">
        <div className="ob-col">
          <div className="ob-h">BIDS</div>
          {[["101.0", 82], ["100.8", 64], ["100.6", 46], ["100.4", 30], ["100.2", 18]].map(([p, d]) => (
            <div className="ob-row bid" key={p as string} style={{ ["--d" as string]: `${d}%` }}>
              <span>{p}</span><span>{d}</span>
            </div>
          ))}
        </div>
        <div className="ob-col">
          <div className="ob-h">ASKS</div>
          {[["101.4", 76], ["101.6", 58], ["101.8", 42], ["102.0", 26], ["102.2", 14]].map(([p, d]) => (
            <div className="ob-row ask" key={p as string} style={{ ["--d" as string]: `${d}%` }}>
              <span>{p}</span><span>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mock-foot">TRD-10241 · 0.5 @ 101.2 · open → matched → filled</div>
    </>
  ),

  shop: (
    <>
      <div className="shop">
        <svg viewBox="0 0 120 110" className="cube" aria-hidden="true">
          <polygon points="60,8 108,32 60,56 12,32" />
          <polygon points="12,32 60,56 60,104 12,80" />
          <polygon points="108,32 60,56 60,104 108,80" />
        </svg>
        <div className="shop-info">
          <div className="shop-name">runner-af1.glb</div>
          <div className="shop-price">₹ 8,995</div>
          <span className="pill accent">◉ View in AR</span>
        </div>
      </div>
      <div className="mock-foot">model 2.1MB · CDN hit · load ▼40%</div>
    </>
  ),

  flow: (
    <>
      <div className="flow" aria-hidden="true">
        <div className="fnode done">
          <span className="fdot" />
          Input
          <span className="ftime">12ms</span>
        </div>
        <span className="flink">──</span>
        <div className="fnode done">
          <span className="fdot" />
          LLM
          <span className="ftime">1.2s</span>
        </div>
        <span className="flink">──</span>
        <div className="fnode run">
          <span className="fdot" />
          Condition
        </div>
        <span className="flink">──</span>
        <div className="fnode queued">
          <span className="fdot" />
          Output
        </div>
      </div>
      <div className="flow-skip">└ untaken branch → 2 nodes skipped</div>
      <div className="mock-foot">Kahn&apos;s topological order · SSE per-node status · 9 node types</div>
    </>
  ),

  chain: (
    <>
      <div className="chain" aria-hidden="true">
        <div className="block">
          <div className="strong">#18122</div>
          <div>0x4f…a9 ✓</div>
        </div>
        <span className="link">——</span>
        <div className="block">
          <div className="strong">#18123</div>
          <div>0x91…c4 ✓</div>
        </div>
        <span className="link">——</span>
        <div className="block cast">
          <div className="strong">#18124</div>
          <div>vote cast</div>
        </div>
      </div>
      <div className="tally">
        <div className="ob-row bid" style={{ ["--d" as string]: "58%" }}>
          <span>Candidate A</span>
          <span>58%</span>
        </div>
        <div className="ob-row bid" style={{ ["--d" as string]: "42%" }}>
          <span>Candidate B</span>
          <span>42%</span>
        </div>
      </div>
      <div className="mock-foot">Sepolia · MetaMask signed · finality &lt;15s · tamper-resistant</div>
    </>
  ),

  term: (
    <>
      <div className="term">
        <div>
          <span className="t-prompt">$ </span>pip install 102203551-topsis
        </div>
        <div className="dim">Successfully installed 102203551-topsis</div>
        <div>
          <span className="t-prompt">$ </span>topsis data.csv &quot;1,1,1,2&quot; &quot;+,+,-,+&quot; out.csv
        </div>
        <div className="dim">✓ validated · 4 criteria · 8 alternatives</div>
        <div className="dim">✓ out.csv written — best alternative: A3 (0.82)</div>
      </div>
      <div className="mock-foot">python · numpy · pandas · compute ▼20% · offline</div>
    </>
  ),

  graph: (
    <>
      <svg viewBox="0 0 300 130" className="net" aria-hidden="true">
        <line x1="30" y1="90" x2="90" y2="40" /><line x1="90" y1="40" x2="150" y2="80" />
        <line x1="150" y1="80" x2="210" y2="30" /><line x1="210" y1="30" x2="265" y2="75" />
        <line x1="90" y1="40" x2="170" y2="20" /><line x1="150" y1="80" x2="230" y2="105" />
        <line x1="30" y1="90" x2="110" y2="110" /><line x1="110" y1="110" x2="150" y2="80" />
        <circle cx="30" cy="90" r="5" /><circle cx="90" cy="40" r="5" />
        <circle cx="170" cy="20" r="4" /><circle cx="110" cy="110" r="4" />
        <circle cx="230" cy="105" r="4" /><circle cx="265" cy="75" r="5" />
        <circle cx="150" cy="80" r="6" className="flag" />
        <circle cx="210" cy="30" r="6" className="flag" />
      </svg>
      <div className="mock-foot">● flagged wallets · recall +30% · 3M+ txns</div>
    </>
  ),
};
