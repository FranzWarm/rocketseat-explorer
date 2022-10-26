import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;

  function updateDisplay(updatedMinutes, seconds) {
    updatedMinutes = updatedMinutes === undefined ? minutes : updatedMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(updatedMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 1;

      if (seconds <= 0) {
        seconds = 60;

        --minutes;
        updateDisplay(minutes, seconds);
      }

      --seconds;
      updateDisplay(minutes, seconds);

      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
        return;
      }

      countDown();
    }, 1000);
  }

  function updateMinutes(updatedMinutes) {
    minutes = updatedMinutes;
  }

  function pause() {
    clearTimeout(timerTimeOut);
  }

  return {
    reset,
    updateDisplay,
    countDown,
    updateMinutes,
    pause,
  };
}
