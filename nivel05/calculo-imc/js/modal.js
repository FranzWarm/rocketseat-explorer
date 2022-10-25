export const Modal = {
    wrapper: document.querySelector(".modal"),
    message: document.querySelector("h2"),
    buttonClose: document.querySelector(".modal button"),
    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open")
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
    if (event.key === "Escape") {
        Modal.close()
    }
}