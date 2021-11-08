const fs = require("fs");
const path = require("path");
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

fs.readFile(path.join(__dirname, inputFile), "utf-8", (err, data) => {
  if (err) throw err;
  for (let i = 0; i < config.length; i++) {
    if (config[i] === "C1") {
      data = ceasar.encode(data);
    } else if (config[i] === "C0") {
      data = ceasar.decode(data);
    } else if (config[i] === "R1") {
      data = rot8.encode(data);
    } else if (config[i] === "R0") {
      data = rot8.decode(data);
    } else if (config[i] === "A") {
      data = atbash(data);
    }
  }
  fs.writeFile(path.join(__dirname, outputFile), data, (err) => {
    if (err) throw err;
  });
});
