let game4Lvl1Button, game4Lvl2Button, game4Lvl3Button, g4LevelSelect
let game4CurrentLevel = 0;
let draggables = [];
let draggablesCreated =false;
let game4Winner = false;
let game4Loaded = false;
let game4TimerValue = 120;
let game4TimerLoaded = false;
let game4BG;

function game4Preload(){

  game4Lvl1Button = createImg('libraries/lvl1Button.png');
  game4Lvl1Button.position(windowWidth -200, 0);
  game4Lvl1Button.mousePressed(game4Lvl1Draw);

  game4Lvl2Button = createImg('libraries/lvl2Button.png');
  game4Lvl2Button.position(windowWidth -200, windowHeight/3 +50);
  game4Lvl2Button.mousePressed(game4Lvl2Draw);
  

  game4Lvl3Button = createImg('libraries/lvl3Button.png');
  game4Lvl3Button.position(windowWidth -200, windowHeight-200);
  game4Lvl3Button.mousePressed(game4Lvl3Draw);

  g4LevelSelect = createImg('libraries/levelSelect.png');
  g4LevelSelect.position(0, 400);
  g4LevelSelect.mousePressed(game4LvlSelect);
  g4LevelSelect.hide();

  setInterval(game4TimeIt, 1000);
  
  game4BG = loadImage("libraries/stackingBG.png");
  hideGame4LvlButtons();
}


function game4Setup() {
  
  createCanvas(windowWidth, windowHeight);
  currentActivity = 4;
  game4Loaded = true;
  
  showGame4LvlButtons();
  background(game4BG);

  textSize(55);
  game4TimerLoaded = true;

  strokeWeight(2);
  game4TimerLoaded = true;
  onlyMMButton();
}

function game4Draw(){
  
  
  switch (game4CurrentLevel) {
    case 1: game4Lvl1Draw(); break;
    case 2: game4Lvl2Draw(); break;
    case 3: game4Lvl3Draw(); break;
  }
}



function game4Lvl1Draw() {

  if (!draggablesCreated){
    createDraggables(3);
    draggablesCreated = true;
    }
  
  if(game4CurrentLevel != 1){
    game4CurrentLevel = 1;
  }
  g4Gameplay();
}

function game4Lvl2Draw() {
  if(game4CurrentLevel != 2){
    game4CurrentLevel = 2;
  }

  if (!draggablesCreated){
    createDraggables(6);
    draggablesCreated = true;
    }
  g4Gameplay();
}

function game4Lvl3Draw() {
  if(game4CurrentLevel != 3){
    game4CurrentLevel = 3;
  }

  if (!draggablesCreated){
    createDraggables(10);
    draggablesCreated = true;
    }

  g4Gameplay();
  
}

function createDraggables(n) {
  for (let i = 0; i < n; i++) {
    let x = random(50, width - 50);  // Random x position
    let y = random(50, height - 50); // Random y position
    let w = 50; // Width of the rectangle
    let h = 50; // Height of the rectangle
    draggables.push(new Draggable(x, y, w, h));
  }
}

function game4MousePressed(){
  if(game4CurrentLevel > 0 ){
    for (let draggable of draggables) {
      draggable.pressed();

    }
  }
  console.log(draggables);
}

function game4MouseReleased(){
  if(game4CurrentLevel > 0 ){
    for (let draggable of draggables) {
      draggable.released();
      
    }
    game4checkWinCondition();
  }
}


function game4Reset(){
  game4CurrentLevel = 0;
  hideGame4LvlButtons();
  game4Winner = false;
  draggablesCreated = false;
  g4LevelSelect.hide();
  clearDraggables();
  
}



function hideGame4LvlButtons() {
  game4Lvl1Button.hide();
  game4Lvl2Button.hide();
  game4Lvl3Button.hide();
  
}

function showGame4LvlButtons() {
  game4Lvl1Button.show();
  game4Lvl2Button.show();
  game4Lvl3Button.show();
  
}

function game4LvlSelect(){
  game4Reset();
  game4Setup();
}

function game4Feedback(){

  textSize(42);
  fill('white');
  
  text("You can do this!", 400, 100);

  text("Stack the block vertically!", 40 ,300);
}

function game4TimeIt() {
  if (game4TimerValue > 0) {
    game4TimerValue--;
  }
}

function game4checkWinCondition() {
  // tolerance for how close x positions should be to consider draggables aligned
  const xTolerance = 5;
  // tolerance for y positioning to allow slight gaps
  const yTolerance = 5;

  let baseX = draggables[0].x;  // Use the first draggable's x as the base for comparison

  // Check if all draggables are aligned vertically
  const areVerticallyAligned = draggables.every(d => Math.abs(d.x - baseX) <= xTolerance);

  if (!areVerticallyAligned) {
    console.log("Draggables are not aligned vertically.");
    return false;
  }

  // Check if draggables are stacked by sorting them by y and checking the gaps
  let sortedByY = draggables.slice().sort((a, b) => a.y - b.y);
  let areStacked = true;
  for (let i = 1; i < sortedByY.length; i++) {
    // Allow for a small gap (defined by yTolerance) plus the height of each draggable
    if (sortedByY[i].y - (sortedByY[i - 1].y + sortedByY[i - 1].h) > yTolerance) {
      areStacked = false;
      break;
    }
  }

  if (areStacked) {
    console.log("Congratulations! You have stacked all draggables correctly.");
    game4Winner = true;
    return true;
  } else {
    console.log("Draggables are not properly stacked.");
    return false;
  }
}

function game4WinScreen(){
    background(winningScreen);
    textSize(48);
    getScore(game4TimerValue);
    fill('white');
    text("Time left:" + game4TimerValue, 40, 230);
    
    game4Reset();
    g4LevelSelect.show();
    clearDraggables();
}


function clearDraggables() {
  draggables = [];  
}

function g4Gameplay(){
  background(gameBG);
  game4Feedback(); 

  if(game4TimerValue === 0){
    game2LoserMenu();
  }

  if(game4TimerLoaded === true && game4TimerValue < 120){
    game4TimerValue = 120;
    game4TimerLoaded = false;
  }

  

  for (let draggable of draggables) {
    
    draggable.over();
    draggable.update();
    draggable.show();
    
  }
  
  if (game4TimerValue >= 0) {
    fill('white');
    text("Time left:" + game4TimerValue, 40, 230);
  }

  if(game4Winner === true){
    game4WinScreen();
  }

  if(game4TimerLoaded === true && game4TimerValue < 120){
    game4TimerValue = 120;
    game4TimerLoaded = false;
  }

  hideGame4LvlButtons();
}


/////////////////////////////////////////////////////////////////////////////Below is the draggable class to create draggable objects//////////////////////////////////////////////



class Draggable {
  constructor(x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}