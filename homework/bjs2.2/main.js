'use strict'
let rating = 0;
let marks = [2,3,4,5,16]
function getAverageMark(marks) {
    if (marks.length > 5 ) {
        console.log('Количество оценок больше 5');
        marks.slice(0,4);
        console.log(marks);
    } else {
        for (let i = 0; i < marks.length; i++) {
            rating += marks[i];
        }
        rating = rating / marks.length;
        console.log(rating);
    }
}
getAverageMark(marks);