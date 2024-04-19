let shapePoints = []; // Array to store points of the shape
let shadowPoints = []; // Array to store points of the shadow
let targetPoints = []; // Array to store points of the target shape
let isDragging = false; // Flag to indicate mouse dragging
let maxDistance = 10; // Maximum distance to count as tracing the shape

function game1Preload() {
  // Preload necessary assets if any
}

function setupTargetShape() {
  // Define a simple triangle as the target shape
  targetPoints.push(createVector(width / 2, height / 4));
  targetPoints.push(createVector(width / 4, 3 * height / 4));
  targetPoints.push(createVector(3 * width / 4, 3 * height / 4));
}

function game1Setup() {
  createCanvas(windowWidth, windowHeight);
  setupTargetShape();
  currentActivity = 1;
  onlyMMButton(); // Ensure this function is defined in your project
}

function game1Draw() {
  background(220); // Set background color

  // Draw the target shape
  noFill();
  strokeWeight(5); // Increase shape thickness
  stroke(200, 0, 0); // Red color for target shape
  beginShape();
  for (let i = 0; i < targetPoints.length; i++) {
    vertex(targetPoints[i].x, targetPoints[i].y);
  }
  endShape(CLOSE);

  // Draw shadow
  noFill();
  strokeWeight(3); // Increase pencil thickness
  stroke(150, 150, 150, 100); // Semi-transparent gray
  beginShape();
  for (let i = 0; i < shadowPoints.length; i++) {
    vertex(shadowPoints[i].x, shadowPoints[i].y);
  }
  endShape();

  // Draw user's shape
  noFill();
  strokeWeight(3); // Increase pencil thickness
  stroke(0); // Black color for user's shape
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape();

  // Display score
  let score = calculateScore();
  fill(0);
  textSize(20);
  text("Score: " + score.toFixed(2) + "%", 200, 40);
}

function game1MousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    isDragging = true;
  }
}

function game1MouseDragged() {
  if (isDragging) {
    shadowPoints.push(createVector(mouseX, mouseY)); // Add points to shadow
    shapePoints.push(createVector(mouseX, mouseY)); // Add points to shape
  }
}

function calculateScore() {
  let score = 0;
  let totalTraced = 0; // Total number of points traced along the shape

  // Loop through each point in the user's shape
  for (let i = 0; i < shapePoints.length; i++) {
    // Check if the point is close to any line segment of the target shape
    for (let j = 0; j < targetPoints.length; j++) {
      let nextIndex = (j + 1) % targetPoints.length;
      let dist = distToSegment(shapePoints[i], targetPoints[j], targetPoints[nextIndex]);
      if (dist < maxDistance) {
        totalTraced++;
        break; // Exit inner loop if traced along the shape
      }
    }
  }

  // Calculate the score as a percentage of points traced along the shape
  let totalPoints = shapePoints.length;
  score = (totalTraced / totalPoints) * 100;
  return score;
}

// Function to calculate the distance from a point to a line segment
function distToSegment(p, v, w) {
  let l2 = sq(v.x - w.x) + sq(v.y - w.y); // Length squared of the line segment
  if (l2 === 0) return dist(p.x, p.y, v.x, v.y); // Return distance to single point if line segment has zero length
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2; // Parametric value of projection of point onto the line segment
  t = constrain(t, 0, 1); // Clamp t to be within the segment bounds
  let projection = createVector(v.x + t * (w.x - v.x), v.y + t * (w.y - v.y)); // Projection of the point onto the line segment
  return dist(p.x, p.y, projection.x, projection.y); // Return distance from point to projection
}

function game1MouseReleased() {
  isDragging = false; // Stop dragging when mouse is released
}
