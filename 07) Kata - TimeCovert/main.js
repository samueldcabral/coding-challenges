// Challenge
// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and 
// return the number of hours and minutes the parameter converts to 
// (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
// Sample Test Cases
// Input:126
// Output:"2:6"
// -------------
// Input:45
// Output:"0:45"

function TimeConvert(num) { 
  let minutes = num % 60;
  let hours = Math.floor(num/60);
  
  if(hours){
      return `${hours}:${minutes}`
  }
  else{
      return `0:${minutes}`; 
  }
}

TimeConvert(126);
TimeConvert(45);
