
let peso = parseFloat(prompt("Digite seu peso em (Kg):"))
let altura = parseFloat(prompt("Digite sua altura em metros:"))

let iMC = calcularIMC(peso, altura)
function calcularIMC(peso, altura){
    return peso / (altura * altura)
}
alert (iMC)

let classificacao = classificarIMC(iMC)
function classificarIMC(iMC) {
    if (iMC < 18.5) {
        alert ("Voce esta abaixo do seu IMC")
    } else {
        alert ("abacate")
    }
}


