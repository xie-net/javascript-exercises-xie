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

const multiply = function() {
  
};

const power = function() {
	
};

const factorial = function() {
	
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
