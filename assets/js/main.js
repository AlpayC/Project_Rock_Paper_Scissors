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

const startPlaying = (button) => {
  const rounds = document.querySelector('input[name="numrounds"]:checked');
  // Nach dem ersten Klick auf egal welchen Button, wird die Runde gestartet und roundBegan auf true gesetzt und die Rundenanzahl korrekt je nach Auswahl des Radio Buttons ausgegeben
  if (rounds && !roundBegan) {
    roundBegan = true;
    totalRounds = rounds.value;
  }

  // Wurde die Runde gestartet und ist die gespielte Rundenzahl unter der totalen Rundenanzahl (Vale des gewählten Radio Buttons), dann soll geprüft werden welcher Button geklickt wurde und der Variable UserChoice eine Zahl vergeben werden. Die Zahl 0 ist verknüpft mit Schere, Die Zahl 1 ist verknüpft mit Stein, Die Zahl 2 ist verknüpft mit Papier.
  if (roundBegan && roundCounter <= totalRounds) {
    if (button.value === "schere") {
      userChoice = 0;
    } else if (button.value === "stein") {
      userChoice = 1;
    } else if (button.value === "papier") {
      userChoice = 2;
    }
    // Am Ende des If Else Statement sollen die folgenden Funktionen gefeuert werden
    counterUp();
    challenge();
  }
};

const counterUp = () => {
  // Variable wurde definiert für den gesamten Inhalt der Radiobuttons, damit diese nach dem ersten Klicken der Buttons ersetzt werden mit den nachfolgenden Daten
  let roundsContainer = document.querySelector(".roundscontainer");
  //   Nach dem Klicken der Buttons, soll geprüft werden ob noch Runden gespielt werden können oder nicht. Ist die Rundenanzahl größer oder gleich der der totalen Rundenzahl kann nicht mehr weitergespielt werden und die Buttons werden disabled
  if (roundCounter >= totalRounds - 1) {
    roundsContainer.innerHTML =
      "Maximale Anzahl an Runden erreicht! Fang von vorne an";
    scissor.disabled = true;
    paper.disabled = true;
    stone.disabled = true;
  } else {
    // Ist die Rundenzahl unter der totalen Rundenzahl, soll der Counter um 1 erhöht werden und im HTML die Anzahl der gespielten Runden eingefügt werden
    roundCounter++;
    roundsContainer.innerHTML = roundCounter + "/" + totalRounds;
  }
};

const challenge = () => {
  // Es wird in einer Variable ein Array definiert, welche alle möglichen Button Values enthalten.
  const moeglicheAusgaenge = [scissor.value, stone.value, paper.value];
  //   Nach dem Klicken der Buttons soll gespielt werden. Es werden nun die Values des Users und die des Pcs verglichen.
  let computerChoice = Math.floor(Math.random() * 3);
  //   Die Variable speichert eine zufällige Zahl zwischen 0 und 2 für den Computer. Diese Zahl wird mit die des Users später verglichen und geprüft, wer gewonnen hat.
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
    // Sind die Zahlen des Users und die des Computers gleich, herrscht für diese Runde Gleichstand. Dabei wird im HTML ein entsprechender Text ausgegeben mit der Angabe der gewählten Wahl (Stein, Schere, Papier)
    console.log("Gleichstand");
    console.log(`beide haben ${moeglicheAusgaenge[userChoice]}`);
    outputWinner.innerHTML = "Gleichstand";
    outputCommentary.innerHTML = `beide haben ${moeglicheAusgaenge[userChoice]}`;
  } else if (
    // Hier werden die Zahlen beider Parteien logisch verglichen. Das heißt, es spielt keine Rolle, ob User oder PC eine höhere Zahl hat. Wichtig ist zu verstehen, dass die Auswahlmöglichkeiten Stein, Schere Papier mit den Zahlen 0,1,2 verknüpft sind und den Spielausgang entscheiden. Vergleiche die Conditions mit den möglichen Lösungen in Zeile 60 bis 68;
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1) ||
    (userChoice === 0 && computerChoice === 2)
  ) {
    // User hat die Oberhand, also gewinnt User
    console.log("User gewinnt");
    console.log(
      `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`
    );
    outputWinner.innerHTML = "User gewinnt";
    outputCommentary.innerHTML = `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`;
    userWins.innerHTML++;
  } else if (
    // Hier werden die Zahlen beider Parteien logisch verglichen. Das heißt, es spielt keine Rolle, ob User oder PC eine höhere Zahl hat. Wichtig ist zu verstehen, dass die Auswahlmöglichkeiten Stein, Schere Papier mit den Zahlen 0,1,2 verknüpft sind und den Spielausgang entscheiden. Vergleiche die Conditions mit den möglichen Lösungen in Zeile 60 bis 68;
    (userChoice === 0 && computerChoice === 1) ||
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 0)
  ) {
    // PC hat die Oberhand, also gewinnt PC
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
};
