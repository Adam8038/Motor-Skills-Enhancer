
let game3Lvl1Button, game3Lvl2Button, game3Lvl3Button;
let game3loaded = false;
let game3CurrentLevel;
let game3Winner = false;

let timerValue = 120;
let game3Score = 0;

var w, h; 

let buttonImage, shirtImage, guyButtoningImage, confetti, hornImage, hornImage2, hornImage3, buttonImage2

function game3Preload() {

  buttonImage = loadImage("Game3/redButton.png");
  confettiImage = loadImage("Game3/confetti.png");
  hornImage = loadImage("Game3/horn.png");
  hornImage2 = loadImage("Game3/horn.png");
  hornImage3 = loadImage("Game3/horn.png");
  buttonImage2 = loadImage("Game3/redButton.png");
  guyButtoningImage = loadImage("Game3/guyButtoningShirt.jpg");

  
}

function game3Setup() {

  createCanvas(windowWidth, windowHeight);
  background('#C8A2C8');

  setInterval(timeIt, 1000);
  game3loaded = true;
  onlyMMButton();

  w = 100;
  h = 100;

  
  textSize(55);
  fill('black');
  
  text("Welcome to the buttoning game! Pick a level", 200, 100);
  image(guyButtoningImage, 380,150,600,300);

  // Create the level buttons
  game3Lvl1Button = createImg('libraries/lvl1Button.png');
  game3Lvl1Button.position(200, 350);
  game3Lvl1Button.mousePressed(game3Lvl1Draw );

  game3Lvl2Button = createImg('libraries/lvl2Button.png');
  game3Lvl2Button.position(500, 350);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);

  game3Lvl3Button = createImg('libraries/lvl3Button.png');
  game3Lvl3Button.position(800, 350);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);

  shirtImage = createImg("Game3/shirtNoButtons.png");
  shirtImage.position(750, 0);
  shirtImage.hide();  
  
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

  }

} 
//tis function is essentially unused in gameplay i just use it for debugging
function game3MousePressed() {
  
  
  console.log(mouseX,mouseY);
  console.log(game3Winner);
  console.log(game3CurrentLevel);
  
}

function game3Lvl1Draw() {

//create the background and hide the buttons
  
  shirtImage.show();
  
  
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 1;
    
  }

  
  if(game3CurrentLevel = 1){

    
    checkTopButton();

    checkBottomButton();
    

    //checks if the user is close the button holes
    if(mouseX >= 700 && mouseY <= 450 && mouseY >= 250 && !game3Winner){
      textSize(48);
      fill('black');
      text("Keep going you're almost there", 250, 200);
    }
    //Some advice and encouragement for the user
    if(!game3Winner && game3CurrentLevel != 0){
      textSize(48);
      fill('black');
      text("You got this!",450, 50);

      textSize(32);
      text("Put the button in either hole",325,150);
    }

    //displays the timer
    if (timerValue >= 0) {
      text("Time left:" + timerValue, 40, 230);
    }
    

  }
  image(buttonImage, mouseX-50, mouseY-50, w, h);

  
}


function game3Lvl2Draw() {

  shirtImage.show();
  
  
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 2;
    
  }

  
  if(game3CurrentLevel = 2){

    if(keyIsDown(ENTER)){

      checkTopButton();
  
      checkBottomButton();
      }

    if(mouseX >= 700 && mouseY <= 450 && mouseY >= 250 && !game3Winner){
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

      textSize(32);
      text("Put the button in either hole",325,150);
    }

    //displays the timer
    if (timerValue >= 0) {
      text("Time left:" + timerValue, 40, 230);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, w, h);

}


function game3Lvl3Draw() {

  shirtImage.show();
  
  
  background('#C8A2C8');
  hideGame3LvlButtons();
  
  if(!game3Winner){
    game3CurrentLevel = 3;
    
  }

  
  if(game3CurrentLevel = 3){

    if(keyIsDown(ENTER)){

      checkTopButton();
  
      }

    if(mouseX >= 700 && mouseY <= 450 && mouseY >= 250 && !game3Winner){
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

      textSize(32);
      text("Put the button in the top hole",325,150);
    }

    //displays the timer
    if (timerValue >= 0) {
      text("Time left:" + timerValue, 40, 230);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, w, h);
}

function game3Lvl3DrawPart2() {

  
  background('#C8A2C8');
  image(buttonImage2,1075,330,w,h);
  
  
  if(game3CurrentLevel = 4){

    if(keyIsDown(ENTER)){

      checkBottomButton();
  
      }

    if(mouseX >= 700 && mouseY <= 650 && mouseY >= 250 && !game3Winner){
      textSize(42);
      fill('black');
      text("Hold enter to open the buttonhole",200,275);
    }
    //Some advice and encouragement for the user
    if(!game3Winner && game3CurrentLevel != 0){
      textSize(42);
      fill('black');
      text("Nice job 1 down 1 to go!",450, 50);

      textSize(32);
      text("Put the button in the bottom hole",325,150);
    }

    //displays the timer
    if (timerValue >= 0) {
      text("Time left:" + timerValue, 40, 230);
    }
  }
  image(buttonImage, mouseX-50, mouseY-50, w, h);
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
  timerValue = 120;
  
}

//this checks to see if the user is in the top buttonhole if they are then calls the winner function
function checkTopButton(){
  if(mouseX>= 1115 && mouseX < 1135 && mouseY >= 363 && mouseY <= 383  &&game3CurrentLevel <3){
    game3Winner = true;
    game3CurrentLevel = 0;
  
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
  
    winnerWinner3(); 
  }

}
//called when the user wins
function winnerWinner3(){

  image(confettiImage, 500,0,1200,800);
    image(hornImage, 50,80);
    image(hornImage2, 200, 200);
    image(hornImage3, 125, 400);
    game3getScore();
    

    textSize(48);
    fill('black');
    text("Congrats you won", 500, 100);
    text("Heres your score:" + game3Score, 40,500)
}

//timing function
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}


function game3getScore(){
  game3Score = timerValue * 152;
}