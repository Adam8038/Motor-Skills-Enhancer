let targetShape = [];
let tracedPoints = [];
let pointSize = 5;
let isDrawing = false;
let score = 0;

function game1Preload(){
  // Preload resources if necessary
}

function game1Setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Define the target shape (square)
  let targetSize = 100;
  let targetX = (width - targetSize) / 2;
  let targetY = (height - targetSize) / 2;

  for (let game1x = targetX; game1x < targetX + targetSize; game1x += pointSize) {
    targetShape.push(createVector(game1x, targetY));
  }
  for (let game1y = targetY; game1y < targetY + targetSize; game1y += pointSize) {
    targetShape.push(createVector(targetX + targetSize, game1y));
  }
  for (let game1x = targetX + targetSize; game1x > targetX; game1x -= pointSize) {
    targetShape.push(createVector(game1x, targetY + targetSize));
  }
  for (let game1y = targetY + targetSize; game1y > targetY; game1y -= pointSize) {
    targetShape.push(createVector(targetX, game1y));
  }
}

function game1Draw() {
  background(220);
  
  // Draw target shape (shadow or frame)
  noFill();
  stroke(150);
  beginShape();
  for (let point of targetShape) {
    vertex(point.x, point.y);
  }
  endShape(CLOSE);  // Ensure the shape is closed
}
