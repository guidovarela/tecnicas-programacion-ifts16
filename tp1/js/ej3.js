let enunciado = `3)  Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a un postulante, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0`;
document.getElementById("consigna").innerHTML = enunciado;

let correctas = parseInt(prompt("Ingrese el número de respuestas correctas:"));
let incorrectas = parseInt(prompt("Ingrese el número de respuestas incorrectas:"));
let enBlanco = parseInt(prompt("Ingrese el número de respuestas en blanco:"));

let puntajeFinal = correctas * 4 + incorrectas * -1 + enBlanco * 0;

let nombrePostulante = prompt("Ingrese el nombre del postulante:");

document.getElementById("resultado").innerHTML = `El puntaje final de ${nombrePostulante} es: ${puntajeFinal}`;
document.getElementById("resultado").style.color = "blue";
document.getElementById("resultado").className = "resultado";