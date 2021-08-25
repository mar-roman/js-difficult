'use strict';

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function start(){

  let time = new Date(),
    second = time.getSeconds(),
    minut = time.getMinutes(),
    hour = time.getHours(),
    day = time.getDay(),
    month = time.getMonth()+1;

  let thisPeriod;
  if(hour >= 6 || hour < 12){
    thisPeriod = 'Доброе утро';
  }
  if(hour >= 12 || hour < 18){
    thisPeriod = 'Добрый день';
  }
  if(hour >= 18){
    thisPeriod = 'Добрый вечер';
  }
  if(hour < 6){
    thisPeriod = 'Доброй ночи';
  }

  let thisDay = 'Сегодня ' + week[day];

  if (second < 10) {
  second = '0' + second;
  }
  if (minut < 10) {
    minut = '0' + minut;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  let period = ' PM';
  if (hour < 12) {
    period = ' AM';
  }
  let thisTime = 'Текущее время: ' + hour + ':' + minut + ':' + second + period;

  let deadline = new Date('1 janyary 2022');
  let days = Math.floor((deadline.getTime() - time.getTime()) / 1000 / 60 / 60 / 24);
  let toCelebrate = 'До нового года осталось ' + days + ' дней';

  document.getElementById('time-1').innerHTML = thisPeriod + '<br>' + 
  thisDay + '<br>' + thisTime + '<br>' + toCelebrate;
}

setInterval(start, 1000);