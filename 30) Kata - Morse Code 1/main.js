// In this kata you have to write a simple Morse code decoder. 
// While the Morse code is now mostly superceded by voice and 
// digital data communication channels, it still has its use 
// in some applications around the world.

//The MORSE_CODE dictionary was provided by the challenge
decodeMorse = function(morseCode){
  //your code here
  return morseCode.split('   ').map(letter => letter.split(' ').map(x => MORSE_CODE[x]).join('')).join(' ').trim()

}

