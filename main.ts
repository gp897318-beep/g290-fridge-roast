// Fridge Roast: One Line, Biggest Laugh
// Entry: a single roast line for a smart fridge, written to /output/entry.txt.
// Chosen line: firmware update at 3 a.m. — the fridge's one job is staying cold,
// and a routine update makes it fail at exactly that. The turn ("forgot how to
// be cold ... outsmarted by a bag of frozen peas") is specific to smart fridges,
// lands on the first read, and dodges the obvious cracks (ordering groceries,
// watching you eat). 141 characters, one line, no setup the punchline doesn't need.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge updated its firmware at 3 a.m., rebooted, and forgot how to be cold — $3,000 of software, outsmarted by a bag of frozen peas.";

// Gate (mirrors the sealed scorer): UTF-8 text, 1-200 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file on disk must be byte-identical to the
// chosen line, with no trailing newline added by the write.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the chosen line byte-for-byte");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
