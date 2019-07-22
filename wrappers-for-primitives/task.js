function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let md = function (date1, date2) {
      let months;
      months = (date2.getFullYear() - date1.getFullYear()) * 12;
      months -= date1.getMonth();
      months += date2.getMonth();
      return months <= 0 ? 0 : months;
    }
    let P = percent / 1200;
    let D = new Date();
    let n = md( D, date );
    let monthAmount = (amount - contribution) * (P + P / ((Math.pow((1 + P), n)) - 1 ));
    let totalAmount = monthAmount * n;
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === '' || name === 'undefined' || name === 'null') {
    	name = 'Аноним';
    }
    return (`Привет, мир! Меня зовут ${name}`);
}