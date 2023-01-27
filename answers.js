const fs = require('fs'); /// promisses
const { Module } = require('module');

const { argv } = process;

class Answers {
  constructor(answer) {
    this.answer = answer;
  }

  getA(address) {
    const arr = [];

    //    const tema= fs.readdirSync(`${__dirname}/topics`, 'utf-8')
    const topics = fs
      .readFileSync(`${__dirname}/topics/${address}`, 'utf-8')
      .split('\n');
    for (let i = 1; i < topics.length; i += 3) {
      arr.push(topics[i]);
    }
    this.answer = arr;
  }
}

// a.getA('enot.txt')

// console.log(a)

module.exports = Answers;
// const tema= fs.readdirSync(`${__dirname}/topics`, 'utf-8')
// console.log(tema[0] )
// const topics= fs.readFileSync(`${__dirname}/topics/${tema[0]}`, 'utf-8').split('\n')
// let arr=[]
// for (let i=1;i<topics.length;i+=3){
//     arr.push(topics[i])
// }

// console.log(arr)
// exports module=Answers
