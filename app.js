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
    gameboard[index] = mark;
    renderArrayContents();
    game.checkForWinner();
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
      console.log("gg");
    }
  };

  return { checkForWinner, board };
})();
