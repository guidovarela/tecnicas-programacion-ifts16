
let enunciado = `5)b) Realizar un programa que permita convertir una determinada cantidad de horas y minutos ingresados por el usuario a segundos. <br> El usuario ingresa cantidad de segundos y se muestra por pantalla las horas y minutos equivalentes (redondeando minutos hacia arriba)`;
document.getElementById("consigna").innerHTML = enunciado;

let ingresaSegundos = prompt("Ingrese la cantidad de segundos a convertir: ⏱");
let segundos = parseInt(ingresaSegundos);
let horas = Math.floor(segundos / 3600);
let minutos = Math.ceil((segundos % 3600) / 60);
let segundosRestantes = segundos % 60;
let resultado = `Cantidad de segundos ingresada: <strong>${ingresaSegundos} seg </strong><br> Equivale a ${horas} hs, ${minutos} min y ${segundosRestantes} seg.`;

document.getElementById("resultado").innerHTML = resultado;
document.getElementById("resultado").style.color = "navy";
document.getElementById("resultado").className = "resultado";

