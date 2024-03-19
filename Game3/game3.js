let game3CurrentLevel = 0;
let game3Lvl1, game3Lvl2, game3Lvl3;
let dragging = fale;
let buttonX = 50, buttonY = 150
let offsetX, offSetY;

function game3Preload(){
  buttonImage = loadImage("Game3/redButton.png");
  shirtImage = loadImage("Game3/shirtNoButtons.png");
}

function game3Setup(){
  background('#C8A2C8');
  currentActivity = 3;
  textSize(24);
  text("Welcome to the buttoning game! Pick a level", 450, 100)
  
  //creates the level buttons
  game3Lvl1Button = createButton('Level 1');
  game3Lvl1Button.position(250, 200);
  game3Lvl1Button.mousePressed(game3Lvl1Draw);

  game3Lvl2Button = createButton('Level 2');
  game3Lvl2Button.position(500, 200);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);

  game3Lvl3Button = createButton('Level 3');
  game3Lvl3Button.position(750, 200);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);
  

  //hiding and showing the buttons of the game3 main menu
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game3Lvl1Button.show();
  game3Lvl2Button.show();
  game3Lvl3Button.show();
}

function game3MousePressed() {
  let buttonRadius = buttonImage.width / 2;
  let q = dist(mouseX, mouseY, buttonX, buttonY);
  if (q < buttonRadius) { 
    dragging = true;
    offsetX = buttonX - mouseX;
    offsetY = buttonY - mouseY;
  }
}

function mouseDragged() {
  if (dragging) {
    buttonX = mouseX + offsetX;
    buttonY = mouseY + offsetY;
  }
}

function mouseReleased() {
  dragging = false;
}

function game3Lvl1Draw(){

  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  background('#C8A2C8');

  image(buttonImage,buttonX, buttonY);
  image(shirtImage, 750,0);


}

function game3Lvl2Draw(){

  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  background('#C8A2C8');


}

function game3Lvl3Draw(){

  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  background('#C8A2C8');


}
function game3Draw(){

  
  
}