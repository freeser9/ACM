 canvas = document.getElementById("chgame");
 int = canvas.getContext("2d");

GR = () => (Math.random() * 7) | 0;
 updateDot = (x, y, point) => {
   VarX = Math.min(x, point.x) + (Math.max(x, point.x) - Math.min(x, point.x)) / 2;
   VarY = Math.min(y, point.y) + (Math.max(y, point.y) - Math.min(y, point.y)) / 2;
  return { x: VarX, y: VarY };
};
let ctr=0;
 createDot = obj => {
  int.beginPath();
  int.lineWidth = 1;
  int.strokeStyle = document.getElementById("colour").value;
  int.arc(obj.x, obj.y, 1, 0, 2 * Math.PI, false);
  int.stroke();
  
  document.getElementById("counter").innerHTML = ctr++;
};

 pts = [
  { x: canvas.width / 2, y: 5 },
  { x: 5, y: canvas.height - 5 },
  { x: canvas.width - 5, y: canvas.height - 5 }
];

 set1 = number => {
   x = canvas.width / 4;
   y = canvas.height / 2;
  for ( i = 0; i < number; i++) {

    createDot({ x, y });
     random = GR();
     currD = random == 1 || random == 2
        ? updateDot(x, y, pts[0])
        : random == 3 || random == 4
        ? updateDot(x, y, pts[1])
        : updateDot(x, y, pts[2]);
    x = currD.x;
    y = currD.y;

  }
};
function start() {
  
   time = 0;
   timer = setInterval(() => {
if (time >= 500) return clearInterval(timer);
    set1(500);
    time++;

  }, 500);
     
    }
    function stop() {
      return clearInterval(timer);
    }







