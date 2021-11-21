const atbash = require("../atbashChipher");

const ORIGINAL = "this is secret";
const ENCODED = "gsrh rh hvxivg";

describe("Atbash cipher", () => {
  test("should encrypt", () => {
    const encoded = atbash(ORIGINAL);
    expect(encoded).toBe(ENCODED);
  });

  test("should decrypt", () => {
    const decoded = atbash(ENCODED);
    expect(decoded).toBe(ORIGINAL);
  });

  test("should encrypt only en alphabet", () => {
    const orig = "сообщение без англ слов со спец символами !231@";
    const encoded = atbash(orig);
    expect(encoded).toBe(orig);
  });
});
