let randomNumber = Math.floor(Math.random() * 8)
let preUserQuestion = 'You ask: '

// Your name?
let username = 'Mase'

// Your question?
let userQuestion = 'Will I be a good coder?'

// Greeting
if (username) {
  console.log('Hello ' + username + '!')
} else {
  console.log('Hello!')
}

// Logging the question
console.log(preUserQuestion + userQuestion)

// Different answers
if (randomNumber === 0){
  console.log('It is certain')
} else if (randomNumber === 1){
  console.log('It is decidedly so')
} else if (randomNumber === 2){
  console.log('Reply hazy try again')
} else if (randomNumber === 3){
  console.log('Cannot predict atm')
} else if (randomNumber === 4){
  console.log('Do not count on it')
} else if (randomNumber === 5){
  console.log('My sources say no')
} else if (randomNumber === 6){
  console.log('Outlook not so good')
} else if (randomNumber === 7){
  console.log('Signs point to yes')
}