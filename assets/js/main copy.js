let roundCounter = 0;
let totalRounds = 0;
let roundBegan = false;
let scissor = document.querySelector("#scissor");
let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let userWins = document.querySelector(".outputuser");
let computerWins = document.querySelector(".outputcomputer");
let user = 0;
let outputCommentary = document.querySelector(".output");
let outputWinner = document.querySelector(".winner");

function startPlaying() {
  const rounds = document.querySelector('input[name="numrounds"]:checked');
  if (rounds && !roundBegan) {
    roundBegan = true;
    totalRounds = rounds.value;
  } else if (roundBegan && roundCounter <= totalRounds) {
  }
}

scissor.addEventListener("click", function () {
  if (roundBegan && roundCounter <= totalRounds) {
    user = 0;
    counterUp();
    challenge();
  }
});

stone.addEventListener("click", function () {
  if (roundBegan && roundCounter <= totalRounds) {
    user = 1;
    counterUp();
    challenge();
  }
});

paper.addEventListener("click", function () {
  if (roundBegan && roundCounter <= totalRounds) {
    user = 2;
    counterUp();
    challenge();
  }
});

function counterUp() {
  let roundsContainer = document.querySelector(".roundscontainer");
  if (roundCounter >= totalRounds) {
    roundsContainer.innerHTML =
      "Fehlermeldung: Maximale Anzahl an Runden erreicht!";
    scissor.disabled = true;
    paper.disabled = true;
    stone.disabled = true;
  } else {
    roundCounter++;
    roundsContainer.innerHTML = roundCounter + "/" + totalRounds;
  }
}
function challenge() {
  let computer = Math.floor(Math.random() * 3);
  // Alle möglichen Lösungen Schreibweise:
  // user: 0 pc: 0
  // user: 1 pc: 1
  // user: 2 pc: 2
  // user: 0 pc: 1
  // user: 0 pc: 2
  // user: 1 pc: 2
  // user: 2 pc: 1
  // user: 2 pc: 0
  // user: 1 pc: 0

  if (user == 0 && computer == 0) {
    console.log("Gleichstand");
    console.log("beide haben " + scissor.value);
    outputWinner.innerHTML = "Gleichstand";
    outputCommentary.innerHTML = "beide haben " + scissor.value;
  } else if (user == 1 && computer == 1) {
    console.log("Gleichstand");
    console.log("beide haben " + stone.value);
    outputWinner.innerHTML = "Gleichstand";
    outputCommentary.innerHTML = "beide haben " + stone.value;
  } else if (user == 2 && computer == 2) {
    console.log("Gleichstand");
    console.log("beide haben " + paper.value);
    outputWinner.innerHTML = "Gleichstand";
    outputCommentary.innerHTML = "beide haben " + paper.value;
  } else if (user == 1 && computer == 0) {
    console.log("User gewinnt");
    console.log("User hat " + stone.value + "PC hat " + scissor.value);
    outputWinner.innerHTML = "User gewinnt";
    outputCommentary.innerHTML =
      "User hat " + stone.value + "PC hat " + scissor.value;
    userWins.innerHTML++;
  } else if (user == 1 && computer == 2) {
    console.log("PC gewinnt");
    console.log("User hat " + stone.value + "PC hat " + paper.value);
    outputWinner.innerHTML = "PC gewinnt";
    outputCommentary.innerHTML =
      "User hat " + stone.value + "PC hat " + paper.value;
    computerWins.innerHTML++;
  } else if (user == 2 && computer == 1) {
    console.log("User gewinnt");
    console.log("User hat " + paper.value + "PC hat " + stone.value);
    outputWinner.innerHTML = "User gewinnt";
    outputCommentary.innerHTML =
      "User hat " + paper.value + "PC hat " + stone.value;
    userWins.innerHTML++;
  } else if (user == 2 && computer == 0) {
    console.log("PC gewinnt");
    console.log("User hat " + paper.value + "PC hat " + scissor.value);
    outputWinner.innerHTML = "PC gewinnt";
    outputCommentary.innerHTML =
      "User hat " + paper.value + "PC hat " + scissor.value;
    computerWins.innerHTML++;
  } else if (user == 0 && computer == 2) {
    console.log("User gewinnt");
    console.log("User hat " + scissor.value + "PC hat " + paper.value);
    outputWinner.innerHTML = "User gewinnt";
    outputCommentary.innerHTML =
      "User hat " + scissor.value + "PC hat " + paper.value;
    userWins.innerHTML++;
  } else if (user == 0 && computer == 1) {
    console.log("PC gewinnt");
    console.log("User hat " + scissor.value + "PC hat " + stone.value);
    outputWinner.innerHTML = "PC gewinnt";
    outputCommentary.innerHTML =
      "User hat " + scissor.value + "PC hat " + stone.value;
    computerWins.innerHTML++;
  } else {
  }
  console.log({ user });
  console.log({ computer });
}
// Vorher Eventlistener genutzt
// scissor.addEventListener("click", function () {
//   if (roundBegan && roundCounter <= totalRounds) {
//     user = 0;
//     counterUp();
//     challenge();
//   }
// });

// stone.addEventListener("click", function () {
//   if (roundBegan && roundCounter <= totalRounds) {
//     user = 1;
//     counterUp();
//     challenge();
//   }
// });

// paper.addEventListener("click", function () {
//   if (roundBegan && roundCounter <= totalRounds) {
//     user = 2;
//     counterUp();
//     challenge();
//   }
// });
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
