function getFlag(flag, flagFull) {
  const flagIndex =
    process.argv.indexOf(flag) === -1
      ? process.argv.indexOf(flagFull)
      : process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}

module.exports = getFlag;