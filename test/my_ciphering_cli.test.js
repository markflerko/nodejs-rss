const { exec } = require("child_process");

describe("Success scenarios", () => {
  test("Take cipher usage scenarios from first task description usage examples", () => {
    exec(
      `node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt"`,
      (error, stdout, stderr) => {
        expect(stdout).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
      }
    );
  });
});
