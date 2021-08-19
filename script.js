'use strict';

function DomElement(){
  this.selector = ''; 
  this.height = ''; 
  this.width = ''; 
  this.bg = ''; 
  this.fontSize = '';
  this.color = '';
  this.position = 'absolute';
}

DomElement.prototype.create = function(){
  this.selector = prompt('Введите селектор');
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

DomElement.prototype.changeWidth = function(){
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

document.addEventListener("DOMContentLoaded", function(){
  let element = new DomElement();
  element.create(); //Создать див
  element.changeHeight(); //Ввести 100px
  element.changeWidth(); //Ввести 100px
  element.changeBg(); //Ввести red

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
        document.querySelector(element.selector).style.cssText += 'top: ' + left + 'px;';
        break;
      case 39:
        left += 10;
        document.querySelector(element.selector).style.cssText += 'left: ' + left + 'px;';
        break;
      case 40:
        top += 10;
        document.querySelector(element.selector).style.cssText += 'top: ' + left + 'px;';
        break;
    }
  };
});


