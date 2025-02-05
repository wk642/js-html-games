function getHorT(userChoice) {
  let headsChoice = document.getElementById("heads-button").value;
  // console.log(`We are in! ${headsChoice}`);

  let tailsChoice = document.getElementById("tails-button").value;
  // console.log(`We are in! ${tailsChoice}`);

  let choiceMsg = document.getElementById("choiceMessage");
  choiceMsg.innerText = `You picked ${userChoice}`;

  let coinFlipResults = "";
  let coinFlipResultMsg = document.getElementById("coinFlipResult");

  // start of coin flip
  let randomNumber = Math.random();
  console.log(`Random : ${randomNumber}`);

  if (randomNumber > 0.5) {
    coinFlipResult = "HEADS";
    coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
  } else {
    coinFlipResult = "TAILS";
    coinFlipResultMsg.innerText = `It is:  ${coinFlipResult}!!!!!!`;
  }
}