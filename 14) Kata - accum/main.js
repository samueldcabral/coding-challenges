// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (s) => {
	letterRepeat = s.toLowerCase().split('').map((x,index) => x.repeat(index+1))
  upperCaseLetter = letterRepeat.map(x => x.split('').map((x, index) => {
    return index === 0 ? x.toUpperCase() : x }).join(''));
  return upperCaseLetter.join('-')
}