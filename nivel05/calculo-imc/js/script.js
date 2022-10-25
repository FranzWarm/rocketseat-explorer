import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber, giveClassification } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const classificationResult = document.querySelector(".modal p span")

window.oninput = () => {
    AlertError.close()
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const inputIsNotANumber = notANumber(weight) || notANumber(height)
    
    if (inputIsNotANumber) {
        AlertError.open()
        return;
    }
    
    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    classificationResult.innerHTML = `${giveClassification(result)}`

    Modal.message.innerText = message
    Modal.open()
}