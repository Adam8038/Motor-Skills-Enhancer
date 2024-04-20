let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button, game4Button, mainMenuBG, gameBG;  
let winningScreen;

function preload(){
  
  mainMenuBG = loadImage("libraries/mainMenuBG.png");
  gameBG = loadImage("libraries/gameBG.png");
  winningScreen = loadImage("libraries/winScreenBG.png");

  menuButton = createImg('libraries/menuButton.png');
  menuButton.position(0, 0);
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  game1Button = createImg('libraries/drawingButton.png');
  game1Button.position(0, windowHeight - 250 );
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game2Button = createImg('libraries/typingButton.png');
  game2Button.position((windowWidth/4), windowHeight - 250);
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  
  game3Button = createImg('libraries/buttonButton.png');
  game3Button.position((windowWidth/4)*3 - 180, windowHeight - 250);
  game3Button.mousePressed(game3Setup);
  game3Button.show();

  game4Button = createImg('libraries/stackingButton.png');
  game4Button.position(windowWidth - 250, windowHeight - 250);
  game4Button.mousePressed(game4Setup);
  game4Button.show();

  


  game1Preload();
  game2Preload();
  game3Preload();
  game4Preload();

  
  
}

function switchToMM(){
  background(mainMenuBG);
  
  
  currentActivity = 0;
  recenterButtons();
  
  allMMButtons();
  textSize(72);
  if(game1Loaded === true){
    resetGame1();
    game1HideButtons();
  }
  if(game2Loaded === true){
    if(game2Winner === true){
      g2LevelSelect.hide();
      game2Winner = false;
    }
    game2Reset();
  }
  
  if(game3loaded === true){
    resetGame3();
  }

  if(game4Loaded === true){
    game4Reset();
    game4Loaded = false;
  }

  textSize(24);
  
  fill('black');

   
  // Hide the home page button, show the activity buttons
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(mainMenuBG);
  textFont('Courier New', 25);
  

  textSize(24);
  
  fill('black');

  


  


  textSize(72);
  
  
  textSize(32);
  fill("white");
  text('Click an activity', windowWidth/2- 125, windowHeight - 50);
  

  
}


function draw() {  
  switch(currentActivity){
    case 0:
      mainMenu();
      break;
    case 1:
      game1Draw();
      break;
    case 2:
      game2Draw();
      break;
    case 3:
      game3Draw();
      break;
    case 4:
      game4Draw();
      break;
  }
}


function mainMenu(){
    

  textSize(24);
  
  fill('black');


  textSize(72);
  
  
  textSize(32);
  fill('white');
  text('Click an activity', windowWidth/2- 125, windowHeight - 50);
  

}


function mousePressed(){
  switch(currentActivity){
    case 1: game1MousePressed(); break;
    case 3: game3MousePressed(); break;
    case 4: game4MousePressed(); break;
  }
    
}

function mouseReleased(){

  switch(currentActivity){
    case 1: game1MouseReleased(); break;
    case 4: game4MouseReleased(); break;
  }
}

function mouseDragged(){
  
  switch(currentActivity){
    case 1: game1MouseDragged(); break;
  }
}


function gameButtonsOnly() {
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
}

function onlyMMButton() {
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
}

function allMMButtons(){
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
}

  function recenterButtons(){

    menuButton.position(0, 0);
    game1Button.position(0, windowHeight - 250 );
    game2Button.position((windowWidth/4), windowHeight - 250);
    game3Button.position((windowWidth/4)*3 - 180, windowHeight - 250);
    game4Button.position(windowWidth - 250, windowHeight - 250);

  }

  function getScore(levelTimerValue){
    let score = 0;

    score = levelTimerValue * 152;

    text("Score:" + score, 40,400);
  }
