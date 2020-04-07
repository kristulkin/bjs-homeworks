"use strict";

function getResult(a, b, c) {
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant === 0) {
        x[0] = -b / (2 * a);
    } else if (discriminant > 0) {
        x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    };

    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    
    if (marks.length === 0) {
        return 0;
    } else {
      marks.splice(5);
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      return sum / marks.length;
    }
    
}

function askDrink(name,dateOfBirthday) {

   if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
       return `Не желаете ли олд-фэшн, ${name}?`;
   } else {
       return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
   }

}