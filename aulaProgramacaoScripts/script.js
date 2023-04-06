function conversion() {
    let f = parseFloat(prompt("Digite o valor em Fahrenheit a ser convertido: "))
    let c = (f - 32) * 5/9
    let result = document.getElementById('conver')
    result.innerHTML = `<p> O numero ${f} convertido para Celsius é ${c}</p>`

}

function inverso() {
    let num = prompt("Digite um numero maior que 100: ")
    let numPrint = num
    num.innerHTML = ` <p/>`
    let numInv = 0
    while (num != 0) {
        numInv = numInv * 10 + (num % 10)
        num = parseInt(num / 10) 
    }
    let result = document.getElementById('inv')
    result.innerHTML = ` <p> O ${numPrint} inverso é ${numInv} </p>`
}

function vogais() {
    let palavra = prompt("Digite uma palavra: ")

    let i, cont = 0

    for (i = 0; i <= palavra.length; i++) {
        if(palavra.charAt(i) == "a" || palavra.charAt(i) == "e" || palavra.charAt(i) == "i" || palavra.charAt(i) == "o" || palavra.charAt(i) == "u"){
            cont++
        }
    }

    let result = document.getElementById('vogais')
    result.innerHTML = `<p> A quantidade de vogais na palavra ${palavra} é de ${cont} </p>`

}

function buscaCaractere() {
    let palavra = prompt("Digite a palavra: ")
    let letra = prompt("Digite a letra a ser buscada: ")

    let i, cont = 0

    for (i = 0; i <= palavra.length; i++) {
        if(palavra.charAt(i) == letra) {
            cont++
        }
    }
    
    let result = document.getElementById('palavra')
    result.innerHTML = `<p> A quantidade de caracteres "${letra}" é ${cont}. <p>`
}

function primo() {
    
    let result = document.getElementById('primo')
    let num = prompt("Digite um numero: ")

    let i, div = 0


    for (i = 0; i <= num; i++) {
        if(num % i == 0){
            div++
        }

        if(div == 2){
            result.innerHTML = `<p> O numero ${num} é primo!`
        }else{
            result.innerHTML = `<p> O numero ${num} não é primo!`
        }

    }

}

function somaI() {
    let i, somaImpar = 0
    for (i = 11; i <= 30; i++){
        if(i % 2 == 1){
            somaImpar += i
        }
    }
    let result = document.getElementById('impar')
    result.innerHTML = `<p> A soma dos numeros impares é ${somaImpar} </p>`
}
