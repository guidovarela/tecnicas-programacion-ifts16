let consigna = "Una tienda tiene la siguiente promoción de descuento: si la compra resulta entre $10000 y $20000, se realiza un descuento del 10%, entre $2000 y $4000 del 20% y si es superior a $40000 25%. La caja registradora va registrando los productos de la compra y sus cantidades, hasta que la cajera indica que se ha terminado con la compra.<br>El programa debe continuar en ejecución hasta que la cajera indique que se cierra la caja.<br>- Mostrar por pantalla al finalizar la mayor compra del día.<br>- La tienda cuenta con tres productos: zapatillas a $5000, remera a $2500 y medias a $1250."
document.getElementById("consigna").innerHTML = consigna;

// crear una tienda tiene la siguiente promoción de descuento: si la compra resulta entre $10000 y $20000, se realiza un descuento del 10%, entre $2000 y $4000 del 20% y si es superior a $40000 25%. por pantalla se iran cargando los productos y la caja registradora ira registrando los productos de la compra y sus cantidades, hasta que se indique que se ha terminado con la compra, usando la palabra "fin".<br>El programa debe continuar en ejecución hasta que la cajera indique que se cierra la caja.<br>- Mostrar por pantalla al finalizar la mayor compra del día.<br>- La tienda cuenta con tres productos: zapatillas a $5000, remera a $2500 y medias a $1250.

let productos = {
    "Zapatillas": 5000,
    "Remera": 2500,
    "Medias": 1250
};
let compras = [];
let mayorCompra = 0;
let caja = 0;
let continuar = true;
let nombreProducto = "";
    while (continuar) {
        nombreProducto = prompt("Ingrese el nombre del producto (zapatillas, remera, medias) o 'fin' para terminar la compra:");
        if (nombreProducto === "fin") {
            continuar = false;
            break;
        }
        if (!productos[nombreProducto]) {
            alert("Producto no válido. Intente nuevamente.");
            continue;
        }
        let cantidad = parseInt(prompt("Ingrese la cantidad de " + nombreProducto + ":"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad no válida. Intente nuevamente.");
            continue;
        }
        let precioTotal = productos[nombreProducto] * cantidad;
        compras.push({ producto: nombreProducto, cantidad: cantidad, precioTotal: precioTotal });
        caja += precioTotal;
    }
    let descuento = 0; 
    if (caja >= 10000 && caja <= 20000) {
        descuento = 0.1;
    } else if (caja >= 2000 && caja <= 4000) {
        descuento = 0.2 ;
    } else if (caja > 40000) {      
        descuento = 0.25;
    }
    let totalConDescuento = caja - (caja * descuento);

    // listar productos y precios de la tienda
    let listaProductos = "<h2>Productos disponibles:</h2>";
    listaProductos += "<ul>";
    for (let producto in productos) {
        listaProductos += `<li>${producto}: $${productos[producto]}</li>`;
    }
    listaProductos += "</ul>";
    document.getElementById("resultado").innerHTML += listaProductos;
    
    
    //mostrar resultados
    let resultado = "<h2>Detalles de la compra:</h2>";
    resultado += "<ol>";
    for (let compra of compras) {
        resultado += `
        <li> ${compra.producto} (cant: ${compra.cantidad}): $ ${compra.precioTotal.toFixed(2)}
        </li>
        `;
    }
    resultado += "</ol>";

    resultado += "<h2>Total de la compra:</h2>";
    resultado += "<p>Total sin descuento: $" + caja.toFixed(2) + "</p>";
    resultado += "<p>Total con descuento: $" + totalConDescuento.toFixed(2) + "</p>";
    resultado += "<p>Descuento: " + (descuento * 100) + "%</p>";
    document.getElementById("resultado").innerHTML += resultado;




