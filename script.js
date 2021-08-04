'use strict';

//1
let arr = ['23947', '348957', '2389', '87', '4059705', '9999999', '456789'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === '2' || arr[i][0] === '4'){
    console.log(arr[i]);
  }
}

//2
//Простой алгоритм перебора
for (let n = 2; n <= 100; n++) {
  let prime = true;
  for(let i = 2; i < n; i++){
    if (n%i === 0) {
      prime = false;
    }
  }
  if(prime===true) {
    console.log(n + '. Делители этого числа 1 и ' + n);
  }
}
//Более быстрый алгоритм. Ориентируется на то, что первое простое число известно
console.log('2. Делители этого числа 1 и 2');
for (let n = 3; n <= 100; n+=2) {
  let prime = true;
  for(let i = 3; i < n/2; i++){
    if (n%i === 0) {
      prime = false;
    }
  }
  if(prime===true) {
    console.log(n + '. Делители этого числа 1 и ' + n);
  }
}