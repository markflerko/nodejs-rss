const ceasar = require("./ceasarChipher");
const atbash = require("./atbashChipher");

const en = atbash("A!z");
const de = atbash(en);
console.log(en);
console.log(de);
