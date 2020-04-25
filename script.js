'use strict';

let buttonCalculate = document.getElementById('start'),
    buttonCancel = document.getElementById('cancel'),
    buttonPlus = document.getElementsByTagName('button'),
    incomePlus = buttonPlus[0],
    expensesPlus = buttonPlus[1],
    depositCheck = document.getElementById('deposit-check'),
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
    periodAmount = document.querySelector('.period-amount'),
    calculateForm = document.querySelector('.calc'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');
  

let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

class AppData {
  constructor() {

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  check() {
    if (salaryAmount.value !== '') {
      buttonCalculate.removeAttribute('disabled');
    }
  }

  start() {
    if(salaryAmount.value === '') {
      buttonCalculate.removeEventListener('click', alert ('Ошибка, поле "Месячный доход" должно быть заполнено!'));
      return;
    } else if(depositPercent.value < 0 || depositPercent.value > 100) {
      buttonCalculate.removeEventListener('click', alert ('Процентная ставка по депозиту должна находиться в диапазоне от 0 до 100!'));
      return;
    }  
  
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getBudget();
    this.getAddExpenses();
    this.getAddIncome();
    this.showResult();
    
  
    // Фиксирование input, появление кнопки Cancel
    let textInput = calculateForm.querySelectorAll('.data input[type="text"]');
    let textData = Array.prototype.slice.call(textInput);
    textData.forEach((input) => {
      input.setAttribute('readonly', true);
    });
      
    incomePlus.disabled = true;
    expensesPlus.disabled = true;
    buttonCalculate.style.display = 'none';
    buttonCancel.style.display = 'block';
      
  }

  reset() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  
    let calcInputs = calculateForm.querySelectorAll('input');
    let calcArray = Array.prototype.slice.call(calcInputs);
    calcArray.forEach((input) => {
      input.value = '';
      input.removeAttribute('readonly');
    });
  
    incomePlus.disabled = false;
    expensesPlus.disabled = false;
  
    incomePlus.style.display = 'block';
    expensesPlus.style.display = 'block';
    
    buttonCalculate.style.display = 'block';
    buttonCancel.style.display = 'none';
  
    incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });
  
    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });
    periodSelect.value = 1;
    periodAmount.textContent = 1;

    // Block about deposit
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPercent.style.display = 'none';
    depositBank.value = '';
    depositAmount.value = '';
    depositCheck.checked = false;
  }

  showResult() {
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', function() {
      incomePeriodValue.value=_this.calcSavedMoney();
    });
  }
  
  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
  
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  }

  getExpenses() {
    const _this = this;
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
  
      if (itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }

  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
  
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  }

  getIncome() {
    const _this = this;
    incomeItems.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
  
      if (itemIncome !== '' && cashIncome !== '') {
        _this.income[itemIncome] = cashIncome;
      }
    });
    
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== ''){
        _this.addExpenses.push(item);
      }
    });
  }

  getAddIncome() {
    const _this = this;
    additionalIncomeItem.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        _this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() {
    for (let key in this.expenses){
      this.expensesMonth += +this.expenses[key];
    }
  }

  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth + monthDeposit - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth() {
    return (targetAmount.value / this.budgetMonth);
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200){
      return ('You have high income');
    }
    else if (this.budgetDay >= 600 && this.budgetDay < 1200){
      return ('You have average income');
    }
    else if (this.budgetDay < 600 && this.budgetDay >= 0){
      return ('Unfortunately, your income is below average');
    }
    else {
      return ('Something wrong');
    }
  }

  calcSavedMoney() {
    return this.budgetMonth * periodSelect.value;
  }  

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.value = '';
      depositPercent.style.display = 'inline-block';
    } else {
      depositPercent.value = valueSelect;
      depositPercent.style.display = 'none';
    }

  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }

  eventEventListeners() {
  
    // Кнопка запуска и сброса
    buttonCalculate.addEventListener('click', this.start.bind(this));
    buttonCancel.addEventListener('click', this.reset.bind(this));
    
    // Отклик кнопок Plus
    incomePlus.addEventListener('click', this.addIncomeBlock);
    expensesPlus.addEventListener('click', this.addExpensesBlock);
  
    // Отклик на range, изменение численного значения
    periodSelect.addEventListener('input', function() {
      periodAmount.textContent = periodSelect.value;
    }, false);

    depositCheck.addEventListener('change', this.depositHandler.bind(this));

  }

}

const appData = new AppData();
appData.eventEventListeners();

console.log(appData);


// document.querySelectorAll('input[type=text]').disabled = true;

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

