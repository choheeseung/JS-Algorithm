function solution(n, k, list) { 
  let count = 0;
  for(let i of list) { 
    if(k === 0){ 
      break; 
    } 
    if(k >= i){ 
      count += parseInt(k / i); 
      k = k % i; 
    } 
  } 
  console.log(count); 
} 

const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});
let input = []; 
rl.on("line", function (line) { 
  input.push(line) 
}).on("close", function () { 
    let tmp = input[0].split(' ').map((el) => parseInt(el)); 
    let list = input.slice(1); 

    list = list.map((el)=> parseInt(el)); 
    list.reverse(); 
    solution(tmp[0], tmp[1], list); 
    process.exit(); 
  });