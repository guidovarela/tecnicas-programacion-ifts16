// 1.  Escribir un algoritmo que determine si un año ingresado por el usuario es bisiesto o no (un año es bisiesto si es divisible por cuatro, y en caso que sea también divisible por 100 (1800, 1900, etc), el año tiene que ser también divisible por 400.
// El programa debe continuar en ejecución hasta que el usuario decida terminarlo.

let consigna = "1.  Escribir un algoritmo que determine si un año ingresado por el usuario es bisiesto o no (un año es bisiesto si es divisible por cuatro, y en caso que sea también divisible por 100 (1800, 1900, etc), el año tiene que ser también divisible por 400.<br>\ El programa debe continuar en ejecución hasta que el usuario decida terminarlo."
document.getElementById("consigna").innerHTML = consigna;


let anio = parseInt(prompt("Ingrese un año: "));

if(anio % 4==0 && anio % 100 != 0 || anio % 400 == 0){
    document.getElementById("resultado").innerHTML = "El año " + anio + " es bisiesto.";
    document.getElementById("resultado").style.color = "green";
}else{
    document.getElementById("resultado").innerHTML = "El año " + anio + " no es bisiesto.";
    document.getElementById("resultado").style.color = "tomato";
}