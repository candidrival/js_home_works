function randomDelayPrint() {
  const message = prompt("Введіть рядок:");
  let index = 0;
  
  function printNextChar() {
      if (index < message.length) {
          setTimeout(() => {
              console.log(message[index]);
              index++;
              printNextChar();
          }, Math.random() * 1000);
      }
  }
  
  printNextChar();
}

randomDelayPrint();