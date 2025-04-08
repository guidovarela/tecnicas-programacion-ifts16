
// 2) Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.

let enunciado = `2. Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.`;
document.getElementById("consigna").innerHTML = enunciado;

let nota1 = parseFloat(prompt(`Ingrese la 1era nota:`));
let nota2 = parseFloat(prompt(`Ingrese la 2da nota:`));
let nota3 = parseFloat(prompt(`Ingrese la 3era nota:`));

let promedio = (nota1 + nota2 + nota3) / 3;

alert(`El promedio es: ${promedio}`);  