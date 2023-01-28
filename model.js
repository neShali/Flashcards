const fs = require("fs");
const { EOL } = require("os");
const Answers = require("./answers");

class Question {
  constructor(question) {
    this.question = question;
  }

  getQ(adress) {
    let massQ = fs
      .readFileSync(`${__dirname}/topics/${adress}`, "utf-8")
      .split("\n");
    let massiveQ = [];
    for (let i = 0; i < massQ.length; i += 3) {
      massiveQ.push(massQ[i]);
    }
    this.question = massiveQ;
  }
}

module.exports = Question;
