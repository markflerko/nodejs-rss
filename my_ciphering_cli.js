const fs = require("fs");
const ts = require("./transformStream");
const getFlag = require("./utils/getFlag");

const inputFile = getFlag("-i", "--input");
const outputFile = getFlag("-o", "--output");

if (inputFile === null && outputFile === null) {
  process.stdin.pipe(ts).pipe(process.stdout);
} else if (inputFile === null && outputFile !== null) {
  const output = fs.createWriteStream(outputFile, "utf-8");
  process.stdin.pipe(ts).pipe(output);
} else if (inputFile !== null && outputFile === null) {
  const input = fs.createReadStream(inputFile, "utf-8");
  input.pipe(ts).pipe(process.stdout);
} else {
  const input = fs.createReadStream(inputFile, "utf-8");
  const output = fs.createWriteStream(outputFile, "utf-8");
  input.pipe(ts).pipe(output);
  input.on("error", (error) => console.log("Error", error.message));
}
