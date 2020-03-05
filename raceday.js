/* let raceNumberMin = 1
let raceNumberMax = 999
let raceNumber = Math.floor(Math.random() * (+raceNumberMax - +raceNumberMin) + +raceNumberMin) */

let raceNumber = Math.floor(Math.random() * (+999 - +1) + +1)

// Change these
let isRegistered = false
let runnerAge = 18

if (isRegistered && runnerAge >= 19){
  raceNumber += 1000
  console.log('Early adults run at 9:00. Your number is ' + raceNumber + '.')
}
if (isRegistered === false && runnerAge >= 19){
  console.log('Late adults run at 10:00. Your number is ' + raceNumber + '.')
}
if (runnerAge <= 17){
  console.log('Youths run at 11:00. Your number is ' + raceNumber + '.')
}
if (runnerAge === 18){
  console.log('18 year olds should go to the reception desk')
}
