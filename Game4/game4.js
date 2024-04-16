let blocks = [];
let selectedBlock = null;
let offset;
let targetPosition;
let startGame = false;
let currentLevel = 0;
let maxLevel = 3;
let nextLevelButton;
let backButton;
let timerDuration = 300; 
let timer = timerDuration;
let game4LvlButton;



function game4Setup() {
  
  
  createCanvas(windowWidth, windowHeight);
  targetPosition = createVector(200, 150);

  game4LvlButton = createImg('libraries/lvl1Button.png');
  game4LvlButton.position(width/2, height /2);
  game4LvlButton.mousePressed(game4Level1Setup);

  onlyMMButton();


  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Click to Start", width / 2, height / 2);

  setupLevel(currentLevel);
  
  
  
}

function setupLevel(level) {
  blocks = [];
  for (let i = 0; i < level + 3; i++) {
    blocks.push(new Block(50 + i * 50, 300, color(random(255), random(255), random(255))));
  }
}

function game4SetupWrapper() {
  clear();
  game4Setup(); // This should also set startGame to true to begin the game.
  currentActivity = 4;
  setupLevel(currentLevel);
}

function game4Level1Setup(){
  currentLevel = 1;
}

function game4Draw(){
  switch(currentLevel){
    case 1:
      game4Level1draw();
      break;
  }
}

function game4Level1draw() {

  
  setupLevel(currentLevel);


  if (currentLevel <= maxLevel) {
    fill(200, 200, 200);
    rect(targetPosition.x - 25, targetPosition.y - 25, 50, 50);
  }

  if (currentLevel <= maxLevel) {
    for (let block of blocks) {
      block.show();
      if (block === selectedBlock) {
        block.x = mouseX - offset.x;
        block.y = mouseY - offset.y;
      }
    }
  }

  if (currentLevel <= maxLevel) {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Time Left: " + Math.ceil(timer) + "s", width / 2, 20);
    timer -= 1 / 60; 

    if (timer <= 0) {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Time's up!", width / 2, height / 2);
      noLoop(); 
    }
  }

  let allBlocksStacked = blocks.every(block => {
    let distance = dist(block.x + block.width / 2, block.y + block.height / 2, targetPosition.x, targetPosition.y);
    return distance < 10; 
  });

  if (allBlocksStacked) {
    if (currentLevel <= maxLevel) {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Well done!", width / 2, height / 2);

      if (!nextLevelButton) {
        nextLevelButton = createButton("Next Level");
        nextLevelButton.position(width / 2 - 50, height / 2 + 50);
        nextLevelButton.mousePressed(nextLevel);
      }
    } else {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text("Well done!", width / 2, height / 2);
      text("Game Over", width / 2, height / 2 + 50);
      noLoop(); 
    }
  } else {
    if (nextLevelButton) {
      nextLevelButton.remove();
      nextLevelButton = null;
    }
  }

  if (currentLevel > maxLevel) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Game Over", width / 2, height / 2);

    
  } 
  
}



function game4MousePressed() {
  if (!startGame) {
    startGame = true;
    return;
  }

  for (let block of blocks) {
    if (block.contains(mouseX, mouseY)) {
      selectedBlock = block;
      offset = createVector(mouseX - block.x, mouseY - block.y);
      break;
    }
  }
}

function game4MouseReleased() {
  selectedBlock = null;
}

function nextLevel() {
  currentLevel++;
  setupLevel(currentLevel);
  if (nextLevelButton) {
    nextLevelButton.remove();
    nextLevelButton = null;
  }
  timer = timerDuration; 
}



class Block {
  constructor(game1x, game1y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = 50;
    this.height = 50;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  contains(x, y) {
    return this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
  }
}