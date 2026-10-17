const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(arr) {
	let result = arr.reduce((total, current) => {
    total += current;
    return total;
  },0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, current) => {
    total = current * total;
    return total;
  }, 1);
  return result;
};

const power = function(num, power) {
	let result = Math.pow(num, power);
  return result;
};

const factorial = function(number) {
  let result = 1;
	for (let i = number; i >= 1; --i) {
    result *= i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
