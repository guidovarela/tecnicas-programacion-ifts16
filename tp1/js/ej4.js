
let enunciado = `4)  Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por un equipo, se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3 puntos, empatado 1 punto y perdido 0 puntos.`;
document.getElementById("consigna").innerHTML = enunciado;

let nombreEquipo = prompt("Cual es el nombre del equipo? ⚽")
let partidosGanados = parseInt(prompt("Ingrese el numero de partidos ganados 🟢"))
let partidosEmpatados = parseInt(prompt("Ingrese el numero de partidos empatados🟡"))
let partidosPerdidos = parseInt(prompt("Ingrese el numero de partidos perdidos🟠"))

let puntuacionFinal = partidosGanados*3 + partidosEmpatados*1 + partidosPerdidos*0


document.getElementById("resultado").innerHTML = `Puntaje total de ${nombreEquipo}: ${puntuacionFinal}pts`;
document.getElementById("resultado").style.color = "tomato";
document.getElementById("resultado").className = "resultado";
