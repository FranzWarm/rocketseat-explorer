let primeiroNumero
let segundoNumero

function perguntaPorNumeros() {
    primeiroNumero = parseInt(prompt("Digite um número:"))
    segundoNumero = parseInt(prompt("Digite um segundo número:"))

    verificaSeApenasNumeros()
}

function verificaSeApenasNumeros() {
    let naoSaoNumeros = isNaN(primeiroNumero + segundoNumero)

    if (naoSaoNumeros) {
        alert("Por favor, digite apenas números")
        perguntaPorNumeros()
    } else {
        calcularResultados()
    }
}

function calcularResultados() {    

    let somaDosNumeros = primeiroNumero + segundoNumero
    let subtracaoDosNumeros = primeiroNumero - segundoNumero
    let multiplicacaoDosNumeros = primeiroNumero * segundoNumero
    let divisaoDosNumeros = primeiroNumero / segundoNumero
    let restoDosNumeros = primeiroNumero % segundoNumero

    alert(`A soma dos números é: ${somaDosNumeros}`)
    alert(`A subtração dos números é: ${subtracaoDosNumeros}`)
    alert(`A multiplicação dos números é: ${multiplicacaoDosNumeros}`)
    alert(`A divisão dos números é: ${divisaoDosNumeros}`)
    alert(`O resto da divisão dos números é: ${restoDosNumeros}`)

    if (somaDosNumeros % 2 === 0) {
        alert("A soma dos números resulta em um número PAR")
    } else {
        alert("A soma dos números resulta em um número IMPAR")
    }

    if (primeiroNumero === segundoNumero) {
        alert("Os dois números são iguais")
    } else {
        alert("Os dois números são diferentes")
    }

}

perguntaPorNumeros()


