const buttonCalculate = document.getElementById('start');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const checkboxDeposit = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('additional_income-item');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.getElementsByClassName('income-title')[1];
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.getElementsByClassName('expenses-title')[1];
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
    


console.log(buttonCalculate);
console.log(buttonIncomeAdd);
console.log(buttonExpensesAdd);
console.log(checkboxDeposit);
console.log(additionalIncomeItem);
console.log(budgetDayValue);
console.log(expensesMonthValue);
console.log(additionalIncomeValue);
console.log(additionalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);
console.log(salaryAmount);
console.log(incomeTitle);
console.log(expensesTitle);
console.log(incomeAmount);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);


// let isNumber = function(n) {
//   return (!isNaN(parseFloat(n)) && isFinite(n));
// }

// let money,
//     start = function() {
//       do {
//         money = prompt('What is your monthly income?');
//       }
//       while (isNaN(money) || money === '' || money === null)
//     }

// start();

// let appData = {
//     budget: money,
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     persentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 400000,
//     period: 3,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
    
//     asking: function() {

//       if (confirm('Do you have an extra income?')) {
//         let itemIncome;
//         let cashIncome;
//         do {
//           itemIncome = prompt('What kind of the extra income do you have?');
//         }
//         while (isNumber(itemIncome) || itemIncome === '' || itemIncome === null);
//         do {
//           cashIncome = prompt('How much you earn on this?');
//         }
//         while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
//         appData.income[itemIncome] = cashIncome;
//       }

//       let addExpenses = prompt('List the possible expenses for the calculated period, separated by commas');
//       appData.addExpenses = addExpenses.toLowerCase().split(',');
//       appData.deposit = confirm('Do you have a deposit at the bank?');
      
//       for (let i = 0; i < 2; i++) {

//         let itemExpenses;
//         do {
//           itemExpenses = prompt('Enter a required expense');
//         }
//         while (isNumber(itemExpenses) || itemExpenses === '' || itemExpenses === null);
        
//         let cashExpenses;
//         do {
//           cashExpenses = prompt('How much does it cost?');
//         }
//         while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
        
//         appData.expenses[itemExpenses] = cashExpenses;
//       }
//     },

//     getExpensesMonth: function() {
//       for (let key in appData.expenses){
//         appData.expensesMonth += +appData.expenses[key];
//       }
//     },

//     getBudget: function() {
//       appData.budgetMonth = appData.budget - appData.expensesMonth;
//       appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     },

//     getTargetMonth: function() {
//       return (Math.ceil(appData.mission / appData.budgetMonth));
//     },
    
//     getStatusIncome: function(){
//       if (appData.budgetDay >= 1200){
//         return ('You have high income');
//       }
//       else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
//         return ('You have average income');
//       }
//       else if (appData.budgetDay < 600 && appData.budgetDay >= 0){
//         return ('Unfortunately, your income is below average');
//       }
//       else {
//         return ('Something wrong');
//       }
//     },

//     getInfoDeposit: function() {
//       if (appData.deposit) {
//         do {
//           appData.persentDeposit = prompt('What is the annual percentage?');
//         }
//         while (isNaN(appData.persentDeposit) || appData.persentDeposit === '' || appData.persentDeposit === null);
//         do {
//         appData.moneyDeposit = prompt('How much is deposited in the account?');
//         }
//         while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);

//       }
//     },

//     calcSavedMoney: function() {
//       return appData.budgetMonth * appData.period;
//     }
// }


// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getInfoDeposit();



// function respondOnDeadline() {
//   let responseOnDeadline;
//   if (appData.getTargetMonth() > 0 && appData.getTargetMonth() != 1) {
//     responseOnDeadline = ('The mission will be achieved in ' + appData.getTargetMonth() + ' month(s)');
//   } else if (appData.getTargetMonth() === 1) {
//     responseOnDeadline = ('The mission will be achieved in this month');
//   } else {
//     responseOnDeadline = ('Unfortunately, under these conditions, the mission will not be achieved');
//   }
//   return (responseOnDeadline);
// }

// console.log('Monthly expenses are ' + appData.expensesMonth);
// console.log(respondOnDeadline());
// console.log(appData.getStatusIncome());


// for (let key in appData) {
//   console.log('This program includes data: ' + key + '-' + appData[key]);
// }

// let ans = '';
// for (let word of appData.addExpenses) {
//   ans += (word[0].toUpperCase() + word.slice(1) + ', ');
// } 
// console.log(ans.slice(0, -2));

