let game2CurrentLevel = 0;
let game2Lvl1Button, game2Lvl2Button, game2Lvl3Button;
let words = {
  1: ["cat", "dog", "bat"],
  2: ["apple", "banana", "cherry"],
  3: ["elephant", "giraffe", "rhinoceros"]
};
let currentWord = "";
let typedWord = "";
let incorrectAttempts = 0;
let wordInput;
let game2Winner;
let game2Loaded = false;
let game2TimerValue = 120;

function game2Preload() {
  // Load any required resources here
  setInterval(game2TimeIt, 1000);
}

function game2Setup() {
  createCanvas(windowWidth, windowHeight);
  currentActivity = 2;
  onlyMMButton();
  game2Loaded = true;
  

  background('#ADD8E6');
  textSize(32);
  fill('black');
  text("Welcome to the Typing Game! Pick a level", 500, 100);

  game2Lvl1Button = createImg('libraries/lvl1Button.png');
  game2Lvl1Button.position(200, 350);
  game2Lvl1Button.mousePressed(() => playLevel(1));

  game2Lvl2Button = createImg('libraries/lvl2Button.png');
  game2Lvl2Button.position(500, 350);
  game2Lvl2Button.mousePressed(() => playLevel(2));

  game2Lvl3Button = createImg('libraries/lvl3Button.png');
  game2Lvl3Button.position(800, 350);
  game2Lvl3Button.mousePressed(() => playLevel(3));
}

function game2Draw() {
  
    switch (game2CurrentLevel) {
      case 1: game2Lvl1Draw(); break;
      case 2: game2Lvl2Draw(); break;
      case 3: game2Lvl3Draw(); break;
    }
  }

function playLevel(level) {
  game2CurrentLevel = level;
  hideGame2LvlButtons();
  background('#ADD8E6');
  textSize(24);
  fill('black');
  text("Playing Level " + level, width / 2, 50);
  currentWord = getRandomWord(level);
  typedWord = "";
  incorrectAttempts = 0;

  wordInput = createInput('');
  wordInput.position(width / 2 - 200, 300);
  wordInput.size(400);
  wordInput.input(typingEvent);
}

function getRandomWord(level) {
  return words[level][Math.floor(Math.random() * words[level].length)];
}

function typingEvent() {
  typedWord = this.value();
  checkTyping();
}

function checkTyping() {
  if (typedWord === currentWord) {
    showCorrectMessage();
  } else if (typedWord.length === currentWord.length) {
    showIncorrectMessage();
    incorrectAttempts++;
    if (incorrectAttempts >= 3) {
      showTryAgainMessage();
    }
  }
}

function showCorrectMessage() {
  background('#ADD8E6'); // Light green background on win
  textSize(32);
  fill('black');
  text("Congratulations! You've won!", width / 2, height / 2 - 20);
  text("Click to play again", width / 2, height / 2 + 20);
  wordInput.hide();
  
}

function showIncorrectMessage() {
  background('#FF6347'); // Tomato red background on error
  textSize(24);
  fill('black');
  text("Not quite. Try again", width / 2, height / 2);
}

function showTryAgainMessage() {
  background('#FF6347'); // Consistent error background
  textSize(24);
  fill('black');
  text("Out of attempts! Click to restart", width / 2, height / 2);
}

function game2Lvl1Draw() {
  displayWords();
}

function game2Lvl2Draw() {
  displayWords();
}

function game2Lvl3Draw() {
  displayWords();
}

function displayWords() {
  background('#ADD8E6');
  textSize(32);
  text("You can do this!",550,100);
  for (let i = 0; i < currentWord.length; i++) {
    if (typedWord[i]) {
      fill(typedWord[i] === currentWord[i] ? '#008000' : '#FF0000');
    } else {
      fill(0);
    }
    text(currentWord[i], (i + 0.5) * (width / currentWord.length), height / 2);
    game2CheckWinner();
    if (game2TimerValue >= 0) {
      text("Time left:" + game2TimerValue, 40, 230);
    }
  }
}

function hideGame2LvlButtons() {
  game2Lvl1Button.hide();
  game2Lvl2Button.hide();
  game2Lvl3Button.hide();
}

function game2CheckWinner(){
  if(typedWord === currentWord){
    game2Winner = true;
    showCorrectMessage();
    game2Reset();
  } else if(typedWord.length > currentWord.length){
    showTryAgainMessage();
  }
}

function game2Reset(){
  game2CurrentLevel = 0;
  hideGame2LvlButtons();
  wordInput.hide();
  game2TimerValue = 120;
  
}

function game2TimeIt() {
  if (game2TimerValue > 0) {
    game2TimerValue--;
  }
}

