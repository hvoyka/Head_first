function CountBs(string) {
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if (string[i] === 'B'){
      count++;
    }
  }
  return count;
}

console.log('3 ',CountBs('BdasdasBdsadasdB'));
console.log('4 ',CountBs('BdasbbbBasBdsadasdB'));
console.log('0 ',CountBs(''));
console.log('1 ',CountBs('B'));

function CountChar(string, char) {
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if (string[i] === char){
      count++;
    }
  }
  return count;
}

console.log('5 ',CountChar('BdasdasBdsadasdB', 'd'));
console.log('2 ',CountChar('BdAsbbbBasBdsadAsdB', 'A'));
console.log('2 ',CountChar('  ', ' '));
console.log('1 ',CountChar('BbbbaaaasdK', 'K'));
