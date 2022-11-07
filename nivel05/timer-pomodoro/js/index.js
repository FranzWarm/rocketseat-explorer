import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound()

buttonPlay.addEventListener("click", () => {
  if (minutesDisplay.textContent == 0 && secondsDisplay.textContent == 0) {
    timer.setTimer();
    return;
  }
  controls.play();
  timer.countDown();
  sound.pressButton()
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  timer.pause();
  sound.pressButton()
});

buttonStop.addEventListener("click", () => {
  controls.reset();
  timer.reset();
  sound.pressButton()
});

buttonSoundOn.addEventListener("click", () => {
  controls.soundOff();
});

buttonSoundOff.addEventListener("click", () => {
  controls.soundOn();
});

buttonSet.addEventListener("click", () => {
  let updatedMinutes = Math.min(Math.max(controls.getMinutes(), 1), 999);

  if (!updatedMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(updatedMinutes, 0);
  timer.updateMinutes(updatedMinutes);
});
