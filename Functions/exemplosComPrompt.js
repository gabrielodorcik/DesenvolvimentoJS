var nomeCadastrado = "User";
var senhaCadastrada = "12345";
var verificaNome = true;

while(verificaNome == true){

    var nome = prompt("Digite o seu nome: ");

    if (nome == "User"){
        alert("Usuário encontrado");
        nomeCadastrado = true;
        verificaNome = false;
            
    } else {
        alert("Desculpe, mas o nome inserido não é correspondente! Tente Novamente");
        nomeCadastrado = false;
        
    }

}

var verificaSenha = true;
var valida = false;

while(verificaSenha == true && verificaNome == false && valida == false) {

    var senha = prompt("Digite a sua senha: ");

    if(senha == "12345"){
        alert("Senha exata!");
        alert("Seja Bem-vindo " + nome + " !");
        valida = true;
        
    } else {
        alert("Senha incorreta, tente novamente!");
        verificaSenha = false;
    }
     
}