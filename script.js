// Task 1
let lang = prompt("Введите значение lang (ru, en)");
// a
if (lang === 'ru') {
  console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang === 'en') {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
  console.log("Неверное значение");
}
// b
switch (lang) {
  case 'ru':
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;
  case 'en':
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
  default:
    console.log("Неверное значение");
}
// c
let week = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']];
console.log(lang === 'ru' ? week[0] : lang === 'en' ? week[1] : 'Неверное значение');
// Task 2
let namePerson = prompt("Введите значение namePerson");
let result = namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'ученик';
console.log(result);