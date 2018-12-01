// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string

function addBinary(a,b) {
  //first solution
  //return (a+b).toString(2);

  //second longer solution
  let binary = a+b;
  let result = '';
  
  while(binary > 0){
    result += (binary % 2).toString();
    binary = Math.floor(binary / 2);
  }
  return result.split('').reverse().join('');
}
