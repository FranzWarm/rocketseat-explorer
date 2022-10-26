import Sounds from "./sounds.js"

const sound = Sounds()

export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function soundOn() {
    buttonSoundOn.classList.toggle("hide");
    buttonSoundOff.classList.toggle("hide");
    sound.bgAudio.play()
  }

  function soundOff() {
    buttonSoundOn.classList.toggle("hide");
    buttonSoundOff.classList.toggle("hide");
    sound.bgAudio.pause()
  }

  function getMinutes() {
    let updatedMinutes = prompt("Quantos minutos?");
    if (!updatedMinutes || isNaN(updatedMinutes)) {
      resetTimer();
      return false;
    }

    return updatedMinutes;
  }

  return {
    play,
    pause,
    soundOn,
    soundOff,
    reset,
    getMinutes,
  };
}
