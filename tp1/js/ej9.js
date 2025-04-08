
let enunciado = `9) Realizar un programa que permita calcular el total a pagar en un estacionamiento ingresando el horario de entrada y de salida (las horas sin importar los minutos). Valor por menos de mediodía: $2000 la hora, por menos de 24hs: $1500 la hora. Y el valor de la hora por 24hs o más es $1300. Si tiene pago por mes, no hay que cobrar nada. `;
document.getElementById("consigna").innerHTML = enunciado;

let entrada = prompt("Ingrese la hora de entrada (0-23): ");
let pagoMensual = prompt("¿Tiene pago mensual? (ingrese 'S' en casoafirmativo o 'N' en caso negativo): ").toLowerCase() === "s";
let salida = prompt("Ingrese la hora de salida (0-23): ");  

let total = 0;
let horasEstacionadas = 0;      

if (pagoMensual) {
    total = 0;
}       
else {
    if (entrada < salida) {
        horasEstacionadas = salida - entrada;
    } else {
        horasEstacionadas = (24 - entrada) + salida;
    }

    if (horasEstacionadas < 24) {
        if (horasEstacionadas < 12) {
            total = horasEstacionadas * 2000;
        } else {
            total = horasEstacionadas * 1500;
        }
    } else {
        total = horasEstacionadas * 1300;
    }
}

document.getElementById("resultado").innerHTML = `Total a pagar: $${total}`;

document.getElementById("resultado").style.color = "navy";
document.getElementById("resultado").className = "resultado";


