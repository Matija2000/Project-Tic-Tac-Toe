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
  let board = Gameboard.gameboard;

  const dialogs = document.querySelectorAll("dialog");
  dialogs.forEach((dialog) => {
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
    });
  });

  const d0 = document.querySelector(".d0");
  d0.showModal();

  document.querySelector(".start").addEventListener("click", () => {
    d0.close();
  });

  const checkForWinner = () => {
    if (
      (board[0] == "X" && board[1] == "X" && board[2] == "X") ||
      (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
      (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
      (board[0] == "O" && board[1] == "O" && board[2] == "O") ||
      (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
      (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
      (board[0] == "X" && board[4] == "X" && board[8] == "X") ||
      (board[2] == "X" && board[4] == "X" && board[6] == "X") ||
      (board[0] == "O" && board[4] == "O" && board[8] == "O") ||
      (board[2] == "O" && board[4] == "O" && board[6] == "O") ||
      (board[0] == "X" && board[3] == "X" && board[6] == "X") ||
      (board[1] == "X" && board[4] == "X" && board[7] == "X") ||
      (board[2] == "X" && board[5] == "X" && board[8] == "X") ||
      (board[0] == "O" && board[3] == "O" && board[6] == "O") ||
      (board[1] == "O" && board[4] == "O" && board[7] == "O") ||
      (board[2] == "O" && board[5] == "O" && board[8] == "O")
    ) {
      const dialog = document.querySelector(".d1");
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

  return { checkForWinner, checkForTie };
})();
