"use strict";
module.exports={convertFahrenheit};
/**
 * 
 * @param {number} temperature in degree fahrenheit 
 * @returns {number} output in degree cesius
 */
function convertFahrenheit(temperatureInFahrenheit) {
  const temperatureInCelsius = 5 / 9 * (parseFloat(temperatureInFahrenheit) - 32);
  return temperatureInCelsius.toFixed(4);
}
console.log("expect 0       : ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100     : ", convertFahrenheit (212));
console.log("expect 37.7778 : ", convertFahrenheit (100));