// function countingValleys(n, s) {
//   //n is step qtty
//   //s is the string
//   let seaLevel = 0;
//   let valleys = 0;
//   let steps = s.split('');

//   for(let x = 0; x < steps.length; x++){
//     if(steps[x] == 'U'){
//       seaLevel++;
//     }else{
//       seaLevel--;
//     }
//     if(seaLevel < 0){
      
//       console.log('sealevel')
//     }
//   }
//   console.log(valleys);
//   return valleys;

// }
function countingValleys(n, s) {
  let seaLevel = 0;
  let valleys = 0;
  let steps = s.split('');
  let valleyArr = [];

  for(let x = 0; x < steps.length; x++){
    if(steps[x] == 'U'){
      seaLevel++;
    }else{
      seaLevel--;
    }
    if(seaLevel < 0){
      valleyArr.push(steps[x]);
    }
  }
  valleyArr.push('U');
  console.log(valleyArr)
  valleyNum = 0;
  for(let x = 0; x < valleyArr.length; x++){
    if(steps[x] == 'D'){
      valleyNum++;
    }else{
      valleyNum--;
    }
    if(valleyNum === 0){
      valleys++;
    }
  }
  return valleys;
}

//console.log(countingValleys(8,'UDDDUDUU'),1) 
//console.log(countingValleys(8,'DDUUUUDD'),1) 
console.log(countingValleys(12,'DDUUDDUDUUUD'))
// U D D D U D U U