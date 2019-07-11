'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x = [];
    let D;
    D = Math.pow(b,2) - 4*a*c;
    if (D < 0) {
        x = [];
        alert("Корней нет!");
    } else if (D == 0) {
        x[0] = -b / (2*a);
    } else {
        x[0] = (-b+Math.sqrt(D))/(2*a);
        x[1] = (-b-Math.sqrt(D))/(2*a);
    }
    return x;
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}



function getAverageMark(marks) {
    let result = 0;
    if (marks.length > 5 ) {
        alert('Количество оценок больше 5');
        marks.splice(0,5);
    }
    for (let i = 0; i < marks.length; i++) {
        result += marks[i];
    }
    result = result / marks.length;
    console.log(result)
    return result;
}

