function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now = Date.now();
    let userBirthday = new Date (birthday).getTime();
    let diff = now - userBirthday;
    let age = ( diff / ( (31622400000+(31536000000*3)) /4) );
    console.log(age);
    return (age>18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    this.animal = animal;
    let sound = animal.sound;

    if (!animal) {
        return null
        } else if (animal) { 
        return sound;
    }
};

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += parseInt(marks[i], 10);
    }
    return Math.round(sum / marks.length);
}