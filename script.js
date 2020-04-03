let money = +prompt('What is your monthly income?'),
  addExpenses = prompt('List the possible expenses for the calculated period, separated by commas'),
  income = 'project design work',
  deposit = confirm('Do you have a deposit at the bank?'), 
  mission = 400000,
  arrAddExpenses = addExpenses.toLowerCase().split(','),
  expenses1 = prompt('Enter a required expense'),
  amount1 = parseFloat(prompt('How much does it cost?')),
  expenses2 = prompt('Enter a required expense'),
  amount2 = parseFloat(prompt('How much does it cost?')), 
  accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2)),
  budgetDay = accumulatedMonth / 30;

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
// Sum of the expenses
function getExpensesMonth(arg1, arg2){
  return  (arg1 + arg2);
}

// Net profit
function getAccumulatedMonth(arg1, arg2) {
  return (arg1 - arg2);
}

// Goal achievement period 
function getTargetMonth(arg1, arg2){
  return (Math.ceil(arg1 / arg2));
}

// Typeof function
function showTypeOf(data){
  return (typeof (data));
}


console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log(getExpensesMonth(amount1, amount2));
console.log(arrAddExpenses);
console.log(getTargetMonth(mission, accumulatedMonth) + 'months');
console.log(Math.floor(budgetDay));
console.log(getStatusIncome(budgetDay));