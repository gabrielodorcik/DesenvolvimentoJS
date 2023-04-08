function palavraNaFrase(){
    let frase = prompt("Digite uma frase: ")
    let palavra = prompt("Digite uma palavra: ")
    let tamPalavra = palavra.length - 1
    let tamFrase = frase.length - 1;
    let i, j, cont = 0
    let result = document.getElementById("saida")
    for (i = 0; i <= tamFrase ; i++ ){
        j = 0
        while(j < tamPalavra && palavra[j] == frase[j + i]){
            if(j == tamPalavra){
                result.innerHTML = `A palavra solicitada "${palavra}" na frase "${frase}" é encontrada no indice ${i} até o indice ${i + tamPalavra}. `
                cont++
            }

        }

    }
    result.innerHTML = `A palavra é encontrada ${cont} vezes`

}
