let blocks = [];
let selectedBlock = null;
let offset;
let targetPosition;

function setup() {
  createCanvas(400, 400);
  
  blocks.push(new Block(50, 300, color(255, 0, 0)));
  blocks.push(new Block(100, 300, color(0, 255, 0)));
  blocks.push(new Block(150, 300, color(0, 0, 255)));
  blocks.push(new Block(200, 300, color(255, 255, 0)));
  blocks.push(new Block(250, 300, color(255, 165, 0)));
  blocks.push(new Block(300, 300, color(255, 0, 255)));
  
  targetPosition = createVector(200, 150); // Define the target position
}

function draw() {
  background(220);
  
  // Draw target position
  fill(200, 200, 200);
  rect(targetPosition.x - 25, targetPosition.y - 25, 50, 50);
  
  for (let block of blocks) {
    block.show();
  }
  
  if (selectedBlock !== null) {
    selectedBlock.x = mouseX - offset.x;
    selectedBlock.y = mouseY - offset.y;
  }
  
  // Check if all blocks are within a certain distance from the target position
  let allBlocksStacked = blocks.every(block => {
    let distance = dist(block.x + block.width / 2, block.y + block.height / 2, targetPosition.x, targetPosition.y);
    return distance < 10; // Adjust the distance threshold as needed
  });
  
  if (allBlocksStacked) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Well done!", width / 2, height / 2);
  }
}

function mousePressed() {
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
