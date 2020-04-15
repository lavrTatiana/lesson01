'use strict';

const elemBook1 = document.getElementsByClassName('book')[1];
const elemBook2 = document.getElementsByClassName('book')[0];
const elemBook3 = document.getElementsByClassName('book')[4];
const elemBook4 = document.getElementsByClassName('book')[3];
const elemBook5 = document.getElementsByClassName('book')[5];
const elemBook6 = document.getElementsByClassName('book')[2];

const elemBody = document.querySelector('body');

const elemAdv = document.querySelectorAll('.adv');

const chaptersOfBook2 = elemBook2.querySelectorAll('li');
const chaptersOfBook5 = elemBook5.querySelectorAll('li');
const chaptersOfBook6 = elemBook6.querySelectorAll('li');

const newChapterOfBook6 = document.createElement('li');



// Упорядочивание блоков книг по классу book 
elemBook1.after(elemBook2); 
elemBook2.after(elemBook3);
elemBook3.after(elemBook4);
elemBook4.after(elemBook5);
elemBook5.after(elemBook6);

// Смена фона для body (downloaded my own background)
elemBody.setAttribute('style', 'background-image: url(./image/new_open_book.jpg)');


// Исправление опечатки в блоке Книга 3
elemBook3.getElementsByTagName('a')[0].textContent = ('Книга 3. this и Прототипы Объектов');

// Delete the advertising
elemAdv[0].remove();


// Упорядочивание глав Книги2 
chaptersOfBook2[3].after(chaptersOfBook2[6]);
chaptersOfBook2[6].after(chaptersOfBook2[8]);
chaptersOfBook2[8].after(chaptersOfBook2[4]);
chaptersOfBook2[4].after(chaptersOfBook2[5]);
chaptersOfBook2[5].after(chaptersOfBook2[7]);
chaptersOfBook2[7].after(chaptersOfBook2[9]);
chaptersOfBook2[9].after(chaptersOfBook2[2]);


// Упорядочивание глав Книги5
console.log(chaptersOfBook5);
chaptersOfBook5[9].after(chaptersOfBook5[3]);
chaptersOfBook5[3].after(chaptersOfBook5[4]);
chaptersOfBook5[4].after(chaptersOfBook5[2]);
chaptersOfBook5[2].after(chaptersOfBook5[6]);
chaptersOfBook5[6].after(chaptersOfBook5[7]);
chaptersOfBook5[7].after(chaptersOfBook5[5]);
chaptersOfBook5[5].after(chaptersOfBook5[8]);


// Добавление новой главы в Книгу6
newChapterOfBook6.textContent = ('Глава 8: За пределами ES6');
chaptersOfBook6[8].append(newChapterOfBook6);
