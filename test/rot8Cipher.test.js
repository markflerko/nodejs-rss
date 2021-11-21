const { encode, decode } = require("../rot8Chipher");

describe("Rot8 cipher encoding", () => {
  test("should encrypt", () => {
    const encoded = encode("this is secret");
    expect(encoded).toBe("bpqa qa amkzmb");
  });

  test("should encrypt only en alphabet", () => {
    const orig = "сообщение без англ слов со спец символами !231@";
    const encoded = encode(orig);
    expect(encoded).toBe(orig);
  });

  test("should keep uppercase", () => {
    const orig = "A";
    const code = orig.charCodeAt(0);
    const encoded = encode(orig);
    const codeEncoded = encoded.charCodeAt(0)
    expect(codeEncoded).toEqual(code+8);
  });
});


describe("Rot8 cipher decoding", () => {
  test("should decrypt", () => {
    const decoded = decode("bpqa qa amkzmb");
    expect(decoded).toBe("this is secret");
  });

  test("should decrypt only en alphabet", () => {
    const orig = "сообщение без англ слов со спец символами !231@";
    const decoded = decode(orig);
    expect(decoded).toBe(orig);
  });

  test("should keep uppercase", () => {
    const orig = "I";
    const code = orig.charCodeAt(0);
    const encoded = decode(orig);
    const codeEncoded = encoded.charCodeAt(0)
    expect(codeEncoded).toEqual(code-8);
  });
});
