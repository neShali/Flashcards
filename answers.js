const fs=require('fs');/// promisses
const argv=process.argv


class Controller{
    constructor(){

    }
}


const tema= fs.readdirSync(`${__dirname}/topics`, 'utf-8')
console.log(tema[0] )
const topics= fs.readFileSync(`${__dirname}/topics/${tema[0]}`, 'utf-8').split('\n')
let arr=[]
for (let i=1;i<topics.length;i+=3){
    arr.push(topics[i])
}

console.log(arr)
// exports module=Controller