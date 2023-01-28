const fs = require("fs");

const { argv } = process;
const Answers = require("./answers");
const Question = require("./model");

// const a = new Answers();
// const q = new Question();

class Theme {
  constructor(theme) {
    this.theme = theme;
  }
  // allThemes() {
  //   const themes = fs.readdirSync(`${__dirname}/topics`, "utf-8");
  //   return themes;
  // }
  getTheme(index, a, q) {
    const tema = fs.readdirSync(`${__dirname}/topics`, "utf-8");
    this.theme = tema[index]
    a.getA(tema[index]);
    q.getQ(tema[index]);
  }
}

// const themes = new Theme();
// console.log(a);
// themes.getTheme(1);
// console.log(a.answer[0]);
// console.log(q.question[0]);

module.exports = Theme;
