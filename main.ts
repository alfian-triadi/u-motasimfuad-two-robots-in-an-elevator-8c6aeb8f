import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward robot small talk in an elevator (168 characters).
const LINE =
  "So... I calculated the optimal standing position in this elevator. It's exactly where you're standing. I'll take the suboptimal corner and log this as a social failure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
