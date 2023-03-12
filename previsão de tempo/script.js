const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

const city = document.querySelector("#city");
const degree = document.querySelector("#degree");

const content = document.querySelector(".content");

//através do document.querySelector podemos capturar os elementos da página

button.addEventListener("click", () => {
    if(!input.value) return;
    getWetherData();

});
//adicionando um botão para termos o resultado da pesquisa do usuário. apartir de um click no botão,
// ele vai verificar de há algum dado. caso True ela vai chamar a função requisitadas. caso False, a script vai ser chamada.

async function getWetherData() {
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)} & units=metric & appid= a24270b25bda55de3e86535054ec2b50`

        try{
            await fetch(urlApi) //fetch recebe a url e devolve o conteúdo da requisição em formato json. 
            .then((res)=> res.json())
            ,then((data)=>{
                if(data?.cod && data.cod === "404"){
                    return alert("Cidade não encontrada.");
                }
                loadWetherInfo(data);

            })
        } catch (error) {
            alert(error);
        
        }//caso for true, a função a serc hamada, vai montar od dados na tela, caso false, será impresso um alerta de erro.
}

function loadWetherInfo(data){ //função que mostra os dados na tela
    city.innerHTML = `${data.name}, ${data.sys.country}`; // innerHTML é usado para incorporar os dados nos elemntos city e degree.
    degree.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
    img.src = `http://openwethermap.org/img/wn/${data.weather[0].icon}@2x.png`;// src para a imagem e icone que representa o local.
    content.style.display = "flex";// aqui ele seta o content para um estilo diferente, com display flex
}