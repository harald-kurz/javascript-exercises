const convertToCelsius = function(fahrenheit) {
  const result = ((fahrenheit - 32) * (5/9)).toFixed(1);
  return parseFloat(result);
};

const convertToFahrenheit = function(celsius) {
  const result = ((celsius * (9/5)) + 32).toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
