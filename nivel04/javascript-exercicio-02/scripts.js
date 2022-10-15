let students = []
let studentNames = ["Gordo", "Jão", "Juninho", "Boka", "Betinho", "Mingau", "Jabá", "Bart", "Pica-Pau", "Fralda", "Spaghetti", "Chiquinho"]
let classSize = Math.floor(Math.random() * studentNames.length + 1)
console.log("classSize: " + classSize)

for (let student = 0; student < classSize; student++) {
    let randomStudent = Math.floor(Math.random() * studentNames.length)
    let newStudent = studentNames.splice(randomStudent, 1)
    let generatedFirstGrade = Number((Math.random() * 10).toFixed(1))
    let generatedSecondGrade = Number((Math.random() * 10).toFixed(1))
    console.log("randomStudent: " + randomStudent)
    console.log("newStudent: " + newStudent)
    console.log("generatedFirstGrade: " + generatedFirstGrade)
    console.log("generatedSecondGrade: " + generatedSecondGrade)
    console.log(">>> Média: " + ((generatedFirstGrade + generatedSecondGrade) / 2).toFixed(2))
    
    students.push( {
        name: newStudent,
        firstGrade: generatedFirstGrade,
        secondGrade: generatedSecondGrade
    })

}

let s = ""
if (classSize > 1) {
    s = "s"
}

alert(`A classe possui ${classSize} estudante${s}.`)
for (let student in students) {
    let average = ((students[student].firstGrade + students[student].secondGrade) / 2).toFixed(2)
    let situation

    if (average >= 7) {
        situation = `Aprovação. Parabéns, ${students[student].name}!`
    } else {
        situation = "Reprovação."
    }

    alert(`
    Estudante ${Number(student) + 1} de ${students.length}
    
        Nome: ${students[student].name}
        Média: ${average}

    Situação: ${situation}`)

}
