function sayHello(name, age) {
    return `Hello: ${name}. Your age is: ${age}`
}


// PascalCase - Geralmente, usado para nome de classes
// camelCase - Geralmente usado pra nome de variavel e de funcoes
// kebab-case - Geralmente usado para alguns tipos de arquivos ou algo dentro de json

const personName = "Bruno"
const personAge = 28

console.log(sayHello(personAge, personName))

// f(x) = x + 1
// f = funcao, x = parametro
// f(9) >> f(9) = 9 + 1 >> 10

// Exercicio 1
// Crie uma funcao chamada mySum que receba number1 e number2 como parametro 
// e retorne a soma dos numeros. Ps: Os numeros precisam estar salvar em variaveis


function mySum(number1, number2) {
    return number1 + number2
}

console.log(mySum(5, 8))

// Exercicio 2
// Crie a mesma funcao, mas dentro dela, tem que ter uma constant chamada result e esse result
// vai retornar uma string da seguinte maneira: "The sum of the numbers is: (somadosnumeros)"

function mySum2(number1, number2) {
    const result = number1 + number2
    return `The sum of the numbers is: ${result}`
}

console.log(mySum2(6,4))

// Exercicio 3
// Crie uma constant que armazene a soma de dois numero
// Crie uma funcao que subtraia dois numeros chamado mySub (igual o mySum)
// Crie uma funcao chamada myMult que vai receber as duas consts e multiplicalas

function getName(name) {
    return name
}

const myName = getName("Cesinha") // Retorna o valor retorando da funcao getName
const myName2 = getName // Retorna uma funcao, o myName2 é uma funcao

console.log(myName)
console.log(myName2)

// Crie uma variavel chamada number10 com um numero setado e uma chamada number11 com outro valor setado
// 1 - Criei a funcao que retorna o nome
// 2 - Criei uma variavel e defini o valor dela sendo o retorno da funcao getName passando o name como parametro
// 3 - Printei a variavel myName que tem o retorno da funcao getName usando cesinha como parametro

const number10 = 7
const number11 = 2

const resultSum = mySum(number10, number11)

function mySub(number1, number2) {
    return number1 - number2
}
const resultSub = mySub(number10, number11)

function myMult(number1, number2)  {
    return number1 * number2
}

const resultMult = myMult(resultSum, resultSub)

console.log(resultMult)
