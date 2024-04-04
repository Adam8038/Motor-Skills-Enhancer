let game3CurrentLevel = 0;
let game3Lvl1, game3Lvl2, game3Lvl3;
let buttonX = 50, buttonY = 350;


var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset

let buttonImage, shirtImage, guyButtoningImage

function game3Preload() {
  buttonImage = loadImage("Game3/redButton.png");
  shirtImage = loadImage("Game3/shirtNoButtons.png");
}

function game3Setup() {
  background('#C8A2C8');
  // createCanvas(windowWidth, windowHeight);
  currentActivity = 3;

  x = 100;
  y = 300;

  // Dimensions
  w = 100;
  h = 100;

  
  textSize(24);
  text("Welcome to the buttoning game! Pick a level", 450, 100);

  // Create the level buttons
  game3Lvl1Button = createImg('libraries/lvl1Button.png');
  game3Lvl1Button.position(200, 300);
  game3Lvl1Button.mousePressed(game3Lvl1Draw);

  game3Lvl2Button = createImg('libraries/lvl2Button.png');
  game3Lvl2Button.position(500, 300);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);

  game3Lvl3Button = createImg('libraries/lvl3Button.png');
  game3Lvl3Button.position(800, 300);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);


  // Show and hide relevant buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
  game3Lvl1Button.show();
  game3Lvl2Button.show();
  game3Lvl3Button.show();
  
}

function game3MousePressed() {
  
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    console.log(mouseX)

    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
  

}

function game3MouseReleased() {
  // Quit dragging
  dragging = false;
}



function game3Lvl1Draw() {
  hideAllButtons();
  background('#C8A2C8');


  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
  
  

  stroke(0);

  image(buttonImage, x, y, w, h);


  image(shirtImage, 750, 0);
}

function game3Lvl2Draw() {
  hideAllButtons();
  background('#C8A2C8');
}

function game3Lvl3Draw() {
  hideAllButtons();
  background('#C8A2C8');
}

