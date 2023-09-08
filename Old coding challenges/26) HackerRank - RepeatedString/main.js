function repeatedString(s, n) {
  if(s.length == 1 && s[0] == 'a'){
    return n;
  }
  let as = 0;
  for(let i = 0; i<s.length; i++){
    if(s[i] == 'a'){
      as++;
    }
  }
  
  let result = Math.floor(n/s.length) * as;
  n = n%s.length;

  for(let i = 0; i < n; i++){
    if(s[i] == 'a'){
      result++;
    }
  }
  return result;
}

console.log(repeatedString('ab', 7))
console.log(repeatedString('aba', 10))


///COMPLETE HACKERANK CODE
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
// function repeatedString(s, n) {
//     if (s.length == 1 && s[0] == 'a') {
//         return n;
//     }
//     let as = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == 'a') {
//             as++;
//         }
//     }

//     let result = Math.floor(n / s.length) * as;
//     n = n % s.length;

//     for (let i = 0; i < n; i++) {
//         if (s[i] == 'a') {
//             result++;
//         }
//     }
//     return result;

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const n = parseInt(readLine(), 10);

//     let result = repeatedString(s, n);

//     ws.write(result + "\n");

//     ws.end();
// }
