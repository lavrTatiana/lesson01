let num = 266219;
let result = 1;
let rest = num;
let i = num.toString().length;
for (; i !== 0; i--) {
  number = Math.trunc(rest / Math.pow(10, (i - 1)));
  rest -= (number * Math.pow(10, (i - 1)));
  result *= number;
}

console.log(result);
// console.log(num.toString().length)
// console.log(number);
// console.log(i);
// console.log(Math.trunc(num / Math.pow(10, 5)));
