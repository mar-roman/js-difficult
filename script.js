'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let date = new Date();
let day = date.getDay();

for (let i = 0; i < week.length; i++) {
  if (i === 0 || i === 6) {
    if (i === day) {
      document.getElementById('days').innerHTML += '<b>' + '<i>'+ week[i] + '</i>' + '</b>' + '</br>';
    } else {
      document.getElementById('days').innerHTML += '<i>'+ week[i] + '</i>' + '</br>';
    }
  } else {
    if (i === day) {
      document.getElementById('days').innerHTML += '<b>' + week[i] + '</b>' + '</br>';
    } else {
      document.getElementById('days').innerHTML += week[i] + '</br>';
    }
  }
}
