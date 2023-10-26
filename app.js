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

const game = {};

const lol = document.querySelector("#lol");
