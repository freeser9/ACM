 canvas = document.getElementById("chgame");
 int = canvas.getContext("2d");
 width = canvas.width;
 height = canvas.height;
GR = () => (Math.random() * 5) |0
 updateDot = (x, y, point) => {
  // VarX = Math.min(x, point.x) + (Math.max(x, point.x) - Math.min(x, point.x)) / 2;
  // VarY = Math.min(y, point.y) + (Math.max(y, point.y) - Math.min(y, point.y)) / 2;
  VarX = 3*(x + point.x)/8
  VarY = 3*(y + point.y)/8
  return { x: VarX, y: VarY };
};
let ctr=0;
 createDot = obj => {
  int.beginPath();
  int.lineWidth = 1;
  int.strokeStyle = document.getElementById("colour").value;
  //int.arc(obj.x, obj.y, 1, 0, 2 * Math.PI, false);
  int.fillRect(obj.x, obj.y, 1, 1);
  int.stroke();
  
  document.getElementById("counter").innerHTML = ctr++;
};

 /* pts = [
  { x: canvas.width / 2, y: 5 },
  { x: 5, y: canvas.height - 5 },
  { x: canvas.width - 5, y: canvas.height - 5 }
];  */
pts = [
  {x: 250/500*width, y: 0},
  {x: 12/500*width, y: 173/300*height},
  {x: 103/500*width, y: 452/300*height},
  {x: 397/500*width, y: 452/300*height},
  {x: 488/500*width, y: 173/300*height}
];

 set1 = number => {
   x = canvas.width / 4;
   y = canvas.height / 2;
  for ( i = 0; i < number; i++) {

    createDot({ x, y});
     random = GR();
     /*currD = random == 1 ? updateDot(x, y, pts[0])
           :  random == 2 ?  updateDot(x, y, pts[1])
           :  random == 3 ?  updateDot(x, y, pts[2])
           :  random == 4 ?  updateDot(x, y, pts[3])
           :  random == 5 ?  updateDot(x, y, pts[4])  */
     currD = updateDot(x,y,pts[random]);      
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







