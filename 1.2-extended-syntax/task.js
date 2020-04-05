"use strict";

function getResult(a, b, c) {
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant === 0) {
        x[0] = -b / (2 * a);
    } else {
        x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    };

    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    let averageMark;

    if (marks.length === 0) {
        averageMark = 0;
    } else {
      marks.splice(5);
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      averageMark = sum / marks.length;
    }
    
    return averageMark;
}

function askDrink(name,dateOfBirthday) {
//    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
   let result;

   if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
       result = `Не желаете ли олд-фэшн, ${name}?`;
   } else {
       result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
   }
     return result;
}