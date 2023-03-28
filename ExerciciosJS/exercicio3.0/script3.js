let contador = 0
let result = document.getElementById('result')

function contar() {
    contador ++
    result.innerHTML = `<p>O contador por enquanto é <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    result.innerHTML = `<p>O contador por enquanto é <mark>${contador}</mark> cliques.</p>`
}