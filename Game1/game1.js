let shapePoints = []; // Array to store points of the shape
let shadowPoints = []; // Array to store points of the shadow
let targetPoints = []; // Array to store points of the target shape
let isDragging = false; // Flag to indicate mouse dragging
let maxDistance = 10; // Maximum distance to count as tracing the shape
let shapeSessions = []; 
let currentShape = [];
let startNewDrag = false;
let game1TimerValue = 30;
let game1TimerLoaded = false;

let game1Lvl1Button, game1Lvl2Button ,game1Lvl3Button, drawingBG;
let game1Loaded = false;

let game1CurrentLevel = 0;

function game1Preload() {
  // Preload necessary assets if any
  game1Lvl1Button = createImg('libraries/lvl1Button.png');
  game1Lvl1Button.position(windowWidth -200, 0);
  game1Lvl1Button.mousePressed(game1Lvl1Draw);

  game1Lvl2Button = createImg('libraries/lvl2Button.png');
  game1Lvl2Button.position(windowWidth -200, windowHeight/3 +50);
  game1Lvl2Button.mousePressed(game1Lvl2Draw);
  

  game1Lvl3Button = createImg('libraries/lvl3Button.png');
  game1Lvl3Button.position(windowWidth -200, windowHeight-200);
  game1Lvl3Button.mousePressed(game1Lvl3Draw);

  

  drawingBG =loadImage("libraries/drawingBG.png");

  setInterval(game1TimeIt, 1000);

  game1HideButtons();
}

function setupTargetShape() {
  // Define a triangle as the target shape
  if(game1CurrentLevel === 1){
  targetPoints.push(createVector(width / 2, height / 4));
  targetPoints.push(createVector(width / 4, 3 * height / 4));
  targetPoints.push(createVector(3 * width / 4, 3 * height / 4));
  }

  // Define a square as the target shape for level 2
  if(game1CurrentLevel === 2){
  targetPoints.push(createVector(width / 4, height / 4));
  targetPoints.push(createVector(width / 4, 3 * height / 4));
  targetPoints.push(createVector(3 * width / 4, 3 * height / 4));
  targetPoints.push(createVector(3 * width / 4, height / 4));
  }

  // Define a star as the target shape for level 3
  if(game1CurrentLevel === 3){
  const starRadius = min(width, height) / 4;
  const cx = width / 2;
  const cy = height / 2;
  const numPoints = 5;
  const angleIncrement = TWO_PI / numPoints;
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = i * angleIncrement;
    const radius = i % 2 === 0 ? starRadius : starRadius / 2;
    const x = cx + cos(angle) * radius;
    const y = cy + sin(angle) * radius;
    targetPoints.push(createVector(x, y));
  }
}
}

function game1Setup() {

  game1ShowButtons();
  createCanvas(windowWidth, windowHeight);
  background(drawingBG);
  setupTargetShape();
  currentActivity = 1;
  onlyMMButton(); // Ensure this function is defined in your project
  game1Loaded = true;
  game1TimerLoaded = true;
  strokeWeight(2);

  
}

function game1Draw() {
  switch(game1CurrentLevel){
    case 1: game1Lvl1Draw(); break;
    case 2: game1Lvl2Draw(); break;
    case 3: game1Lvl3Draw(); break;
    case 4: game1Winscreen(); break;
  }
}

function game1Lvl1Draw(){

  background(gameBG); // Set background color
  
  if(game1CurrentLevel != 1){
    game1CurrentLevel = 1;
    setupTargetShape();
  }
  game1HideButtons();

  // Draw the target shape
  noFill();
  strokeWeight(10); // Increase shape thickness
  stroke(200, 0, 0); // Red color for target shape
  beginShape();
  for (let i = 0; i < targetPoints.length; i++) {
    vertex(targetPoints[i].x, targetPoints[i].y);
  }
  endShape(CLOSE);

  // Draw shadow
  noFill();
  strokeWeight(10); // Increase pencil thickness
  stroke(150, 150, 150, 100); // Semi-transparent gray
  beginShape();
  for (let i = 0; i < shadowPoints.length; i++) {
    vertex(shadowPoints[i].x, shadowPoints[i].y);
  }
  endShape();

  // Draw user's shape
  noFill();
  strokeWeight(10); // Increase pencil thickness
  stroke(0); // Black color for user's shape
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape();

  if(game1TimerLoaded === true && game1TimerValue < 30){
    game1TimerValue = 30;
    game1TimerLoaded = false;
  }

  game1DisplayTimer();

  if(game1TimerValue === 0){
    game1CurrentLevel = 4;
  }
 

  // Display score
  let score = calculateScore();
  fill(0);
  strokeWeight(2);
  textSize(30);
  fill('white');
  text("Score: " + score.toFixed(2) + "%", 200, 40);
}

function game1Lvl2Draw(){

  background(gameBG); // Set background color
  
  if(game1CurrentLevel != 2){
    game1CurrentLevel = 2;
    setupTargetShape();
  }
  game1HideButtons();

  // Draw the target shape
  noFill();
  strokeWeight(10); // Increase shape thickness
  stroke(200, 0, 0); // Red color for target shape
  beginShape();
  for (let i = 0; i < targetPoints.length; i++) {
    vertex(targetPoints[i].x, targetPoints[i].y);
  }
  endShape(CLOSE);

  // Draw shadow
  noFill();
  strokeWeight(5); // Increase pencil thickness
  stroke(150, 150, 150, 100); // Semi-transparent gray
  beginShape();
  for (let i = 0; i < shadowPoints.length; i++) {
    vertex(shadowPoints[i].x, shadowPoints[i].y);
  }
  endShape();

  // Draw user's shape
  noFill();
  strokeWeight(5); // Increase pencil thickness
  stroke(0); // Black color for user's shape
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape();

  drawShapeSessions();

  if(game1TimerLoaded === true && game1TimerValue < 30){
    game1TimerValue = 30;
    game1TimerLoaded = false;
  }

  if(game1TimerValue === 0){
    game1CurrentLevel = 4;
  }

  game1DisplayTimer();

  // Display score
  let score = calculateScore();
  fill(0);
  strokeWeight(2);
  fill('white');
  textSize(30);
  text("Score: " + score.toFixed(2) + "%", 200, 40);
  
}

function game1Lvl3Draw(){

  background(gameBG); // Set background color
  
  if(game1CurrentLevel != 3){
    game1CurrentLevel = 3;
    setupTargetShape();
  }
  game1HideButtons();

  // Draw the target shape
  noFill();
  strokeWeight(10); // Increase shape thickness
  stroke(200, 0, 0); // Red color for target shape
  beginShape();
  for (let i = 0; i < targetPoints.length; i++) {
    vertex(targetPoints[i].x, targetPoints[i].y);
  }
  endShape(CLOSE);

  // Draw shadow
  noFill();
  strokeWeight(5); // Increase pencil thickness
  stroke(150, 150, 150, 100); // Semi-transparent gray
  beginShape();
  for (let i = 0; i < shadowPoints.length; i++) {
    vertex(shadowPoints[i].x, shadowPoints[i].y);
  }
  endShape();

  // Draw user's shape
  noFill();
  strokeWeight(5); // Increase pencil thickness
  stroke(0); // Black color for user's shape
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape();

  if(game1TimerLoaded === true && game1TimerValue < 30){
    game1TimerValue = 30;
    game1TimerLoaded = false;
  }

  game1DisplayTimer();

  if(game1TimerValue === 0){
    game1CurrentLevel = 4;
  }


  drawShapeSessions();
  // Display score
  let score = calculateScore();
  fill(0);
  strokeWeight(2);
  fill('white');
  textSize(30);
  text("Score: " + score.toFixed(2) + "%", 200, 40);
  
}


function game1MousePressed() {
  // Ensure that this function only triggers during active game levels
  if (game1CurrentLevel !== 0 && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    isDragging = true;
    startNewDrag = true; // Signal that a new drag session is starting
    currentShape = []; // Start fresh for the new shape
  }
}



function game1MouseDragged() {
  if (game1CurrentLevel !== 0 && isDragging && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (startNewDrag) {
      currentShape.push(createVector(mouseX, mouseY)); // Add the first point of the new drag session
      startNewDrag = false; // Reset the flag after the first point is added
    } else {
      currentShape.push(createVector(mouseX, mouseY)); // Continue adding points
    }
  }
}


function game1MouseReleased() {
  if (game1CurrentLevel !== 0 && isDragging) {
    if (currentShape.length > 0) {
      shapeSessions.push([...currentShape]); // Clone currentShape to shapeSessions
      currentShape = []; // Clear current shape after pushing
    }
    isDragging = false;
    startNewDrag = false; // Reset flag to ensure fresh start on next drag
  }
}



function game1Winscreen(){
  if(game1CurrentLevel != 4){
    game1CurrentLevel = 4;
  }
  background(winningScreen);

  let finalScore = calculateScore();


  if(finalScore> 95){
    strokeWeight(2);
    textSize(72);
    text("Score: " + finalScore.toFixed(2) + "%", 200, 100);

    text("Grade = A+", 200, 250);
  }else if(finalScore)
  {
    strokeWeight(2);
    textSize(72);
    text("Score: " + finalScore.toFixed(2) + "%", 200, 100);

    text("Grade = A", 200, 250);
  }else if(finalScore){
    strokeWeight(2);
    textSize(72);
    text("Score: " + finalScore.toFixed(2) + "%", 200, 100);

    text("Grade = B", 200, 250);
  }else if(finalScore){
    strokeWeight(2);
    textSize(72);
    text("Score: " + finalScore.toFixed(2) + "%", 200, 100);

    text("Grade = C", 200, 250);
  
}

}


function resetGame1() {
  // Reset game variables
  shapePoints = [];      // Reset points of the shape drawn by the user
  shadowPoints = [];     // Clear shadow points
  targetPoints = [];     // Clear target shape points
  shapeSessions = [];    // Clear all recorded shape sessions
  currentShape = [];     // Clear the current shape being drawn

  game1CurrentLevel = 0; // Reset to no level selected
  isDragging = false;    // Reset dragging flag
  startNewDrag = false;  // Reset flag to indicate start of new drag

  game1Loaded = false;   // Flag to indicate if the game resources are loaded

  // Call function to hide game level buttons if visible
  game1HideButtons();

  // Clear the canvas and setup the environment         
}


// Function to draw all sessions of shapes
function drawShapeSessions() {
  noFill();
  strokeWeight(10); // Set the stroke weight for drawing
  stroke(0); // Set the stroke color (black for the user's shape)

  // Draw completed sessions
  for (let session of shapeSessions) {
    beginShape();
    for (let vec of session) {
      vertex(vec.x, vec.y);
    }
    endShape();
  }

  // Optionally draw the current shape if needed
  if (currentShape.length > 0 && isDragging) {
    beginShape();
    for (let vec of currentShape) {
      vertex(vec.x, vec.y);
    }
    endShape();
  }
}



function calculateScore() {
  let totalTraced = 0; // Total number of points traced along the shape
  shapePoints = []; // Reset shapePoints to gather all points

  // Accumulate all points from past sessions
  for (let session of shapeSessions) {
    shapePoints.push(...session);
  }

  // Include the current session in the scoring
  shapePoints.push(...currentShape);

  // Loop through each point in shapePoints to calculate the score
  for (let i = 0; i < shapePoints.length; i++) {
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
  return totalPoints > 0 ? (totalTraced / totalPoints) * 100 : 0;
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


function game1HideButtons(){
  game1Lvl1Button.hide();
  game1Lvl2Button.hide();
  game1Lvl3Button.hide();
}

function game1ShowButtons(){
  game1Lvl1Button.show();
  game1Lvl2Button.show();
  game1Lvl3Button.show();
}


function game1TimeIt() {
  if (game1TimerValue > 0) {
    game1TimerValue--;
  }
}

function game1DisplayTimer(){
  if (game1TimerValue >= 0) {
    strokeWeight(2);
    fill('white');
    textSize(32);
    text("Time left:" + game1TimerValue, 40, 230);
  }
}