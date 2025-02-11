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
          console.log(`🎉 ¡Felicidades! Adivinaste el número ${this.secretNumber}! 🎉`);
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
  