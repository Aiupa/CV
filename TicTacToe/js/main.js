function isValid(button) {
     return button.innerHTML.length == 0;
}

function setSymbol(btn, symbol) {
     btn.innerHTML = symbol;
}

// Make Array when Player 1 is at his Turn '5' ?
function searchWinner(pieces, players, turn) {
     if (pieces[0].innerHTML == players[turn] &&
          pieces[1].innerHTML == players[turn] &&
          pieces[2].innerHTML == players[turn]) {
          pieces[0].style.backgroundColor = "#E7907D";
          pieces[1].style.backgroundColor = "#E7907D";
          pieces[2].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[3].innerHTML == players[turn] &&
          pieces[4].innerHTML == players[turn] &&
          pieces[5].innerHTML == players[turn]) {
          pieces[3].style.backgroundColor = "#E7907D";
          pieces[4].style.backgroundColor = "#E7907D";
          pieces[5].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[6].innerHTML == players[turn] &&
          pieces[7].innerHTML == players[turn] &&
          pieces[8].innerHTML == players[turn]) {
          pieces[6].style.backgroundColor = "#E7907D";
          pieces[7].style.backgroundColor = "#E7907D";
          pieces[8].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[0].innerHTML == players[turn] &&
          pieces[3].innerHTML == players[turn] &&
          pieces[6].innerHTML == players[turn]) {
          pieces[0].style.backgroundColor = "#E7907D";
          pieces[3].style.backgroundColor = "#E7907D";
          pieces[6].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[1].innerHTML == players[turn] &&
          pieces[4].innerHTML == players[turn] &&
          pieces[7].innerHTML == players[turn]) {
          pieces[1].style.backgroundColor = "#E7907D";
          pieces[4].style.backgroundColor = "#E7907D";
          pieces[7].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[0].innerHTML == players[turn] &&
          pieces[4].innerHTML == players[turn] &&
          pieces[8].innerHTML == players[turn]) {
          pieces[0].style.backgroundColor = "#E7907D";
          pieces[4].style.backgroundColor = "#E7907D";
          pieces[8].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[2].innerHTML == players[turn] &&
          pieces[4].innerHTML == players[turn] &&
          pieces[6].innerHTML == players[turn]) {
          pieces[2].style.backgroundColor = "#E7907D";
          pieces[4].style.backgroundColor = "#E7907D";
          pieces[6].style.backgroundColor = "#E7907D";
          return true;
     }

     if (pieces[2].innerHTML == players[turn] &&
          pieces[5].innerHTML == players[turn] &&
          pieces[8].innerHTML == players[turn]) {
          pieces[2].style.backgroundColor = "#E7907D";
          pieces[5].style.backgroundColor = "#E7907D";
          pieces[8].style.backgroundColor = "#E7907D";
          return true;
     }
}

function tie(pieces) {
     for (let i = 0, len = pieces.length; i < len; i++) {
          if (pieces[i].innerHTML.length == 0)
               return false;
     }

     return true;
}

let Display = function (element) {
     let post = element;

     function setText(message) {
          post.innerHTML = message;
     }

     return {
          sendMessage: setText
     };
}

function main() {
     let pieces = document.querySelectorAll("#game button");
     let players = ['X', 'O'];
     let turn = 0;
     let gameIsOver = false;
     let display = new Display(document.querySelector("#gameStatus"));
     display.sendMessage("Et c'est parti ! <br /> Player " + players[turn] + " c'est ton tour.");
     for (let i = 0, len = pieces.length; i < len; i++) {
          pieces[i].addEventListener("click", function () {
               if (gameIsOver)
                    return;

               if (!isValid(this)) {
                    display.sendMessage("Case occupée ! <br/> Player " + players[turn] + " c'est toujours ton tour.");
               } else {
                    setSymbol(this, players[turn]);
                    gameIsOver = searchWinner(pieces, players, turn);

                    if (gameIsOver) {
                         display.sendMessage("Le joueur " + players[turn] + " a gagné. <br /> <a href=\"./\">Rejouer</a>");
                         return;
                    }

                    if (tie(pieces)) {
                         display.sendMessage("Match Nul! <a href=\"./\">Rejouer</a>");
                         return;
                    }

                    turn++;
                    turn = turn % 2;
                    display.sendMessage("Player " + players[turn] + " c'est à toi !")
               }
          });
     }
}

main();