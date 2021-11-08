let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = alphabet.split('').reverse().join('');

function atbash(message) {
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

module.exports = atbash;