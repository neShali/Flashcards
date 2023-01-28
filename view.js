const readlineSync = require("readline-sync");
const Theme = require("./theme");
const Answers = require("./answers");
const Question = require("./model");

const themes = new Theme();
const a = new Answers();
const q = new Question();

const formatTheme = "\033[38;5;034m";
const formatQustion = "\033[38;5;064m";
const deleteFormat = "\033[0m";
const formatFalse = "\033[48;5;001m";
const formatTrue = "\033[48;5;084m";
const formatPrize = "\033[48;5;228m";

let arrayTheme = [
  `${formatTheme}Мульты`,
  `${formatTheme}Пчелы`,
  `${formatTheme}Питер`,
];

index = readlineSync.keyInSelect(
  arrayTheme,
  `${formatQustion}Which theme?${deleteFormat}`
);
themes.getTheme(Number(index), a, q);
let count = 0;
for (let i = 0; i < 5; i += 1) {
  let userAnswer = readlineSync.question(`\n${q.question[i]} `);
  if (a.answer[i] === userAnswer) {
    console.log(`${formatTrue}😃Правильно!😃${deleteFormat}\n`);
    count += 20;
  } else {
    console.log(
      `${formatFalse}😣Не правильно!😣${deleteFormat} Правильный ответ: ${a.answer[i]}\n`
    );
  }
}
console.log(
  `${formatPrize}Поздравляем, ты заработал ${count} очков! А мог бы сидеть учиться🤖${deleteFormat}\n\n`
);
console.log("ghbdnt");
