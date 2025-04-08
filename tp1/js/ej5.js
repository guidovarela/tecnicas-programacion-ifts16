
let enunciado = `5)a) Realizar un programa que permita convertir una determinada cantidad de horas y minutos ingresados por el usuario a segundos.`;
document.getElementById("consigna").innerHTML = enunciado;

let horas = parseInt(prompt("Ingrese la cantidad de horas: "));
let minutos = parseInt(prompt("Ingrese la cantidad de minutos: "));
let segundos = (horas * 3600) + (minutos * 60);
document.getElementById("resultado").innerHTML = `Hora cargada: ${horas}hs ${minutos}min. <br>Cantidad de segundos equivalentes: ${segundos} seg`;
document.getElementById("resultado").style.color = "tomato";
document.getElementById("resultado").className = "resultado";



