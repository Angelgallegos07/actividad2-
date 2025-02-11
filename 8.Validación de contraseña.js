class GuessingGame {
    constructor(min = 1, max = 100) {
      this.min = min;
      this.max = max;
      this.secretNumber = this.generateRandomNumber();
    }
  
    generateRandomNumber() {
      return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
  
    play() {
      // Solicitar nombre y apellido al usuario
      const nombre = prompt("Por favor, ingresa tu nombre:");
      const apellido = prompt("Por favor, ingresa tu apellido:");
  
      // Convertir a mayúsculas y mostrar mensaje de bienvenida
      const nombreCompleto = `${nombre} ${apellido}`.toUpperCase();
      alert(`¡Bienvenido, ${nombreCompleto}!`);
      
      console.log("\n¡Bienvenido al juego de adivinanza!");
      console.log(`Adivina el número entre ${this.min} y ${this.max}.`);
      
      let guess = null;
      while (guess !== this.secretNumber) {
        guess = this.getUserGuess();
        if (guess === null) {
          console.log("❌ Entrada no válida. Intenta de nuevo.");
          continue;
        }
        
        if (guess < this.secretNumber) {
          console.log("🔼 Más alto.");
        } else if (guess > this.secretNumber) {
          console.log("🔽 Más bajo.");
        } else {
          console.log(`🎉 ¡Felicidades, ${nombreCompleto}! Adivinaste el número ${this.secretNumber}! 🎉`);
          break;
        }
      }
    }
  
    getUserGuess() {
      while (true) {
        const input = prompt(`Introduce un número entre ${this.min} y ${this.max}:`);
        const number = parseInt(input, 10);
        if (Number.isInteger(number) && number >= this.min && number <= this.max) {
          return number;
        }
        console.log("❌ Entrada inválida. Ingresa un número dentro del rango.");
      }
    }
  }
  
  // Función para solicitar un número válido del usuario
  function solicitarNumero(mensaje) {
    let numero;
    do {
      const entrada = prompt(mensaje);
      numero = parseFloat(entrada);
      if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número válido mayor a cero.");
      }
    } while (isNaN(numero) || numero <= 0);
    return numero;
  }
  
  // Función para calcular el área de un rectángulo
  function calcularArea(ancho, alto) {
    return ancho * alto;
  }
  
  // Función para calcular el perímetro de un rectángulo
  function calcularPerimetro(ancho, alto) {
    return 2 * (ancho + alto);
  }
  
  // Solicitar dimensiones del rectángulo al usuario
  const ancho = solicitarNumero("Por favor, ingresa el ancho del rectángulo:");
  const alto = solicitarNumero("Por favor, ingresa el alto del rectángulo:");
  
  // Calcular valores
  const area = calcularArea(ancho, alto);
  const perimetro = calcularPerimetro(ancho, alto);
  
  // Mostrar resultados
  alert(`El área del rectángulo es: ${area.toFixed(2)}`);
  alert(`El perímetro del rectángulo es: ${perimetro.toFixed(2)}`);
  
  // Función para solicitar 5 números al usuario
  function solicitarNumeros() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
      numeros.push(solicitarNumero(`Ingresa el número ${i + 1}:`));
    }
    return numeros;
  }
  
  // Funciones para trabajar con arrays
  function sumaArray(numeros) {
    return numeros.reduce((a, b) => a + b, 0);
  }
  
  function promedioArray(numeros) {
    return sumaArray(numeros) / numeros.length;
  }
  
  function maxArray(numeros) {
    return Math.max(...numeros);
  }
  
  function minArray(numeros) {
    return Math.min(...numeros);
  }
  
  // Solicitar 5 números al usuario y calcular estadísticas
  const numeros = solicitarNumeros();
  alert(`Suma: ${sumaArray(numeros)}`);
  alert(`Promedio: ${promedioArray(numeros).toFixed(2)}`);
  alert(`Número mayor: ${maxArray(numeros)}`);
  alert(`Número menor: ${minArray(numeros)}`);
  
  // Función para validar la contraseña
  function validarContrasena() {
    const contrasena = prompt("Por favor, ingresa una contraseña:");
    if (contrasena.length < 8) {
      alert("❌ Error: La contraseña debe tener al menos 8 caracteres.");
    } else {
      alert("✅ Éxito: Contraseña válida.");
    }
  }
  
  // Solicitar y validar la contraseña
  validarContrasena();
  
  // Iniciar el juego
  const game = new GuessingGame();
  game.play();
  