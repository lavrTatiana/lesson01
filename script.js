let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

let money,
    start = function() {
      do {
        money = prompt('What is your monthly income?');
      }
      while (!isNumber(money));
      return (money*1);
    }


let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 400000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    targetMonth: 0,

    asking: function() {
      let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Do you have a deposit at the bank?');
      
      for (let i = 0; i < 2; i++) {
        appData.expenses[prompt('Enter a required expense')] =+prompt('How much does it cost?');
      }
    },

    getExpensesMonth: function() {
      let sumOfExpenses = 0;  
      for (let key in appData.expenses){
        sumOfExpenses += appData.expenses[key];
      }
      return sumOfExpenses;
    },

    getBudget: function(arg1, arg2) {
      return (arg1 - arg2);
    },

    getTargetMonth: function(arg1, arg2) {
      appData.period = Math.ceil(arg1 / arg2);
      return (appData.period);
    },
    
    getStatusIncome: function(arg1){
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
}

start();
appData.asking();

// Enter the expenses
appData.expensesMonth = appData.getExpensesMonth();

// Accumulate sum of the expenses
appData.budgetMonth = appData.getBudget(money, appData.expensesMonth);

// Accumulate budget per day
appData.budgetDay = appData.budgetMonth / 30;

function respondOnDeadline(targetMonth) {
  let responseOnDeadline;
  if (targetMonth > 0 && targetMonth != 1) {
    responseOnDeadline = ('The mission will be achieved in ' + targetMonth + ' month(s)');
  } else if (targetMonth === 1) {
    responseOnDeadline = ('The mission will be achieved in this month');
  } else {
    responseOnDeadline = ('Unfortunately, under these conditions, the mission will not be achieved');
  }
  return (responseOnDeadline);
}


console.log('Monthly expenses are ' + appData.expensesMonth);
console.log(respondOnDeadline(appData.getTargetMonth(appData.mission, appData.budgetMonth)));
console.log(appData.getStatusIncome(appData.budgetDay));