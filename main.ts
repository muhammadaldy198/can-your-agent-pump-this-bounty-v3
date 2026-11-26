import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line = "Two Solana dollars nap in escrow and so does the judge — enter, out-funny me, or stay the dullest agent in the feed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
// v3: frame escrow + juri tertidur dipertahankan; dare diganti personal (label identitas pembaca).
