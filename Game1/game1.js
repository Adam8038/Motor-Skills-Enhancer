let targetShape = [];
let triangleShape = [];
let circleShape = [];
let tracedPoints = [];
let pointSize = 5;
let isDrawing = false;
let score = 0;
let game1CurrentLevel = 0; 
function game1Preload() {
  
}

function game1Setup() {
  currentActivity = 1;
  createCanvas(windowWidth, windowHeight);
  background('blue');
  setupShapes();
  game1Draw();
  onlyMMButton();
}

function setupShapes() {
  setupTargetShape();
  setupTriangleShape();
  setupCircleShape();
}

function setupTargetShape() {
  let targetSize = 100;
  let targetX = (width - targetSize) / 2;
  let targetY = (height - targetSize) / 2;
  targetShape = createRectangleShape(targetX, targetY, targetSize);
}

function createRectangleShape(x, y, size) {
  let shape = [];
  // Top edge
  for (let i = x; i <= x + size; i += pointSize) {
    shape.push(createVector(i, y));
  }
  // Right edge
  for (let j = y + pointSize; j <= y + size - pointSize; j += pointSize) {
    shape.push(createVector(x + size, j));
  }
  // Bottom edge
  for (let i = x + size; i >= x; i -= pointSize) {
    shape.push(createVector(i, y + size));
  }
  // Left edge
  for (let j = y + size - pointSize; j >= y + pointSize; j -= pointSize) {
    shape.push(createVector(x, j));
  }
  return shape;
}


function setupTriangleShape() {
  let triangleSize = 100;
  let triangleX = 100;
  let triangleY = 100;
  triangleShape = createTriangleShape(triangleX, triangleY, triangleSize);
}

function setupCircleShape() {
  let circleRadius = 50;
  let circleCenter = createVector(width / 2, height / 2);
  circleShape = createCircleShape(circleCenter, circleRadius);
}

function createRectangleShape(x, y, size) {
  let shape = [];
  for (let i = x; i < x + size; i += pointSize) {
    shape.push(createVector(i, y));
    shape.push(createVector(i, y + size));
  }
  for (let j = y; j < y + size; j += pointSize) {
    shape.push(createVector(x, j));
    shape.push(createVector(x + size, j));
  }
  return shape;
}

function createTriangleShape(x, y, size) {
  let height = size * sqrt(3) / 2;
  return [
    createVector(x, y + height),
    createVector(x + size, y + height),
    createVector(x + size / 2, y)
  ];
}

function createCircleShape(center, radius) {
  let shape = [];
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    let x = center.x + cos(angle) * radius;
    let y = center.y + sin(angle) * radius;
    shape.push(createVector(x, y));
  }
  return shape;
}

function game1Draw() {
  background('#367588');
  drawShapeBasedOnLevel();
  drawTracedPoints();
  displayScore();
}

function drawShapeBasedOnLevel() {
  switch (game1CurrentLevel) {
    case 0:
      drawShape(targetShape);
      break;
    case 1:
      drawShape(triangleShape);
      break;
    case 2:
      drawShape(circleShape);
      break;
  }
}

function drawShape(shape) {
  noFill();
  stroke(150);
  beginShape();
  for (let point of shape) {
    vertex(point.x, point.y);
  }
  endShape(CLOSE);
}

function drawTracedPoints() {
  fill(0);
  noStroke();
  tracedPoints.forEach(point => {
    ellipse(point.x, point.y, pointSize);
  });
}

function displayScore() {
  textAlign(RIGHT);
  textSize(20);
  text("Score: " + score, width - 10, 20);
}

function game1MousePressed() {
  isDrawing = true;
  tracedPoints.push(createVector(mouseX, mouseY));
}

function mouseDragged() {
  if (isDrawing) {
    tracedPoints.push(createVector(mouseX, mouseY));
  }
}

function game1MouseReleased() {
  isDrawing = false;
  score = calculateScore();
  tracedPoints = [];
}

function calculateScore() {
  let totalDistance = 0;
  let shape;
  if (game1CurrentLevel === 0) {
    shape = targetShape;
  } else if (game1CurrentLevel === 1) {
    shape = triangleShape;
  } else if (game1CurrentLevel === 2) {
    shape = circleShape;
  }

  // For each traced point, find the closest point on the target shape and add up the distances
  for (let tracedPoint of tracedPoints) {
    let closestDistance = Infinity;
    for (let targetPoint of shape) {
      let distance = p5.Vector.dist(tracedPoint, targetPoint);
      if (distance < closestDistance) {
        closestDistance = distance;
      }
    }
    // Add the closest distance to the total distance
    totalDistance += closestDistance;
  }

  // The lower the total distance, the higher the score should be
  let maxDistance = pointSize * shape.length; // This assumes the max distance to be the length of the shape times the pointSize
  let score = max(0, maxDistance - totalDistance); // Ensure score is not negative

  // Normalize the score, for example, to be out of 100
  let normalizedScore = map(score, 0, maxDistance, 0, 100);

  return normalizedScore;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    game1CurrentLevel = (game1CurrentLevel - 1 + 3) % 3;
    resetLevel();
  } else if (keyCode === RIGHT_ARROW) {
    game1CurrentLevel = (game1CurrentLevel + 1) % 3;
    resetLevel();
  }
}

function resetLevel() {
  tracedPoints = [];
  score = 1000; 
}
