
// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

function maiorInt (a, b, c) {
    if (a > b && a > c) {
        return "O número " +a+ " é maior que os outros" ;
    }
    else if (b > a && b > c) {
        return "O número " +b+ " é maior que os outros" ;
    }
    else if (c > a && c > b) {
        return "O número " +c+ " é maior que os outros" ;
    }
}    
function menorInt (a, b, c) {
    if (a < b && a < c) {
        return "O número " +a+ " é menor que os outros" ;
    }
    else if (b < a && b < c) {
        return "O número " +b+ " é menor que os outros" ;
    }
    else if (c < a && c < b) {
        return "O número " +c+ " é menor que os outros" ;
    }
    else {
        return "Invalido"
    }
}
console.log(maiorInt(3,6,9))
console.log(menorInt(3,1,7))

// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
// idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

function doarSAngue (a) {
    if (a >= 18 && a <= 67){
        return "Você pode doar sangue"
    }
    else {
        return "Você não pode doar sangue"
    }
}
console.log(doarSAngue(31))

// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

function posNeg (a) {
    if (a >= 0) {
        return "Número positivo"
    }
    else {
        return "Número negativo"
    }
}
console.log(posNeg(-1))

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//     A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//     A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//     A mensagem “Reprovado” se a média for menor de do que 7;

function nota (a, b) {
    if ((a + b) /2 >= 7 && (a + b) /2 < 10) {
        return "Aprovado"
    }
    else if ((a + b) /2 === 10) {
        return "Aprovado com Distinção"
    }
    else {
        return "Reprovado"
    }
}
console.log(nota(4,8))