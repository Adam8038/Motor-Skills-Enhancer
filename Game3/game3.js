
let game3Lvl1Button, game3Lvl2Button, game3Lvl3Button, g3LevelSelect;
let game3loaded = false;
let game3CurrentLevel;
let game3Winner = false;

let game3TimerValue = 120;
let game3TimerLoaded = false;

let backgroundImage;


 

let buttonImage, shirtImage, guyButtoningImage, confetti, hornImage, hornImage2, hornImage3, buttonImage2

function game3Preload() {

  buttonImage = loadImage("Game3/redButton.png");
  confettiImage = loadImage("Game3/confetti.png");
  hornImage = loadImage("Game3/horn.png");
  hornImage2 = loadImage("Game3/horn.png");
  hornImage3 = loadImage("Game3/horn.png");
  buttonImage2 = loadImage("Game3/redButton.png");
  guyButtoningImage = loadImage("Game3/guyButtoningShirt.jpg");
  backgroundImage = loadImage("libraries/winScreenBG.png");

  setInterval(game3TimeIt, 1000);

  game3Lvl1Button = createImg('libraries/lvl1Button.png');
  game3Lvl1Button.position(250, 450);
  game3Lvl1Button.mousePressed(game3Lvl1Draw );
  game3Lvl1Button.hide();

  game3Lvl2Button = createImg('libraries/lvl2Button.png');
  game3Lvl2Button.position(550, 450);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);
  game3Lvl2Button.hide();

  game3Lvl3Button = createImg('libraries/lvl3Button.png');
  game3Lvl3Button.position(850, 450);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);
  game3Lvl3Button.hide();

  g3LevelSelect = createImg('libraries/levelSelect.png');
  g3LevelSelect.position(0, 400);
  g3LevelSelect.mousePressed(game3LvlSelect);
  g3LevelSelect.hide();

  shirtImage = createImg("Game3/shirtNoButtons.png");
  shirtImage.position(750, 0);
  shirtImage.hide(); 

  
}

function game3Setup() {

  createCanvas(windowWidth, windowHeight);
  background('#C8A2C8');
  

  game3TimerLoaded = true;
  shirtImage.hide();
  
  game3Lvl1Button.show();
  game3Lvl2Button.show();
  game3Lvl3Button.show();
  

  
  game3loaded = true;
  onlyMMButton();

  

  
  textSize(55);
  fill('black');
  
  text("Welcome to the buttoning game! Pick a level", 200, 100);
  image(guyButtoningImage, 380,150,600,300);

 
  
  currentActivity = 3;
}



function game3Draw(){

  switch(game3CurrentLevel){
    case 1:
      game3Lvl1Draw();
      break;
    case 2:
      game3Lvl2Draw();
      break;
    case 3:
      game3Lvl3Draw();
      break;
    case 4:
      game3Lvl3DrawPart2();
      break;

  }

} 

function game3Lvl1Draw() {
//create the background and hide the buttons
  
  shirtImage.show();
  
  
  
  background(gameBG);
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 1;
    
    
  }

  if(game3TimerValue === 0){
    game3LoserMenu();
  }

  if(game3TimerLoaded === true && game3TimerValue < 120){
    game3TimerValue = 120;
    game3TimerLoaded = false;
  }
  
  if(game3CurrentLevel === 1){

    
    checkTopButton();
    

    checkBottomButton();
    console.log("checked bottom");

    //checks if the user is close the button holes
    game3Feedback();

    //displays the timer
    if (game3TimerValue >= 0) {
      text("Time left:" + game3TimerValue, 40, 230);
    }
    

  }
  image(buttonImage, mouseX-50, mouseY-50, 100, 100);

  
}


function game3Lvl2Draw() {

  shirtImage.show();
  
  
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 2;
    
  }

  if(game3TimerValue === 0){
    game3LoserMenu();
  }

  if(game3TimerLoaded === true && game3TimerValue < 120){
    game3TimerValue = 120;
    game3TimerLoaded = false;
  }

  if(game3CurrentLevel === 2){

    if(keyIsDown(ENTER)){

      checkTopButton();
  
      checkBottomButton();
      }

    game3Feedback();

    //displays the timer
    if (game3TimerValue >= 0) {
      text("Time left:" + game3TimerValue, 40, 230);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, 100, 100);

}


function game3Lvl3Draw() {

  shirtImage.show();
  
  
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 3;
    
  }

  if(game3TimerValue === 0){
    game3LoserMenu();
  }

  if(game3TimerLoaded === true && game3TimerValue < 120){
    game3TimerValue = 120;
    game3TimerLoaded = false;
  }
  
  if(game3CurrentLevel === 3){

    if(keyIsDown(ENTER)){

      checkTopButton();
  
      }

      if(mouseX >= 700 && mouseY <= 600 && mouseY >= 250 && !game3Winner){
        textSize(42);
        fill('black');
        text("Keep going you're almost there", 250, 200);
        text("Hold enter to open the buttonhole",200,275);
      }
      //Some advice and encouragement for the user
      if(!game3Winner && game3CurrentLevel != 0){
        textSize(42);
        fill('black');
        text("You got this!",450, 50);
    
        textSize(48);
        text("Put the button in the top hole",325,150);
      }

    //displays the timer
    if (game3TimerValue >= 0) {
      text("Time left:" + game3TimerValue, 40, 230);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, 100, 100);
}

function game3Lvl3DrawPart2() {

  
  background('#C8A2C8');
  image(buttonImage2,1075,330,100,100);

  if(game3TimerLoaded === true && game3TimerValue < 120){
    game3TimerValue = 120;
    game3TimerLoaded = false;
  }
  
  if(game3TimerValue === 0){
    game3LoserMenu();
  }

  if(game3CurrentLevel === 4){

    if(keyIsDown(ENTER)){

      checkBottomButton();
  
      }

      if(mouseX >= 700 && mouseY <= 600 && mouseY >= 250 && !game3Winner){
        textSize(42);
        fill('black');
        text("Keep going you're almost there", 250, 200);
        text("Hold enter to open the buttonhole",200,275);
      }
      //Some advice and encouragement for the user
      if(!game3Winner && game3CurrentLevel != 0){
        textSize(42);
        fill('black');
        
    
        textSize(48);
        text("Put the button in the bottom hole",325,150);
      }

    //displays the timer
    if (game3TimerValue >= 0) {
      text("Time left:" + game3TimerValue, 40, 230);
    }
  }
  image(buttonImage, mouseX-50, mouseY-50, 100, 100);
}

//function to hide the game 3 buttons
function hideGame3LvlButtons(){

  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  

}
//this function resets all important game 3 variables for the user to play the game again
function resetGame3(){

  game3CurrentLevel = 0;
  game3loaded = false;
  hideGame3LvlButtons();
  shirtImage.hide();
  game3Winner = false;
  game3TimerValue = 120;
  game3TimerLoaded = false;
  g3LevelSelect.hide();
  
}

//this checks to see if the user is in the top buttonhole if they are then calls the winner function
function checkTopButton(){
  if(mouseX>= 1115 && mouseX < 1135 && mouseY >= 363 && mouseY <= 383  &&game3CurrentLevel <3){
    game3Winner = true;
    game3CurrentLevel = 0;
    console.log("checked top");
  
    winnerWinner3();

  }

  if(mouseX>= 1115 && mouseX < 1135 && mouseY >= 363 && mouseY <= 383 && game3CurrentLevel == 3){
    game3CurrentLevel = 4;
    

  }
}
//checks to see if the button is in the bottom buttonhole
function checkBottomButton(){

  if(mouseX>= 1115 && mouseX < 1135 && mouseY >= 540 && mouseY <= 570){
    game3Winner = true;
    game3CurrentLevel = 0;
    console.log("checked bottom");
    winnerWinner3(); 
  }

}
//called when the user wins
function winnerWinner3(){
    
    background(backgroundImage);  
    getScore(game3TimerValue);
    

    g3LevelSelect.show();
    textSize(48);
    fill('black');
    
    
}

//timing function
function game3TimeIt() {
  if (game3TimerValue > 0) {
    game3TimerValue--;
  }
}




function game3Feedback(){
  if(mouseX >= 700 && mouseY <= 600 && mouseY >= 250 && !game3Winner){
    textSize(42);
    fill('black');
    text("Keep going you're almost there", 250, 200);
    text("Hold enter to open the buttonhole",200,275);
  }
  //Some advice and encouragement for the user
  if(!game3Winner && game3CurrentLevel != 0){
    textSize(42);
    fill('black');
    text("You got this!",450, 50);

    textSize(48);
    text("Put the button in either hole",325,150);
  }
}

function game3LvlSelect(){
  resetGame3();
  game3Setup();
}

function game3LoserMenu(){
  fill('black');
  text("Not exactly. Try again you got this!",450, 50);
  game3CurrentLevel = 0;
  g3LevelSelect.show();
}