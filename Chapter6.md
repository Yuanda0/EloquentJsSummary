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


# Polymorphism

