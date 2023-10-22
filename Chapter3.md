# CHAPTER 3


## Defining a Function

A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the ``square`` of a given number:

```javascript
   
   const square = function(x) {
      return x * x;
   }

   console.log(square(12));
   // -> 144
```

A function is created with an expression that starts with the keyword ``function``. Functions have a set of parameters (in this case, only ``x``) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.


- A function can have multiple parameters or no parameters at all.

```javascript

   const makeNoise = funciton() {
      console.log('Bark!');
   }

   makeNoise();
   // -> Bark!
```

# Bindings and Scopes

- Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

- But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings. Every time the function is called, new instances of these bindings are created. This provides some isolation between functions—each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.


```javascript

   let x = 10;
   if (true) {
      let y = 20;
      var z = 30;
      console.log(x + y + z);
      // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```


# Declaration Notation

- Instead of that: `const sum = function(){}` we can do: `function sum(){}` like this:

```javascript

   function sum(x, y) {
      return x + y;
   }
   console.log(sum(5, 7));
   // -> 12

   //Another example:

   function talk() {
      return "What do you wanna i say?";
   }

   console.log("Program said: ", talk());
```

# Arrow Functions

- Arrow functions do same things with `function`, but they appear quite different from each other.

- There are two functions here, one is `function` as we know and the other is `arrow function`

```javascript

   function square(x) {
      return x * x;
   }
   //normal function

   const square = (x) => {
      return x * x;
   }
   //this is an arrow function.Here is the another arrow function:

   const square = x => return x * x;

   //This arrow function may not take any parameters, like this:

   const makeNoise = () => {
      console.log("Meow!");
   }
   makeNoise();
   // -> Meow!
```


# Closure

- The following code shows an example of this. It defines a function, ``wrapValue``, that creates a local binding. It then returns a function that accesses and returns this local binding.

```javascript

   function wrapValue(n) {
      let local = n;

      return () => local;
   }

   let wrap1 = wrapValue(1);
   let wrap2 = wrapValue(2);

   console.log(wrap1());
   // -> 1
   console.log(wrap2());
   // -> 2
```

- With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount

```javascript

   function multiplier(factor) {
      return number => number * factor;
   }

   let twice = multiplier(2) // 2 is factor

   console.log(twice(5)); // 5 is number
```

- In the example, ``multiplier`` is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.


# Recursion

- It is perfectly okay for a function to call itself, as long as it doesn’t do it so often that it overflows the stack. A function that calls itself is called recursive. Recursion allows some functions to be written in a different style. Take, for example, this alternative implementation of ``power``:

```javascript

   function power(base, exponent) {
      if (exponent === 0) {
         return 1;
      } else {
         return base * power(base, exponent - 1);
      }
   }

   console.log(power(2, 3));
   // -> 8
```

### For exercise lets code our Math.min() function

```javascript

   const min = (x, y) => {
      if (y < x) {
         return y;
      } else {
         return x;
      }
   }

   console.log("Minimum is: ", min(4, 5));
   // -> 4
```

### There is another exercise

```javascript

   function isEven(x) {
      if (x >= 0) {
         if (x % 2 == 0) {
            return true; // If x can divisible by 2 it's even
         } else {
            return false; // X cannot divisible by 2 it's odd
         }
      } else {
         return "Please enter 0 or a positive number!";
      }
   }

   let number = prompt("Enter your number");
   console.log(isEven(number));
```
