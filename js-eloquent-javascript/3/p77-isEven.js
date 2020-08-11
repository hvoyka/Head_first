function isEven(num) {
  num = Math.abs(num);
  if(num === 0) return true;
  if(num === 1) return false;
  return isEven(num - 2);
}


console.log('0 ',isEven(0));
console.log('1 ',isEven(1));
console.log('55 ',isEven(55));
console.log('50 ',isEven(50));
console.log('75 ',isEven(75));
console.log('-1 ',isEven(-1));
console.log('-4 ',isEven(-4));