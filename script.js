
const numberOne = document.getElementById("numOne")
const numberTwo = document.getElementById("numTwo")
const numberThree = document.getElementById("numThree")





console.log(numberOne)
console.log(numberTwo)
console.log(numberThree) 


const numInput = document.querySelector(".inputNumber")
console.log(numInput)

const numTeste = 33

numInput.value = numTeste * 2

numberOne.addEventListener("click", cliquei1)
numberTwo.addEventListener("click", cliquei2)


function cliquei1() {
    console.log("Cliquei no numero 1")

    numInput.value = 1
}

function cliquei2() {
    console.log("Cliquei no numero 2")

    numInput.value = 2
}

