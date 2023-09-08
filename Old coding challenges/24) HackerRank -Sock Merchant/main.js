// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
// sockMerchant has the following parameter(s):
// n: the number of socks in the pile
// ar: the colors of each sock

// input 1: 9
// input 2: 10 20 20 10 10 30 50 10 20

function sockMerchant(n, ar) {
  let socks = ar.split(' ')
  const seen = {}
  let pairs = 0;
  for(let sock of socks){
    if(seen[sock]){
      seen[sock]++;
      if(seen[sock]==2){
        pairs++;
        seen[sock] = 0;
      }
    }else{
      seen[sock] = 1;
    }
  }
  return pairs;
}
  
console.log(sockMerchant(9, '10 20 20 10 10 30 50 10 20'))
console.log(sockMerchant(10,'1 1 3 1 2 1 3 3 3 3'))


////COMPLETE HACKERANK CODE
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the sockMerchant function below.
// function sockMerchant(n, ar) {
//     const seen = {}
//     let pairs = 0;
//     for (let sock of ar) {
//         if (seen[sock]) {
//             seen[sock]++;
//             if (seen[sock] == 2) {
//                 pairs++;
//                 seen[sock] = 0;
//             }
//         } else {
//             seen[sock] = 1;
//         }
//     }
//     return pairs;   
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

//     let result = sockMerchant(n, ar);

//     ws.write(result + "\n");

//     ws.end();
// }
