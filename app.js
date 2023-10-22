const boxes = document.querySelectorAll(".item-box");

const Gameboard = (function () {
  return { gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"] };
})();

function players(name) {
  return { name };
}

function renderArrayContents() {
  const items = Gameboard.gameboard; //array
  for (let i = 0; i <= 8; i++) {
    boxes[i].textContent = items[i];
  }
}
renderArrayContents();
