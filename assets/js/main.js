let roundCounter = 0;
let totalRounds = 0;
let roundBegan = false;
const scissor = document.querySelector("#scissor");
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
let userWins = document.querySelector(".outputuser");
let computerWins = document.querySelector(".outputcomputer");
let userChoice = 0;
let outputCommentary = document.querySelector(".output");
let outputWinner = document.querySelector(".winner");

function startPlaying(button) {
  const rounds = document.querySelector('input[name="numrounds"]:checked');
  if (rounds && !roundBegan) {
    roundBegan = true;
    totalRounds = rounds.value;
  } else {
  }
  if (button.value === "schere") {
    if (roundBegan && roundCounter <= totalRounds) {
      userChoice = 0;
      counterUp();
      challenge();
    }
  } else if (button.value === "stein") {
    if (roundBegan && roundCounter <= totalRounds) {
      userChoice = 1;
      counterUp();
      challenge();
    }
  } else if (button.value === "papier") {
    if (roundBegan && roundCounter <= totalRounds) {
      userChoice = 2;
      counterUp();
      challenge();
    }
  }
}

function counterUp() {
  let roundsContainer = document.querySelector(".roundscontainer");
  if (roundCounter >= totalRounds) {
    roundsContainer.innerHTML =
      "Maximale Anzahl an Runden erreicht! Fang von vorne an";
    scissor.disabled = true;
    paper.disabled = true;
    stone.disabled = true;
  } else {
    roundCounter++;
    roundsContainer.innerHTML = roundCounter + "/" + totalRounds;
  }
}
function challenge() {
  const moeglicheAusgaenge = [scissor.value, stone.value, paper.value];
  let computerChoice = Math.floor(Math.random() * 3);
  // Alle möglichen Lösungen Schreibweise:
  // user: 0 pc: 0 GLEICHSTAND
  // user: 1 pc: 1 GLEICHSTAND
  // user: 2 pc: 2 GLEICHSTAND
  // user: 0 pc: 1 PC GEWINNT
  // user: 0 pc: 2 USER GEWINNT
  // user: 1 pc: 2 PC GEWINNT
  // user: 2 pc: 1 USER GEWINNT
  // user: 2 pc: 0 PC GEWINNT
  // user: 1 pc: 0 USER GEWINNT
  if (userChoice === computerChoice) {
    console.log("Gleichstand");
    console.log(`beide haben ${moeglicheAusgaenge[userChoice]}`);
    outputWinner.innerHTML = "Gleichstand";
    outputCommentary.innerHTML = `beide haben ${moeglicheAusgaenge[userChoice]}`;
  } else if (
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1) ||
    (userChoice === 0 && computerChoice === 2)
  ) {
    console.log("User gewinnt");
    console.log(
      `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`
    );
    outputWinner.innerHTML = "User gewinnt";
    outputCommentary.innerHTML = `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`;
    userWins.innerHTML++;
  } else if (
    (userChoice === 0 && computerChoice === 1) ||
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 0)
  ) {
    console.log("PC gewinnt");
    console.log(
      `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`
    );
    outputWinner.innerHTML = "PC gewinnt";
    outputCommentary.innerHTML = `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`;
    computerWins.innerHTML++;
  } else {
  }

  console.log({ userChoice });
  console.log({ computerChoice });
}
