'use strict';

const funcStr = (str) => {
  
  if (typeof str !== typeof 'string') {
    console.log(`It's not a String`);
  } else {
    str = str.trim();
    console.log(str);
    
    if (str.length > 30) {
      str = str.slice(0, 29) + '...';
    }
    return console.log(str);
  
  }
};

funcStr('       Это точно сторокаааааааааааааааааааааааа');