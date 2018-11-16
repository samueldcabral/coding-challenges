//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  let result = ''
  for(let i in str){
    let char = str[i].charCodeAt() + 1
    if((char > 65 && char < 91) || (char > 96 && char < 123)){
      let a = String.fromCharCode(char);
        if(a == 'a' || a =='e' || a == 'i' || a == 'o' || a == 'u'){
          result += a.toUpperCase();
        }
        else{
          result += a 
        }
    }
    else{
      result += str[i]
    }
  }
  // code goes here  
  return result; 
}

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));
