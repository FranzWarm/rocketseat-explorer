let hiddenNumber = 0
let guesses = 0
const mainGameScreen = document.querySelector("main")
const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const playerScore = document.querySelector(".second-screen h2")
const guessInput = document.querySelector("#guess")
const startButton = document.querySelector("#start")
const tryButton = document.querySelector("#try")
const restartButton = document.querySelector("#restart")
const missText = document.querySelector("span")
const missMessages = ["Nope!", "Errou!", "Nem...", "Tente denovo", "Não!", ":(", "Eita!", "Vish...", ":P"]

newGame()


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
})

startButton.addEventListener("click", () => {
    startButton.classList.toggle("hide")
    guessInput.classList.toggle("hide")
    tryButton.classList.toggle("hide")
})

tryButton.addEventListener("click", () => {
    
    const guess = guessInput.value

    guesses++

    if (guess == hiddenNumber && guess != "") {
        endGame()
    } else {
        // Screen Shake
        mainGameScreen.classList.add("shakeIt")
        setTimeout(() => {
            mainGameScreen.classList.remove("shakeIt")
        }, 500)

        // Display text for wrong attempt
        const randomMsg = Math.round(Math.random()*(missMessages.length -1))

        if (isNaN(guess)) {
            missText.innerHTML = "Isso nem é número!"
        } else if (guess === "") {
            missText.innerHTML = "Digite um número!"
        } else {
            missText.innerHTML = missMessages[randomMsg]
        }

        missText.classList.add("displayMiss")
        setTimeout(() => {
            missText.classList.remove("displayMiss")
        }, 500)

        guessInput.value = ""
    }
})

restartButton.addEventListener("click", () => {
    newGame()
    changeScreen()
})

function newGame() {
    togleBounce()
    hiddenNumber = Number(Math.round(Math.random() * 10))
    console.log(hiddenNumber)
    guesses = 0
    guessInput.value = ""
}

function endGame() {
    playerScore.innerText = `Acertou em ${guesses} tentativas!`
    changeScreen()
    togleBounce()
}

function changeScreen() {
    firstScreen.classList.toggle("hide")
    secondScreen.classList.toggle("hide")
}

function togleBounce() {
    mainGameScreen.classList.toggle("bounce")
}