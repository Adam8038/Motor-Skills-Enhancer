
let game3Lvl1Button, game3Lvl2Button, game3Lvl3Button, g3LevelSelect;
let game3loaded = false;
let game3CurrentLevel;
let game3Winner = false;

let game3TimerValue = 120;
let game3TimerLoaded = false;



let winningX, winningYTop,  winningYLow;
 

let buttonImage, shirtImage, buttonImage2, buttonBG;

function game3Preload() {

  buttonImage = loadImage("Game3/redButton.png");
  buttonImage2 = loadImage("Game3/redButton.png");
  buttonBG = loadImage("libraries/game3BG.png")
  
  


  winningX = windowWidth-290 ;
  winningYTop = windowHeight /1.6;

  winningYLow = winningYTop +200;
  

  setInterval(game3TimeIt, 1000);

  game3Lvl1Button = createImg('libraries/lvl1Button.png');
  game3Lvl1Button.position(windowWidth -200, 0);
  game3Lvl1Button.mousePressed(game3Lvl1Draw );
  game3Lvl1Button.hide();

  game3Lvl2Button = createImg('libraries/lvl2Button.png');
  game3Lvl2Button.position(windowWidth -200, windowHeight/3 +50);
  game3Lvl2Button.mousePressed(game3Lvl2Draw);
  game3Lvl2Button.hide();

  game3Lvl3Button = createImg('libraries/lvl3Button.png');
  game3Lvl3Button.position(windowWidth -200, windowHeight-200);
  game3Lvl3Button.mousePressed(game3Lvl3Draw);
  game3Lvl3Button.hide();

  g3LevelSelect = createImg('libraries/levelSelect.png');
  g3LevelSelect.position(0, 400);
  g3LevelSelect.mousePressed(game3LvlSelect);
  g3LevelSelect.hide();

  shirtImage = createImg("Game3/shirtNoButtons.png");
  shirtImage.position(windowWidth - 500, (windowHeight /5)-50);
  shirtImage.hide(); 

  
}

function game3MousePressed(){
  console.log(mouseX,mouseY);
}

function game3Setup() {

  createCanvas(windowWidth, windowHeight);
  background(buttonBG);
  

  game3TimerLoaded = true;
  shirtImage.hide();
  
  game3Lvl1Button.show();
  game3Lvl2Button.show();
  game3Lvl3Button.show();
  
  game3loaded = true;
  onlyMMButton();

  textSize(55);
  fill('white');

  

  strokeWeight(2);

 
  
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
  
  
  background(gameBG);
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
  
  
  background(gameBG);
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
  game3Feedback()
  if(game3CurrentLevel === 3){

    if(keyIsDown(ENTER)){

      checkTopButton();
  
      }

      

    //displays the timer
    if (game3TimerValue >= 0) {
      text("Time left:" + game3TimerValue, 40, 230);
    }
  }

  image(buttonImage, mouseX-50, mouseY-50, 100, 100);
}

function game3Lvl3DrawPart2() {

  
  background(gameBG);
  image(buttonImage2,winningX-50,winningYTop-50);

  if(game3TimerLoaded === true && game3TimerValue < 120){
    game3TimerValue = 120;
    game3TimerLoaded = false;
  }
  
  if(game3TimerValue === 0){
    game3LoserMenu();
  }
  game3Feedback()
  if(game3CurrentLevel === 4){

    if(keyIsDown(ENTER)){

      checkBottomButton();
  
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
  if(mouseX>= winningX-15 && mouseX < winningX+15 && mouseY >= winningYTop - 15 && mouseY <= winningYTop+15  &&game3CurrentLevel <3){
    game3Winner = true;
    game3CurrentLevel = 0;
    console.log("checked top");
  
    winnerWinner3();

  }

  if(mouseX>= winningX-15 && mouseX < winningX+15 && mouseY >= winningYTop - 15 && mouseY <= winningYTop+15 && game3CurrentLevel == 3){
    game3CurrentLevel = 4;
    

  }
}
//checks to see if the button is in the bottom buttonhole
function checkBottomButton(){

  if(mouseX>= winningX-15 && mouseX < winningX+15 && mouseY >= winningYLow - 15 && mouseY <= winningYLow+15){
    game3Winner = true;
    game3CurrentLevel = 0;
    console.log("checked bottom");
    winnerWinner3(); 
  }

}
//called when the user wins
function winnerWinner3(){
    
    background(winningScreen);  
    getScore(game3TimerValue);
    image(buttonImage2,winningX-50,winningYTop-50);
    
    

    g3LevelSelect.show();
    textSize(48);
    fill('white');
    
    
}

//timing function
function game3TimeIt() {
  if (game3TimerValue > 0) {
    game3TimerValue--;
  }
}




function game3Feedback(){
  if(mouseX >= 700 && mouseY <= 600 && mouseY >= 250 && !game3Winner && game3CurrentLevel >1){
    textSize(42);
    fill('white');
    text("Hold enter to open the hole",50,275);
  }
  //Some advice and encouragement for the user
  if(!game3Winner && game3CurrentLevel <3){
    textSize(42);
    fill('white');
    text("You got this!",450, 50);

    textSize(48);
    text("Put the button in either hole",325,150);
  }

  if(game3CurrentLevel === 3){
    textSize(48);
    text("Put the button in the top hole",325,150);
  }
  if(game3CurrentLevel === 4){
    textSize(48);
    text("Put the button in the bottom hole",325,150);
  }
}

function game3LvlSelect(){
  resetGame3();
  game3Setup();
}

function game3LoserMenu(){
  fill('white');
  text("Not exactly. Try again you got this!",450, 50);
  game3CurrentLevel = 0;
  g3LevelSelect.show();
}