// Check out the resources on the page's right side to learn more about arrays. The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .
// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description
// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):
// An array of integers .
// An integer , the number of rotations.
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations you must perform. 
// The second line contains  space-separated integers .

function rotLeft(a, d) {
  let arr = a.split(' ')
  let seen = {}
  let newArr = []
  let operate =  Math.ceil(d/arr.length) * arr.length
  for(let i = 0; i <= arr.length-1; i++){
    seen[i] = arr[i]
    let pos = i+d - operate
    pos < 0 ? pos = pos+arr.length : pos
    newArr.push(pos)
  }
  let result = newArr.map(x => Number(seen[x])) 
  return result
}

//Test cases
// //5 4
// let d = 4
// let arr = '1 2 3 4 5'
// console.log(rotLeft(arr,d), '5 1 2 3 4')

//20 10
// let d = 10
// let arr = '41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51'
// console.log(rotLeft(arr,d), '77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77')


// //15 13
let d = 13
let arr = '33 47 70 37 8 53 13 93 71 72 51 100 60 87 97'
console.log(rotLeft(arr,d), '87 97 33 47 70 37 8 53 13 93 71 72 51 100 60')

////////COMPLETE HACKERANK CODE
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the rotLeft function below.
// function rotLeft(a, d) {
//     //let arr = a.split(' ')
//     let seen = {};
//     let newArr = [];
//     let operate = Math.ceil(d / a.length) * a.length;
//     for (let i = 0; i <= a.length - 1; i++) {
//         seen[i] = a[i];
//         let pos = i + d - operate;
//         pos < 0 ? pos = pos + a.length : pos;
//         newArr.push(pos);
//     }
//     let result = newArr.map(x => Number(seen[x]));
//     return result
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const nd = readLine().split(' ');

//     const n = parseInt(nd[0], 10);

//     const d = parseInt(nd[1], 10);

//     const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

//     const result = rotLeft(a, d);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }
