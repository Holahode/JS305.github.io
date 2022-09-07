"use strict"
/* Input:   temperature in degree fahrenheit
   Output:  temperature in degree celcius
   Process: converting from degree fahrenheit to celsius using Celsius = 5 / 9 * (tempInFahrenheit) - 32
*/

function convertFahrenheit(temperatureInFahrenheit) {
  const temperatureInCelsius = 5 / 9 * (parseFloat(temperatureInFahrenheit) - 32);
  return temperatureInCelsius.toFixed(4);
}

console.log("expect 0       : ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100     : ", convertFahrenheit (212));
console.log("expect 37.7778 : ", convertFahrenheit (100));