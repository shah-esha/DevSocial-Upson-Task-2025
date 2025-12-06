const fs = require("fs");
const path = require("path");

const summaryPath = path.join(
  __dirname,
  "..",
  "..",
  "coverage",
  "coverage-summary.json"
);

if (!fs.existsSync(summaryPath)) {
  console.error("No coverage-summary.json found. Did tests run?");
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath, "utf8"));
const pct = summary.total.lines.pct;

console.log(`Current line coverage: ${pct}%`);

if (pct === 100) {
  console.log("Coverage is 100%!");
  process.exit(0);
} else {
  console.log("Coverage below 100%. Add more tests to reveal the location!");
  process.exit(1);
}
