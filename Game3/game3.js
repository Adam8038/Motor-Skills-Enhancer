
let game3Lvl1Button, game3Lvl2Button, game3Lvl3Button;
let buttonX = 50, buttonY = 350;

let game3loaded = false;
let game3CurrentLevel;
let game3Winner = false;


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
  createCanvas(windowWidth, windowHeight);
  background('#C8A2C8');
  
  game3loaded = true;

  onlyMMButton();



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
  game3Lvl1Button.mousePressed(game3Lvl1Draw );

  game3Lvl2Button = createImg('libraries/lvl2Button.png');
  game3Lvl2Button.position(500, 300);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);

  game3Lvl3Button = createImg('libraries/lvl3Button.png');
  game3Lvl3Button.position(800, 300);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);

  
  
  currentActivity = 3;
}



function game3Draw(){

  switch(game3CurrentLevel){
    case 1:
      game3Lvl1Draw();
      break;
  }

} 

function game3MousePressed() {
  
  
  console.log(mouseX,mouseY);
  
  console.log(dragging);
  


}

function game3MouseReleased() {

  dragging = false;
}



function game3Lvl1Draw() {

  
  
  createCanvas(windowWidth, windowHeight);
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 1;
  }

  if(game3CurrentLevel = 1){
    if(mouseX>= 1115 && mouseX < 1135 && mouseY >= 363 && mouseY <= 383){
      game3Winner = true;
      textSize(24);
      text("Congrats you won", 450, 100);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, w, h);

  


  image(shirtImage, 750, 0);
}


function game3Lvl2Draw() {

  hideGame3LvlButtons();
  background('#C8A2C8');
}

function game3Lvl3Draw() {

  hideGame3LvlButtons();
  background('#C8A2C8');
}

function hideGame3LvlButtons(){

  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();

}

