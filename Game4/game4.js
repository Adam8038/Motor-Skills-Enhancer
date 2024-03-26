let blocks = [];
let selectedBlock = null;
let offset;
let targetPosition;
let startGame = false;
let currentLevel = 1;
let maxLevel = 3;
let nextLevelButton;

function setup() {
  createCanvas(400, 400);

  targetPosition = createVector(200, 150); 

  setupLevel(currentLevel);
}

function setupLevel(level) {
  blocks = [];
  for (let i = 0; i < level + 3; i++) {
    blocks.push(new Block(50 + i * 50, 300, color(random(255), random(255), random(255))));
  }
}

function draw() {
  background(220);

  if (!startGame) {
    drawMenu();
    return;
  }

  
  fill(200, 200, 200);
  rect(targetPosition.x - 25, targetPosition.y - 25, 50, 50);

  for (let block of blocks) {
    block.show();
    if (block === selectedBlock) {
      block.x = mouseX - offset.x;
      block.y = mouseY - offset.y;
    }
  }

  
  let allBlocksStacked = blocks.every(block => {
    let distance = dist(block.x + block.width / 2, block.y + block.height / 2, targetPosition.x, targetPosition.y);
    return distance < 10; 
  });

  if (allBlocksStacked) {
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
    if (nextLevelButton) {
      nextLevelButton.remove();
      nextLevelButton = null;
    }
  }
}

function drawMenu() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Click to Start", width / 2, height / 2);
}

function mousePressed() {
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

function mouseReleased() {
  selectedBlock = null;
}

function nextLevel() {
  currentLevel++;
  setupLevel(currentLevel);
  if (nextLevelButton) {
    nextLevelButton.remove();
    nextLevelButton = null;
  }
}

class Block {
  constructor(x, y, color) {
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
