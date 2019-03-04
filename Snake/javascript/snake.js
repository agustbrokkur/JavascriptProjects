function Snake() {
  this.x = 0;
  this.y = 0;
  this.dirX = scale * 1;
  this.dirY = 0;
  this.direction = "Right";

  this.draw = function() {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function() {
    this.x += this.dirX;
    this.y += this.dirY;

    if (this.x + this.dirX > canvas.width && this.direction == "Right") {
      this.x = 0;
    }
    else if (this.x < 0 && this.direction == "Left") {
      this.x = canvas.width + this.dirX;
    }
    else if (this.y + this.dirY > canvas.height && this.direction == "Down") {
      this.y = 0;
    }
    else if (this.y < 0 && this.direction == "Up") {
      this.y = canvas.height + this.dirY;
    }
    console.log(this.x, this.y);
  };

  this.changeDir = function(direction) {
    if(direction == "Left" && this.direction != "Right") {
      this.dirX = scale * -1;
      this.dirY = 0;
      this.direction = direction;
    } else if(direction == "Right" && this.direction != "Left") {
      this.dirX = scale * 1;
      this.dirY = 0;
      this.direction = direction;
    } else if(direction == "Up" && this.direction != "Down") {
      this.dirX = 0;
      this.dirY = scale * -1;
      this.direction = direction;
    } else if(direction == "Down" && this.direction != "Up") {
      this.dirX = 0;
      this.dirY = scale * 1;
      this.direction = direction;
    }
  };
};
