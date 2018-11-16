// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 
  newStr = str.split(' ');
  let result = ''
  
  for(let word of newStr){
    for(let char in word){
      char === 0 ? result += word[char].toUpperCase() : result += word[char]
    }
    result += ' ';
  }
  // code goes here  
  return result; 
}

console.log(LetterCapitalize('hello world'));
console.log(LetterCapitalize('i ran there'));