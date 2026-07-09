"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export type XRow = {
  id: string;
  cells: string[];
  body: ReactNode;
};

/**
 * A mono "comment table" whose rows expand in place — the editor-friendly
 * version of the reference's file-tab detail pages. Deep-linkable via #hash.
 */
export default function ExpandTable({
  label,
  head,
  rows,
  cols,
}: {
  label: string;
  head: string[];
  rows: XRow[];
  cols: string; // grid-template-columns
}) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const h = decodeURIComponent(window.location.hash.slice(1));
      if (h && rows.some((r) => r.id === h)) {
        setOpen(h);
        setTimeout(() => {
          document.getElementById(h)?.scrollIntoView({ block: "center" });
        }, 80);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (id: string) => {
    const next = open === id ? null : id;
    setOpen(next);
    history.replaceState(
      null,
      "",
      next ? `#${next}` : window.location.pathname
    );
  };

  return (
    <div
      className="xtable"
      data-ascii-exclude
      style={{ ["--cols" as string]: cols }}
    >
      <div className="xt-label">/ {label}</div>
      <div className="xt-rule eq" aria-hidden="true" />
      <div className="trow xt-head" aria-hidden="true">
        {head.map((h) => (
          <span className="cell" key={h}>
            {h}
          </span>
        ))}
      </div>
      <div className="xt-rule eq" aria-hidden="true" />
      {rows.map((r) => {
        const isOpen = open === r.id;
        return (
          <div key={r.id} id={r.id} className={"xt-row" + (isOpen ? " is-open" : "")}>
            <button
              type="button"
              className="trow xt-btn"
              aria-expanded={isOpen}
              onClick={() => toggle(r.id)}
            >
              {r.cells.map((c, i) => (
                <span className={"cell" + (i === 0 ? " name" : "")} key={i}>
                  {i === 0 && (
                    <span className="arr" aria-hidden="true">
                      →{" "}
                    </span>
                  )}
                  {c}
                </span>
              ))}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="xt-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.3, 0.7, 0.3, 1] }}
                >
                  <div className="xt-body-in">{r.body}</div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="xt-rule" aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
}
