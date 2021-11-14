const fs = require("fs");
const caesar = require("./ceasarChipher");
const atbash = require("./atbashChipher");
const rot8 = require("./rot8Chipher");

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
  process.stdin.on("data", (data, chunk = data.toString()) => {
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
    process.stdout.write(chunk);
  });
} else if (inputFile === null && outputFile !== null) {
  console.log("please, write your message");
  process.stdin.on("data", (data, chunk = data.toString()) => {
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
    const output = fs.createWriteStream(outputFile, "utf-8");
    output.write(chunk);
  });
} else if (inputFile !== null && outputFile === null) {
  const input = fs.createReadStream(inputFile, "utf-8");
  input.on("data", (chunk) => {
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
    process.stdout.write(chunk);
  });
} else {
  const input = fs.createReadStream(inputFile, "utf-8");
  const output = fs.createWriteStream(outputFile, "utf-8");
  input.on("data", (chunk) => {
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
    output.write(chunk);
  });
  input.on("error", (error) => console.log("Error", error.message));
}
