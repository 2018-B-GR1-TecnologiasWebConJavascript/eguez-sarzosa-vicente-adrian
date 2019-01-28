/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const axios = require('axios');
module.exports.bootstrap = async function () {

  emitirTemperatura();

};

function emitirTemperatura() {
  setInterval(
    async () => {
      const temperatura = new Date().getSeconds();
      // Guardar la temperatura en la BDD
      // REST -> POST
      if (temperatura > 5) {
        const url = 'http://localhost:1337/Temperatura';
        try {
          const respuesta = await axios({
            method: 'post',
            url: url,
            data: {
              medicion: temperatura
            }
          });
          console.log(respuesta.data);
        } catch (e) {
          console.error(e);
        }
      } else {
        console.info('Temperatura menor a 5');
      }

    },
    2000
  );
}
