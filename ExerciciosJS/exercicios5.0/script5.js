function media() {
    let nome = window.prompt("Qual é o seu nome?")
    let n1 = Number(window.prompt(`Qual a primeira nota do  ${nome} ? `))
    let n2 = Number(window.prompt(`Além de ${n1},qual é a outra nota ${nome} ?`))
    med = (n1 + n2) / 2

    let mensage 
    if (med >= 6) {
        mensage = "Parabens você passou!"
    } else {
        mensage = "Desculpe você não passou!"
    }

    let result = document.getElementById('section')
    result.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    result.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>` 
    result.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    result.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${mensage}</strong></p>`

}