
let enunciado = `7) Realizar un programa que permita al usuario ingresar un número por teclado y mostrar por pantalla si es par o no (pueden utilizar el operador %, que devuelve el resto de una división, por ejemplo 4%2 es cero y 4/2 es dos).`;
document.getElementById("consigna").innerHTML = enunciado;

let num = parseInt(prompt("Ingrese un número: "));
let resultado = document.getElementById("resultado");   

if (num % 2 == 0) {
    resultado.innerHTML = `El número ${num} es par.`;
    }
else {
    resultado.innerHTML = `El número ${num} es impar.`;
}           