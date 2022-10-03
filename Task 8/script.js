/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(number1, number2) {
  a = number1;
  b = number2;
}

Calculator.prototype.sum = function () {
  return a + b;
};
Calculator.prototype.subtraction = function () {
  return a - b;
};
Calculator.prototype.multiplication = function () {
  return a * b;
};
Calculator.prototype.division = function () {
  return a / b;
};

const data = new Calculator(5, 8);

console.log(data.sum());
console.log(data.multiplication());
console.log(data.subtraction());
console.log(data.division());