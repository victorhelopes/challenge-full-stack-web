module.exports ={
  cpfValidator(cpf){
    if (cpf.length !== 11) {
      return false;
    }
    
    cpf = cpf.replace(/[^\d]/g, '');
  
    let soma = 0;

    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }
}