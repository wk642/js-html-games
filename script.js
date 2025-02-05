function getHorT(userChoice) {
  let headsChoice = document.getElementById("heads-button").value;
  // console.log(`We are in! ${headsChoice}`);

  let tailsChoice = document.getElementById("tails-button").value;
  // console.log(`We are in! ${tailsChoice}`);

  let choiceMsg = document.getElementById("message");
  choiceMsg.innerText = `You picked ${userChoice}`;

  let coinFlipResultMsg = document.getElementById("coinFlipResult");
  coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;

  
}