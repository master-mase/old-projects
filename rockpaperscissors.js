/* eslint-disable no-console */
const getUserChoice = (userInput) => {
  const userLowerInput = userInput.toLowerCase();
  if (userLowerInput === 'rock' || userLowerInput === 'paper' || userLowerInput === 'scissors') {
    return userLowerInput;
  }
  throw new Error('Rock, paper or scissors needed.');
};

const getComputerChoice = () => {
  const getNumber = Math.floor(Math.random() * 3);
  if (getNumber === 0) {
    return 'rock';
  }
  if (getNumber === 1) {
    return 'paper';
  }
  return 'scissors';
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    }
    return 'Player wins';
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins';
    }
    return 'Player wins';
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    }
    return 'Player wins';
  }
  return 'error';
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
