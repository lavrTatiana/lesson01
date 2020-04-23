'use strict';

function DomElement ({selector, height, width, bg, fontSize}) {
  // property = property || {};
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
} 

DomElement.prototype.creator = function() {
  
  if (this.selector.toString().substring(0, 1) === '.') {
    
    const elem = document.createElement('div');

    elem.classList.add(this.selector.toString().substring(1, this.selector.toString().length));
    elem.style.cssText = `height: ${this.height}; 
                          width: ${this.width}; 
                          background: ${this.bg}; 
                          font-size: ${this.fontSize}`;
    document.body.append(elem);
    console.log(elem);
    
  }

  if (this.selector.toString().substring(0, 1) === '#') {
    const elem2 = document.createElement('p');

    elem2.setAttribute('id', this.selector.toString().substring(1, this.selector.toString().length));
    elem2.style.cssText = `height: ${this.height}; 
                          width: ${this.width}; 
                          background: ${this.bg}; 
                          font-size: ${this.fontSize}`;
    document.body.append(elem2);
    console.log(elem2);
    
  }

};



const element1 = new DomElement({selector: '.dom', height: '100px', width: '300px', bg: 'green', fontSize: '30px'});
element1.creator();
document.getElementsByClassName('dom')[0].innerText = 'We would be young forever';


const element2 = new DomElement({selector: '.bom', height: '50px', width: '900px', bg: 'red', fontSize: '40px'});
element2.creator();
document.getElementsByClassName('bom')[0].innerText = 'We would be young forever';

const element3 = new DomElement({selector:'#for', height: '40px', width: '80px', bg: '#3333', fontSize: '8px'});
element3.creator();
document.getElementById('for').innerText = 'We would be young forever';