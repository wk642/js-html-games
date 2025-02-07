function getHorT(userChoice) {
  let coinFlipResult = "";
  let userScore = 0;
  let ourScore = 0;
  let choiceMsg = document.getElementById("choiceMessage");
  let coinFlipResultMsg = document.getElementById("coinFlipResult");
  let resultMsg = document.getElementById("result");
  let userScoreDisplay = document.getElementById("user-score");
  let ourScoreDisplay = document.getElementById("our-score");
  let randomNumber = Math.random();

  let numOfCoins = document.getElementById("numOfCoins");
  let userInputCoins = document.getElementById("userInputCoins");

  userScoreDisplay.innerText = "You:" + userScore;
  ourScoreDisplay.innerText = `US : 0`;

  // function getNumOfCoins() {
  //   numOfCoins.addEventListener(keyup() = function() {
  //     userInputCoins.innerText = 3;
  //   });
  // }

  //Display user's choice
  choiceMsg.textContent = `You picked ${userChoice}`;

  // flip the coin
  function flipCoin() {
    if (randomNumber > 0.5) {
      coinFlipResult = "HEADS";
      coinFlipResultMsg.textContent = `It is:  ${coinFlipResult}!!!!!!`;
    } else {
      coinFlipResult = "TAILS";
      coinFlipResultMsg.textContent = `It is:  ${coinFlipResult}!!!!!!`;
    }
  }

  // Display the results
  function display() { 

    if (coinFlipResult === userChoice.toUpperCase()) {
      resultMsg.innerText= "You got that one right";
      console.log("I'm here");
      userScore++;
      ourScore = ourScore;
      userScoreDisplay.innerText = `YOU : ${userScore}`;
      ourScoreDisplay.innerText = `Us: ${ourScore}`;

    } else {
      console.log("Else statement");
      resultMsg.innerText = "Nope";
      ourScore++;
      userScore = userScore;
      userScoreDisplay.innerText = `You: ${userScore}`;
      ourScoreDisplay.innerText = `Us: ${ourScore}`;
    }
  }
  flipCoin();
  display();
}

function startUp() {
  let startMessage = document.getElementById("starting-message");
  let startButton = document.getElementById("start-button")
  
  startMessage.style.display = "block";
  startButton.style.display = "none";
}