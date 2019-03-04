function Snake() {
  this.x = 0;
  this.y = 0;
  this.dirX = scale * 1;
  this.dirY = 0;

  this.draw = function() {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function() {
    this.x += this.dirX;
    this.y += this.dirY;
  };

  this.changeDir = function(x, y) {
    this.dirX = scale * x;
    this.dirY = scale * y;
    console.log(this.dirX, this.dirY);
  };
};
