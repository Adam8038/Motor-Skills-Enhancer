  let currentActivity = 0;
  let menuButton, game1Button, game2Button, game3Button, game4Button;  

  function preload(){
    logo = loadImage("libraries/Logo.png");
    game1Preload();
    game2Preload();
    game3Preload();
    game4Preload();
    
  }

  function switchToMM(){
    background('#90EE90');
    image(logo, 451.5,60);
    currentActivity = 0;
    recenterButtons();
    
    allMMButtons();
    textSize(72);
    
    if(game2Loaded === true){
      
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
    background('#90EE90');
    image(logo, 451.5,60);

    textSize(24);
    
    fill('black');

    menuButton = createImg('libraries/menuButton.png');
    menuButton.position(0, 0);
    menuButton.mousePressed(switchToMM);
    menuButton.hide();
    
    game1Button = createImg('libraries/drawingButton.png');
    game1Button.position(0, 450);
    game1Button.mousePressed(game1Setup);
    game1Button.show();
    
    game2Button = createImg('libraries/typingButton.png');
    game2Button.position(425, 450);
    game2Button.mousePressed(game2Setup);
    game2Button.show();
    
    game3Button = createImg('libraries/buttonButton.png');
    game3Button.position(850, 450);
    game3Button.mousePressed(game3Setup);
    game3Button.show();

    game4Button = createImg('libraries/stackingButton.png');
    game4Button.position(1200, 450);
    game4Button.mousePressed(game4Setup);
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

  
  function mousePressed(){
    switch(currentActivity){
      case 4: game4MousePressed(); break;
    }
      
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
  
      menuButton.position(0, 0);
      game1Button.position(0, 450);
      game2Button.position(425, 450);
      game3Button.position(850, 450);
      game4Button.position(1200, 450);
  
    }
  