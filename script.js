let money,
    start = function() {
      do {
        money = prompt('What is your monthly income?');
      }
      while (isNaN(money) || money === '' || money === null)
    }

start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    mission: 400000,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    
    asking: function() {

      if (confirm('Do you have an extra income?')) {
        let itemIncome = prompt('What kind of the extra income do you have?');
        let cashIncome = prompt('How much you earn on this?');
        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Do you have a deposit at the bank?');
      
      for (let i = 0; i < 2; i++) {

        let itemExpenses = prompt('Enter a required expense');
        let cashExpenses;
        do {
          cashExpenses = prompt('How much does it cost?');
        }
        while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
        
        appData.expenses[itemExpenses] = cashExpenses;
      }
    },

    getExpensesMonth: function() {
      let sumOfExpenses = 0;  
      for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
      }
    },

    getBudget: function() {
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {
      return (Math.ceil(appData.mission / appData.budgetMonth));
    },
    
    getStatusIncome: function(){
      if (appData.budgetDay >= 1200){
        return ('You have high income');
      }
      else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
        return ('You have average income');
      }
      else if (appData.budgetDay < 600 && appData.budgetDay >= 0){
        return ('Unfortunately, your income is below average');
      }
      else {
        return ('Something wrong');
      }
    },

    getInfoDeposit: function() {
      if (appData.deposit) {
        appData.persentDeposit = prompt('What is the annual percentage?');
        appData.moneyDeposit = prompt('How much is deposited in the account?')
      }
    },

    calcSavedMoney: function() {
      return appData.budgetMonth * appData.period;
    }
}


appData.asking();
appData.getExpensesMonth();
appData.getBudget();


function respondOnDeadline() {
  let responseOnDeadline;
  if (appData.getTargetMonth() > 0 && appData.getTargetMonth() != 1) {
    responseOnDeadline = ('The mission will be achieved in ' + appData.getTargetMonth() + ' month(s)');
  } else if (appData.getTargetMonth() === 1) {
    responseOnDeadline = ('The mission will be achieved in this month');
  } else {
    responseOnDeadline = ('Unfortunately, under these conditions, the mission will not be achieved');
  }
  return (responseOnDeadline);
}

console.log('Monthly expenses are ' + appData.expensesMonth);
console.log(respondOnDeadline());
console.log(appData.getStatusIncome());


for (let key in appData) {
  console.log('This program includes data: ' + key + '-' + appData[key]);
}

