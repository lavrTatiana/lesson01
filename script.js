let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

let money,
  addExpenses = prompt('List the possible expenses for the calculated period, separated by commas'),
  income = 'project design work',
  deposit = confirm('Do you have a deposit at the bank?'), 
  mission = 400000,
  arrAddExpenses = addExpenses.toLowerCase().split(','),
  expenses = [],
  targetMonth,
  responseOnDeadline,
  accumulatedMonth,
  budgetDay;


// Enter sum of money
function start() {
  do {
    money = prompt('What is your monthly income?');
  }
  while (!isNumber(money));
  return (money*1);
}

// Enter the expenses
let expensesMonth = getExpensesMonth();

function getExpensesMonth() {
  let sumOfExpenses = 0;
  
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Enter a required expense');
    sumOfExpenses += +prompt('How much does it cost?');
  }
  return (sumOfExpenses);
}

// Accumulate sum of the expenses
accumulatedMonth = getAccumulatedMonth(start(), expensesMonth);

// Accumulate budget per day
budgetDay = accumulatedMonth / 30;

// Net profit
function getAccumulatedMonth(arg1, arg2) {
  return (arg1 - arg2);
}

// Goal achievement period 
function getTargetMonth(arg1, arg2) {
  targetMonth = Math.ceil(arg1 / arg2);
  return (targetMonth);
}

function respondOnDeadline(targetMonth) {
  if (targetMonth > 0) {
    responseOnDeadline = ('The mission will be achieved in ' + targetMonth + ' month(s)');
  } else if (targetMonth === 0) {
    responseOnDeadline = ('The mission will be achieved in this month');
  } else {
    responseOnDeadline = ('Unfortunately, under these conditions, the mission will not be achieved');
  }
  return (responseOnDeadline);
}

// Typeof function
function showTypeOf(data) {
  return (typeof (data));
}

// Income status
function getStatusIncome(arg1){
  if (arg1 >= 1200){
    return ('You have high income');
  }
  else if (arg1 >= 600 && arg1 < 1200){
    return ('You have average income');
  }
  else if (arg1 < 600 && arg1 >= 0){
    return ('Unfortunately, your income is below average');
  }
  else {
    return ('Something wrong');
  }
}


console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log('Monthly expenses are ' + expensesMonth);
console.log(arrAddExpenses);
console.log(respondOnDeadline(getTargetMonth(mission, accumulatedMonth)));
console.log(Math.floor(budgetDay));
console.log(getStatusIncome(budgetDay));