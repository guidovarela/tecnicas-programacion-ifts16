
let enunciado = `8) ingresar por teclado los tres lados de un triangulo y mostrar por pantalla primero si es posible formar un triángulo con esos datos, y, en caso positivo, qué tipo de triángulo es (todos los lados iguales, equilatero, dos iguales isoceles y todos diferentes escaleno).
- Un triángulo es válido sólo si la suma de dos de sus lados es mayor al lado restante -`;
document.getElementById("consigna").innerHTML = enunciado;

let lado1 = parseInt(prompt("Ingrese el 1er lado del triángulo 🔺:"));
let lado2 = parseInt(prompt("Ingrese el 2do lado del triángulo 🔺:"))
let lado3 = parseInt(prompt("Ingrese el 3er lado del triángulo 🔺:"))

// respuestas 
let tipoTriangulo = "no es un triángulo";
let esTriangulo = false;

if (lado1 + lado2 > lado3) {
    esTriangulo = true;
    tipoTriangulo = "es un triángulo";
}
if (lado1 + lado3 > lado2) {
    esTriangulo = true;
    tipoTriangulo = "es un triángulo";
}
if (lado2 + lado3 > lado1) {        
    esTriangulo = true;
    tipoTriangulo = "es un triángulo";
}

if (esTriangulo) {
    if (lado1 == lado2 && lado2 == lado3) {
        tipoTriangulo = "es un triángulo equilátero";
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        tipoTriangulo = "es un triángulo isósceles";
    } else {
        tipoTriangulo = "es un triángulo escaleno";
    }
}
else {
    tipoTriangulo = "no es un triángulo";
}   

document.getElementById("resultado").innerHTML = `El triángulo con lados ${lado1}, ${lado2} y ${lado3} ${tipoTriangulo}`;
document.getElementById("resultado").style.color = "olive";
document.getElementById("resultado").className = "resultado";


