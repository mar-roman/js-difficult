'use strict';

function DomElement(){
  this.selector = ''; 
  this.height = ''; 
  this.width = ''; 
  this.bg = ''; 
  this.position = 'absolute';
}

DomElement.prototype.create = function(selector){
  this.selector = selector;
  if(this.selector[0] === '.'){
    document.querySelector('body').innerHTML += '<div class="' + this.selector.slice(1) + '">' + '</div>';
    document.querySelector(this.selector).style.cssText += 'position: ' + this.position + ';';
  } else if(this.selector[0] === '#'){
    document.querySelector('body').innerHTML += '<p id="' + this.selector.slice(1) + '">' + '</p>';
    document.querySelector(this.selector).style.cssText += 'position: ' + this.position + ';';
  } else {
    alert('Вы ввели неверное значение!');
    this.create();
  }
};

DomElement.prototype.addText = function(){
  let tag = prompt('Какой тег надо заполнить?');
  document.querySelector(tag).innerHTML += 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
};

DomElement.prototype.changeHeight = function(value){
  document.querySelector(this.selector).style.cssText += 'height: ' + value + ';';
};

DomElement.prototype.changeWidth = function(value){
  document.querySelector(this.selector).style.cssText += 'width: ' + value + ';';
};

DomElement.prototype.changeBg = function(value){
  document.querySelector(this.selector).style.cssText += 'background: ' + value + ';';
};

document.addEventListener("DOMContentLoaded", function(){
  let element = new DomElement();
  element.create('.elem');
  element.changeHeight('100px');
  element.changeWidth('100px');
  element.changeBg('red');

  let left = 0;
  let top = 0;
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        left -= 10;
        document.querySelector(element.selector).style.cssText += 'left: ' + left + 'px;';
        break;
      case 38:
        top -= 10;
        document.querySelector(element.selector).style.cssText += 'top: ' + top + 'px;';
        break;
      case 39:
        left += 10;
        document.querySelector(element.selector).style.cssText += 'left: ' + left + 'px;';
        break;
      case 40:
        top += 10;
        document.querySelector(element.selector).style.cssText += 'top: ' + top + 'px;';
        break;
    }
  };
});


