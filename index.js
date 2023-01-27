var readlineSync = require('readline-sync'),
  theme = ['Enot', 'vydra', 'pchela'],
  index = readlineSync.keyInSelect(theme, 'Which theme?');
// theme.getQuAn(index)

const readlineSync = require('readline-sync');
 const arr = [1, 'Vasya']
 const arr2 = [2, 'Imya?']
// Wait for user's response.
for (let i = 0; i < 5; i++) {
  const answer = readlineSync.question(`${q.question[i]}`);
  // a.check(answer, i)
// if (a.answer[i] === answer)
// if (a.check(answer, i)) {
//   console.log('Правильно!')
// }  else {
//   console.log('Не правильно!');
// }
}


// // Handle the secret text (e.g. password).
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
