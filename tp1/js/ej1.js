let enunciado = `1) Se desea calcular la distancia recorrida (en metros) por un móvil que tiene una velocidad constante (m/s) durante un tiempo T (Sg), ambos valores ingresados por el usuario. Considerar que es un MRU (Movimiento Rectilíneo Uniforme).`;
document.getElementById("consigna").innerHTML = "";
document.getElementById("consigna").innerHTML = enunciado;
  
const velocidad = parseFloat(prompt("Ingrese la velocidad constante en m/s:"));
const tiempo = parseFloat(prompt("Ingrese el tiempo en segundos:"));

const distancia = velocidad * tiempo;
alert(`La distancia recorrida es: ${distancia} metros`);


