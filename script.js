function getHorT(userChoice) {
  let choiceMsg = document.getElementById("choiceMessage");
  choiceMsg.innerText = `You picked ${userChoice}`;

  let coinFlipResult = "";
  let userScore = 0;
  let ourScore = 0;
  let coinFlipResultMsg = document.getElementById("coinFlipResult");
  let resultMsg = document.getElementById("result");
  let scoreMsg = document.getElementById("score");
  let randomNumber = Math.random();
  console.log(`Random : ${randomNumber}`);

  if (randomNumber > 0.5) {
    coinFlipResult = "HEADS";
    coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
  } else {
    coinFlipResult = "TAILS";
    coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
  }

  console.log(userChoice.toUpperCase());
  console.log(`conflip: ${coinFlipResult}`);
  if (coinFlipResult === userChoice.toUpperCase()) {
    resultMsg.innerText = "You win";
    userScore ++;
    scoreMsg.innerHTML = `YOU : ${userScore} ;
    Me: ${ourScore}`;
  } else {
    resultMsg.innerText = "Nope";
    ourScore ++;
    // scoreMsg.innerHTML = `You `
  }
  
}