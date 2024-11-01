const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;

  for (const element of arr) {
    result += element;
  }

  return result;
};

const multiply = function(arr) {
  let result = 1;

  for (const element of arr) {
    result *= element;
  }

  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
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
