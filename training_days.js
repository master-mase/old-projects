const secretMessage = ['get', 'easily', 'the', 'first', 'time'];

secretMessage.pop();
secretMessage.push('to', 'program');
secretMessage[1] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(1, 3, 'know');

console.log(secretMessage);
