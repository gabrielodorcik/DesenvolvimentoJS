function potencia(){
    let expo = prompt("Digite a base: ")
    let base = prompt("Digite o expoente: ")
    let i;
    let potencia = 1;

    for(i = 0; i < expo; i++){
        potencia = potencia * base;
    }

    let result = document.getElementById('resultPot')

    result.innerHTML = `<p> A potencia de ${base} elavado a ${expo} é ${potencia}. </p>`

}

function fatorial() {
    let num = prompt("Digite um numero: ")
    let i
    let fatorial = num

 for(i = 1; i < num; i++){
    
    fatorial *= i

 }

    let result = document.getElementById('resultFat')
    result.innerHTML = `<p>O ${num} fatorial é ${fatorial}. </p>`
}