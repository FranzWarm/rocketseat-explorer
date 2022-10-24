const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const modalWrapper = document.querySelector(".modal")
const modalMessage = document.querySelector("h2")
const modalBtnClose = document.querySelector(".modal button")

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    modalMessage.innerText = `Seu IMC é de ${result}`
    modalWrapper.classList.toggle("open")
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.toggle("open")

}
