const fs = require('fs');

const { argv } = process;
const Answers = require('./answers');

const a = new Answers();
class Theme {
  constructor(theme) {
    this.theme = theme;
  }

  getTheme(index) {
    const tema = fs.readdirSync(`${__dirname}/topics`, 'utf-8');
    a.getA(tema[index]);
  }
}

const themes = new Theme();
console.log(a);
themes.getTheme(1);
console.log(a.answer[0]);
