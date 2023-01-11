const convertToCelsius = function(tempF) {
  let convertedC = 5/9 * (tempF - 32);
  return Math.round(convertedC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  let convertedF = 9/5 * (tempC) + 32;
  return Math.round(convertedF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
