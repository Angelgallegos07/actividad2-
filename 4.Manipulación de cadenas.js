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
  
  // Iniciar el juego
  const game = new GuessingGame();
  game.play();
  
