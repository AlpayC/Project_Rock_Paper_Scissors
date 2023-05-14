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
let pcAnimation = document.querySelector(".pcchar");
let userAnimation = document.querySelector(".userchar");
let userHandChoice = document.querySelector(".userhandchoice");
let pcHandChoice = document.querySelector(".pchandchoice");
let gameCountdownSchere = document.querySelector(".scissortxt");
let gameCountdownStein = document.querySelector(".stonetxt");
let gameCountdownPapier = document.querySelector(".papertxt");
let winLoosePic = document.querySelector(".winloosepic-off");
const btnContainerChoices = document.querySelector(".btncontainerchoices");

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
    gameCountdown();
  }
};

const counterUp = () => {
  // Variable wurde definiert für den gesamten Inhalt der Radiobuttons, damit diese nach dem ersten Klicken der Buttons ersetzt werden mit den nachfolgenden Daten
  let roundsContainer = document.querySelector(".roundscontainer");
  //   Nach dem Klicken der Buttons, soll geprüft werden ob noch Runden gespielt werden können oder nicht. Ist die Rundenanzahl größer oder gleich der der totalen Rundenzahl kann nicht mehr weitergespielt werden und die Buttons werden disabled
  if (roundCounter >= totalRounds - 1) {
    roundsContainer.innerHTML = "GAME OVER";
    btnContainerChoices.classList.add("btncontainerchoicesoff");
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
    if (userChoice == 0 && computerChoice === 0) {
      userHandChoice.src = "./assets/img/hands/scissor_user.svg";
      pcHandChoice.src = "./assets/img/hands/scissor_pc.svg";
    }
    if (userChoice == 1 && computerChoice === 1) {
      userHandChoice.src = "./assets/img/hands/rock_user.svg";
      pcHandChoice.src = "./assets/img/hands/rock_pc.svg";
    }
    if (userChoice == 2 && computerChoice === 2) {
      userHandChoice.src = "./assets/img/hands/paper_user.svg";
      pcHandChoice.src = "./assets/img/hands/paper_pc.svg";
      console.log(pcHandChoice.src);
    }
    console.log(pcHandChoice.src);
    winLoosePic.classList.add("winloosepic-on");
    setTimeout(() => {
      deleteOutputAnimations();
    }, 2000);
    console.log(pcHandChoice.src);
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
    if (userChoice == 0) {
      userHandChoice.src = "./assets/img/hands/scissor_user.svg";
    }
    if (userChoice == 1) {
      userHandChoice.src = "./assets/img/hands/rock_user.svg";
    }
    if (userChoice == 2) {
      userHandChoice.src = "./assets/img/hands/paper_user.svg";
    }
    if (computerChoice == 0) {
      pcHandChoice.src = "./assets/img/hands/scissor_pc.svg";
    }
    if (computerChoice == 1) {
      pcHandChoice.src = "./assets/img/hands/rock_pc.svg";
    }
    if (computerChoice == 2) {
      pcHandChoice.src = "./assets/img/hands/paper_pc.svg";
    }
    winLoosePic.classList.add("winloosepic-on");

    outputWinner.innerHTML = "User gewinnt";
    userAttack();
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
    if (userChoice == 0) {
      userHandChoice.src = "./assets/img/hands/scissor_user.svg";
    }
    if (userChoice == 1) {
      userHandChoice.src = "./assets/img/hands/rock_user.svg";
    }
    if (userChoice == 2) {
      userHandChoice.src = "./assets/img/hands/paper_user.svg";
    }
    if (computerChoice == 0) {
      pcHandChoice.src = "./assets/img/hands/scissor_pc.svg";
    }
    if (computerChoice == 1) {
      pcHandChoice.src = "./assets/img/hands/rock_pc.svg";
    }
    if (computerChoice == 2) {
      pcHandChoice.src = "./assets/img/hands/paper_pc.svg";
    }
    winLoosePic.classList.add("winloosepic-on");

    outputWinner.innerHTML = "PC gewinnt";

    pcAttack();
    outputCommentary.innerHTML = `User hat ${moeglicheAusgaenge[userChoice]} PC hat ${moeglicheAusgaenge[computerChoice]}`;
    computerWins.innerHTML++;
  } else {
  }
  console.log({ userChoice });
  console.log({ computerChoice });
};

const pcAttack = () => {
  // Animation wird in 2 Sekunden gemäß der CSS Animation durchgeführt. Dabei wird die src geändert von Idle auf Run. Die Klasse pcchar wird dabei entfern und dafür die Klasse mit den gleichen properties durch die Klasse fromrighttoleftpc hinzugefügt, wo die Laufanimation abgespielt wird

  pcAnimation.src = "./assets/img/PC_Run_100ms.gif";
  pcAnimation.classList.remove("pcchar");
  pcAnimation.classList.add("fromrighttoleftPC");

  // Funktionspause 1 Sekunden für die Attacke. Die Src wird von Run auf Attack geändert
  setTimeout(() => {
    pcAnimation.src = "./assets/img/PC_Attack_100ms.gif";
    userAnimation.classList.add("blinking-char");
    // Funktionspause 2 Sekunden für die Zurücklaufen. Die Klasse pcchar wird hinzugefügt und die Klasse mit zwecks Zurücklaufen ebenfalls mit Animation. Src wird geändert von Attack auf Run.
    setTimeout(() => {
      userAnimation.classList.remove("blinking-char");
      pcAnimation.classList.add("fromlefttorightPC");
      pcAnimation.classList.add("pcchar");
      pcAnimation.src = "./assets/img/PC_Run_100ms.gif";

      // Die Klassen werden entfernt. Der Pc ist wieder in der Ausgangslage
      setTimeout(() => {
        pcAnimation.src = "./assets/img/PC_Idle_250ms.gif";
        pcAnimation.classList.remove("fromlefttorightPC");
        pcAnimation.classList.remove("fromrighttoleftPC");
        deleteOutputAnimations();
      }, 1000);
    }, 1000);
  }, 1000);
};

const userAttack = () => {
  // Animation wird in 2 Sekunden gemäß der CSS Animation durchgeführt. Dabei wird die src geändert von Idle auf Run. Die Klasse pcchar wird dabei entfern und dafür die Klasse mit den gleichen properties durch die Klasse fromrighttoleftpc hinzugefügt, wo die Laufanimation abgespielt wird
  pcAnimation.classList.add("pcattackpos");
  userAnimation.src = "./assets/img/User_Run_100ms.gif";
  userAnimation.classList.add("userchar");
  userAnimation.classList.add("fromlefttorightUSER");

  // Funktionspause 1 Sekunden für die Attacke. Die Src wird von Run auf Attack geändert
  setTimeout(() => {
    userAnimation.classList.add("userattackpos");
    userAnimation.src = "./assets/img/User_Attack_100ms.gif";
    pcAnimation.classList.add("blinking-char");
    // Funktionspause 2 Sekunden für die Zurücklaufen. Die Klasse pcchar wird hinzugefügt und die Klasse mit zwecks Zurücklaufen ebenfalls mit Animation. Src wird geändert von Attack auf Run.
    setTimeout(() => {
      pcAnimation.classList.remove("blinking-char");
      userAnimation.classList.remove("userattackpos");
      userAnimation.classList.add("fromrighttoleftUSER");
      userAnimation.classList.add("userchar");
      userAnimation.src = "./assets/img/User_Run_100ms.gif";

      // Die Klassen werden entfernt. Der Pc ist wieder in der Ausgangslage
      setTimeout(() => {
        userAnimation.classList.remove("fromrighttoleftUSER");
        userAnimation.classList.remove("fromlefttorightUSER");
        userAnimation.src = "./assets/img/User_Idle_250ms.gif";
        pcAnimation.classList.remove("pcattackpos");
        deleteOutputAnimations();
      }, 1000);
    }, 1000);
  }, 1000);
};

const gameCountdown = () => {
  setTimeout(() => {
    btnContainerChoices.classList.add("btncontainerchoicesoff");
    gameCountdownSchere.classList.add("countdownopacity");
    pcHandChoice.classList.remove("pchandchoice");
    pcHandChoice.classList.add("handshaking");
    userHandChoice.classList.remove("userhandchoice");
    userHandChoice.classList.add("handshaking");
    setTimeout(() => {
      gameCountdownStein.classList.add("countdownopacity");
      setTimeout(() => {
        gameCountdownPapier.classList.add("countdownopacity");
        setTimeout(() => {
          gameCountdownSchere.classList.remove("countdownopacity");
          gameCountdownStein.classList.remove("countdownopacity");
          gameCountdownPapier.classList.remove("countdownopacity");
          counterUp();
          challenge();
        }, 1000);
      }, 500);
    }, 500);
  }, 0);
};

const deleteOutputAnimations = () => {
  userHandChoice.classList.remove("handshaking");
  pcHandChoice.classList.remove("handshaking");
  userHandChoice.classList.add("userhandchoice");
  pcHandChoice.classList.add("pchandchoice");
  userHandChoice.src = "./assets/img/hands/rock_user.svg";
  gameCountdownSchere.classList.remove("countdownopacity");
  gameCountdownStein.classList.remove("countdownopacity");
  gameCountdownPapier.classList.remove("countdownopacity");
  winLoosePic.classList.remove("winloosepic-on");
  pcHandChoice.src = "./assets/img/hands/rock_pc.svg";
  btnContainerChoices.classList.remove("btncontainerchoicesoff");
};

scissor.addEventListener("mouseover", (event) => {
  userHandChoice.src = "./assets/img/hands/scissor_user.svg";
});

scissor.addEventListener("mouseout", (event) => {
  userHandChoice.src = "./assets/img/hands/rock_user.svg";
});
stone.addEventListener("mouseover", (event) => {
  userHandChoice.src = "./assets/img/hands/rock_user.svg";
});

stone.addEventListener("mouseout", (event) => {
  userHandChoice.src = "./assets/img/hands/rock_user.svg";
});
paper.addEventListener("mouseover", (event) => {
  userHandChoice.src = "./assets/img/hands/paper_user.png";
});

paper.addEventListener("mouseout", (event) => {
  userHandChoice.src = "./assets/img/hands/rock_user.svg";
});

window.addEventListener("resize", handleResize);

function handleResize() {
  let windowInfo = document.querySelector(".windowinfo");
  windowInfo.innerHTML =
    document.body.offsetWidth +
    "  Höhe: " +
    document.body.offsetHeight +
    " Pixel";
}
let windowInfo = document.querySelector(".windowinfo");
windowInfo.innerHTML =
  document.body.offsetWidth +
  "  Höhe: " +
  document.body.offsetHeight +
  " Pixel";
