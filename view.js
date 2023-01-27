// console.log("\033[1;32;46mHi");
// console.log("\033[38;32;46mHi");

// let num = process.argv[2];
// for (let i = 0; i < num; i += 1) {
//   if (num === i) {
//   }
// }
// console.log(%c"Техт", "font-size: 20px; color: blue;");
const readlineSync = require("readline-sync");
const formatTheme = "\033[38;5;034m";
const formatQustion = "\033[38;5;064m";
let arrayTheme = [
  `${formatTheme}Enot`,
  `${formatTheme}vydra`,
  `${formatTheme}yastreb`,
];
class View {
  constructor(arrayTheme) {
    this.arrayTheme = arrayTheme;
  }

  askQuestion() {
    readlineSync.keyInSelect(arrayTheme, `${formatQustion}Which theme?`);
  }
}
let viewshkaa = new View(arrayTheme);
console.log(viewshkaa.askQuestion());
// let theme = new Model();
// theme.getQuAn(index);

// let imya = "Anton";
// let format = "\033[1;32;46m";
// console.log(`${format}${imya}`);
