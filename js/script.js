let money;
let time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budtet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
appData.expenses[question1] = question2;
alert("Бюджет на 1 день:" + (money/30));
console.log(appData);

//  Ответы на вопросы
// 1) - 7
// 2) - console.log();
// 3) || - или(одно условие должно быть true) && - и(все условие только true,еслы false - не будет работать) 