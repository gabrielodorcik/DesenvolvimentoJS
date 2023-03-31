function teste() {
    let num = Number(window.prompt("Digite um número: "))
    let type
    if (num % 2 == 0) {
        type = '<strong> É par </strong>'

    }else {
        type = '<strong> É impar </strong>'

    }

    let result = document.getElementById('imparPar')
    result.innerHTML = `<p> O numero ${num} ${type}. </p>`
}