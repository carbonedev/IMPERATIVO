var timer = setTimeout(function() {
    window.location.href='https://www.cotacao.com.br/'
}, 5000);
// 1. Guarda o nome do usuário.
var quantidadeDolares = prompt('Qual é o seu nome?');
// 2. Guarda a quantidade de dolares que o usuário deseja cotar.
var quantidadeDolares = prompt('Quantos dólares ele gostaria de cotar?');
// 3. Valor do dolar hoje
var cotacaoDolarHoje = 5.3;
// 4. Apresenta o resultado.
//var saudar = alert('Olá' + ' ' + nomeDoUsuario + 'US$' + ' ' + quantidadeDolares + ' ' + 'valem' + ' ' + 'R$' + ' ' + quantidadeDolares *cotacaoDolarHoje + ' ' + 'hoje.');
// Código melhorado...

var confirmar = window.confirm("a quantidade de dólares é" + " " + quantidadeDolares +"?");
if (confirmar) {
    var saudar = alert(`Olá ${nomeDoUsuario}. US$ ${quantidadeDolares} valem R$ ${quantidadeDolares * cotacaoDolarHoje} hoje.`);
end
}

var quantidadeDolares = prompt('Quantos dólares ele gostaria de cotar?');
var confirmar = window.confirm("a quantidade de dólares é" + " " + quantidadeDolares +"?");
if (confirmar) {
    var saudar = alert(`Olá ${nomeDoUsuario}. US$ ${quantidadeDolares} valem R$ ${quantidadeDolares * cotacaoDolarHoje} hoje.`);
end
}

