'use strict';

// Первое задание
let lang = 'en';

const weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      message = 'Переменная lang может принимать значения ru или en';

// Через if
if (lang === 'ru') {
  console.log(weekRu);
} else if (lang === 'en') {
  console.log(weekEn);
} else {
  console.log(message);
}

// Через switch
switch(lang) {
  case 'ru':
    console.log(weekRu);
    break;
  case 'en':
    console.log(weekEn);
    break;
  default:
    console.log(message);
}

// Через многомерный массив
const arrWeek = [];
arrWeek['ru'] = weekRu;
arrWeek['en'] = weekEn;

console.log(arrWeek[lang]);


// Второе задание
let namePerson = 'Tania';

(namePerson === 'Artem') ? console.log('Boss') : (namePerson === 'Max') ? console.log('Professor') : console.log('Student');


