// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
  return str.split(' ').map(x => {
    if((x.charCodeAt() >= 65 && x.charCodeAt() <= 90) || (x.charCodeAt() >= 97 && x.charCodeAt() <= 122)){
      return x.substr(1)+x.substr(0,1)+'ay';
    }
    return x;
  }).join(' ');
}