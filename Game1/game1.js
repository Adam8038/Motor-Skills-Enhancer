let targetShape = [];
let tracedPoints = [];
let pointSize = 5;
let isDrawing = false;
let score = 0;

function setup() {
  createCanvas(400, 400);
  
  // Define the target shape (square)
  let targetSize = 100;
  let targetX = (width - targetSize) / 2;
  let targetY = (height - targetSize) / 2;
  for (let x = targetX; x < targetX + targetSize; x += pointSize) {
    targetShape.push(createVector(x, targetY));
  }
  for (let y = targetY; y < targetY + targetSize; y += pointSize) {
    targetShape.push(createVector(targetX + targetSize, y));
  }
  for (let x = targetX + targetSize; x > targetX; x -= pointSize) {
    targetShape.push(createVector(x, targetY + targetSize));
  }
  for (let y = targetY + targetSize; y > targetY; y -= pointSize) {
    targetShape.push(createVector(targetX, y));
  }
}

function draw() {
  background(220);
  
  // Draw target shape (shadow or frame)
  noFill();
  stroke(150);
  beginShape();
  for (let point of targetShape) {
    vertex(point.x, point.y);
  }
}