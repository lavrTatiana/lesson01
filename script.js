'use strict';

const time = document.querySelector('.time');

function updateClock() {

  let today = new Date();

  let year = today.getFullYear(),

      dateCorr = ('0' + today.getDate()).slice(-2),
      monthCorr = ('0' + (today.getMonth() + 1)).slice(-2),
      hoursCorr = ('0' + today.getHours()).slice(-2),
      minutesCorr= ('0' + today.getMinutes()).slice(-2),
      secondsCorr = ('0' + today.getSeconds()).slice(-2);
  
  time.style.cssText = 'font-size: 2rem; color: green;';
  time.textContent = `${dateCorr}.${monthCorr}.${year} - ${hoursCorr}:${minutesCorr}:${secondsCorr}`;
  
}

let timeCode = setInterval(updateClock, 1000);

