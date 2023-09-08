// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  textArr = text.split('');
  let result = '';

  for(let letter of textArr){
    let ascii = letter.charCodeAt()
    if(ascii >= 65 && ascii <= 90){
      result += ascii - 64;
      result += ' ';
    }else if(ascii >= 97 && ascii <= 122){
      result += ascii - 96;
      result += ' ';
    }
  }
  return result.trim();
}
