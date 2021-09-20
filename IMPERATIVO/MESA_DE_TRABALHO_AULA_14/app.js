
//criar uma instancia
var Cliente = require('./dados');
var cliente = new Cliente("Denis", "Carbone", 259, 459, 20000);



console.log('Saldo Atual:', `R$ ${cliente.saldoAtual}`);
console.log('----------------');
console.log('Depósito:', cliente.depositar(1000));
console.log('----------------');
console.log('Saque:', cliente.sacar(2000));
console.log('Saque:', cliente.sacar(1000));
