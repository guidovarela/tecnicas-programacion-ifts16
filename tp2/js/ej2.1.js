let consigna = "2. Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera.<br>Obtener el resultado sin utilizar el operador %."
document.getElementById("consigna").innerHTML = consigna;

let nro1, nro2, cociente, resto;
nro1 = parseInt(prompt("Ingrese el 1er número"))
nro2 = parseInt(prompt("Ingrese el 2do número"))

// validación de los números ingresados
if(nro2 == 0){
    document.getElementById("resultado").innerHTML = "No se puede dividir por cero."
    document.getElementById("resultado").style.color = "tomato";
}else{
    // operaciones
    cociente = Math.floor(nro1 / nro2)
    resto = nro1 - (cociente * nro2)

    // resultado
    document.getElementById("resultado").innerHTML = "El cociente de la división entera entre " + nro1 + " y " + nro2 + " es: " + cociente + "<br>"+"El resto de la división entera entre " + nro1 + " y " + nro2 + " es: " + resto;
}
