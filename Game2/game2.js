let game2CurrentLevel = 0;
let game2MenuButton, game2Lvl1Button, game2Lvl2Button, game2Lvl3Button;
let words = {
  1: ["cat", "dog", "bat"],
  2: ["apple", "banana", "cherry"],
  3: ["elephant", "giraffe", "rhinoceros"]
};
let currentWord = "";
let typedWord = "";
let incorrectAttempts = 0;
let wordInput;


function game2Preload() {
  // Load any required resources here
}

function game2Setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ADD8E6');

  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);

  game2MenuButton = createButton('Main Menu');
  game2MenuButton.position(20, 20);
  game2MenuButton.mousePressed(goToMainMenu);

  game2Lvl1Button = createImg('libraries/lvl1Button.png');
  game2Lvl1Button.position(200, 350);
  game2Lvl1Button.mousePressed(() => playLevel(1));

  game2Lvl2Button = createImg('libraries/lvl2Button.png');
  game2Lvl2Button.position(500, 350);
  game2Lvl2Button.mousePressed(() => playLevel(2));

  game2Lvl3Button = createImg('libraries/lvl3Button.png');
  game2Lvl3Button.position(800, 350);
  game2Lvl3Button.mousePressed(() => playLevel(3));

  onlyMMButton();
  game2MenuButton.show();
}

function draw() {
  switch (game2CurrentLevel) {
    case 1:
      game2Lvl1Draw();
      break;
    case 2:
      game2Lvl2Draw();
      break;
    case 3:
      game2Lvl3Draw();
      break;
    default:
      // A default state with menu or instructions could be shown here
      break;
  }
}

function playLevel(level) {
  game2CurrentLevel = level;
  hideGame2LvlButtons();
  background('#ADD8E6');
  textSize(24);
  text("Playing Level " + level, 20, 50);
  currentWord = getRandomWord(level);
  typedWord = "";
  incorrectAttempts = 0;

  wordInput = createInput('');
  wordInput.position(300, 300);
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
  background('#ADD8E6');
  textSize(24);
  text("Nice job! That is Correct", 300, 200);
}

function showIncorrectMessage() {
  background('#ADD8E6');
  textSize(24);
  text("Not quite. Try again", 300, 200);
}

function showTryAgainMessage() {
  background('#ADD8E6');
  textSize(24);
  text("Not quite. Try again", 300, 200);
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
  textAlign(CENTER, CENTER);
  for (let i = 0; i < currentWord.length; i++) {
    if (typedWord[i]) {
      if (typedWord[i] === currentWord[i]) {
        fill(0, 255, 0);  // correct color for right character
      } else {
        fill(255, 0, 0);  // wrong character
      }
    } else {
      fill(0);  // default color when no input yet
    }
    text(currentWord[i], (i + 0.5) * (width / currentWord.length), height / 2);
  }
}


function hideGame2LvlButtons() {
  game2Lvl1Button.hide();
  game2Lvl2Button.hide();
  game2Lvl3Button.hide();
}

function goToMainMenu() {
  game2CurrentLevel = 0;
  background('#ADD8E6');
  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);
  game2MenuButton.show();
}
