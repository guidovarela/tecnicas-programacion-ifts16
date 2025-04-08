
let enunciado = `2)  Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.<br>2.1) idem para tres alumnos.`;
document.getElementById("consigna").innerHTML = enunciado;

let promedios = [];

for (let i = 1; i <= 3; i++) {
    let nota1 = parseFloat(prompt(`Ingrese la 1era nota del alumno ${i}:`));
    let nota2 = parseFloat(prompt(`Ingrese la 2da nota del alumno ${i}:`));
    let nota3 = parseFloat(prompt(`Ingrese la 3era nota del alumno ${i}:`));

    let promedio = (nota1 + nota2 + nota3) / 3;

    promedios.push(promedio.toFixed(2));
    alert(`El promedio del alumno ${i} es: ${promedio}`);
}
console.log(promedios);
document.getElementById("resultado").innerHTML += `El promedio de los alumnos es: ${promedios}`;