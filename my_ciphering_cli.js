const fs = require("fs");
const ceasar = require("./ceasarChipher");
const atbash = require("./atbashChipher");
const rot8 = require("./rot8Chipher");

function getFlag(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

const config = getFlag("-c").split("-");
const inputFile = getFlag("-i");
const outputFile = getFlag("-o");

const input = fs.createReadStream(inputFile, "utf-8");
const output = fs.createWriteStream(outputFile, "utf-8");

input.on("data", (chunk) => {
  for (let i = 0; i < config.length; i++) {
    if (config[i] === "C1") {
      chunk = ceasar.encode(chunk);
    } else if (config[i] === "C0") {
      chunk = ceasar.decode(chunk);
    } else if (config[i] === "R1") {
      chunk = rot8.encode(chunk);
    } else if (config[i] === "R0") {
      chunk = rot8.decode(chunk);
    } else if (config[i] === "A") {
      chunk = atbash(chunk);
    }
  }
  output.write(chunk);
});
input.on("error", (error) => console.log("Error", error.message));
