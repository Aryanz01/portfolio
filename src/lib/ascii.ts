import { seeded } from "./prng";

export type Rect = { x: number; y: number; w: number; h: number };

/**
 * Generates the comment-block texture: a Mondrian of hollow ASCII boxes drawn
 * with /, -, =, *, + — the way the whole site pretends to be one big source file.
 *
 * IMPORTANT: every call consumes rand() in a layout-independent order, so the
 * same seed always yields the same upper texture even when exclusion zones or
 * total row count change (content expanding only redraws what it must).
 */
const STYLES = ["-", "-", "-", "-", "-", "=", "=", "=", "*", "+", "+", "/"] as const;

export function generateAscii(
  cols: number,
  rows: number,
  seed: string,
  exclusions: Rect[]
): string {
  if (cols < 10 || rows < 4) return "";
  const rand = seeded(seed);
  const grid: string[][] = Array.from({ length: rows }, () =>
    new Array<string>(cols).fill(" ")
  );
  const hit = (x: number, y: number, w: number, h: number) =>
    exclusions.some(
      (e) => x < e.x + e.w && x + w > e.x && y < e.y + e.h && y + h > e.y
    );

  let bx = 0;
  while (bx < cols - 6) {
    const bw = Math.min(10 + Math.floor(rand() * 19), cols - bx);
    let y = Math.floor(rand() * 4);
    let guard = 0;
    while (y < rows - 1 && guard++ < 6000) {
      // Draw all randomness BEFORE deciding whether the box lands — keeps the
      // sequence stable regardless of exclusions.
      const dense = rand() < 0.14;
      const h = dense ? 1 + Math.floor(rand() * 2) : 2 + Math.floor(rand() * 8);
      const ch = STYLES[Math.floor(rand() * STYLES.length)];
      const innerV =
        !dense && bw > 8 && rand() < 0.5
          ? 3 + Math.floor(rand() * Math.min(9, bw - 5))
          : -1;
      const innerV2 =
        innerV > 0 && bw > 14 && rand() < 0.25
          ? innerV + 2 + Math.floor(rand() * (bw - innerV - 4))
          : -1;
      const skip = rand() < 0.1;
      const share = rand() < 0.55;
      const gap = 1 + Math.floor(rand() * 2);

      const bh = Math.min(h, rows - y);
      if (!skip && bh >= 1) {
        if (!hit(bx, y, bw, bh)) {
          drawBox(grid, bx, y, bw, bh, ch, dense, innerV, innerV2);
        } else {
          // clip the box just above the obstruction instead of dropping it —
          // no extra rand() calls, so the sequence stays deterministic
          let clipped = bh - 1;
          while (clipped >= 2 && hit(bx, y, bw, clipped)) clipped--;
          if (clipped >= 2) {
            drawBox(grid, bx, y, bw, clipped, ch, dense, innerV, innerV2);
          }
        }
      }
      y += Math.max(1, share ? bh - 1 : bh + gap - 1);
    }
    bx += bw;
  }

  const out: string[] = new Array(rows);
  for (let r = 0; r < rows; r++) {
    let line = grid[r].join("");
    // trim trailing spaces to keep the DOM string lean
    let end = line.length;
    while (end > 0 && line.charCodeAt(end - 1) === 32) end--;
    out[r] = end === line.length ? line : line.slice(0, end);
  }
  return out.join("\n");
}

function drawBox(
  grid: string[][],
  x: number,
  y: number,
  w: number,
  h: number,
  ch: string,
  dense: boolean,
  innerV: number,
  innerV2: number
) {
  const x2 = x + w - 1;
  const y2 = y + h - 1;
  for (let r = y; r <= y2; r++) {
    const row = grid[r];
    if (!row) continue;
    const edgeRow = r === y || r === y2;
    for (let c = x; c <= x2; c++) {
      if (dense) {
        row[c] = ch;
      } else if (edgeRow) {
        row[c] = c === x || c === x2 ? "/" : ch;
      } else if (c === x || c === x2) {
        row[c] = "/";
      } else if (
        (innerV > 0 && c === x + innerV) ||
        (innerV2 > 0 && c === x + innerV2 && x + innerV2 < x2)
      ) {
        row[c] = "/";
      }
    }
  }
}

export function lineNumbers(rows: number): string {
  const out: string[] = new Array(rows);
  for (let i = 0; i < rows; i++) out[i] = String(i + 1);
  return out.join("\n");
}
