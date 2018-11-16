//Have the function FirstReverse(str) take the str 
//parameter being passed and return the string in 
//reversed order. For example: if the input string is 
//"Hello World and Coders" then your program should 
//return the string sredoC dna dlroW olleH. 

function FirstReverse(str){
  // let strReverse = ''
  // for(let char = str.length-1; char >= 0; char--){
  //   strReverse += str[char];
  // }
  // return strReverse;

  return str.split('').reverse().join('');
}

console.log(FirstReverse('Hello World'))