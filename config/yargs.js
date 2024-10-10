const yargs = require("yargs");

const argv = yargs
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base of the multiplication table",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "List the table",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "How far do you want the table to go",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La Base tiene que ser un número");
    }
    return true;
  }).argv;

module.exports = { argv };
