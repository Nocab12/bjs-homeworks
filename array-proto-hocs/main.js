"use strict";

const compareArrays = function(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function(el, i) {
      return el === arr2[i];
    })
  );
};

function memoize(fn, limit) {
  const memory = [];
  let i = 0;

  return function() {
    let args = Array.from(arguments);
    const checkAviabl = memory.find(x => compareArrays(x.arg, args));
    let resultCalc;

    console.group(`Функция выполнялась ${fn.name} ${++i} раз(a)`);
    console.log(memory);

    if (checkAviabl === undefined) {
      let resultCalc = fn.apply(null, args);
      console.log(
        `Функция вызвана НЕ из памяти. Результат вычисления: ${resultCalc}`
      );
      memory.push({ arg: args, result: resultCalc });
      if (memory.length > limit) {
        memory.shift();
      }
    } else {
      let resultCalc = checkAviabl.result;
      console.log(`Функция вызвана из памяти. Ответ: ${resultCalc}`);
    }
    console.groupEnd();
    return resultCalc;
  };
}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 4);
let test = memoize((a, b, c) => a + b + c, 3);
const trial = memoize((a, b, c) => a + b + c, 3);

console.log(test(7, 7, 7));
console.log(test(7, 7, 7));
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(7, 9));
console.log(mSum(1, 9));
console.log(mSum(9987, 12));
console.log(mSum(2, 6));
console.log(mSum(6666, 4));
console.log(trial(1, 6, 11));
console.log(trial(10, 10, 5));
console.log(trial(20, 5, 0));
console.log(trial(30, 9, 0));
console.log(trial(50, 9, 10));
console.log(trial(100, 9, 0));
console.log(trial(100, 9, 0));
console.log(trial(7, 7, 7));