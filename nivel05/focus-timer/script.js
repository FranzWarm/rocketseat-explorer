// SOUND PANNEL BUTTONS
const soundBtnsList = [
  (btnForestSnd = document.querySelector(".forest")),
  (btnRainSnd = document.querySelector(".rain")),
  (btnCoffeeSnd = document.querySelector(".coffee")),
  (btnFireplaceSnd = document.querySelector(".fireplace")),
];
// SOUND PANEL ICONS
const cardsIconList = [
  (iconForestCard = document.querySelector(".forest svg path")),
  (iconRainCard = document.querySelector(".rain svg path")),
  (iconCoffeeCard = document.querySelector(".coffee svg path")),
  (iconFireplaceCard = document.querySelector(".fireplace svg path")),
];
// SOUND FILES
const soundsList = [
  (forestSnd = new Audio("./assets/forest.wav")),
  (rainSnd = new Audio("./assets/rain.wav")),
  (coffeeSnd = new Audio("/assets/coffee.wav")),
  (fireplaceSnd = new Audio("./assets/fireplace.wav")),
  (beepFx = new Audio("./assets/beep.wav")),
  (readyFx = new Audio("./assets/ready.wav")),
];
// VOLUME SLIDER
const volumeSliderList = [
  (forestVolSlider = document.querySelector(`.forest .slider`)),
  (rainVolSlider = document.querySelector(`.rain .slider`)),
  (coffeeVolSlider = document.querySelector(`.coffee .slider`)),
  (fireplaceVolSlider = document.querySelector(`.fireplace .slider`)),
];
// CONTROL AND THEME BUTTONS
const ctrlBtnsList = [
  (playBtn = document.querySelector(".play")),
  (pauseBtn = document.querySelector(".pause")),
  (stopBtn = document.querySelector(".stop")),
  (addFiveBtn = document.querySelector(".addFiveMin")),
  (subFiveBtn = document.querySelector(".subFiveMin")),
  (lightThemeBtn = document.querySelector(".light")),
  (darkThemeBtn = document.querySelector(".dark")),
];
// CONTROL AND THEME ICONS
const ctrlIconsList = [
  (playIcon = document.querySelector(".play svg path")),
  (pauseIcon = document.querySelector(".pause svg path")),
  (stopIcon = document.querySelector(".stop svg path")),
  (addFiveIcon = document.querySelector(".addFiveMin svg path")),
  (subFiveIcon = document.querySelector(".subFiveMin svg path")),
  (lightThemeIcon = document.querySelector(".light svg path")),
  (darkThemeIcon = document.querySelector(".dark svg path")),
];
// ROOT ELEMENT
const cssRoot = document.querySelector(":root");
// LIGHT THEME PALETTE
const lightColorsList = [
  ["--bg-color", "#fff"],
  ["--bg-card-regular", "#e1e1e6"],
  ["--bg-card-active", "#02799d"],
  ["--ff-regular", "#323238"],
  ["--ff-secondary", "#323238"],
  ["--ff-slider", "#323238"],
  ["--ff-active", "#fff"],
];
// DARK THEME PALETTE
const darkColorsList = [
  ["--bg-color", "#121214"],
  ["--bg-card-regular", "#29292E"],
  ["--bg-card-active", "#10495c"],
  ["--ff-regular", "#C4C4CC"],
  ["--ff-secondary", "#FFF"],
  ["--ff-slider", "#FFF"],
  ["--ff-active", "#FFF"],
];
// TIMER UNITS
const displayTimer = document.querySelector(".timer");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

// ---------------------
// SOUND PANEL FUNCTIONS
// ---------------------
let nowPlaying = "";
beepFx.volume = 0.3;
readyFx.volume = 0.3;

function toogleTheme(theme) {
  for (const property in theme) {
    cssRoot.style.setProperty(theme[property][0], theme[property][1]);
  }
}

function resetSndCards() {
  for (const card of soundBtnsList) {
    card.style.backgroundColor = "var(--bg-card-regular)";
  }

  for (const icon of cardsIconList) {
    icon.style.fill = "var(--ff-regular)";
  }

  for (const sound of soundsList) {
    sound.pause();
  }

  for (const vol of volumeSliderList) {
    vol.style.backgroundColor = "var(--ff-slider)"
    vol.value = 0
  }
}

function activateSndCard(card) {
  const index = soundBtnsList.indexOf(card);
  const targetCard = soundBtnsList[index];
  const targetIcon = cardsIconList[index];
  const targetSound = soundsList[index];
  const sound = targetCard.className;
  const targetSlider = volumeSliderList[index];

  resetSndCards();

  if (nowPlaying !== sound) {
    nowPlaying = sound;
    targetSound.play();
    targetSound.loop = true;
    targetCard.style.backgroundColor = "var(--bg-card-active)";
    targetIcon.style.fill = "var(--ff-active)";

    targetSlider.style.backgroundColor = "var(--ff-active)"
    targetSlider.value = 50
    return;
  }
  // stops current sound
  nowPlaying = "";
  targetSound.pause();
}

btnForestSnd.addEventListener("click", (button) => {
  activateSndCard(btnForestSnd);
});

btnRainSnd.addEventListener("click", () => {
  activateSndCard(btnRainSnd);
});

btnCoffeeSnd.addEventListener("click", () => {
  activateSndCard(btnCoffeeSnd);
});

btnFireplaceSnd.addEventListener("click", () => {
  activateSndCard(btnFireplaceSnd);
});

// --------------------
// TIMER PANEL FUNCIONS
// --------------------

let minutes = Number(displayMinutes.textContent);
let seconds = Number(displaySeconds.textContent);
let storedMinutes = 25;
let storedSeconds = 0;
let timerIsRunning = false;
let timerCountdown;

function togglePlayBtn(reset = false) {
  if (reset) {
    playBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
    return;
  }
  playBtn.classList.toggle("hide");
  pauseBtn.classList.toggle("hide");
}

function storeTime() {
  storedMinutes = minutes;
  storedSeconds = seconds;
}

function getStoredTime() {
  minutes = storedMinutes;
  seconds = storedSeconds;
}

function updateTimerDisplay(updatedMinutes, updatedSeconds) {
  updatedMinutes = updatedMinutes <= 0 ? (minutes = 0) : updatedMinutes;
  updatedMinutes = updatedMinutes >= 300 ? (minutes = 300) : updatedMinutes;
  updatedSeconds = updatedSeconds <= 0 ? (seconds = 0) : updatedSeconds;
  displayMinutes.textContent = String(updatedMinutes).padStart(2, "0");
  displaySeconds.textContent = String(updatedSeconds).padStart(2, "0");
}

function pauseTimer() {
  clearTimeout(timerCountdown);
}

function stopTimer() {
  displayTimer.classList.remove("blinking");
  clearTimeout(timerCountdown);
  timerIsRunning = false;
  getStoredTime();
  updateTimerDisplay(minutes, seconds);
  togglePlayBtn(true);
  resetSndCards();
}

function runTimer() {
  timerCountdown = setInterval(() => {
    --seconds;

    if (minutes <= 0 && seconds <= 10) {
      displayTimer.classList.add("blinking");
    }

    if (minutes <= 0 && seconds < 0) {
      stopTimer();
      readyFx.play();
      return;
    }

    if (seconds < 0) {
      seconds = 59;
      --minutes;
    }

    updateTimerDisplay(minutes, seconds);
  }, 1000);
}

// Add/remove highligh on mouse enter/leve
function highlighBtn(button) {
  const index = ctrlBtnsList.indexOf(button);
  const icon = ctrlIconsList[index];

  icon.style.fill = "var(--bg-card-active)";
}

function highlighBtnReset(button) {
  const index = ctrlBtnsList.indexOf(button);
  const icon = ctrlIconsList[index];

  icon.style.fill = "var(--ff-regular)";
}

playBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

playBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

pauseBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

pauseBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

stopBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

stopBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

addFiveBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

addFiveBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

subFiveBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

subFiveBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

lightThemeBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

lightThemeBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

darkThemeBtn.addEventListener("mouseenter", (e) => {
  highlighBtn(e.target);
});

darkThemeBtn.addEventListener("mouseleave", (e) => {
  highlighBtnReset(e.target);
});

// Add and subtract minutes to the timer
playBtn.addEventListener("click", () => {
  runTimer();
  togglePlayBtn();
  beepFx.play();

  if (!timerIsRunning) {
    storeTime();
  }
  timerIsRunning = true;
});

pauseBtn.addEventListener("click", () => {
  pauseTimer();
  togglePlayBtn();
  beepFx.play();
});

stopBtn.addEventListener("click", () => {
  stopTimer();
  beepFx.play();
});

addFiveBtn.addEventListener("click", () => {
  minutes += 5;
  updateTimerDisplay(minutes, seconds);
  beepFx.play();
});

subFiveBtn.addEventListener("click", () => {
  minutes -= 5;
  updateTimerDisplay(minutes, seconds);
  beepFx.play();
});

lightThemeBtn.addEventListener("click", () => {
  lightThemeBtn.classList.toggle("hide");
  darkThemeBtn.classList.toggle("hide");
  toogleTheme(darkColorsList);
});

darkThemeBtn.addEventListener("click", () => {
  lightThemeBtn.classList.toggle("hide");
  darkThemeBtn.classList.toggle("hide");
  toogleTheme(lightColorsList);
});

rainVolSlider.addEventListener("mousedown", () => {
  rainSnd.play()
  rainSnd.volume = rainVolSlider.value / 100

  rainVolSlider.addEventListener("mousemove", () => {
    rainSnd.volume = rainVolSlider.value / 100
  })

})
