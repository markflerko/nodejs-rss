const { Stream } = require("stream");
const caesar = require("./ceasarChipher");
const atbash = require("./atbashChipher");
const rot8 = require("./rot8Chipher");
const getFlag = require("./utils/getFlag");

const config = getFlag("-c", "--config").split("-");

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

module.exports = ts;