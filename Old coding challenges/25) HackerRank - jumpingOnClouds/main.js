// in 7
// in 0 0 1 0 0 1 0
// out 4

// in 6
// in 0 0 0 0 1 0
// out 3

// in 7
// in 0 0 1 0 0 1 0
// out 4

function jumpingOnClouds(c) {
  c = c.split(' ');
  let jumps = 0;
  for(let i = 0; i < c.length-1; i++){
    if(c[i+2] == 0){
      jumps++;
      i+=1;
    }else if(c[i+1]==0){
      jumps++;
    }
  }
  return jumps;
}

console.log(jumpingOnClouds('0 0 1 0 0 1 0'))
console.log(jumpingOnClouds('0 0 0 0 1 0'))
console.log(jumpingOnClouds('0 0 1 0 0 1 0'))
console.log(jumpingOnClouds('0 1 0 1 0 0 1'))


///COMPLETE HACKERRANK CODE
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

// // Complete the jumpingOnClouds function below.
// function jumpingOnClouds(c) {
//     let jumps = 0;
//     for (let i = 0; i < c.length - 1; i++) {
//         if (c[i + 2] == 0) {
//             jumps++;
//             i += 1;
//         } else if (c[i + 1] == 0) {
//             jumps++;
//         }
//     }
//     return jumps;

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

//     let result = jumpingOnClouds(c);

//     ws.write(result + "\n");

//     ws.end();
// }
