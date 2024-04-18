let shapePoints = [];
let shadowPoints = [];
let isDragging = false;

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
  stroke(150, 150, 150, 100); // Semi-transparent gray stroke
  noFill(); // No fill for the shapes
  beginShape();
  shadowPoints.forEach(point => {
    vertex(point.x, point.y); // Draw each point in the shadow
  });
  endShape(CLOSE);

  // Draw shape
  stroke(0); // Black stroke for the shape
  beginShape();
  shapePoints.forEach(point => {
    vertex(point.x, point.y); // Draw each point in the shape
  });
  endShape(CLOSE);
}

function game1MousePressed() {
  // Ensure that mouse press only triggers dragging if it starts within the canvas
  if (mouseX >= 0 && mouseX <= windowWidth && mouseY >= 0 && mouseY <= windowHeight) {
    isDragging = true;
    shapePoints = []; // Clear previous shape points
    shadowPoints = []; // Clear previous shadow points
  }
}

function game1MouseDragged() {
  if (isDragging) {
    const offsetX = 5; // Offset for shadow x-coordinate
    const offsetY = 5; // Offset for shadow y-coordinate
    shadowPoints.push(createVector(mouseX + offsetX, mouseY + offsetY));
    shapePoints.push(createVector(mouseX, mouseY));
  }
}

function game1MouseReleased() {
  isDragging = false; // Stop dragging when mouse is released
}