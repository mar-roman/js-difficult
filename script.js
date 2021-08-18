'use strict';

function DomElement(){
  this.selector = ''; 
  this.height = ''; 
  this.width = ''; 
  this.bg = ''; 
  this.fontSize = '';
}

DomElement.prototype.create = function(){
  this.selector = prompt('Введите селектор');
  if(this.selector[0] === '.'){
    document.querySelector('body').innerHTML += '<div class="' + this.selector.slice(1) + '">' + '</div>';
  } else if(this.selector[0] === '#'){
    document.querySelector('body').innerHTML += '<p id="' + this.selector.slice(1) + '">' + '</p>';
  } else {
    alert('Вы ввели неверное значение!');
    this.create();
  }
};

DomElement.prototype.addText = function(){
  let tag = prompt('Какой тег надо заполнить?');
  document.querySelector(tag).innerHTML += 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
};

DomElement.prototype.addColor = function(){
  let tag = prompt('Какой тег надо изменить?');
  let color = prompt('Напишите цвет');
  document.querySelector(tag).cssText += 'color: ' + color + ';';
};

DomElement.prototype.changeHeight = function(){
  let tag = prompt('Какой тег надо изменить?');
  this.height = prompt('Укажите значение высоты');
  document.querySelector(tag).style.cssText += 'height: ' + this.height + ';';
};

DomElement.prototype.changeWight = function(){
  let tag = prompt('Какой тег надо изменить?');
  this.width = prompt('Укажите значение ширины');
  document.querySelector(tag).style.cssText += 'width: ' + this.width + ';';
};

DomElement.prototype.changeBg = function(){
  let tag = prompt('Какой тег надо изменить?');
  this.bg = prompt('Укажите значение фона');
  document.querySelector(tag).style.cssText += 'background: ' + this.bg + ';';
};

DomElement.prototype.changeFontSize = function(){
  let tag = prompt('Какой тег надо изменить?');
  this.changeFontSize = prompt('Укажите значение размера текста');
  document.querySelector(tag).style.cssText += 'font-size: ' + this.changeFontSize + ';';
};


let element = new DomElement();
element.create();
element.addText();
element.changeHeight();
element.changeFontSize();

