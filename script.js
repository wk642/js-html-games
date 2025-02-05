function getHorT() {
  let headsChoice = document.getElementById("heads-button").value;
  console.log(`We are in! ${headsChoice}`);

  let tailsChoice = document.getElementById("tails-button").value;
  console.log(`We are in! ${tailsChoice}`);

  let msg = document.getElementById("message");
  msg.innerText = `{You picked ${headsChoice}}`
}