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

function combination(x, y) {
   if (y > x) {
      return 0; 
   }

   let top = 1;
   for (let i = x; i > x - y; i--) {
      top *= i;
   }
   
   let factY = 1;
   for (let i = y; i > 0; i--) {
      factY *= i;
   }

   return top / factY;
}

console.log(combination(6, 3));


function howManyTriangleCanDraw(pointsonfirst, pointsonsecond) {
   let entirePoints = combination(pointsonfirst + pointsonsecond, 3);

   if (pointsonfirst > 0 && pointsonsecond > 0) {
      if (pointsonfirst > 1) {
         entirePoints -= combination(pointsonfirst, 3);
      } else {
         entirePoints += combination(pointsonfirst, 3);
      }
   
      if (pointsonsecond > 1) {
         entirePoints -= combination(pointsonsecond, 3);
      } else {
         entirePoints += combination(pointsonsecond, 3);
      }
   } else {
      return 0;
   }

   return entirePoints;
}
console.log(howManyTriangleCanDraw(4, 5));


function areaOfTriangle(base, height) {
   return base * height / 2;
}


function determineHypo(a,b) {
   c = a * a + b * b;
   squareC = Math.sqrt(c);
   return squareC;
}

console.log(determineHypo(7,24));

/**
 * @param {Object} obj
 */

function sortByOdd(obj) {
   for (el in obj) {
      if (obj[el] % 2 == 0) {
         delete obj[el];
      }
   }
   
   return obj;
}
const myObj2 = {
   apple: 6,
   banana: 3,
   cherry: 8,
};

console.log(sortByOdd(myObj2));


function reversedString(text) {
   let newText = '';
   for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
      console.log(text[i]);
   }

   return newText;
}


let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
// -> {value: "0", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}


class Matrix {
   constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];

      for (let y = 0; y < height; y++) {
         for (let x = 0; x < width; x++) {
            this.content[y * width + x] = element(x, y);
         }
      }
   }
}


let varyingSize = {
   get size () {
      return Math.floor(Math.random() * 100);
   }
}

console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49

class Employee {
   constructor (name, age, role) {
      this._name = name;
      this._age = age;
      this._role = role;
   }
   get getName () {
      return this._name;
   }

};

Employee.prototype.getSalary = function () {
   switch (this._role) {
      case 'Developer':
         return 20000;
      case 'Boss':
         return 50000;
      default:
         return 10000;
   }
}


const employee1 = new Employee("Clark", 25, "Boss");
console.log(employee1.getSalary());


class Group {
   constructor() {
     this.members = [];
   }
 
   add(value) {
     if (!this.has(value)) {
       this.members.push(value);
     }
   }
 
   delete(value) {
     if (this.has(value)) {
       this.members = this.members.filter(item => item !== value);
     }
   }
 
   has(value) {
     return this.members.includes(value);
   }
 
   static from(iterable) {
     const group = new Group();
     for (const value of iterable) {
       group.add(value);
     }
     return group;
   }
 }

 let group = new Group();

 group.add(10)
 group.add(20)
 console.log(group.has(10));
 