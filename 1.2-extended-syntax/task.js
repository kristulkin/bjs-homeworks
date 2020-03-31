"use strict";

function getResult(a, b, c) {
    let x = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    
    if (D < 0) {
        x = [];
    } else if (D === 0) {
        x[0] = -b / (2 * a);
    } else {
        x[0] = (-b + Math.sqrt(D)) / (2 * a);
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
    };

    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    let averageMark = 0;

    if (marks.length === 0) {
        averageMark = 0;
    } else if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
            averageMark = sum / marks.length;
        }
    } else {
      marks.splice(5);
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;
      }
    }
    
    return averageMark;
}

function askDrink(name,dateOfBirthday) {
   let nowDate = new Date();
   let age = nowDate.getFullYear() - dateOfBirthday.getFullYear();
   let result;

   if (age >= 18) {
       result = `Не желаете ли олд-фэшн, ${name}?`;
   } else {
       result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
   }
     return result;
}