let money = +prompt('What is your monthly income?'),
  addExpenses = prompt('List the possible expenses for the calculated period, separated by commas'),
  income = 'project design work',
  deposit = prompt("Do you have a deposit at the bank? Please, write 'yes' or 'no'"), 
  mission = 400000,
  arr = addExpenses.toLowerCase().split(','),
  expenses1 = prompt('Enter a required expense'),
  amount1 = parseFloat(prompt('How much does it cost?')),
  expenses2 = prompt('Enter a required expense'),
  amount2 = parseFloat(prompt('How much does it cost?')), 
  budgetMonth = (money - amount1 - amount2),
  budgetDay = budgetMonth / 30,
  period = Math.ceil(mission / budgetMonth);
  

// Boolean for deposit
if (deposit == 'yes') {
  deposit = true;
} else {
  deposit = false; 
}

// constraction fot budgetDay
switch (budgetDay) {
  case (budgetDay >= 1200):
    console.log('You have high income');
    break;
  case ((budgetDay >= 600) && (budgetDay < 1200)):
    console.log('You have average income');
    break;
  case ((budgetDay < 600) && (budgetDay >= 0)):
    console.log('Unfortunately, your income is below average');
    break;
  default:
    console.log('Something wrong');    
}

// alert("Let's try to understand git /face-palm/");
// console.log("let's imagine that you've already done /or that you are cat/");
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('The period is ' + period + ' ' + 'months');
console.log('The goal to earn is ' + mission + ' ' + 'rubles');
console.log(arr);
console.log(Math.floor(budgetDay));