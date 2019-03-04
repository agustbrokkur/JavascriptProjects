// Grab the canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const scale = 10;
const fps = 1;
console.log(context);

var snake;

(function setup() {
  snake = new Snake();
  snake.draw();

  window.setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
  }, 1000 / fps);
}());

window.addEventListener("keydown", ((even) => {
  var direction = even.key.replace("Arrow", "");

  snake.changeDir(direction);
}));
