var divs = document.querySelectorAll('#jogo div');
var jogador, campo;
  
for (var i = 0; i < divs.length; i++) {

  divs[i].onclick = (e)=>{
    var coords = e.target.id.split('c')[1].split(',');
    var row = parseInt(coords[0]);
    var col = parseInt(coords[1]);
    if (campo[row][col] == '') {
      campo[row][col] = jogador;
      jogador = jogador == 'X' ? 'O' : 'X';
      var winner = checkWinner(campo);
      if (winner) {
        setTimeout(()=>{alert(winner + ' venceu!');init();}, 16);
      }
      else if (isFull(campo)) {
        setTimeout(()=>{alert('Empate!');init();}, 16);
      }
      else if (jogador == 'O') {
        AI();
      }
      drawCampo(campo);
    }
  };

}

function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

function AI() {
  action = bestAction(campo, jogador);
  var div = document.getElementById('c'+action[0]+','+action[1]);
  div.click();
}  

function initX() {
  if ()
  jogador = 'X';
  campo = [['','',''],['','',''],['','','']];
  drawCampo(campo);
}

function initO() {
  jogador = 'O';
  campo = [['','',''],['','',''],['','','']];
  drawCampo(campo);
}
function drawCampo(campo) {
  for (var row in campo) {
    for (var col in campo[row]) {
      var id = 'c' + row + ',' + col;
      var div = document.getElementById(id);
      div.innerText = campo[row][col];
    }    
  }
}
function isFull(campo) {
  for (var row in campo) {
    for (var col in campo[row]) {
      if (campo[row][col] == '') return false;
    }
  }
  return true;
}
function checkWinner(campo) {
  var divs = document.querySelectorAll('#jogo div');
  if (campo[0][0] == campo[0][1] && campo[0][0] == campo[0][2]) return campo[0][0];
  if (campo[1][0] == campo[1][1] && campo[1][0] == campo[1][2]) return campo[1][0];
  if (campo[2][0] == campo[2][1] && campo[2][0] == campo[2][2]) return campo[2][0];
  if (campo[0][0] == campo[1][0] && campo[0][0] == campo[2][0]) return campo[0][0];
  if (campo[0][1] == campo[1][1] && campo[0][1] == campo[2][1]) return campo[0][1];
  if (campo[0][2] == campo[1][2] && campo[0][2] == campo[2][2]) return campo[0][2];
  if (campo[0][0] == campo[1][1] && campo[0][0] == campo[2][2]) return campo[0][0];
  if (campo[0][2] == campo[1][1] && campo[0][2] == campo[2][0]) return campo[0][2];
  return null;
}


function heuristica(campo, jogador) {	//Estima valor do tabuleiro
  var h = 0;
    var oponente = jogador == 'X' ? 'O' : 'X';
    for (var i = 0; i < 3; i++) {
    if (campo[i][0] != oponente && campo[i][1] != oponente && campo[i][2] != oponente)
        h += Math.pow((campo[i][0] == jogador) + (campo[i][1] == jogador) + (campo[i][2] == jogador), 2);
  }
    for (var i = 0; i < 3; i++) {
    if (campo[0][i] != oponente && campo[1][i] != oponente && campo[2][i] != oponente)
        h += Math.pow((campo[0][i] == jogador) + (campo[1][i] == jogador) + (campo[2][i] == jogador), 2);
  }
  if (campo[0][0] != oponente && campo[1][1] != oponente && campo[2][2] != oponente)
        h += Math.pow((campo[0][0] == jogador) + (campo[1][1] == jogador) + (campo[2][2] == jogador), 2);
  if (campo[0][2] != oponente && campo[1][1] != oponente && campo[2][0] != oponente)
        h += Math.pow((campo[0][2] == jogador) + (campo[1][1] == jogador) + (campo[2][0] == jogador), 2);

    for (var i = 0; i < 3; i++) {
    if (campo[i][0] != jogador && campo[i][1] != jogador && campo[i][2] != jogador)
        h -= Math.pow((campo[i][0] == oponente) + (campo[i][1] == oponente) + (campo[i][2] == oponente), 2);
  }
    for (var i = 0; i < 3; i++) {
    if (campo[0][i] != jogador && campo[1][i] != jogador && campo[2][i] != jogador)
        h -= Math.pow((campo[0][i] == oponente) + (campo[1][i] == oponente) + (campo[2][i] == oponente), 2);
  }
  if (campo[0][0] != jogador && campo[1][1] != jogador && campo[2][2] != jogador)
        h -= Math.pow((campo[0][0] == oponente) + (campo[1][1] == oponente) + (campo[2][2] == oponente), 2);
  if (campo[0][2] != jogador && campo[1][1] != jogador && campo[2][0] != jogador)
        h -= Math.pow((campo[0][2] == oponente) + (campo[1][1] == oponente) + (campo[2][0] == oponente), 2);

    return h;
}
function jogada(campo, pos, jogador) {	//Computa resultado da jogada
  var new_campo = deepCopy(campo);
    new_campo[pos[0]][pos[1]] = jogador;
    return new_campo;
}
function jogadasPossiveis(campo) {	//Lista jogadas possíveis, 
    var jogadas = [];
      for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (campo[i][j] == '') jogadas.push([i,j]);
      }      
    }
    return jogadas; 
}
function minimax(campo, jogador, eu, maxdepth=9) {
    var w = checkWinner(campo);
      if (w == eu) return 999;
      if (w && w != eu) return -999;
      if (!w && isFull(campo)) return 0;
      if (maxdepth == 0) return heuristica(campo, eu);
      
  
    var jogadas = jogadasPossiveis(campo);

      if (jogador == eu) {	//MAX
          let best = -Infinity;
        for (let i in jogadas) {
          let resultado = jogada(campo, jogadas[i], jogador);
          let valor = minimax(resultado, jogador == 'X' ? 'O' : 'X', eu, maxdepth-1);
          if (valor > best) {
            best = valor;
          }
        }
          return best;      
    }
      else {	//MIN
          let best = Infinity;
        for (var i in jogadas) {
          let resultado = jogada(campo, jogadas[i], jogador);
          let valor = minimax(resultado, jogador == 'X' ? 'O' : 'X', eu, maxdepth-1);
          if (valor < best) {
            best = valor;
          }
        }
          return best;            
    }
}
function bestAction(campo, eu) {	//Retorna melhor jogada. 'eu' = quem é o max
    var jogadas = jogadasPossiveis(campo);
      var best = -Infinity;
      var besta = null;
      console.log(heuristica(campo, eu));
      for (var i in jogadas) {
      var resultado = jogada(campo, jogadas[i], eu);
      var valor = minimax(resultado, eu == 'X' ? 'O' : 'X', eu, 1);
      if (valor > best) {
        best = valor;
        besta = jogadas[i];
      }
    }
      return besta;
}