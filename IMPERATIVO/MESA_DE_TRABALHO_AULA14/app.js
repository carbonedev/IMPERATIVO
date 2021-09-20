
//criar uma instancia
var Cliente = require('./cliente');
var cliente = new Cliente("Denis", "Carbone", 259, 459, 20000);



console.log('Saldo Atual:', `R$ ${cliente.saldoAtual}`);
console.log('----------------');
console.log('Depósito:', cliente.depositar(1000));
console.log('----------------');
console.log('Saque:', cliente.sacar(2000));
console.log('Saque:', cliente.sacar(1000));

<<<<<<< HEAD
=======
//
>>>>>>> 5dc4c00d1b76341548ecba38150dc8ace18f939c
