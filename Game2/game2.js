function game2Preload(){
  
}

function game2Setup(){
  background('rgba(0,255,0, 0.25)');
  currentActivity = 2;
  
  // Hide the Activity 2 button, show all the other buttons
  hideAllButtons();
}

function game2Draw(){
  background('rgba(0,255,0, 0.25)');
  
  fill('black');
  text('Activity 2 goes here', 200, 200);
}


function game2MousePressed(){

}