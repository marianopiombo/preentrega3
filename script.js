const Producto = function (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let producto1 = new Producto("la virginia", 800, 20);
let producto2 = new Producto("nescafe", 1500, 2);
let producto3 = new Producto("arlistan", 700, 25);
let producto4 = new Producto("cabrales", 1200, 5);
let producto5 = new Producto("nescafe gold", 2000, 1);
let producto6 = new Producto("starbucks", 2500, 20);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6];

const nombresCafeDiv = document.getElementById('nombresCafe');
const buscarBtn = document.getElementById('buscar');
const nombreCafeInput = document.getElementById('nombreCafe');
const infoCafeDiv = document.getElementById('infoCafe');
const nombreNuevoCafeInput = document.getElementById('nombreNuevoCafe');
const precioNuevoCafeInput = document.getElementById('precioNuevoCafe');
const stockNuevoCafeInput = document.getElementById('stockNuevoCafe');
const agregarBtn = document.getElementById('agregar');
const mensajeDiv = document.getElementById('mensaje');

function mostrarNombresCafe() {
    nombresCafeDiv.innerHTML = '';
    lista.forEach(producto => {
        const nombreCafe = document.createElement('div');
        nombreCafe.classList.add('nombre-cafe');
        nombreCafe.textContent = producto.nombre;
        nombresCafeDiv.appendChild(nombreCafe);
    });
}

mostrarNombresCafe();

function mostrarInfoCafe(nombre) {
    const cafe = lista.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (cafe) {
        infoCafeDiv.innerHTML = `<p>Nombre: ${cafe.nombre}</p><p>Precio: $${cafe.precio}</p><p>Stock: ${cafe.stock}</p>`;
    } else {
        infoCafeDiv.innerHTML = 'No se encontró información para el café especificado.';
    }
}

function buscarCafe() {
    const nombreCafe = nombreCafeInput.value.trim();
    mostrarInfoCafe(nombreCafe);
}

function agregarCafe() {
    const nombre = nombreNuevoCafeInput.value.trim();
    const precio = parseFloat(precioNuevoCafeInput.value);
    const stock = parseInt(stockNuevoCafeInput.value);

    if (!nombre || isNaN(precio) || isNaN(stock)) {
        mostrarMensaje("Por favor, ingresa datos válidos , en precio van numeros y en stock van numeros", 'error');
        return;
    }

    const nuevoCafe = new Producto(nombre, precio, stock);
    lista.push(nuevoCafe);
    mostrarNombresCafe();
    mostrarMensaje('Café agregado correctamente', 'success');
    nombreNuevoCafeInput.value = '';
    precioNuevoCafeInput.value = '';
    stockNuevoCafeInput.value = '';
}

function mostrarMensaje(mensaje, tipo) {
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = `mensaje ${tipo}`;
    setTimeout(() => {
        mensajeDiv.textContent = '';
        mensajeDiv.className = 'mensaje';
    }, 3000);
}

buscarBtn.addEventListener('click', buscarCafe);
agregarBtn.addEventListener('click', agregarCafe);
