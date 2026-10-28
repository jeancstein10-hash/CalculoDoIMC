
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
    } else if (iMC <= 24.9 && iMC > 25){
        alert ("Você está no peso ideal")
    } else if (iMC >= 25){
        alert("Você está com excesso de peso")
    } else if (iMC >= 30) {
        alert("Você está com Obesidade classe 1")
    }else if (iMC >= 35) {
        alert("Você está com Obesidade classe 2")
    }else if (iMC >= 40) {
        alert("Você está com Obesidade classe 3")        
    }
}
function relatorio(classificacao, iMC) {
    iMC = calcularIMC(peso, altura)
    classificacao = classificarIMC(iMC)
alert("Seu IMC é igual a " + iMC + "e sua classificaçao é " + classificacao)    
}
relatorio(iMC, classificacao)


