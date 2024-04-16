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
    
  }

  

  function switchToMM(){
    background('#90EE90');
    image(logo, 451.5,60);
    currentActivity = 0;
    recenterButtons();
    
    allMMButtons();

    
    if(game3loaded = true){
      function resetGame3(){
        resetGame3();
    
      }
      
    }
    

    textSize(24);
    
    fill('black');


    


    textSize(72);
    text('Welcome to Precision Play!',290,75);
    
    textSize(32);
    text('Click an activity', 600, 600);
    
    
    // Hide the home page button, show the activity buttons
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#90EE90');
    image(logo, 451.5,60);

    

    textSize(24);
    
    fill('black');

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
    game4Button.mousePressed(game4SetupWrapper);
    game4Button.show();


    


    textSize(72);
    text('Welcome to Precision Play!',290,75);
    
    textSize(32);
    text('Click an activity', 600, 600);
    

    
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
    text('Welcome to Precision Play!',290,75);
    
    textSize(32);
    text('Click an activity', 600, 600);
    

  }

  
  function game3MousePressed(){
    
      
      game3MousePressed();
      game4MousePressed();
  }

  function mouseReleased(){

      game4MouseReleased();
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
  
      menuButton.position(-100, -100);
      game2Button.position(300, 360);
      game3Button.position(730, 360);
      game4Button.position(1050, 360);
  
    }
  