var divs = document.querySelectorAll('#jogo div');
      var jogador, board;
        
      for (var i in divs) {
        divs[i].onclick = (e)=>{
          var coords = e.target.id.split('c')[1].split(',');
          var row = parseInt(coords[0]);
          var col = parseInt(coords[1]);
          if (board[row][col] == '') {
            board[row][col] = jogador;
            jogador = jogador == 'X' ? 'O' : 'X';
            var winner = checkWinner(board);
            if (winner) {
              setTimeout(()=>{alert(winner + ' venceu!');init();}, 16);
            }
            else if (isFull(board)) {
              setTimeout(()=>{alert('Empate!');init();}, 16);
            }
            else if (jogador == 'O') {
              AI();
            }
            drawBoard(board);
          }
        };
      }
      function deepCopy(x) {
        return JSON.parse(JSON.stringify(x));
      }
      function AI() {
        action = bestAction(board, jogador);
        var div = document.getElementById('c'+action[0]+','+action[1]);
        div.click();
      }  
      function init() {
        jogador = 'X';
        board = [['','',''],['','',''],['','','']];
        drawBoard(board);
      }
      function drawBoard(board) {
        for (var row in board) {
          for (var col in board[row]) {
            var id = 'c' + row + ',' + col;
            var div = document.getElementById(id);
            div.innerText = board[row][col];
          }    
        }
      }
      function isFull(board) {
        for (var row in board) {
          for (var col in board[row]) {
            if (board[row][col] == '') return false;
          }
        }
        return true;
      }
      function checkWinner(board) {
        var divs = document.querySelectorAll('#jogo div');
        if (board[0][0] == board[0][1] && board[0][0] == board[0][2]) return board[0][0];
        if (board[1][0] == board[1][1] && board[1][0] == board[1][2]) return board[1][0];
        if (board[2][0] == board[2][1] && board[2][0] == board[2][2]) return board[2][0];
        if (board[0][0] == board[1][0] && board[0][0] == board[2][0]) return board[0][0];
        if (board[0][1] == board[1][1] && board[0][1] == board[2][1]) return board[0][1];
        if (board[0][2] == board[1][2] && board[0][2] == board[2][2]) return board[0][2];
        if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) return board[0][0];
        if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) return board[0][2];
        return null;
      }
        
      init();

      function heuristica(board, jogador) {	//Estima valor do tabuleiro
        var h = 0;
          var oponente = jogador == 'X' ? 'O' : 'X';
          for (var i = 0; i < 3; i++) {
          if (board[i][0] != oponente && board[i][1] != oponente && board[i][2] != oponente)
              h += Math.pow((board[i][0] == jogador) + (board[i][1] == jogador) + (board[i][2] == jogador), 2);
        }
          for (var i = 0; i < 3; i++) {
          if (board[0][i] != oponente && board[1][i] != oponente && board[2][i] != oponente)
              h += Math.pow((board[0][i] == jogador) + (board[1][i] == jogador) + (board[2][i] == jogador), 2);
        }
        if (board[0][0] != oponente && board[1][1] != oponente && board[2][2] != oponente)
              h += Math.pow((board[0][0] == jogador) + (board[1][1] == jogador) + (board[2][2] == jogador), 2);
        if (board[0][2] != oponente && board[1][1] != oponente && board[2][0] != oponente)
              h += Math.pow((board[0][2] == jogador) + (board[1][1] == jogador) + (board[2][0] == jogador), 2);
    
          for (var i = 0; i < 3; i++) {
          if (board[i][0] != jogador && board[i][1] != jogador && board[i][2] != jogador)
              h -= Math.pow((board[i][0] == oponente) + (board[i][1] == oponente) + (board[i][2] == oponente), 2);
        }
          for (var i = 0; i < 3; i++) {
          if (board[0][i] != jogador && board[1][i] != jogador && board[2][i] != jogador)
              h -= Math.pow((board[0][i] == oponente) + (board[1][i] == oponente) + (board[2][i] == oponente), 2);
        }
        if (board[0][0] != jogador && board[1][1] != jogador && board[2][2] != jogador)
              h -= Math.pow((board[0][0] == oponente) + (board[1][1] == oponente) + (board[2][2] == oponente), 2);
        if (board[0][2] != jogador && board[1][1] != jogador && board[2][0] != jogador)
              h -= Math.pow((board[0][2] == oponente) + (board[1][1] == oponente) + (board[2][0] == oponente), 2);
    
          return h;
    }
    function jogada(board, pos, jogador) {	//Computa resultado da jogada
        var new_board = deepCopy(board);
          new_board[pos[0]][pos[1]] = jogador;
          return new_board;
    }
    function jogadasPossiveis(board) {	//Lista jogadas possíveis
        var jogadas = [];
          for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            if (board[i][j] == '') jogadas.push([i,j]);
          }      
        }
          return jogadas; 
    }
    function minimax(board, jogador, eu, maxdepth=9) {
        var w = checkWinner(board);
          if (w == eu) return 999;
          if (w && w != eu) return -999;
          if (!w && isFull(board)) return 0;
          if (maxdepth == 0) return heuristica(board, eu);
          
      
        var jogadas = jogadasPossiveis(board);
    
          if (jogador == eu) {	//MAX
              let best = -Infinity;
            for (let i in jogadas) {
              let resultado = jogada(board, jogadas[i], jogador);
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
              let resultado = jogada(board, jogadas[i], jogador);
              let valor = minimax(resultado, jogador == 'X' ? 'O' : 'X', eu, maxdepth-1);
              if (valor < best) {
                best = valor;
              }
            }
              return best;            
        }
    }
    function bestAction(board, eu) {	//Retorna melhor jogada. 'eu' = quem é o max
        var jogadas = jogadasPossiveis(board);
          var best = -Infinity;
          var besta = null;
          console.log(heuristica(board, eu));
          for (var i in jogadas) {
          var resultado = jogada(board, jogadas[i], eu);
          var valor = minimax(resultado, eu == 'X' ? 'O' : 'X', eu, 1);
          if (valor > best) {
            best = valor;
            besta = jogadas[i];
          }
        }
          return besta;
    }