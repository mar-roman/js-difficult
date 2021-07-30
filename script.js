let num = 266219,
multiple = 1;
while (num > 0) {
  multiple *= num % 10;
  num = parseInt(num/=10);
}
console.log(multiple);
multiple = multiple ** 3;
console.log(String(multiple).slice(0, 2));