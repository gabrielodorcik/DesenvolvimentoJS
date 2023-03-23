//executar algumas funções matemáticas e lógicas 
//função de soma, função subtração, função multiplicação, função de divisão, saber se é impar ou par, média entre 4 numeros
//função se checa se a soma entre dois numeros é menor ou igual a 100

let numb1, numb2, numb3, numb4;

function soma(numb1, numb2) {
    let soma = numb1 + numb2;
    console.log("A soma " + numb1 + " + " + numb2 + " é " + soma)
}


soma(4,5);

function sub(numb1, numb2) {
    let sub = numb1 - numb2;
    console.log("A subtração " + numb1 + " + " + numb2 + " é: " + sub);
}

sub(10,3);

function mult(numb1 ,  numb2 ) {
    let mult = numb1 * numb2;
    console.log("A multiplicação " + numb1 + " x " + numb2 + " é: " + mult);
    
}

mult(2,10);

function div(numb1, numb2) {
    let div = numb1 / numb2;
    console.log("A divisão " + numb1 + " : " + numb2 + " é: " + div);
}
 
div(30,2);

function imparPar(numb1) {
    if (numb1 % 2 == 0){
        console.log("O numero " + numb1 + " é par!");
    }else {
        console.log("O numero " + numb1 + " é impar!")
    }
}
imparPar(36);
imparPar(11);

function media(numb1, numb2, numb3, numb4) {
    let media = (numb1 + numb2 + numb3 + numb4) / 4;
    console.log("A média das notas " + numb1 + " " + numb2 + " " + numb3 + " " + numb4 + " é: " + media);
    if (media >= 7){
        console.log(" O aluno passou de ano!");
    } else {
        console.log(" O aluno reprovou!");
    }
}
media(10, 10, 10 ,10);
media(3, 6, 7, 4);

function menorCem(numb1, numb2) {
    
    if (numb1 + numb2 <= 100){
        console.log("É menor que cem!");
    } else if (numb1 + numb2 == 100){
        console.log("É igual a cem!");
    } else {
        console.log("É menor que cem!");
    }
}

menorCem(30,80);

console.log(" ");

const defaultNumber = (number = 42) => console.log(number)
const defaultString = (string = 'Shark') => console.log(string)
const defaultBoolean = (boolean = true) => console.log(boolean)
const defaultObject = (object = { id: 7 }) => console.log(object)
const defaultArray = (array = [1, 2, 3]) => console.log(array)
const defaultNull = (nullValue = null) => console.log(nullValue)

defaultNumber()
defaultString()
defaultBoolean()
defaultObject()
defaultArray()
defaultNull()