//Задание №1
String.prototype.isPalindrome = function() {
  let message = this.toLowerCase().split(" ").join("");
  let reversedMessage = message.split("").reverse().join("");
  return (message == reversedMessage) ? true : false;
}

//Задание №2
function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
  } else {
    let sumOfMarks = 0;
    for (i = 0; i < marks.length; i++) {
      sumOfMarks += marks [i];
    } 
    let average = sumOfMarks / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
  }
}

//Задание №3
function checkBirthday(birthday) {
  let now = Date.now();
  birthday = Number (new Date(birthday));
  let diff = now - birthday;
  let age = diff / (365.25 * 24 * 60 * 60 * 1000);
  return (age >= 18) ? true : false;
}