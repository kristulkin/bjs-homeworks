function getSolution(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
       return {
           D: discriminant, 
           roots: []
        };
    } else if (discriminant === 0) {
        let x1 = -b / (2 * a);
        return {
            D: discriminant, 
            roots: [x1]
        };
    } else if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return {
            D: discriminant, 
            roots: [x1, x2]
        };
    };
};

function showSolutionMessage(a, b, c) {
    let result = getSolution(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        return `Уравнение не имеет вещественных корней`
    } else if (result.D === 0) {
        return `Уравнение имеет один корень X₁ = ${result.roots}`
    } else if (result.D > 0) {
        return `Уравнение имеет два корня, X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    };
     
}; 

let data = {
      algebra: [],
      geometry: [],
      russian: [],
      physics: [],
      musics: [],
      english: [], 
      poetry: [],
      chemystry: [],
      french: []
  };
  
  function getAverageScore(data) {
    let averageScore = {};
    for (let values in data) {
      averageScore[values] = getAverageMark(data[values]);
    };

    averageScore.average = getAverageMark(getAverageItems(averageScore));

    return averageScore;
  };

  function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];    
    }
    return sum / marks.length;
  };

  function getAverageItems(items) {
      let averageArray = [];
      for (let prop in items) {
          averageArray.push(items[prop]);
      }
      return averageArray;
  }
   
  console.log(getAverageScore({
          algebra: [2, 3],
          geometry: [5, 6],
          russian: [2, 3, 5],
          physics: [2, 3],
          musics: [5, 6],
          english: [2, 3, 5],
          poetry: [2, 3, 5, 6],
          chemystry: [3, 5, 6],
          french: [2]
  }));



  function getPersonData(secretData) {
      let person = {
        //   firstName,
        //   lastName
      };
      
      for (let value in secretData) {
        
          person[value] = getDecodedValue(secretData[value])

      };

      return person
      
  };

  function getDecodedValue(secret) {
      let codePerson;
      if (secret === 0) {
          codePerson = "Родриго";
      } else if (secret === 1) {
          codePerson = "Эмильо"
      };
      return codePerson;
  };

  console.log(getPersonData({
      aaa: 0,
      bbb: 1
  }));