// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

highAndLow = numbers => {
  let big = 0;
  let small = 0;
  numbers = numbers.split(' ').map(x => parseInt(x));
  small = numbers[0];
  big = numbers[0];
  
  for(num of numbers){
    if(num > big){
      big = num;
    }else if(num < small){
      small = num;
    }
  }
  return `${big} ${small}`
}