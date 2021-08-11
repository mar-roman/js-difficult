'use strict';

//a
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 
  'сентября', 'октября', 'ноября', 'декабря'];

function time1() {
  let time = new Date(),
    second = time.getSeconds(),
    minut = time.getMinutes(),
    hour = time.getHours(),
    day = time.getDay(),
    date = time.getDate(),
    month = time.getMonth(),
    year = time.getFullYear();
  let textHour;
  if (hour > 4 && hour < 21) {
    textHour = ' часов ';
  } else if (hour % 10 === 1){
    textHour = ' час ';
  } else {
    textHour = ' часа ';
  }
  let textMinute;
  if (minut > 10 && minut < 20) {
    textMinute = ' минут ';
  } else if (minut % 10 === 1){
    textMinute = ' минута ';
  } else if (minut % 10 > 1 && minut % 10 < 5){
    textMinute = ' минуты ';
  } else {
    textMinute = ' минут ';
  }
  let textSecond;
  if (second > 10 && second < 20) {
    textSecond = ' секунд';
  } else if (second % 10 === 1){
    textSecond = ' секунда';
  } else if (second % 10 > 1 && second % 10 < 5){
    textSecond = ' секунды';
  } else {
    textSecond = ' секунд';
  }
  document.getElementById('time-1').innerHTML = 'Сегодня ' + week[day] + ', ' + date + ' ' + months[month] + 
    ' ' + year + ' года, ' + hour + textHour + minut + textMinute + second + textSecond;
}

setInterval(time1, 1000);

//b
function time2() {
  let time = new Date(),
    second = time.getSeconds(),
    minut = time.getMinutes(),
    hour = time.getHours(),
    day = time.getDay(),
    date = time.getDate(),
    month = time.getMonth()+1,
    year = time.getFullYear();
  if (second < 10) {
  second = '0' + second;
  }
  if (minut < 10) {
    minut = '0' + minut;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }
  document.getElementById('time-2').innerHTML = date + '.' + month + '.' + year + ' - ' +
    hour + ':' + minut + ":" + second;
}

setInterval(time2, 1000);
