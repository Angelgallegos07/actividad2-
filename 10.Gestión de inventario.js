// Definición de la clase Producto
class Producto {
    // Constructor que inicializa el producto con nombre, precio y cantidad
    constructor(nombre, precio, cantidad) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error('El nombre del producto debe ser una cadena no vacía.');
        }
        if (typeof precio !== 'number' || precio <= 0) {
            throw new Error('El precio debe ser un número positivo.');
        }
        if (typeof cantidad !== 'number' || cantidad < 0) {
            throw new Error('La cantidad debe ser un número no negativo.');
        }

        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método para agregar unidades al inventario
    agregarUnidades(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad a agregar debe ser un número positivo.');
        }

        this.cantidad += cantidad;
        console.log(`Se han agregado ${cantidad} unidades de ${this.nombre}.`);
    }

    // Método para quitar unidades del inventario
    quitarUnidades(cantidad) {
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error('La cantidad a quitar debe ser un número positivo.');
        }

        if (cantidad > this.cantidad) {
            console.error('No hay suficientes unidades para quitar.');
            return;
        }

        this.cantidad -= cantidad;
        console.log(`Se han quitado ${cantidad} unidades de ${this.nombre}.`);
    }

    // Método para mostrar el estado actual del producto
    mostrarEstado() {
        console.log('Estado del producto:');
        console.log(`- Nombre: ${this.nombre}`);
        console.log(`- Precio: $${this.precio.toFixed(2)}`);
        console.log(`- Cantidad en inventario: ${this.cantidad}`);
    }
}

// Función para pedir al usuario la cantidad
function pedirCantidad() {
    let cantidad = parseInt(prompt("Ingresa la cantidad de productos en inventario:"));
    // Validar que la cantidad sea un número no negativo
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Por favor, ingresa una cantidad válida (número positivo).");
        return pedirCantidad(); // Recursivamente pedir la cantidad si es inválida
    }
    return cantidad;
}

// Función para pedir al usuario el nombre del producto
function pedirNombre() {
    let nombre = prompt("Ingresa el nombre del producto:");
    if (nombre.trim() === "") {
        alert("El nombre del producto no puede estar vacío.");
        return pedirNombre(); // Recursivamente pedir el nombre si es inválido
    }
    return nombre;
}

// Función para pedir al usuario el precio del producto
function pedirPrecio() {
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingresa un precio válido (número positivo).");
        return pedirPrecio(); // Recursivamente pedir el precio si es inválido
    }
    return precio;
}

// Función para crear y probar un producto
function crearProducto() {
    try {
        const nombre = pedirNombre();
        const precio = pedirPrecio();
        const cantidad = pedirCantidad();

        const producto = new Producto(nombre, precio, cantidad);
        producto.mostrarEstado();

        // Realizar algunas operaciones con el producto
        producto.agregarUnidades(50);
        producto.quitarUnidades(30);
        producto.mostrarEstado();
    } catch (error) {
        console.error('Error al crear o manipular el producto:', error.message);
    }
}

// Crear un producto interactuando con el usuario
crearProducto();
