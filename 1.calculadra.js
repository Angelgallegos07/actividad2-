class Calculadora {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    // Validar que los números sean válidos
    static validarNumeros(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Ambos valores deben ser números válidos");
        }
    }

    // Operaciones matemáticas
    suma() {
        return this.a + this.b;
    }

    resta() {
        return this.a - this.b;
    }

    multiplicacion() {
        return this.a * this.b;
    }

    division() {
        if (this.b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return this.a / this.b;
    }

    // Método para mostrar el resultado de la operación seleccionada
    static realizarOperacion(a, b, operacion) {
        try {
            Calculadora.validarNumeros(a, b);

            const calculadora = new Calculadora(a, b);

            let resultado;
            switch (operacion.toLowerCase()) {
                case "suma":
                    resultado = calculadora.suma();
                    break;
                case "resta":
                    resultado = calculadora.resta();
                    break;
                case "multiplicación":
                    resultado = calculadora.multiplicacion();
                    break;
                case "división":
                    resultado = calculadora.division();
                    break;
                default:
                    throw new Error("Operación no válida");
            }

            console.log(`Resultado de la ${operacion}: ${resultado}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Función para pedir los números y la operación al usuario
function ejecutarCalculadora() {
    const a = parseFloat(prompt("Ingresa el primer número:"));
    const b = parseFloat(prompt("Ingresa el segundo número:"));
    const operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división):");

    Calculadora.realizarOperacion(a, b, operacion);
}

// Ejecutar la calculadora
ejecutarCalculadora();
