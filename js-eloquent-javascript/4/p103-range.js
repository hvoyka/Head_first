/*  function range (start, end) {
  let arr = [];
  for( let i = start; i <= end; i++){
    arr.push(i);
  }
  return arr;
} 
console.log(range(5,6));
console.log(range(1,10));
 */
/* 
function sum (arr) {  
  return arr.reduce((acc, item) => { return acc + item}, 0);
}
console.log(sum([1,2,3]));
console.log(sum([3,3,3])); */

function range(start, end, step = 1) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    
    for (let i = start; i <= end; i -= step) {
      console.log(i)
      arr.push(i);
    }
  }
  return arr;
}
console.log(range(5, 6));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
