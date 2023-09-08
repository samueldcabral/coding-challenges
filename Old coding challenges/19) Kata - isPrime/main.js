// Is Prime
// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// bool isPrime(5) = return true

const isPrime = num => {
  if(num <= 1){
    return false;
  } 
  else{
    let divisor = 0;
    for(let i = 2; i <= num; i++){
      if(num % i === 0){
        divisor++;
      }
    }
    
    if(divisor == 1){
      return true;
    }
    else{
      return false;
    }
  }
}