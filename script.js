'use strict';

// Первое задание
let arr = ['483', '345', '2315', '9894', '222', '917'],
    arrNew = [];

arr.forEach((elem) => {
  if (elem.slice(0, 1) === '4' || elem.slice(0, 1) === '2') {
    arrNew.push(elem);
  }
});

console.log(arrNew);

// Второе задание 
for (let i = 1; i < 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    let mod = i % j;
    if (mod === 0) {
      count++;
    }
    if (count > 2) {
      break;
    }
  }
  if (count === 2) {
    console.log(`${i}. Делители этого числа: 1 и ${i}`);
  }
}
