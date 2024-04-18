let shapePoints = []; // Array to store points of the shape
let shadowPoints = []; // Array to store points of the shadow
let isDragging = false; // Flag to indicate mouse dragging

function game1Preload(){
  
}

function game1Setup() {
  createCanvas(windowWidth, windowHeight);
  currentActivity = 1;
  onlyMMButton();
}


function game1Draw() {
  background(220); // Set background color

  // Draw shadow
  noFill();
  stroke(150, 150, 150, 100); // Semi-transparent gray
  beginShape();
  for (let i = 0; i < shadowPoints.length; i++) {
    vertex(shadowPoints[i].x, shadowPoints[i].y);
  }
  endShape();

  // Draw shape
  noFill();
  stroke(0);
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape();
}

function game1MousePressed() {
  // Ensure that mouse press only triggers dragging if it starts within the canvas
  isDragging = true;
}

function game1MouseDragged() {
  if (isDragging) {
    // Add points to shadow
    shadowPoints.push(createVector(mouseX, mouseY));
    
    // Add points to shape
    shapePoints.push(createVector(mouseX, mouseY));
  }
}

function game1MouseReleased() {
  isDragging = false; // Stop dragging when mouse is released
}

