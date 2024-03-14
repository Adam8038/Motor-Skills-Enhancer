let g3CurrentLevel = 0;
let game3Lvl1, game3Lvl2, game3Lvl3;

function game3Preload(){
  
}

function game3Setup(){
  background('#C8A2C8');
  currentActivity = 3;
  textSize(24);
  text("Welcome to the drawing game! Pick a level", 450, 100)
  
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

function game3Lvl1Draw(){
  game3Lvl1Button.hide();
  background('#C8A2C8');


}

function game3Lvl2Draw(){
  game3Lvl2Button.hide();
  background('#C8A2C8');


}

function game3Lvl3Draw(){
  game3Lvl3Button.hide();
  background('#C8A2C8');


}
function game3Draw(){
  
  
}