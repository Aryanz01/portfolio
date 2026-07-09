import type { Metadata } from "next";
import { LINKS } from "@/lib/data";
import { GiantWord, Reveal } from "@/components/motion-bits";

export const metadata: Metadata = {
  title: "contact.ts",
  description: "Get in touch with Aryan Vashishth — email, GitHub, LinkedIn.",
};

/* tiny helpers to keep the fake-source markup readable */
const T = ({ c }: { c: string }) => <span className="tk-t">{c}</span>;
const P = ({ c }: { c: string }) => <span className="tk-p">{c}</span>;
const A = ({ c }: { c: string }) => <span className="tk-a">{c}</span>;
const S = ({ c }: { c: string }) => <span className="tk-s">{c}</span>;

export default function ContactPage() {
  return (
    <>
      <section className="sec">
        <GiantWord vw={24}>Contact</GiantWord>

        <Reveal className="over-giant">
          <div className="contact-grid">
            <figure className="window code-window" data-ascii-exclude>
              <div className="win-bar">
                <i /> <i /> <i />
                <span>contact.html</span>
              </div>
              <div className="code">
                <div className="ln tk-c">&lt;!-- start .scope-contact --&gt;</div>
                <div className="ln">
                  <P c="<" />
                  <T c="section" /> <A c="class" />
                  <P c="=" />
                  <S c='"scope-contact"' />
                  <P c=">" />
                </div>
                <div className="ln">
                  {"  "}
                  <P c="<" />
                  <T c="h3" />
                  <P c=">" />
                  GET IN TOUCH
                  <P c="</" />
                  <T c="h3" />
                  <P c=">" />
                </div>
                <div className="ln">
                  {"  "}
                  <P c="<" />
                  <T c="p" />
                  <P c=">" />
                </div>
                <div className="ln">{"    "}I&apos;m open to full-time roles, contracts and</div>
                <div className="ln">{"    "}collaborations — especially realtime systems,</div>
                <div className="ln">{"    "}voice infrastructure and agentic AI.</div>
                <div className="ln">
                  {"  "}
                  <P c="</" />
                  <T c="p" />
                  <P c=">" />
                </div>
                <div className="ln">
                  {"  "}
                  <P c="<" />
                  <T c="p" />
                  <P c=">" />
                </div>
                <div className="ln">{"    "}Email me to set something up — I&apos;d love to</div>
                <div className="ln">{"    "}hear what you&apos;re building.</div>
                <div className="ln">
                  {"  "}
                  <P c="</" />
                  <T c="p" />
                  <P c=">" />
                </div>
                <div className="ln hl">
                  {"  "}
                  <P c="<" />
                  <T c="a" /> <A c="href" />
                  <P c="=" />
                  <S c={`"mailto:${LINKS.email}"`} />
                  <P c=">" />
                  <a className="code-link" href={`mailto:${LINKS.email}`}>
                    Email me
                  </a>
                  <P c="</" />
                  <T c="a" />
                  <P c=">" />
                </div>
                <div className="ln">
                  <P c="</" />
                  <T c="section" />
                  <P c=">" />
                </div>
              </div>
            </figure>

            <div className="channels" data-ascii-exclude>
              <div className="xt-label">/ CHANNELS</div>
              <div className="xt-rule eq" aria-hidden="true" />
              <dl>
                <div className="frow">
                  <dt>/ EMAIL</dt>
                  <dd>
                    <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
                  </dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ GITHUB</dt>
                  <dd>
                    <a href={LINKS.github} target="_blank" rel="noreferrer">
                      github.com/Aryanz01 ↗
                    </a>
                  </dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ LINKEDIN</dt>
                  <dd>
                    <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                      aryan-vashishth ↗
                    </a>
                  </dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ LEETCODE</dt>
                  <dd>
                    <a href={LINKS.leetcode} target="_blank" rel="noreferrer">
                      aryan_vashishth ↗
                    </a>
                  </dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ PHONE</dt>
                  <dd>{LINKS.phone}</dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ RESUME</dt>
                  <dd>
                    <a href={LINKS.resume} target="_blank" rel="noreferrer">
                      Aryan_Vashishth.pdf ↗
                    </a>
                  </dd>
                </div>
                <div className="xt-rule" aria-hidden="true" />
                <div className="frow">
                  <dt>/ BASED IN</dt>
                  <dd>Bangalore, IN · open to remote</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
