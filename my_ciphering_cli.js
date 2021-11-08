const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");

function getFlag(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const config = getFlag("-c");
const inputFile = getFlag("-i");
const outputFile = getFlag("-o");

const read = createReadStream(inputFile, "utf-8");
const write = createWriteStream(outputFile);

pipeline(read, write, (err) => {
  if (err) console.log(err);
});
