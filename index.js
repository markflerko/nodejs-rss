const ceasar = require("./ceasarChipher");
const atbash = require("./atbashChipher");
const rot8 = require("./rot8Chipher");

const en = rot8.encode("Hello");
const de = rot8.decode(en);
console.log(en);
console.log(de);
