function CPFcalculo() {
  const CPF = "083.192.019-00";
  const CPFDigito = CPF.replaceAll(".", "").replaceAll("-", ""); // O replaceAll serve para mudar oq pedido para outro objeto

  if (CPFDigito.length !== 11) {
    return "CPF invalido";
  }
  
  function verificador(start) {
    let sum = 0;
    for (let i = start; i > 1; i--) {
      sum += CPFDigito[start - i] * i; //diminui 1 a cada interação com o cpf
    }

    const result = sum % 11; // resultado da verificação pelo resto da divisão por 11
    return result < 2 ? 0 : 11 - result; // verificar se é menor que dois. Tenario estilo if e else => se resultado menor q 2 vai retornar verdadeiro (0) :(else) se for falço vai retornar a segunda casa (11)
  }
  const verificador1 = verificador(10); // chama a função verificador que vai passar o valor do start
  const verificador2 = verificador(11); // genérico. descubrir o valor do segundo verificador do cpf

  if (parseInt(CPFDigito[9]) === verificador1 && parseInt(CPFDigito[10]) === verificador2) {
    // o array começa no 0, ent o primeiro verificador é 9 e o segundo é 10
    return "CPF VALIDO";
  } 

    return "CPF INVALIDO";

}
console.log(CPFcalculo())