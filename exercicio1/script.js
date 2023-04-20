function salario() {
let salario = parseFloat(prompt("Digite seu salário: "));
let aux = salario;

let result = document.getElementById('salar');


//result.innerHTML = `Seu salário inicial é de: R$${salario}`;

if(salario <= 280)
    salario += salario * 0.2;
else if(salario > 280 && salario <= 700)
    salario += salario * 0.15;
else if(salario > 700 && salario <= 1500)
    salario += salario * 0.1;
else
    salario += salario * 0.05;

result.innerHTML = `O percentual de aumento aplicado foi de: ${((salario - aux) / aux) * 100}%. Seu salário aumentou em: R$${salario - aux}
Seu salário após o reajuste é de: R$${salario}`;


}