// In mathematics, a perfect power is a positive integer 
// that can be expressed as an integer power of another 
// positive integer. More formally, n is a perfect power 
// if there exist natural numbers m > 1, and k > 1 
// such that Math.pow(m,k) = n.

const isPP = (n) => {
  let found = false
  for(let i = 2; i < n; i++){
    for(let j = 2; j < n; j++){
      if(i**j > n) break
      if(i**j == n) return [i, j]      
    }
  }
  return null
}