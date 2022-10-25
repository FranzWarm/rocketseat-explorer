export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function giveClassification(result) {
    const IMC = result

    if (IMC <= 18.5) return "Baixo peso"
    if (IMC > 18.5 && IMC <= 24.9) return "Eutrofia"
    if (IMC >= 25 && IMC <= 29.9) return "Sobrepeso"
    if (IMC >= 30 && IMC <= 34.9) return "Obesidade grau 1"
    if (IMC >= 35 && IMC <= 39.9) return "Obesidade grau 2"
    if (IMC >= 40) return "Obesidade Extrema"
}