const caesar = require("../ceasarChipher");

test("should have name mark", () => {
  const string = caesar.encode('This is secret. Message about "_" symbol!');
  expect(string).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');
});
