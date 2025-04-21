
let consigna = "3. realizar un algoritmo que muestre por pantalla todos los números que hay entre 1 y 50. Luego muestre por pantalla todos los números entre 150 y 105 en orden decreciente."
document.getElementById("consigna").innerHTML = consigna;

for (let i = 1; i <= 50; i++) {
    document.getElementById("resultado").innerHTML += i + " ";
}

document.getElementById("resultado").innerHTML += "<p>------------------------------</p>";

for (let i = 150; i >= 105; i--) {
    document.getElementById("resultado").innerHTML += i + " ";
}

