const fs = require("fs");
const ts = require("./transformStream");
const getFlag = require("./utils/getFlag");

const inputFile = getFlag("-i", "--input");
const outputFile = getFlag("-o", "--output");

if (inputFile === null && outputFile === null) {
  process.stdin.pipe(ts).pipe(process.stdout);
} else if (inputFile === null && outputFile !== null) {
  const output = fs.createWriteStream(outputFile, { flags: 'a' });
  process.stdin.pipe(ts).pipe(output);
} else if (inputFile !== null && outputFile === null) {
  const input = fs.createReadStream(inputFile);
  input.pipe(ts).pipe(process.stdout);
} else {
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile, { flags: 'a' });
  input.pipe(ts).pipe(output);
  input.on("error", (error) => console.log("Error", error.message));
}
