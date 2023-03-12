const color = document.querySelector('input');
const screen = document.querySelector('canvas');
//fazendo a capturação dos elementos das propriedades de input e canvas da pagina.

let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
//definimos algumas variaveis para iniciar o programa como cor inicial, posição de mouse e canDraw = false

let ctx = screen.getContext('2d');
//variavel ctx que vai capturar as proproedades 2d

color.onchange = () => defaultColor = color.value;
//aqui  vai ser checado se o usuário definiu outro valor de cor, caso positivo a variavel vai ser alterada,
// caso o contrário, continua o mesmo valor, analisa as mudanças de input

screen.addEventListener('mousedown' , mouseDownEvent);
//essa função verifica se o mouse está se movendio sobre o quadro, então ela é chamada. A propriedade canDraw se torna True e o desenho será possivel.
screen.addEventListener('mousemove' , mouseMoveEvent);
//captura a posição do mouse no quadro, quando o mouse se mover sobre o quadro, vai chamar a função move e depois a draw
//a draw recebe as coordenadas, assim ela vai definir as propriedaes do traço, estabelecendo o tamanho da linha, formato e aonde vai ser aplicada.
screen.addEventListener('mouseup' , mouseUpEvent);
//aqui ela torna a canDraw como false, e o desenho para novamente. 

function mouseDownEvent(e) {//quando o mouse está sobre o quadro e se movendo
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;

}

function mouseMoveEvent(e) {//quando o mouse está se movendo e clicado, ela vai passar as coordenadas
    if(canDraw){
        draw(e.pageX, e.pageY);

    }
}

function mouseUpEvent() {// termina o desenho
    canDraw = false;

}

function draw(x, y) {//pega as coordenadas e tranforma em desenho
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;

}

function clearBoard(){ // Limpa o quadro, setando ele apartir do momento que estava branco
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
