// Description:
//   Generates a valid CPF
//   For full graphic impact, we use the built in emoji :flag-br:
//
// Commands:
//   gerar cpf
//
// Author:
//   hectorpalmatellez
//

var gerarCpf = require('gerar-cpf');

module.exports = function (robot) {
  robot.respond(/cpf/gi, function (res) {
    res.send(':flag-br: Um CPF: ' + gerarCpf() + ' :flag-br:');
  });
};