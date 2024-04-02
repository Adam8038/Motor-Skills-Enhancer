let game3CurrentLevel = 0;
let game3Lvl1, game3Lvl2, game3Lvl3;
let dragging = false;
let buttonX = 50, buttonY = 350;
let offsetX, offsetY;

var X;
var Y;

var buttonImage, shirtImage, guyButtoningImage

function game3Preload() {
  buttonImage = loadImage("Game3/redButton.png");
  shirtImage = loadImage("Game3/shirtNoButtons.png");
}

function game3Setup() {
  background('#C8A2C8');
  currentActivity = 3;

  
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

  game3GameplayButton = createImg("Game3/redButton.png");
  game3Button.position(buttonX, buttonY);
  game3Button.mousePressed(game3ButtonMovement);

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
  
  buttonImage.mousePressed(draggable);
}

function game3ButtonMovement(){
  if ((mouseX > buttonX - 50) && (mouseX < buttonX + 50)) {
    if ((mouseY > buttonY - 50) && (mouseY < buttonY + 50)) {
      buttonX = mouseX;
      buttonY = mouseY
    }
  }
}


function game3Lvl1Draw() {
  hideAllButtons();
  background('#C8A2C8');


  game3GameplayButton.show();
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
