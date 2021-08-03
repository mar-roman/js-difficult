'use strict';

function foo(str) {
  if(parseInt(str)) {
    alert('Вы ввели не строку!');
  }
  str = str.trim();
  if (str.length>30) {
    console.log(str.substr(0, 30) + "...");
  } else {
    console.log(str);
  }
}

let str = prompt("Введите строку");
foo(str);