const boxes = document.querySelectorAll(".item-box");

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
  };

  addToArray(0, switchMark());

  return {
    gameboard,
    addToArray,
  };
})();

function players(name) {
  return { name };
}

const game = {};

function renderArrayContents() {
  const items = Gameboard.gameboard; //array
  for (let i = 0; i <= 8; i++) {
    boxes[i].textContent = items[i];
  }
}
renderArrayContents();
