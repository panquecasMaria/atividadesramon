function CNPJGenerator() {
    function getDigits() {
      let CNPJOito = Math.floor(Math.random() * 90000000) + 10000000; //calcula os 8 primeiros digitos
  
      const local = "Matriz";
      let CNPJQuatro = local === "Matriz" ? "0001" : "0002"; // filial 0002. os 4 digitos após os outros 8
  
      const CNPJDoze = CNPJOito.toString() + CNPJQuatro;
      return CNPJDoze;
    }
  
    function getVerifying(CNPJDoze) {
      const weightsFirstDigit = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      const weightsSecondDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
      function calculateDigit(CNPJ, weights) {
        let sum = 0;
        for (let i = 0; i < CNPJ.length; i++) {
          sum += parseInt(CNPJ[i]) * weights[i];
        }
        const rest = sum % 11;
        return rest < 2 ? 0 : 11 - rest;
      }
  
      const firstDigit = calculateDigit(CNPJDoze, weightsFirstDigit);
  
      const secondDigit = calculateDigit(
        CNPJDoze + firstDigit,
        weightsSecondDigit
      );
  
      return firstDigit.toString() + secondDigit.toString();
    }
  
    const CNPJDoze = getDigits();
  
    const verifyingDigits = getVerifying(CNPJDoze);
  
    const CNPJ =
      CNPJDoze.slice(0, 2) +
      "." +
      CNPJDoze.slice(2, 5) +
      "." +
      CNPJDoze.slice(5, 8) +
      "/" +
      CNPJDoze.slice(8, 12) +
      "-" +
      verifyingDigits;
  
    console.log("Seu CNPJ é igual a:", CNPJ);
  }
  
  CNPJGenerator();