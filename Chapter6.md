# Chapter 6

## Methods

- Methods are nothing more than properties that hold function values. This is a simple method:
```javascript
   
   let rabbit = {};

   rabbit.speak = function(line) {
      console.log("The rabbit says: ", line);
   }
   // Now we can call the speak method on our object, like this:
   rabbit.speak('Hello there!');
   // -> The rabbit says: Hello there!
```

- Usually a method needs to do something with the object it was called on. When a function is called as a method—looked up as a property and immediately called, as in object.method()—the binding called this in its body automatically points at the object that it was called on.

```javascript

   function speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
   }

   let whiteRabbit = {type: "white", speak};
   let hungryRabbit = {type: "hungry", speak};

   whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
   // → The white rabbit says 'Oh my ears and whiskers, how
   //   late it's getting!'
   hungryRabbit.speak("I could use a carrot right now.");
   // → The hungry rabbit says 'I could use a carrot right now.'
```

- Arrow functions are different—they do not bind their own this but can see the this binding of the scope around them. Thus, you can do something like the following code, which references this from inside a local function:

```javascript

   function normalize () {
   console.log(this.coords.map(n => n / this.length));
   }
   normalize.call({coords: [0, 4, 5, 10, 15, 20, 21], length: 5});
```


# Prototypes

- You can use Object.create to create an object with a specific prototype.

```javascript

   let protoRabbit = {
      speak(line) {
         console.log(`The ${this.type} rabbit says '${line}'`);
      }
   };

   let killerRabbit = Object.create(protoRabbit);
   killerRabbit.type = "killer";
   killerRabbit.speak("SKREEE!");
   // -> The killer rabbit says 'SKREEE!'
```


# Classes

- JavaScript’s prototype system can be interpreted as a somewhat informal take on an object-oriented concept called classes. A class defines the shape of a type of object—what methods and properties it has. Such an object is called an *instance* of the class.

- So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a *constructor* function does.

```javascript

   function makeRabbit(type) {
      let rabbit = Object.create(protoRabbit);
      rabbit.type = type;
      return rabbit;
   } 

```

- The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
```javascript

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
   weirdRabbit.speak("Give me a carrot");
```


# Class Notation

- So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, that was how you had to write them. These days, we have a less awkward notation.

```javascript

   class Rabbit {
      constructor(type) {
         this.type = type;
      }
      speak(line) {
         console.log(`The ${this.type} rabbit says '${line}'`);
      }
   }

   let killerRabbit = new Rabbit("killer");
   let blackRabbit = new Rabbit("black");
   killerRabbit.speak("Kill all humans!");
   blackRabbit.speak("Eat my face off!");

```

- Like function, class can be used both in statements and in expressions. When used as an expression, it doesn’t define a binding but just produces the constructor as a value. You are allowed to omit the class name in a class expression.

```javascript

   let object = new class { getWord() { return "hello"; } };
   console.log(object.getWord());
   // → hello
```


# Overriding Derived Properties

-When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.

```javascript

   Rabbit.prototype.teeth = "small";
   console.log(killerRabbit.teetth);
   // -> small
   killerRabbit.teeth = "long, sharp, and bloody";
   console.log(killerRabbit.teeth);
   // -> long, sharp, and bloody
   console.log(blackRabbit.teeth);
   // → small
   console.log(Rabbit.prototype.teeth);
   // → small
```

# Maps

- A map (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages. It is possible to use objects for this.

```javascript

   let ages = {
      Julia: 62,
      Boris: 26,
      Liang: 45,
   };

   console.log("Julia is", ages["Julia"]);
   // -> Julia is 62
   for (el in ages) {
      console.log(ages[el]);
      //- > 62,26,45
   }
```

- Map function:

```javascript

   let ages = new Map();
   ages.set("Boris", 39);
   ages.set("Liang", 22);
   ages.set("Julia", 62);
   console.log(ages.get("Boris"));
   // -> 39
   ages.delete("Liang");
   console.log(ages.has("Liang"));
   // -> false
```


# The Iterator Interface

- The object given to a for/of loop is expected to be iterable. This means it has a method named with the Symbol.iterator symbol (a symbol value defined by the language, stored as a property of the Symbol function).

- We can directly use this interface ourselves.

```javascript

   let okIterator = "OK"[Symbol.iterator]();

   console.log(okIterator.next());
   // -> {value: "0", done: false}
   console.log(okIterator.next());
   // → {value: "K", done: false}
   console.log(okIterator.next());
   // → {value: undefined, done: true}
```

- Let’s implement an iterable data structure. We’ll build a matrix class, acting as a two-dimensional array.

```javascript
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

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}
```

- When looping over a matrix, you are usually interested in the position of the elements as well as the elements themselves, so we’ll have our iterator produce objects with x, y, and value properties.


```javascript

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}
```

# Getters, setters, and statics

- Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values. For example, Map objects have a size property that tells you how many keys are stored in them.

- It is not even necessary for such an object to compute and store such a property directly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration.


```javascript

let varyingSize = {
   get size () {
      return Math.floor(Math.random() * 100);
   }
}

console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49
```

- Whenever someone reads from this object’s size property, the associated method is called. You can do a similar thing when a property is written to, using a setter.
```javascript

class Temperature {
   constructor (celsius) {
      this.celsius = celsius;
   }
   get Fahrenheit() {
      return this.celsius * 1.8 + 32;
   }
   set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
   }
   static fromFahrenheit (value) {
      return new Temperature((value - 32) / 1.8);
   }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// -> 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// -> 30
```

# Inheritance

- Imagine we need a data structure like Matrix but one that enforces the fact that the matrix is and remains symmetrical. We could write it from scratch, but that would involve repeating some code very similar to what we already wrote.

- JavaScript’s prototype system makes it possible to create a new class, much like the old class, but with new definitions for some of its properties. The prototype for the new class derives from the old prototype but adds a new definition for, say, the set method.

- In object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class.

```javascript

   class SymmetricMatrix extends Matrix {
      constructor (size, element = (x, y) => undefined) {
         super (size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
         })
      }
      set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
         super.set(y, x, value);
      }
   }
   }

   let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
   console.log(matrix.get(2, 3));
   // → 3,2
```


# The Instanceof Operator

- It is occasionally useful to know whether an object was derived from a specific class. For this, JavaScript provides a binary operator called *instenceof*

```javascript
console.log(
  new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true
```

# Exercise

```javascript

class Group {
   constructor () {
      this.members = []
   }

   add (val) {
      if (!this.has(val)) {
         this.members.push(val);
      }
   }

   delete (val) {
      if (this.has(val)) {
         this.members = this.members.filter(i => i !== val);
      }
   }

   has (val) {
      return this.members.includes(val)
   }
   static from(iterable) {
     const group = new Group();
     for (const value of iterable) {
       group.add(value);
     }
     return group;
   }
}
```