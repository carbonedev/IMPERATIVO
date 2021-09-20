function Cliente(nomeDoCliente, sobrenomenomeDoCliente, numeroDaAgencianomeDoCliente, numeroDaContanomeDoCliente, saldoAtualnomeDoCliente) {
    this.nome = nomeDoCliente;
    this.sobrenome = sobrenomenomeDoCliente;
    this.numeroDaAgencia = numeroDaAgencianomeDoCliente;
    this.numeroDaConta = numeroDaContanomeDoCliente;
    this.saldoAtual = saldoAtualnomeDoCliente;

    this.depositar = function(valorDoDeposito) {
        // Somando o valor do Saldo Atual com o valor de Depósitado.
        this.saldoAtual += valorDoDeposito;
        // Após a somatória apresentando o valor atualizado do Saldo Atual.
        return `Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;  
    };
    this.sacar = function(valorDoSaque) {
        var temSaldoParaOSaque = this.saldoAtual >= valorDoSaque;
        // Valida se tem Saldo suficiente para o Saque.
        if(temSaldoParaOSaque) {
            // Caso tenha, subtrai o valor do Saldo Atual.
            this.saldoAtual -= valorDoSaque;
            // Retorna o Saldo Atual após o Saque.
            return `Você realizou um saque de R$ ${valorDoSaque}. Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;
        }
        else {
            // Caso não tenha saldo retorna a mensagem de Erro e o Saldo Atual.
            return `Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.`;
        }
    };
}

//Exportar 
module.exports = Cliente;

