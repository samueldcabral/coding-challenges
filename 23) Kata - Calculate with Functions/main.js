// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

const numbers = {'zero':0,'one':1,'two':2,'three':3,
  'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9}

const modulate = (name, operate) =>{
  return operate === undefined ? numbers[name] : operation(numbers[name], operate[0], operate[1])
}

function zero(operate) {
  return modulate(arguments.callee.name, operate)
}
function one(operate) {
  return modulate(arguments.callee.name, operate)

}
function two(operate) {
  return modulate(arguments.callee.name, operate)
}
function three(operate) {
  return modulate(arguments.callee.name, operate)
}
function four(operate) {
  return modulate(arguments.callee.name, operate)
}
function five(operate) {
  return modulate(arguments.callee.name, operate)
}
function six(operate) {
  return modulate(arguments.callee.name, operate)
}
function seven(operate) {
  return modulate(arguments.callee.name, operate)
}
function eight(operate) {
  return modulate(arguments.callee.name, operate)
}
function nine(operate) {
  return modulate(arguments.callee.name, operate)
}

function plus(number) {
  return ['+', number]
}
function minus(number) {
  return ['-', number]
}
function times(number) {
  return ['*', number]
}
function dividedBy(number) {
  if(number === 0) {
    return null;
  }
  return ['/', number]
}

function operation(num1 ,operator, num2){
  switch(operator){
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1*num2;
    case '/':
      return Math.floor(num1/num2);
  }
}

console.log(seven(times(five())))//, 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
console.log(three(plus(zero())), 3);
