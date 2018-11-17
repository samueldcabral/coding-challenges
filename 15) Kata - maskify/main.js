// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most 
// secret question is still correct. However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"

function maskify(cc) {
  cc = cc.split('');
  let result = '';
  for(let num = 0; num < cc.length; num++){
    if(num <= cc.length - 5){
      result += '#';
    }
    else{
      result += cc[num];
    }
  }
  return result;
}