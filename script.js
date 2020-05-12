'use strict';

const text = document.getElementById('color'),
      btn = document.getElementById('change');

// text.style.cssText = 'text-align: center;';
// body.style.display = 'flex';
// btn.style.



function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

btn.addEventListener('click', () => {
  let color = generateColor();
  document.body.style.backgroundColor = `${color}`;
  text.textContent = `${color.toString()}`;


});
