const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es el numero a multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Genera la tabla en la consola'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .argv;

module.exports = argv;
