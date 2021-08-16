'use strict';

const body = document.querySelector('body'),
      wrapper = document.querySelector('.wrapper'),
      color = document.getElementById('color'),
      change = document.getElementById('change');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

change.addEventListener('click', function(){
  let newColor = getRandomColor();
  body.style.backgroundColor = newColor;
  change.style.color = newColor;
  color.textContent = newColor;
});