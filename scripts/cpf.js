// Description:
//   Generates a valid CPF
//   For full graphic impact, you must have an emoji with a Brazil flag called with :br:
//
// Commands:
//   gerar cpf
//
// Author:
//   hectorpalmatellez
//

var gerarCpf = require('gerar-cpf');

module.exports = function (robot) {
  robot.hear(/cpf/gi, function (res) {
    res.send(':flag-br: Um CPF: ' + gerarCpf() + ' :flag-br:');
  });
};