'use strict';

const elemBody = document.getElementsByTagName('body');

function DomElement (property, creator) {
  property = property || {};
    this.selector = property.selector;
    this.height = property.height;
    this.width = property.width;
    this.bg = property.bg;
    this.fontSize = property.fontSize;
    this.cssText = property.cssText;

} 

DomElement.prototype.creator = function() {
  const elem = elemBody.createElement('div');
  if (this.selector.toString().substring(0, 1) === '.') {
    
    elem.textContent = 'Бел';
    elem.classList.add(this.selector.toString().substring(1, this.selector.toString().length));
    elem.style = this.cssText;
  }

  if (this.selector.toString().substring(0, 1) === '#') {
    elem.setAttribute('id', this.selector.toString().substring(1, this.selector.toString().length));
  }

  console.log(elem);
};


let prop = {selector: '.dom', height: '40px', width: '40px', bg: 'green', cssText : 'anyway'};
const element1 = new DomElement(prop);

element1.creator();


