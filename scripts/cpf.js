// Description:
//   Generates a valid CPF
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
    res.send('Um CPF: ' + gerarCpf());
  });
};