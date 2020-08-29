function getResult(a,b,c){
  'use strict';
  let x = [];
  let discriminant = (b ** 2) - (4 * a * c);
  if (discriminant == 0) {
    x [0] = (-b) / (2 * a); 
  } else if (discriminant > 0) {
    x [0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    x [1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  } 
  return x;
}

function getAverageMark(marks){
  'use strict';
  if (marks.length == 0) {
    return 0;
  } else if (marks.length > 5) {
    console.log('Количество оценок больше 5');
    marks.splice(5);
  }
  let sum = 0;
  for (let i= 0; i < marks.length; i++){
    sum += marks[i];
  }
  let averageMark = sum / marks.length;
  return averageMark; 
}

function askDrink(name,dateOfBirthday){
  'use strict'; 
  let currentDate = new Date();
  let currentAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
  let result;
  if (currentAge > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}