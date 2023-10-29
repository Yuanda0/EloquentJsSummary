const filter = (arr, test) => {
   let passed = [];

   for (el of arr) {
      if (test(el)) {
         passed.push(el);
      } 
   }

   return passed;
}

let obj = {type: "Treos", km: 5};

obj.fill = function() {
   console.log(this.type, "says bark!", "btw he can run ", this.km);
}

obj.fill();


/**
 *
 * @param {Array} arr 
 * @param {number} index 
 * @returns {Array} 
 */
function remove(arr, index) {
   let result = arr.slice(0, index).concat(arr.slice(index+1));
   return result;
}

console.log(remove([5, 4, 3, 2, 1], 2));


const myObj = {a: 1, b: 2, c: 3};
for (el in myObj) {
   console.log("el : ", myObj[el]);
}

const arr = [4, 5 ,8, 7];

const filtered = [];
for (el of arr) {
   if (el % 2 == 0) {
      filtered.push(el);
      el += 2;
   } else {
      el += 1;
      if (el % 2 == 0) {
         filtered.push(el);
      }
   }
}

console.log(filtered);



/**
 * 
 * @param {Function} f 
 * @returns {Function} 
 */
function doSomething (f) {
   return (...args) => {
      let result = f(...args);
      return result;
   }
}

console.log(doSomething(Math.round)(10.53131234));

let protoRabbit = {
   speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
   }
};


function Rabbit(type) {
   this.type = type;
}
Rabbit.prototype.speak = function(line) {
   console.log(`The ${this.type} rabbit says ${line}`);
}

Rabbit.prototype.hungry = function (food) {
   console.log('I am hungry for', food);
}

let weirdRabbit = new Rabbit("weird");

weirdRabbit.hungry("Carrot");
weirdRabbit.speak("Gimme a carrot");


function Rabbit2(type) {
   this.type = type;
}

let hungryRabbit = new Rabbit2("hungry");
 
Rabbit2.prototype.eat = function(food) {
   console.log('Eating', food, "for", this.type,"rabbits.");
}

hungryRabbit.eat("Carrot");


let ages = {
   Boris: 39,
   Liang: 22,
   Julia: 62
 };

 
 
 for (el in ages) {
    console.log(ages[el]);
}

