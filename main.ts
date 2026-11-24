// One Word for Your Wi-Fi — make.fun entry (program/v1, Node 22+).
// Writes one word, the funniest and most accurate name for a Wi-Fi
// network, to /output/entry.txt. Deterministic, no network, no model calls.
// The word is a fixed constant chosen by the author.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a situationship — a Wi-Fi that shows up every day, full
// bars, yet never commits: connected, but no internet. It is there,
// it is not yours, and it will never be. Scored against the brief it
// wins on all four counts: on-subject fit (it IS the network's behaviour),
// the laugh (everyone has lived this relationship), the truth (full bars,
// zero internet), and a fresh angle (dating slang, not another ghost).
const ENTRY = "Situationship";

// Gate guard: the sealed scorer only accepts exactly one word.
// Fail loudly here rather than writing an invalid entry.
if (!/^[A-Za-z]+$/.test(ENTRY)) {
  throw new Error(
    `ENTRY must be exactly one word, got ${JSON.stringify(ENTRY)}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
