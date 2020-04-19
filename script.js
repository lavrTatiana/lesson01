'use strict';

let buttonCalculate = document.getElementById('start'),
    buttonPlus = document.getElementsByTagName('button'),
    incomePlus = buttonPlus[0],
    expensesPlus = buttonPlus[1],
    checkboxDeposit = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'), 
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');
    

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    
    
    start: function() {
      
      appData.budget = +salaryAmount.value;

      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getBudget();
      appData.getInfoDeposit();
      appData.getAddExpenses();
      appData.getAddIncome();
      
      appData.showResult();
      
    },

    showResult: function() {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcSavedMoney();
      periodSelect.addEventListener('input', function() {
        incomePeriodValue.value=appData.calcSavedMoney();
      });
      
    },

    addExpensesBlock: function() {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');

      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
    },

    getExpenses: function() {
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if (itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },

    addIncomeBlock: function() {
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');

      if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
      }
    },

    getIncome: function() {
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== '') {
          appData.income[itemIncome] = cashIncome;
        }
      });
      
      for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
      }

    },

    getAddExpenses: function() {
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item) {
        item = item.trim();
        if (item !== ''){
          appData.addExpenses.push(item);
        }
      });

    },

    getAddIncome: function(){
      additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          appData.addIncome.push(itemValue);
        }
      });
    },

    getExpensesMonth: function() {
      for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
      }
    },

    getBudget: function() {
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {
      return (targetAmount.value / appData.budgetMonth);
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
        do {
          appData.persentDeposit = prompt('What is the annual percentage?');
        }
        while (isNaN(appData.persentDeposit) || appData.persentDeposit === '' || appData.persentDeposit === null);
        do {
        appData.moneyDeposit = prompt('How much is deposited in the account?');
        }
        while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);

      }
    },

    calcSavedMoney: function() {
      return appData.budgetMonth * periodSelect.value;
    }
};

// Проверка на заполненное поле "Месячный доход"
let clicked = function() {
  if(salaryAmount.value === '') {
    buttonCalculate.removeEventListener('click', alert ('Ошибка, поле "Месячный доход" должно быть заполнено!'));
    return;
  }

  appData.start();
};

// Кнопка запуска
buttonCalculate.addEventListener('click', clicked);

// Отклик кнопок Plus
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

// Отклик на range, изменение численного значения
periodSelect.addEventListener('input', function() {
  periodAmount.textContent = periodSelect.value;
}, false);



// function respondOnDeadline() {
//   let responseOnDeadline;
//   if (appData.getTargetMonth() > 0 && appData.getTargetMonth() !== 1) {
//     responseOnDeadline = ('The mission will be achieved in ' + appData.getTargetMonth() + ' month(s)');
//   } else if (appData.getTargetMonth() === 1) {
//     responseOnDeadline = ('The mission will be achieved in this month');
//   } else {
//     responseOnDeadline = ('Unfortunately, under these conditions, the mission will not be achieved');
//   }
//   return (responseOnDeadline);
// }


// for (let key in appData) {
//   console.log('This program includes data: ' + key + '-' + appData[key]);
// }

// let ans = '';
// for (let word of appData.addExpenses) {
//   ans += (word[0].toUpperCase() + word.slice(1) + ', ');
// } 
// console.log(ans.slice(0, -2));

