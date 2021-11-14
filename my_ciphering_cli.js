const fs = require("fs");
const caesar = require("./ceasarChipher");
const atbash = require("./atbashChipher");
const rot8 = require("./rot8Chipher");
const { Stream } = require("stream");

const ts = new Stream.Transform();

ts._transform = (chunk, encoding, cb) => {
  chunk = chunk.toString();
  for (let i = 0; i < config.length; i++) {
    if (config[i] === "C1") {
      chunk = caesar.encode(chunk);
    } else if (config[i] === "C0") {
      chunk = caesar.decode(chunk);
    } else if (config[i] === "R1") {
      chunk = rot8.encode(chunk);
    } else if (config[i] === "R0") {
      chunk = rot8.decode(chunk);
    } else if (config[i] === "A") {
      chunk = atbash(chunk);
    }
  }
  ts.push(chunk);
  cb();
};

function getFlag(flag, flagFull) {
  const flagIndex =
    process.argv.indexOf(flag) === -1
      ? process.argv.indexOf(flagFull)
      : process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const config = getFlag("-c", "--config").split("-");
const inputFile = getFlag("-i", "--input");
const outputFile = getFlag("-o", "--output");

if (inputFile === null && outputFile === null) {
  console.log("please, write your message");
  process.stdin.pipe(ts).pipe(process.stdout);
} else if (inputFile === null && outputFile !== null) {
  console.log("please, write your message");
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
