"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { generateAscii, lineNumbers, type Rect } from "@/lib/ascii";

const ART_PAD = 12; // px between gutter and the first art column

/**
 * The background layer that makes every page read as one big source file:
 * a line-number gutter plus a procedurally generated ASCII comment texture.
 * Content elements marked [data-ascii-exclude] carve quiet zones out of it.
 */
export default function AsciiCanvas() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [art, setArt] = useState("");
  const [nums, setNums] = useState("");

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const regen = () => {
      const layer = ref.current;
      if (cancelled || !layer) return;
      const buffer = layer.parentElement as HTMLElement;

      const styles = getComputedStyle(buffer);
      const gutterW = parseFloat(styles.getPropertyValue("--gutter-w")) || 56;
      const lineH = parseFloat(styles.getPropertyValue("--line")) || 24;

      // measure the mono advance width precisely
      const probe = document.createElement("span");
      probe.className = "ascii-probe";
      probe.textContent = "0".repeat(50);
      buffer.appendChild(probe);
      const charW = probe.getBoundingClientRect().width / 50;
      buffer.removeChild(probe);
      if (!charW) return;

      const bufRect = buffer.getBoundingClientRect();
      const width = buffer.clientWidth;
      const height = Math.max(buffer.scrollHeight, window.innerHeight - bufRect.top);
      const cols = Math.floor((width - gutterW - ART_PAD * 2) / charW);
      const rows = Math.ceil(height / lineH);

      const exclusions: Rect[] = [];
      buffer.querySelectorAll("[data-ascii-exclude]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        exclusions.push({
          x: Math.floor((r.left - bufRect.left - gutterW - ART_PAD) / charW) - 2,
          y: Math.floor((r.top - bufRect.top) / lineH) - 1,
          w: Math.ceil(r.width / charW) + 4,
          h: Math.ceil(r.height / lineH) + 2,
        });
      });

      setArt(generateAscii(cols, rows, pathname, exclusions));
      setNums(lineNumbers(rows));
    };

    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(regen, 120);
    };

    // wait for the mono font so the grid measurement is exact
    document.fonts.ready.then(() => {
      if (!cancelled) requestAnimationFrame(regen);
    });

    const buffer = ref.current?.parentElement;
    const ro = new ResizeObserver(schedule);
    if (buffer) ro.observe(buffer);
    window.addEventListener("resize", schedule);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <div ref={ref} className="ascii-layer" aria-hidden="true">
      <pre className="gutter">{nums}</pre>
      <pre className="art" key={pathname}>
        {art}
      </pre>
    </div>
  );
}
