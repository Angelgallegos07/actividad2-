// Función para solicitar entrada del usuario y validarla
function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

// Función para convertir Watts a HP y viceversa
function convertirEnergia() {
    const opcion = prompt("¿Qué deseas convertir? (1) Watts a HP, (2) HP a Watts");
    if (opcion === "1") {
        const watts = solicitarNumero("Ingresa la cantidad de Watts:");
        const hp = watts / 745.7;
        alert(`${watts} Watts equivalen a ${hp.toFixed(4)} HP.`);
    } else if (opcion === "2") {
        const hp = solicitarNumero("Ingresa la cantidad de HP:");
        const watts = hp * 745.7;
        alert(`${hp} HP equivalen a ${watts.toFixed(2)} Watts.`);
    } else {
        alert("Opción no válida. Intenta de nuevo.");
    }
}

// Ejecutar conversión de energía
convertirEnergia();
