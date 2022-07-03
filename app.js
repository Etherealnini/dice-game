let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");
let dice = document.querySelector(".dice");
let currentPlayer = 0;
let accumulatedRandomNumber = 0;
let score = [0, 0];
// Event
btnRoll.addEventListener("click", startGame);
// start game function
function startGame() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  // we match the random numbers with our image source
  dice.src = `images/dice-${randomNumber}.png`;
  // we display our dice image
  dice.style.display = "block";
  if (randomNumber == 1) {
    // currentPlayer = currentPlayer == true ? do this : do this
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    // change the player
    accumulatedRandomNumber = 0;
    document.querySelector(".current-0").innerText = 0;
    document.querySelector(".current-1").innerText = 0;
    document.querySelector(".panel-0").classList.toggle("active-player");
    document.querySelector(".panel-1").classList.toggle("active-player");
  } else {
    accumulatedRandomNumber += randomNumber;
    document.querySelector(`.current-${currentPlayer}`).innerText =
      accumulatedRandomNumber;
  }
}
btnHold.addEventListener("click", function () {
  score[currentPlayer] += accumulatedRandomNumber;
  document.querySelector(`.score-${currentPlayer}`).innerText =
    score[currentPlayer];
  if (score[currentPlayer] >= 60) {
    document.querySelector(".btn-abstain").style.display = "block";
  }
  if (score[currentPlayer] > 100) {
    score[currentPlayer] -= accumulatedRandomNumber;
    score[currentPlayer] -= 20;
    document.querySelector(`.score-${currentPlayer}`).innerText =
      score[currentPlayer];
  }
});
