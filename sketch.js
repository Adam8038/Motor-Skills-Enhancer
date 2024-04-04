  /****
   * FSE100: examples for how to link multiple exercises together
   *****/

  let currentActivity = 0;
  let menuButton, game1Button, game2Button, game3Button, game4Button;
  

  /***** 
    * If you want to load images or sounds into your application,
    * try using preload()
    * https://p5js.org/reference/#/p5/preload
    *****/
  function preload(){
    logo = loadImage("libraries/Logo.png");
    game1Preload();
    game2Preload();
    game3Preload();
    game4Preload();
  }

  function switchToMM(){
    background(220);
    currentActivity = 0;
    recenterButtons();
    hideLvlButtons();
    mmButtonsOnly();
    
    
    // Hide the home page button, show the activity buttons
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);

    
    
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
    
    background('#90EE90');
    image(logo, 451.5,60);

    menuButton = createImg('libraries/menuButton.png');
    menuButton.position(-100, -100);
    menuButton.mousePressed(switchToMM);
    menuButton.hide();
    
    game1Button = createImg('libraries/drawingButton.png');
    game1Button.position(0, 360);
    game1Button.mousePressed(game1Setup);
    game1Button.show();
    
    game2Button = createImg('libraries/typingButton.png');
    game2Button.position(300, 360);
    game2Button.mousePressed(game2Setup);
    game2Button.show();
    
    game3Button = createImg('libraries/buttonButton.png');
    game3Button.position(730, 360);
    game3Button.mousePressed(game3Setup);
    game3Button.show();

    game4Button = createImg('libraries/stackingButton.png');
    game4Button.position(1050, 360);
    game4Button.mousePressed(game4Setup);
    game4Button.show();

    hideLvlButtons();
    

    textSize(24);
    
    fill('black');


    


    textSize(72);
    text('Welcome to Precision Play!',290,75);
    
    textSize(32);
    text('Click an activity', 600, 600);
    

  }

  
  function mousePressed(){
    
    switch(currentActivity){
      case 2: 
        game2MousePressed();
        break;
      case 3:
        game3MousePressed();
        break;
      case 4:
        game4MousePressed();
        break;
    }
  }

  function mouseReleased(){
    
    switch(currentActivity){
      case 3:
        game3MouseReleased();
        break;
      case 4:
        game4mouseReleased();
        break;
    }
  }

  function mouseDragged(){
    
    switch(currentActivity){
      case 3:
        game3MouseDragged();
        break;
    }
  }

  function hideAllButtons(){
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  }

  function hideLvlButtons(){
  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  }

  function mmButtonsOnly(){
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
  game3Lvl1Button.hide();
  game3Lvl2Button.hide();
  game3Lvl3Button.hide();
  }

  function recenterButtons(){

    menuButton.position(-100, -100);
    game2Button.position(300, 360);
    game3Button.position(730, 360);
    game4Button.position(1050, 360);

  }