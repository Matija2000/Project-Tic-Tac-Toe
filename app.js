const Gameboard = (function () {
  let gameboard = [];
  mark = "O";
  const switchMark = () => {
    if (mark === "X") {
      mark = "O";
    } else {
      mark = "X";
    }
    return mark;
  };
  const addToArray = (index, mark) => {
    if (game.checkForWinner() === true && game.checkForTie > 9) {
      return;
    } else {
      gameboard[index] = mark;
      renderArrayContents();
      game.checkForWinner();
      game.checkForTie();
    }
  };

  function renderArrayContents() {
    const items = gameboard; //array
    for (let i = 0; i <= 8; i++) {
      boxes[i].textContent = items[i];
    }
  }
  const boxes = document.querySelectorAll(".item-box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      let arr = Array.from(boxes);
      if (box.textContent === "") {
        addToArray(arr.indexOf(box), switchMark());
      }
    });
  });

  return {
    gameboard,
    addToArray,
  };
})();

function players(name) {
  return { name };
}

const game = (function () {
  function stopDialogEscClose() {
    const dialogs = document.querySelectorAll("dialog");
    dialogs.forEach((dialog) => {
      dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
      });
    });
  }
  stopDialogEscClose();

  function startGame() {
    const d0 = document.querySelector(".d0");
    d0.showModal();
    document.querySelector(".start").addEventListener("click", () => {
      const scores = document.querySelector(".track_scores");
      const player1 = document.createElement("div");
      const player2 = document.createElement("div");
      player1.textContent = document.querySelector("#player1").value;
      player2.textContent = document.querySelector("#player2").value;
      player1.style = "color:red";
      player2.style = "color:blue";
      scores.appendChild(player1);
      scores.appendChild(player2);
      const playerOneObject = players(player1.textContent);
      const playerTwoObject = players(player2.textContent);
      console.log(playerOneObject, playerTwoObject);
      d0.close();
    });
  }
  startGame();

  let board = Gameboard.gameboard;

  const checkForWinner = () => {
    const dialog = document.querySelector(".d1");
    if (
      (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
      (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
      (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
      (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
      (board[2] == "X" && board[4] == "X" && board[6] == "X") ||
      (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
      (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
      (board[2] == "X" && board[5] == "X" && board[8] == "X")
    ) {
      dialog.textContent = `Player ONE wins!`;
      dialog.showModal();
      return true;
    } else if (
      (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
      (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
      (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
      (board[0] == "O" && board[4] == "O" && board[8] == "O") ||
      (board[2] == "O" && board[4] == "O" && board[6] == "O") ||
      (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
      (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
      (board[2] == "O" && board[5] == "O" && board[8] == "O")
    ) {
      dialog.textContent = `Player TWO wins!`;
      dialog.showModal();
      return true;
    }
  };

  const checkForTie = () => {
    const arr = Gameboard.gameboard;
    let count = 0;
    arr.forEach(() => {
      count++;
    });
    if (count === 9) {
      const dialog = document.querySelector(".d2");
      dialog.showModal();
    }
    return count;
  };

  return { checkForWinner, checkForTie, startGame };
})();
