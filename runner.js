var readlineSync = require('readline-sync'),
  theme = ['Enot', 'vydra', 'pchela'],
  index = readlineSync.keyInSelect(theme, 'Which theme?');

console.log(index)

