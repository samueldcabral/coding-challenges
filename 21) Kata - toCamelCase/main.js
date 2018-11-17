// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

const toCamelCase = str => {
  str.split('-').length > 1 ? str = str.split('-') : str = str.split('_');
  
  for(word in str){
    if(parseInt(word) !== 0){
      str[word] = str[word].substr(0,1).toUpperCase() + str[word].substr(1);
    }
  }
  return str.reduce((acc,sum) => acc+sum);
} 