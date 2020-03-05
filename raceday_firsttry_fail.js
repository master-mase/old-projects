let minEarlyAdult = 1000
let maxEarlyAdult = 2000
let minLateAdult = 500
let maxLateAdult = 999
let minYouth = 500
let maxYouth = 999
let randomEarlyAdult = Math.floor(Math.random() * (+maxEarlyAdult - +minEarlyAdult) + +minEarlyAdult)
let randomLateAdult = Math.floor(Math.random() * (+maxLateAdult - +minLateAdult) + +minLateAdult)
let randomYouth = Math.floor(Math.random() * (+maxYouth - +minYouth) + +minYouth)

console.log(randomEarlyAdult)
console.log(randomLateAdult)
console.log(randomYouth)