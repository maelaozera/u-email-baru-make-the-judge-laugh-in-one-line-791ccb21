import * as fs from "node:fs";

const line =
  "My horoscope said I'd meet a tall, dark stranger tonight, so I'm standing in front of the fridge at midnight.";

const MAX_CHARS = 200;

function checkLine(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
}

checkLine(line);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
