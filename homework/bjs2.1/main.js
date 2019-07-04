'use strict'

function getResult(a,b,c) {
    let x = [];
    let D;
    /*2*x*x +4*x -3 = 0*/
    D = Math.pow(b,2) - 4*a*c;
    if (D < 0) {
        x = 'Корней нет';
        console.log(x);
    } else if (D == 0) {
        x = -b / (2*a);
    } else {
        x[0] = (-4+Math.sqrt(D))/(2*a);
        x[1] = (-4-Math.sqrt(D))/(2*a);
        /*x2 = (-4+D)/(2*a);*/
    }
    return x;
}
getResult(2,4,-3);