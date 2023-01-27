const fs = require('fs');

const { argv } = process;
const Answers = require('./answers');
const Question = require('./model')

const a = new Answers();
const q = new Question();


class Theme {
  constructor(theme) {
    this.theme = theme;
  }
  themes() {
    const themes = fs.readdirSync(`${__dirname}/topics`, 'utf-8')
    return themes
  }
  getTheme(index) {
    const tema = fs.readdirSync(`${__dirname}/topics`, 'utf-8');
    a.getA(tema[index]);
    q.getQ(tema[index]);
  }
}

const themes = new Theme();
console.log(a);
themes.getTheme(1);
console.log(a.answer[0]);
console.log(q.question[0]);
