const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const grid = 15;
const paddleHeight = grid * 5; 
const maxPaddleY = canvas.height - grid - paddleHeight;


var paddleSpeed = 10;
var ballSpeed = 5;
requestAnimationFrame(loop);
const LP = {
  x: grid * 2,
  y: canvas.height / 2 - paddleHeight / 2,
  width: grid,
  height: paddleHeight,
  dy: 0
};
const RP = {
  x: canvas.width - grid * 3,
  y: canvas.height / 2 - paddleHeight / 2,
  width: grid,
  height: paddleHeight,
  dy: 0
};
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: grid,
  height: grid,

  
  resetting: false,

  dx: ballSpeed,
  dy: -ballSpeed
};
function collides(obj1, obj2) {
  return obj1.x < obj2.x + obj2.width &&
         obj1.x + obj1.width > obj2.x &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y;
}
function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);


  LP.y += LP.dy;
  RP.y += RP.dy;
  if (LP.y < grid) {
    LP.y = grid;
  }
  else if (LP.y > maxPaddleY) {
    LP.y = maxPaddleY;
  }

  if (RP.y < grid) {
    RP.y = grid;
  }
  else if (RP.y > maxPaddleY) {
    RP.y = maxPaddleY;
  }

  
  context.fillStyle = 'white';
  context.fillRect(LP.x, LP.y, LP.width, LP.height);
  context.fillRect(RP.x, RP.y, RP.width, RP.height);

  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y < grid) {
    ball.y = grid;
    ball.dy *= -1;
  }
  else if (ball.y + grid > canvas.height - grid) {
    ball.y = canvas.height - grid * 2;
    ball.dy *= -1;
  }
  if ( (ball.x < 0 || ball.x > canvas.width) && !ball.resetting) {
    ball.resetting = true;
    setTimeout(() => {
      ball.resetting = false;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
    }, 400);
  }
  if (collides(ball, LP)) {
    ball.dx *= -1;
    ball.x = LP.x + LP.width;
  }
  else if (collides(ball, RP)) {
    ball.dx *= -1;
    ball.x = RP.x - ball.width;
  }

  
  context.fillRect(ball.x, ball.y, ball.width, ball.height);
  context.fillStyle = 'lightgrey';
  context.fillRect(0, 0, canvas.width, grid);
  context.fillRect(0, canvas.height - grid, canvas.width, canvas.height);

    
  }

document.addEventListener('keydown', function(e) {

  // up arrow 
  if (e.which === 38) {
    RP.dy = -paddleSpeed;
  }
  // down arrow 
  else if (e.which === 40) {
    RP.dy = paddleSpeed;
  }

  // w 
  if (e.which === 87) {
    LP.dy = -paddleSpeed;
  }
  // a 
  else if (e.which === 83) {
    LP.dy = paddleSpeed;
  }
});

document.addEventListener('keyup', function(e) {
  if (e.which === 38 || e.which === 40) {
    RP.dy = 0;
  }

  if (e.which === 83 || e.which === 87) {
    LP.dy = 0;
  }
});

