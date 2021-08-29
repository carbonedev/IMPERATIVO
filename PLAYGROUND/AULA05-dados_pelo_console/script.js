//Funçao Simples
//item 1
/*function polCen(x) {
    return x * 2.54 
}
var polCen = polCen(2);
console.log(polCen);

//item 2 
function transurl(x) {
    return ('http://www.'+ x +'.com.br')
}
var url = transurl('funcaojs');
console.log(url);

//item 3
function exclamacao(x) {
    return (x+'!')
}
var excla = exclamacao('olá');
console.log(excla);

//item 4
function idadeDog(x){
    return x*7
}

console.log(idadeDog(5))

//item 5

var salario = prompt('Digite seu salário')
function divisao(){
    return salario / 160
}
var salarioHora = divisao();
alert (salarioHora)

//item 6

var altura = prompt("Digite sua altura em centimetros")
var peso = prompt("digite seu peso em quilogramas")

function calculadora (){
    return peso/((altura*0.01)*(altura*0.01))
}
var IMC = calculadora();
alert ("Seu IMC é "+ IMC)

//item 7
var texto = prompt('Digite a palavra que você pretende deixá-la inteira em maiuscula')
function maiuscula(){
    return texto.toUpperCase()
}
var TextUpper = maiuscula()
alert (TextUpper)*/

//item 8 (tirar duvida)

/*var dados = prompt('Digite algo para saber qual é o seu tipo')
function tipoDados(){
    return typeof dados
}
var tipo = tipoDados()
alert (tipo)*/

//item 9 com entrada de dados pelo console
let teclado = require('prompt-sync')();

console.log('Digite o valor do raio para que seja retornada a circunferencia')
let x = teclado()

function circu(x){
    return x*2*Math.PI
} 
console.log(circu(x))
