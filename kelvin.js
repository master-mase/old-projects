// Current kelvin temperature
const kelvin = 293
// Current celsius temperature
const celsius = (kelvin - 273)
// Calculating fahrenheit temperature from celsius
fahrenheit = Math.floor(celsius * (9/5) + 32)
newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton`)

/* The temperature is 68 degrees Fahrenheit
The temperature is 6 degrees Newton */
