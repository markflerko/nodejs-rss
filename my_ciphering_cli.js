const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");

function getValue(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const config = getValue("-c");
const inputFile = getValue("-i");
const outputFile = getValue("-o");

console.log("config: ", config);
console.log("inputFile: ", inputFile);
console.log("outputFile: ", outputFile);

const read = createReadStream(inputFile, "utf-8");
const write = createWriteStream(outputFile);

pipeline(read, write, (err) => {
  if (err) console.log(err);
});
