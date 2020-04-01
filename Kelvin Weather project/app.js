// variable equal to 293
const kelvin = 0;
//subtracting 273 from the kelvin variable
const celsius = kelvin - 273;
//quotation used to calculate fahrenheit in a variable
let fahrenheit = celsius * (9 / 5) + 32;
//used .floor() method to round down fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)