let circXCord =75;
let rectXCord = 300;
let q = 0;
let p = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  text("Ninos Toma", 75,200);
}

function draw() {
  text("ADAM WAS HERE", 20, 20);
  stroke("blue");
  fill("yellow");
  circle(circXCord,75,150);
  
  stroke("orange");
  fill("black");
  rect(rectXCord,300,100,100)
  
  stroke("yellow");
  fill("purple");
  triangle(250,250,200,200,250,200)
  
  if(q== 0)
  {
    if(circXCord != 325)
      {
        circXCord = circXCord + 0.5;
      }
    if(circXCord > 324)
      {
        q = 1;
      }
  }
  if(q == 1){
    if(circXCord != 75)
      {
        circXCord = circXCord - 0.5;
      }
    if(circXCord < 76)
      {
        q = 0;
      }
  }
  
  
  if(p == 0)
  {
    if(rectXCord != 0)
      {
        rectXCord = rectXCord - 0.5;
      }
    if(rectXCord < 1)
      {
        p = 1;
      }
  }
  if(p == 1){
    if(rectXCord != 300)
      {
        rectXCord = rectXCord + 0.5;
      }
    if(rectXCord > 299)
      {
        p = 0;
      }
  }
  
  
}