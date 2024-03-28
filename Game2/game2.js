let currentLevel = 0;
let menuButton, levelButtons;
let words = {
  1: ["cat", "dog", "bat"],
  2: ["apple", "banana", "cherry"],
  3: ["elephant", "giraffe", "rhinoceros"]
};
let currentWord = "";
let typedWord = "";
let correct = false;
let wordIndex = 0;
let wordInput;

function setup() {
  createCanvas(1000, 500);
  background('#ADD8E6');
  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);

  menuButton = createButton('Main Menu');
  menuButton.position(20, 20);
  menuButton.mousePressed(goToMainMenu);

  createLevelButtons();

  wordInput = createInput('');
  wordInput.position(300, 300);
  wordInput.size(400);
  wordInput.input(typingEvent);

  menuButton.show();
}

function createLevelButtons() {
  levelButtons = [];
  let buttonY = 200;
  for (let i = 1; i <= 3; i++) {
    let levelButton = createButton('Level ' + i);
    levelButton.position(250 * i, buttonY);
    levelButton.mousePressed(() => playLevel(i));
    levelButtons.push(levelButton);
  }
}

function goToMainMenu() {
  currentLevel = 0;
  background('#ADD8E6');
  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);
  for (let button of levelButtons) {
    button.show();
  }
  
  currentWord = "";
}

function playLevel(level) {
  currentLevel = level;
  background('#ADD8E6');
  text("Playing Level " + level, 20, 50);
  wordIndex = 0;
  currentWord = getRandomWord(level);
  typedWord = "";
  correct = false;
}

function getRandomWord(level) {
  let levelWords = words[level];
  return levelWords[Math.floor(Math.random() * levelWords.length)];
}

function typingEvent() {
  typedWord = this.value();
  if (typedWord === currentWord) {
    correct = true;
    wordIndex++;
    if (wordIndex < words[currentLevel].length) {
      currentWord = getRandomWord(currentLevel);
      this.value('');
    } else {
      console.log("Level complete!");
    }
  } else {
    correct = false;
  }
}

function draw() {
  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentWord, width / 2, height / 2);

  textSize(24);
  textAlign(CENTER, CENTER);
  if (correct) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(typedWord, width / 2, height / 2 + 50);
}