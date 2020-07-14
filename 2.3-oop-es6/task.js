class Weapon {
  constructor(weapon) {
    this.name = weapon.name;
    this.attack = weapon.attack;
    this.durability = weapon.durability;
    this.range = weapon.range;
    this.startDurabikity = this.durability;
  }

  takeDamage(damage) {
    if (damage <= this.durability) {
      this.durability -= damage;
    } else {
      this.durability = 0;
    }
    return this.durability;
  }
  getDamage() {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability >= this.startDurabikity * 0.3) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
  }
  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const sword = new Weapon({
  name: "Старый меч",
  attack: 20,
  durability: 10,
  range: 1,
});

const arm = new Weapon({
  name: "Рука",
  attack: 1,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: "Лук",
  attack: 10,
  durability: 200,
  range: 3,
});

const knife = new Weapon({
  name: "Нож",
  attack: 5,
  durability: 300,
  range: 1,
});
const staff = new Weapon({
  name: "Посох",
  attack: 8,
  durability: 300,
  range: 2,
});
const longBow = new Weapon({
  name: "Длинный лук",
  attack: 15,
  durability: bow.durability,
  range: 4,
});
const axe = new Weapon({
  name: "Секира",
  attack: 27,
  durability: 800,
  range: sword.range,
});
const stormStaff = new Weapon({
  name: "Посох Бури",
  attack: 10,
  durability: staff.durability,
  range: 3,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

console.log("=== Задание 2 ===");

class Arm extends Weapon {
  constructor() {
    super({ name: "Рука", attack: 1, durability: Infinity, range: 1 });
  }
}
const arm2 = new Arm();
class Bow extends Weapon {
  constructor() {
    super({ name: "Лук", attack: 10, durability: 200, range: 3 });
  }
}
const bow2 = new Bow();
class Sword extends Weapon {
  constructor() {
    super({ name: "Меч", attack: 25, durability: 500, range: 1 });
  }
}
const sword2 = new Sword();

class Knife extends Weapon {
  constructor() {
    super({ name: "Нож", attack: 5, durability: 300, range: 1 });
  }
}
const knife2 = new Knife();

class Staff extends Weapon {
  constructor() {
    super({ name: "Посох", attack: 8, durability: 300, range: 2 });
  }
}
const staff2 = new Staff();

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}
const longBow2 = new LongBow();

class Axe extends Sword {
  constructor() {
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
  }
}
const ax2 = new Axe();

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
  }
}
const stormStaff2 = new StormStaff();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

// Задание 3

console.log("=== Задание 3 ===");

class StudentLog {
  constructor(name) {
    this.name = name;
    this.gradesOfSubjects = {};
    this.counter = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    this.counter.push(grade);
    if (this.gradesOfSubjects.hasOwnProperty(subject)) {
      if (+grade > 1 && +grade < 6) {
        this.gradesOfSubjects[subject].push(grade);
      } else {
        console.log(
          `Вы пытались поставить оценку "${grade}" по предмету ${subject}. Допускаются только числа от 1 до 5`
        );
      }
    } else {
      this.gradesOfSubjects[subject] = [];
      if (+grade > 0 && +grade < 6) {
        this.gradesOfSubjects[subject].push(grade);
      } else {
        console.log(
          `Вы пытались поставить оценку "${grade}" по предмету ${subject}. Допускаются только числа от 1 до 5`
        );
      }
    }
    return this.gradesOfSubjects[subject].length;
  }

  getAverageBySubject(subject) {
    let wholeGrade = 0;
    if (!this.gradesOfSubjects.hasOwnProperty(subject)) {
      console.log(subject);
      return 0;
    } else {
      console.log(this.gradesOfSubjects[subject]);
      for (let i = 0; i < this.gradesOfSubjects[subject].length; i++) {
        wholeGrade +=
          this.gradesOfSubjects[subject][i] /
          this.gradesOfSubjects[subject].length;
      }
      return wholeGrade;
    }
  }

  getTotalAverage() {
    let TotalGradesAverage = 0;

    for (let i = 0; i < this.counter.length; i++) {
      TotalGradesAverage += this.counter[i] / this.counter.length;
    }
    this.gradesOfSubjects.totalGradesAverage = TotalGradesAverage;
    return this.gradesOfSubjects.totalGradesAverage;
  }
}

const log = new StudentLog("Олег Никифоров");
console.log(log.getName());
