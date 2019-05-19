function makePassword (password) {
  return function (passwordGuess){
    return (passwordGuess == password);
  }
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

/////////////////////////////////////////////

function MultN (n) {
  return function(x) {
    return x*n;
  }
}

var num = MultN(5);
console.log("Try '3': " + num(3));
console.log("Try '20': " + num(20));

/////////////////////////////////////////

function makeCounter(){
    var count = 0;
    return {
      increment : function (){
        return count++;
      }
    }
}
var counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());