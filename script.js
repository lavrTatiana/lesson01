'use strict';

const daysWeek = document.querySelector('.days-week');
let date = new Date('17 may 2020'),
    day = date.getDay();

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

week.forEach((item, index) => {
  const newDay = document.createElement('div');
  newDay.style.cssText = 'font-size: 2rem;';
  
  daysWeek.append(newDay);
  newDay.textContent = item;
  console.log(day);
  
    
  if (index === 5 || index === 6) {
    newDay.style.cssText = 'font-size: 2rem; font-style: italic';
  } 
  if (index === (day - 1)) {
    newDay.style.cssText = 'font-size: 2rem; font-weight: bold';
  }
  if ((index === 6 && day === 0) || (index === 5 && day === 6)) {
    newDay.style.cssText = 'font-size: 2rem; font-style: italic; font-weight: bold;';
  }
});