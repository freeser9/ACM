 canvas = document.getElementById("chgame");
 int = canvas.getContext("2d");
 width = canvas.width;
 height = canvas.height;
GR = () => (Math.random() * var1) |0
 updateDot = (x, y, point) => {
  // VarX = Math.min(x, point.x) + (Math.max(x, point.x) - Math.min(x, point.x)) / 2;
  // VarY = Math.min(y, point.y) + (Math.max(y, point.y) - Math.min(y, point.y)) / 2;
  VarX = var2*(x + point.x)/var3
  VarY = var2*(y + point.y)/var3
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
let var2 = 0;
let var3 = 0;
let var1 = 0;
function start() {
  var1 = document.getElementById("myNumber").value;
  var2 = document.getElementById("myNumber2").value;
  var3 = document.getElementById("myNumber3").value;
  if(var2<0|| var3<=0 || var1>10 || (var2>var3))
   { alert("Invalid Input!");
 clearInterval(timer);
}
 
 if(var1==1||var1==2||var1==3||var1==5)
 {
 pts = [
  {x: 250/500*width, y: 0},
  {x: 12/500*width, y: 173/500*height},
  {x: 488/500*width, y: 173/500*height},
  {x: 103/500*width, y: 452/500*height},
  {x: 397/500*width, y: 452/500*height}
  
];
}
  else if(var1==4)
  {
    
   pts = [
    {x: 500, y:0},
    {x: 250, y:250},
    {x: 750, y:250},
    {x: 500, y:500},
    ];

  }
  else if (var1==6)
  {
    pts = [
    {x: 500, y:0},
    {x: 250, y:125},
    {x: 750, y:125},
    {x: 250, y:375},
    {x: 750, y:375},
    {x: 500, y:500}
    ]
  }
    else if (var1==7)
  {
    pts = [
    {x: 250, y:50},
    {x: 94, y:125},
    {x: 55, y:295},
    {x: 163, y:430},
    {x: 337, y:430},
    {x: 445, y:295},
    {x: 406, y:125},
    ]
  }
    else if (var1==8)
  {
    pts = [
    {x: 500, y:0},
    {x: 250, y:250},
    {x: 750, y:250},
    {x: 300, y:100},
    {x: 700, y:100},
    {x: 300, y:400},
    {x: 700, y:400},
    {x: 500, y:500}
    ]
  }
    else if (var1==9)
  {
    pts = [
    {x: 250, y:50},
    {x: 121, y:97},
    {x: 53, y:215},
    {x: 77, y:350},
    {x: 182, y:438},
    {x: 318, y:438},
{x: 423, y:350},
{x: 447, y:215},
{x: 379, y:97}
    ]
  }
    else if (var1==10)
  {
    pts = [
    {x: 312, y:60},
    {x: 188, y:60},
    {x: 88, y:132},
    {x: 50, y:250},
    {x: 88, y:368},
    {x: 188, y:440},
    {x: 312, y:440},
    {x: 412, y:368},
    {x: 450, y:250},
    {x: 412, y:132}
    ]
  }
  
  

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



