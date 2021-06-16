// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function Ball() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.velX = random(1,8);
  this.velY = random(1,8);
  this.color =
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
  this.size = random(10, 20);
}
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
Ball.prototype.update = function() {
    if((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }
  var balls = [];
  function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0,0,width,height);
  
    while(balls.length < 2000) {
      var ball = new Ball();
      balls.push(ball);
    }
  
    for(i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }
  loop();