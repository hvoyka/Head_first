function Dog (name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " says Yip!");
  }
};
Dog.prototype.run = function() {
  console.log("Run!");
};
Dog.prototype.wag = function() {
  console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
  console.log(this.name + " says WOOF!");
  };
var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sitting = false;
Dog.prototype.sit = function(){
  if(this.sitting){
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
  
}
barnaby.sit();
barnaby.sit()

fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();
spot.sit();
spot.sit();

spot.hasOwnProperty("species");
fido.hasOwnProperty("species");

spot.hasOwnProperty("sitting");
spot.sitting = true;
spot.hasOwnProperty("sitting");
fido.hasOwnProperty("sitting");


function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}


ShowDog.prototype = new Dog();
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() { 
  console.log("Stack");
};
ShowDog.prototype.bait = function() {
  console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
  console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

if (fido instanceof Dog) {
  console.log("Fido is a Dog");
  }
  if (fido instanceof ShowDog) {
  console.log("Fido is a ShowDog");
  }
  if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
    }
    if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
    }
    console.log("Fido constructor is " + fido.constructor);
    console.log("Scotty constructor is " + scotty.constructor);
    