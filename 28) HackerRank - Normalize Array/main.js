function equalizeArray(arr) {
  arr = arr.split(' ').map(x=>Number(x))
  const seen = {}
  for(let num of arr){
    seen[num] ? seen[num]++ : seen[num] = 1
  }
  console.log(seen)
  let bigNum = 0
  let num = 0
  for(let big in seen){
    if(seen[big] > bigNum){
      bigNum = seen[big]
      num = big
    }
  }
  return arr.filter(x=>x!=Number(num))
}
arr = '1 2 2 2 1 3 3 2'
//arr = '1 1 1 2 2'
equalizeArray(arr)

/// HACKERANK FULL CODE
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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    //arr = arr.split(' ').map(x => Number(x))
    const seen = {};
    for (let num of arr) {
        seen[num] ? seen[num]++ : seen[num] = 1;
    }
    console.log(seen)
    let bigNum = 0;
    let num = 0;
    for (let big in seen) {
        if (seen[big] > bigNum) {
            bigNum = seen[big];
            num = big;
        }
    }
    return arr.filter(x => x != Number(num)).length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
