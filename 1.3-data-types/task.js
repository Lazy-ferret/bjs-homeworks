function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  if (isNaN(percent)){
    return `Параметр \"Процентная ставка\" содержит неправильное значение ${percent}`; 
  }
  if (isNaN(contribution)){
    return `Параметр \"Начальный взнос\" содержит неправильное значение ${contribution}`; 
  }
  if (isNaN(amount)){
    return `Параметр \"Общая стоимость\" содержит неправильное значение ${amount}`; 
  }

  let mainDebt = amount - contribution;
  let numberOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
  let p = percent / 100 / 12;
  let paymentAmount = mainDebt * (p + p / (((1 + p) ** numberOfMonths) - 1));
  let totalAmount = +(paymentAmount * numberOfMonths).toFixed(2);
  return totalAmount;
}

function getGreeting(name) {
  if ((name == false) || (name == null)) {
    name = 'Аноним';
  } 
  let greeting = `Привет, мир! Меня зовут ${name}`;
  return greeting;
}