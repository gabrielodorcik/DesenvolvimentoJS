function maior(){
    let num1 = Number(window.prompt("Digite um numero: "))
    let num2 = Number(window.prompt("Digite um outro numero: "))
    let maior
    let result = document.getElementById('maiorValor')
    if (num2 > num1){
        maior = num2
        result.innerHTML = `<p> O numero ${maior} é o maior! `
    }else if (num1 > num2){
        maior = num1;
        result.innerHTML = `<p> O numero ${maior} é o maior! `
    }else {
        maior = "os numeros são iguais"
        result.innerHTML = `<p> O numero ${num1} é igual ao ${num2}! `
    }

    
   
}