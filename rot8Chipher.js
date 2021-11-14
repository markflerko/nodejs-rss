let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";

function shift(n) {
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newalpha += alphabet[offset];
  }
}

shift(8);

function encode(message) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i].toLowerCase());
    if (index === -1) {
      result += message[i];
    } else {
      result +=
        message[i] === message[i].toLowerCase()
          ? newalpha[index]
          : newalpha[index].toUpperCase();
    }
  }
  return result;
}

function decode(message) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let index = newalpha.indexOf(message[i].toLowerCase());
    if (index === -1) {
      result += message[i];
    } else {
      result +=
        message[i] === message[i].toLowerCase()
          ? alphabet[index]
          : alphabet[index].toUpperCase();
    }
  }
  return result;
}

exports.encode = encode;
exports.decode = decode;