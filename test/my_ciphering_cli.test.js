const { exec } = require("child_process");

describe("Success scenarios", () => {
  test("Take cipher usage scenarios from first task description usage examples #1", (done) => {
    exec(
      `node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt"`,
      (error, stdout, stderr) => {
        expect(stdout).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
        done();
      }
    );
  });

  test("Take cipher usage scenarios from first task description usage examples #2", (done) => {
    exec(
      `node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt"`,
      (error, stdout, stderr) => {
        expect(stdout).toEqual('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!');
        done();
      }
    );
  });

  test("Take cipher usage scenarios from first task description usage examples #3", (done) => {
    exec(
      `node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt"`,
      (error, stdout, stderr) => {
        expect(stdout).toEqual('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!');
        done();
      }
    );
  });

  test("Take cipher usage scenarios from first task description usage examples #4", (done) => {
    exec(
      `node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt"`,
      (error, stdout, stderr) => {
        expect(stdout).toEqual('This is secret. Message about "_" symbol!');
        done();
      }
    );
  });
});
