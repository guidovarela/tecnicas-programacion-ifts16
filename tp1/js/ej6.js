
let enunciado = `6 . ingresar el radio del circulo de la base de un cilindro y su altura, para mostrar por pantalla el volumen de dicho cilindro (pi x radio x radio x altura).`;
document.getElementById("consigna").innerHTML = enunciado;

let radioCilindro = parseFloat(prompt("Ingrese el radio del cilindro: "));
let alturaCilindro = parseFloat(prompt("Ingrese la altura del cilindro: "));
const pi = Math.PI;

let volumenCilindro = pi * Math.pow(radioCilindro, 2) * alturaCilindro;

document.getElementById("resultado").innerHTML = `Radio: ${radioCilindro} cm <br> Altura: ${alturaCilindro} cm <br> El volumen del cilindro es: ${volumenCilindro.toFixed(2)} cm³`;
document.getElementById("resultado").style.color = "green";
document.getElementById("resultado").className = "resultado";



