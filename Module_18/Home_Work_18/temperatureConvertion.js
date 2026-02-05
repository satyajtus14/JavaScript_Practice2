/* 
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(temperature){

// The equation of Celsius to Fahrenheit is °F = °C * 1.8 + 32

   const fahrenheitTemp = temperature * 1.8 + 32 ;
   return fahrenheitTemp;

}

const temperatureOfCelsius = celsiusToFahrenheit(40);
console.log('The Temperature in Fahrenheit:',temperatureOfCelsius)
