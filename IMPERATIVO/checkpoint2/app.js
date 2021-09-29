let produtos = [{
    nome: 'Playstation 5',
    valor: 6500,
    qualidade: 9,
    status: 'disponivel'
}, {
    nome: 'Galaxy A8',
    valor: 1400,
    qualidade: 7,
    status: 'disponivel'
}, {
    nome: 'Motorola G6',
    valor: 1400,
    qualidade: 5,
    status: 'disponivel'
}, {
    nome: 'Carregador de Celular',
    valor: 40,
    qualidade: 7,
    status: 'disponivel'
}, {
    nome: 'LG K10',
    valor: 1400,
    qualidade: 7,
    status: 'indisponivel'
}, {
    nome: 'Galaxy S7 Edge',
    valor: 1200,
    qualidade: 7,
    status: 'disponivel'
}

];

let carrinho = produtos.filter(function(value){
    if(value.qualidade >= 6 && value.status == 'disponivel' && value.valor > 482 && value.valor < 1600)
    return value;
})

console.log('Carrinho---------------------------------->')
console.log(carrinho.map(function(item){
    return ('O produto no seu carrinho é ' + item.nome + ' e o seu valor é R$ ' + item.valor);
}))

let preco = carrinho.map(function(valor){
    return valor.valor;
});

let valorTotal = preco.reduce(function(acc,valorAtual){
    return acc + valorAtual;
});

console.log('Total dos produtos------------------------>')
console.log('A soma dos seus produtos é R$ ' + valorTotal);
