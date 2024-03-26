let currentLevel = 0;
let menuButton, levelButtons;
let words = ["apple", "banana", "cherry"]; // Sample words for the game
let currentWord = ""; // Current word for the player to type
let typedWord = ""; // Player's typed input
let correct = false; // Flag to indicate if typed word matches current word
let wordIndex = 0; // Index to track the current word in the array
let wordInput; // Input field for typing words

function game2Preload(){

}

function game2etup() {
  createCanvas(1000, 500); // Adjust canvas size as needed
  background('#C8A2C8');
  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);

  // Create menu buttons
  menuButton = createButton('Main Menu');
  menuButton.position(20, 20);
  menuButton.mousePressed(goToMainMenu);

  // Create level selection buttons
  createLevelButtons();

  // Create input field for typing words
  wordInput = createInput('');
  wordInput.position(300, 300);
  wordInput.size(400);
  wordInput.input(typingEvent);

  // Hiding and showing the buttons of the main menu
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
  background('#C8A2C8');
  textSize(24);
  text("Welcome to the Typing Game! Pick a level", 300, 100);
  // Show the level selection buttons again
  for (let button of levelButtons) {
    button.show();
  }
}

function playLevel(level) {
  currentLevel = level;
  // Clear the canvas and other necessary setup for the level
  background('#C8A2C8');
  text("Playing Level " + level, 20, 50);
  // Reset word index and fetch a new word for the player to type
  wordIndex = 0;
  currentWord = words[wordIndex];
  typedWord = "";
  correct = false;
}

function typingEvent() {
  // Update typed word with input value
  typedWord = this.value();
  // Check if typed word matches current word
  if (typedWord === currentWord) {
    correct = true;
    // Advance to the next word if all letters are typed correctly
    wordIndex++;
    // Check if there are more words left, if not, display game over or level complete message
    if (wordIndex < words.length) {
      currentWord = words[wordIndex];
      this.value(''); // Clear input field
    } else {
      // Game over or level complete logic here
      console.log("Level complete!");
    }
  } else {
    correct = false;
  }
}

function game2Draw() {
  // Display current word
  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentWord, width / 2, height / 2);

  // Display player's typed word
  textSize(24);
  textAlign(CENTER, CENTER);
  if (correct) {
    fill(0, 255, 0); // Green color for correct word
  } else {
    fill(255, 0, 0); // Red color for incorrect word
  }
  text(typedWord, width / 2, height / 2 + 50);
}