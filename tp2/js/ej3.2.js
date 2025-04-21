// 3.2 agregar después las listas de ese mismo rango de números pero solo los divisibles por dos, luego solo los divisibles por tres y luego solo los divisibles por cinco.
let consigna = "3. realizar un algoritmo que muestre por pantalla todos los números que hay entre 1 y 50. Luego muestre por pantalla todos los números entre 150 y 105 en orden decreciente.<br>Agregar después las listas de ese mismo rango de números pero solo los divisibles por dos, luego solo los divisibles por tres y luego solo los divisibles por cinco."
document.getElementById("consigna").innerHTML = consigna;

// Divisibles por 2
let divisibles2 = "<h3>Divisibles por 2</h3>";
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        divisibles2 += i + ", ";
    }
}
document.getElementById("resultado").innerHTML += "<br>" + divisibles2.slice(0, -2);

// Ddivisibles por 3
let divisibles3 = "<h3>Divisibles por 3</h3>";
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        divisibles3 += i + ", ";
    }
}
document.getElementById("resultado").innerHTML += "<br>" + divisibles3.slice(0, -2);

// Divisibles por 5
let divisibles5 = "<h3>Divisibles por 5</h3>";
for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        divisibles5 += i + ", ";
    }
}
document.getElementById("resultado").innerHTML += "<br>" + divisibles5.slice(0, -2);