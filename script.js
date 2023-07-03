function openCookie() {
    var messages = [
      "Calma caralho, vai piorar!",
      "Ate o cheque e especial e voce não.",
      "A vida nao ta nem ai pro teu planejamento.",
      "Até os boletos vencem e voce não.",
      "Dias ruins sao necessarios para que tenhamos dias piores.",
      "Só dará errado se voce tentar!"
    ];
  
    var message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = message;
  }
  