function getHorT(userChoice) {
  let choiceMsg = document.getElementById("choiceMessage");
  choiceMsg.innerText = `You picked ${userChoice}`;

  let coinFlipResult = "";
  let userScore = 0;
  let ourScore = 0;
  let coinFlipResultMsg = document.getElementById("coinFlipResult");
  let resultMsg = document.getElementById("result");
  let scoreMsg = document.getElementsByClassName("scores");
  let randomNumber = Math.random();
  console.log(`Random : ${randomNumber}`);

  function flipCoin(){
    if (randomNumber > 0.5) {
      coinFlipResult = "HEADS";
      coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
    } else {
      coinFlipResult = "TAILS";
      coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
    }
  }
  
  flipCoin();
  console.log(userChoice.toUpperCase());
  console.log(`conflip: ${coinFlipResult}`);

  function display() { 
    if (coinFlipResult === userChoice.toUpperCase()) {
      resultMsg.innerText = "You got that one right";
      userScore ++;
      ourScore = ourScore;
      scoreMsg[0].innerHTML = `YOU : ${userScore} Us: ${ourScore}`;
    } else {
      resultMsg.innerText = "Nope";
      ourScore ++;
      userScore = userScore;
      scoreMsg[1].innerHTML = `You: ${userScore} Us: ${ourScore}`;
    }
  }
  display();
  
}