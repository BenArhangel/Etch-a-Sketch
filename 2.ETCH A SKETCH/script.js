function getScreen(size) {
  let screen = document.querySelector(".screen");

  let squares = screen.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let value = size * size;
  for (let i = 0; i < 4096; i++) {
    let square = document.createElement("div");

    screen.insertAdjacentElement("beforeend", square);

    //BUTTONS

    const blackBtn = document.querySelector(".black");
    blackBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });

    const eraserBtn = document.querySelector(".eraser");
    eraserBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
      });
    });

    const randomBtn = document.querySelector(".random");
    randomBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        let randome = getRandomColor();
        let randomClrs = colors[randome];
        square.style.backgroundColor = randomClrs;
      });
    });

    let colors = [
      "blue",
      "red",
      "pink",
      "lightblue",
      "green",
      "lightgreen",
      "yellow",
      "purple",
      "violet",
      "orange",
      "orangered",
      "aqua",
    ];

    function getRandomColor() {
      return Math.floor(Math.random() * colors.length);
    }

    clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
  }
}
getScreen(16);

function changeSize(input) {
  if (input <= 64) {
    getScreen(input);
    document.getElementById("output").innerHTML = " ";
  } else {
    document.getElementById("output").innerHTML = "Too many squares";
  }
}
