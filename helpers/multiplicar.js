const fs = require("fs");
var colors = require('colors');

const crearArchivo = async (base = 5, l = false, h = 10) => {
  try {
    return new Promise((resolve, rejects) => {
      let salida, consola = "";

      for (let i = 1; i <= h; i++) {
        salida += `${base} X ${i} = ${base * i}\n`;
        consola += `${`${base}`.red} ${'X'.blue} ${`${i}`.red} ${'='.blue} ${base * i}\n`;
      }

      if (l) {
        console.log("=================================".green);
        console.log("          Tabla Del:".rainbow, base);
        console.log("=================================".green);
        console.log(consola);
      }

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

      console.log(`tabla-${base}.txt creado`.underline.yellow);
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
