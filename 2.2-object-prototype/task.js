function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal == undefined) {
        return null;
    } else {
        return sound;
    }
        
};

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]; 
    };
    return Math.round(sum / marks.length);
};

function checkBirthday(birthday) {
    let now = new Date().getTime();
    let date = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = Math.floor(diff / (8766*60*60*1000));
    return age;
    
}