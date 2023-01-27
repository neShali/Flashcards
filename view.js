// console.log("\033[1;32;46mHi");
// console.log("\033[38;32;46mHi");

// let num = process.argv[2];
// for (let i = 0; i < num; i += 1) {
//   if (num === i) {
//   }
// }
// console.log(%c"Техт", "font-size: 20px; color: blue;");
const readlineSync = require("readline-sync");
const Theme = require("./theme");
const Answers = require('./answers')
const Question = require('./model')


const themes = new Theme();
const a = new Answers();
const q = new Question();

const formatTheme = "\033[38;5;034m";
const formatQustion = "\033[38;5;064m";
let arrayTheme = [
  `${formatTheme}Enot`,
  `${formatTheme}vydra`,
  `${formatTheme}yastreb`,
];
// const arr = [1, "Vasya"];
// const arr2 = [2, "Imya?"];
// const themes = new Theme();
// themes.getTheme(1);
// const thhheme = themes.allThemes();

// class View {
//   constructor(arrayTheme, arr, arr2) {
//     this.arrayTheme = arrayTheme;
//     this.arr = arr;
//     this.arr2 = arr2;
//   }

//   askQuestion() {
    index = readlineSync.keyInSelect(arrayTheme,`${formatQustion}Which theme?`);
    themes.getTheme(Number(index), a, q);
    // console.log(themes)
    // console.log(q)
    for (let i = 0; i < 5; i++) {
      let userAnswer = readlineSync.question(`${q.question[i]} `);
      if (a.answer[i] === userAnswer) {
        console.log("Правильно!");
      } else {
        console.log("Не правильно!");
      }
    }
// //   }
// // }
// let viewshkaa = new View(arrayTheme);
// console.log(viewshkaa.askQuestion());

// Wait for user's response.

// let theme = new Model();
// theme.getQuAn(index);

// let imya = "Anton";
// let format = "\033[1;32;46m";
// console.log(`${format}${imya}`);
