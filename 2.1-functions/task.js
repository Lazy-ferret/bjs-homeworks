//Задание №1

function getSolutions(a, b, c) {
  let D = (b ** 2) - (4 * a * c);
  let x1;
  let x2;
  let roots = [];
  let solutions = {
    D,
    roots
  };
  
  if (D == 0) {
    x1 = (-b) / (2 * a);
    roots.push(x1);
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots.push(x1, x2);
  } 
  return solutions;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log('Вычисляем корни квадратного уравнения ax² + bx + c');
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else {console.log('Уравнение не имеет вещественных корней')}
}
console.log(showSolutionsMessage(1, 2, 3));
console.log(showSolutionsMessage(7, 20, -3));
console.log(showSolutionsMessage(2, 4, 2));


//Задание №2
function getAverageScore(data) {
  if (data == {}) {
    data.average = 0;
  } else {
    for (let key in data) {
      data[key] = getAverageMark(data[key]);
    }
  data.average = getAverageMark(Object.values(data))
  }
  return data 
}

function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
  } else {
    let sumOfMarks = 0;
    for (i = 0; i < marks.length; i++) {
      sumOfMarks += marks [i];
    } 
    return sumOfMarks / marks.length
  }
}

//Задание №3
function getPersonData(secretData) {
  let personData = {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }
  return personData;
}

function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  } else {
    return 'Эмильо';
  }
}

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));