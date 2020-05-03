'use strict';


let num = 266219,
    mult = 1,
    rezPow = 1;

for (let i = 0; i < num.toString().length; i++) {
  let a = num.toString()[i];
  mult *= +a;
}

for (let i = 0; i < 3; i++) {
  rezPow *= mult;
}

// rezPow = mult ** 3;

console.log(mult);
console.log(+rezPow.toString().slice(0, 2));

