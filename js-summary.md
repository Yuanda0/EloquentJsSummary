# CHAPTER 1


# Unary Operators

## Not all operators are symbols. Some are written as words. One example is the typeof operator.

`console.log(typeof 4.5)`

This block returns **number**

`console.log(typeof "x")`

This block returns **string**


- The minus operator can be used both as a binary operator and as a unary operator.

`console.log(- (10 - 2))`

This block returns **-8** 

> console.log(- (10 - 2)) The minus sign (-) next to the first parenthesis makes the result negative.


# Boolean Values

## It is often useful to have a value that distinguishes between only two possibilities, like "yes" and "no" or "on" and "off".

For this purpose, JavaScript has a Boolean type, which has just two values, *true* and *false*, which are written as those words.

`console.log(3 > 2)`

This block returns **true** coz 3 **greater** than 2

`console.log(3 < 2)` 

This block returns **false** coz it says 3 **less** than 2 <span style="color: black; font-weight: 700;">but</span> 3 greater than 2
 
> ">" means is greater than,  "<" means is less than.Applying them results in a Boolean value that indicates whether they hold true in this case.

+ Strings can be compared in the same way.

`console.log("Aardvark" < "Zoroaster")`

This block returns **true** because character count of "Zoroaster" greater than "Aardvarks"'s character count.

+ Other similar operators are *>=* (greater than or equal to), *<=* (less than or equal to), *==* (equal to), and *!=* (not equal to).


`console.log("Itchy" != "Scratchy")`


This block returns **true** because "Itchy" is not equals to "Scratchy"


- There is only one value in JavaScript that is not equal to itself, and that is NaN (not a number).

`console.log(NaN == NaN)` returns **false**


# Logical Operators

## These operators can be used to "reason" about Booleans.

- The && operator represents logical *and*. It is a binary operator, and its result is true only if both the values given to it are true.

`console.log(true && false)` returns **false**

`console.log(true && true)` returns **true**

- The || operator denotes logical *or*. It produces true if either of the values given to it is true.

`console.log(false || true)` returns **true**

`console.log(false || false)` return **false** -> both of them are false.


# Empty Values

## There are two special values, written `null` and `undefined`

- They are themselves values, but they carry no information.

- Many operations in the language that don&apos;t produce a meaningful value yield undefined simply because they have to yield some value. 


# Automatic type conversion

`console.log(8 * null)` returns **0**

`console.log("5" - 1)` returns **4**

`console.log(5 + 1)` returns **51**

`console.log("five" * 2)` returns **NaN**



- When comparing values of the same type using `==`, the outcome is easy to predict: you should get true when both values are the same, except in the case of `NaN`. But when the types differ, JavaScript uses a complicated and confusing set of rules to determine what to do. In most cases, it just tries to convert one of the values to the other value&apos;s type. However, when `null` or `undefined` occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

`console.log(null == undefined)` returns **true**


# Short-circuiting of logical operators

- The logical operators `&&` and  `||` handle vlaues of different tpyes in a peculiar way.

- The `||` operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.

`console.log(null || "user")` returns **user**

`console.log("Agnes" || "user")` returns **Agnes**



# CHAPTER 2


# Bindings/Variables

`let caught = 5 * 5`

`console.log(caught)` the output is: **25**

- That’s a second kind of statement. The special word (keyword) let indicates that this sentence is going to define a binding. It is followed by the name of the binding and, if we want to immediately give it a value, by an = operator and an expression.

Instead of `let caught = 5 * 5` we can do

`let five = 5`

`console.log(five * five)` the output is: **25**

- When a binding points at a value, that does not mean it is tied to that value forever. The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.

`let mood = light; `

`console.log(mood)` the output is: **light**

`mood = "dark";`

`console.log(mood)` the output is: **dark**

We've changed the our defined value, mood's first value was *light* and we've changed it to *dark* .

- Another example:

`let luigisDebt = 140;`

`luigisDebt = luigisDebt - 35;`

`console.log(luigisDebt)` the output is: **105**

We've changed luigisDebt by subtracting 35.

- When you define a binding without giving it a value and try to log that:

`let name;`

`console.log(name)` the output is: **undefined**. Coz we didnt give a value to this variable.


- A single let statement may define multiple bindings. The definitions must be separated by commas.

`let one = 1, two = 2;`

`console.log(one + two);` the output is: **3**


- The words var and const can also be used to create bindings, in a way similar to let.

`var name = "Ayda"; `

`const greeting = "Hello ";`

`console.log(greeting + name);` the output is: **Hello Ayda**

- The first, `var` (short of "variable"), is the way bindings were declared in pre-2015 JavaScript.

- The word `const` stands for *constant*. It defines a constant binding, which points at the same value for as long as it lives.But we cannot change it, like this:

`let name = "Emir";`

`name = "Brian";` we can do that but

`const name = "Emir";`

`name = "Brian"` we cannot do that coz we defined this variable as *const*(constant). So which means it cannot change.



# Binding Names

- A variable name can be any word. Digits can be part of binding names but they cannot be start of the name.

`var num1 = 1;`  is a valid name

`var 1num = 1;` isn&apos;t a valid name. As i said they cannot start with a digit.

- A binding name may include dollar signs *$* or underscores *_* but no other punctuation or special characters.

- Words with a special meaning, such as `let, const, var`, are keywords, and they may not be used as binding names.

# Functions

- A lot of the values provided in the default environment have the type function. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. For example, in a browser environment, the binding `prompt` holds a function that shows a little dialog box asking for user input. It is used like this:

```javascript
   prompt("How old are you")
```

![Javatpoint](https://www.javascripttutorial.net/wp-content/uploads/2020/01/javascript-prompt.png)



+ Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value. Usually you’ll directly use the name of the binding that holds the function. The values between the parentheses are given to the program inside the function. In the example, the prompt function uses the string that we give it as the text to show in the dialog box. Values given to functions are called arguments. Different functions might need a different number or different types of arguments.

# The console.log function

```javascript
   let x = 10;
   console.log("Value of x is: ", x); //This function got args. The args are: first argument is "Value of x is: " -> string, second argument is x -> number
   
```
The output is:
`Value of x : 10`


# Return Values

- Showing a dialog box or writing text to the screen is a side effect.
**For example, the function Math.max takes any amount of number arguments and gives back the greatest.**

```javascript
   console.log(Math.max(2, 4));
```

`Returns -> 4`

- When a function produces a value, it is said to return that value.

+ Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions. Here a call to Math.min, which is the opposite of `Math.max`, is used as part of a plus expression:

```javascript

   console.log(Math.min(2, 4) + 100);
```
`Returns -> 102`

# Control Flow

- When your program contains <span style="font-weight: 700; color: black;">more than one</span> statement, the statements are executed as if they are a story, from top to bottom.

```javascript

   let theNumber = Number(prompt("Pick a number"));
   console.log("Your number is the square root of " +
              theNumber * theNumber);
```
> The function Number converts a value to a number. We need that conversion because the result of prompt is a string value.


# Conditional Execution

- Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called _conditional execution_.

Conditional execution is created with the `if` keyword in JavaScript.

```javascript

   let theNumber = Number(prompt("Pick a number"));
   if (!Number.isNaN(theNumber)) {
      console.log("Your number is the square root of " +
                  theNumber * theNumber);
   }
```

- In this condition we check **theNumber** is a number or isn&apos;t a number,if it is a number we calling **console.log** function.

- The ``Number.isNaN`` function is a standard JavaScript function that returns ``true`` only if the argument it is given is ``NaN``. The ``Number`` function happens to return ``NaN`` when you give it a string that doesn’t represent a valid number. Thus, the condition translates to “unless ``theNumber`` is not-a-number, do this”.


+ If we have a single statement we dont have to use **{}** braces. For example:

```javascript

   if (1 + 1 == 2) console.log("The answer is true!");
```



- You often won’t just have code that executes when a condition holds true, but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. You can use the ``else`` keyword, together with ``if``, to create two separate, alternative execution paths.


```javascript

   let theNumber = Number(prompt("Pick a number"));
   if (!Number.isNaN(theNumber)) {
      console.log("Your number is the square root of " +
                 theNumber * theNumber);
   } else { // If theNumber isn't a number:
      console.log("Hey. Why didn't you give me a number?");
   }
```

##### If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. Here’s an example:

```javascript
   let num = Number(prompt("Pick a number"));
   if (num < 10) {
      console.log("Small!);
   } else if (num < 100) {
      console.log("Medium.");
   } else {
      console.log("Large");
   }
```

> The program will first check whether **num** is less than 10.If it is chooses that branch, shows **Small**, and is done. If it isn’t, it takes the **else** branch, which itself contains a second **if**. If the second condition **(< 100)** holds, that means the number is at least 10 but below 100, and **"Medium"** is shown. If it doesn’t, the second and last **else** branch is chosen.


# While and Do Loops

- We use while loops because:
Insted of that:
```javascript
   console.log(0);
   console.log(2);
   console.log(4);
   console.log(6);
   console.log(8);
   console.log(10);
   console.log(12);
```

```javascript
   let number = 0;
   while (number <= 12) {
      console.log(number);
      number = number + 2;
   }
``` 
This code block does
First ve defined a variable as number and value of that is 0, and there is a keyword `while` and it takes a condition in the paranthesis.The condition in this block is `number <= 12` which means this code going to work until number greater than 12.
When `number` greater than 12 program ends. This is the output of this code:

**0**
**2**
**4**
**6**
**8**
**10**
**12**


- A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

```javascript
   let yourName;
   do {
      yourName = prompt("Who are you?");
   } while (!yourName);
   console.log(yourName);
```
- This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name.      


# For Loops
```javascript
   for (let number = 0; number <= 12; number = number + 2) {
      console.log("Number");
   }
```
This code block does same thing with `while` in our previous example. So this code blocks output is same.

**0**
**2**
**4**
**6**
**8**
**10**
**12**


The parentheses ``after`` a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a ``while`` construct.


- This is the code that computes 210 using ``for`` instead of ``while``:

```javascript

   let result = 1;
   for (let counter = 0; counter < 10; counter++) {
      result = result * 2;
   }
   console.log(result);
```

Output: `1024`

- This time, we've used a different syntax: 'counter++,' which is essentially an increment operation. This means it increases our counter by +1 in every loop.


# Breaking Out of a Loop

- Having the looping condition produce ``false`` is not the only way a loop can finish. There is a special statement called ``break`` that has the effect of immediately jumping out of the enclosing loop.

This program illustrates the `break` statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.

```javascript

   for (let current = 20; current = current + 1;) {
      if (current % 7 == 0) {
         console.log(current);
         break;
      }
   }
```

>Using the remainder (%) operator is an easy way to test whether a number is divisible by another number. If it is, the remainder of their division is zero.

- Instead of that `for (let i = 0; i < 10; i = i + 1)` we can do:
`for (let i = 0; i < 10; i = i++)` -> if we want just increase by +1 we can use `i++` but if we want increase by +2, +3 etc. we can do this too: `i += 2` its like:

```javascript

   for (let i = 0; i <= 20; i += 5) {
      console.log(i);
   }
```
- In every loop our `i` increases by +5 and we print that. So output seems like that:
**0**
**5**
**10**
**15**
**20**


# Dispatching on a value with switch

- It is not uncommon for code to look like this:

```javascript

   if (x == "value1") action1();
   else if (x == "value2") action2();
   else if (x == "value3") action3();
   else defaultAction();
```

There is a construct called ``switch`` that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of ``if`` statements may look better. Here is an example:

```javascript
   switch (prompt("What is the weather like?")) {
   case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
   case "sunny":
      console.log("Dress lightly.");
   case "cloudy":
      console.log("Go outside.");
      break;
   default:
      console.log("Unknown weather type!");
      break;
}
```

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

# CHAPTER 4


## DATA SETS

- Fortunately, JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.

```javascript

   let listOfNumbers = [2, 3, 5, 7, 11];
   console.log(listOfNumbers[0]);
   // Output: 2
   let myArray = ["apple", "banana", "cherry"];
   console.log(myArray);
   // Output: ['apple', 'banana', 'cherry']

```

-The first index of an array is zero, not one. So the first element is retrieved with listOfNumbers[0]. Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to. Think of the index as the amount of items to skip, counting from the start of the array. For example:

```javascript

   const myArray = [1, 2, 3, 5, 9];
   console.log(myArray[0]);
   // -> 1
   // First index of this array is '1'
   console.log(myArray[1]);
   // -> 2
```


# METHODS

- This example demonstrates two methods you can use to manipulate arrays:

```javascript

   let sequence = [1, 2, 3];
   console.log(sequence);
   // -> [1, 2, 3]
   sequence.push(4);
   sequence.push(5);
   console.log(sequence);
   // -> [1, 2, 3, 4, 5];
```

- The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.


# Objects

- Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.

```javascript

   let day1 = {
      squirrel: false,
      events: ["work", "touched tree", "pizza", "running"]
   };

   console.log(day.squirrel);
   // -> false

   console.log(day.events);
   // -> ["work", "touched tree", "pizza", "running"];

   console.log(day1.wolf);
   // -> undefined

   day1.wolf = false;
   // -> false
```

- The delete operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object. This is not a common thing to do, but it is possible.

```javascript

   let anObject = {left: 1, right: 2};
   console.log(anObject.left);
   // -> 1

   delete anObject.left;

   console.log(anObject.left);
   // -> undefined
```

- There’s an Object.assign function that copies all properties from one object into another.

```javascript

   let objectA = {a: 1, b: 2};
   Object.assign(objectA, {b: 3, c: 4});
   console.log(objectA);
   // -> {a: 1, b: 3, c: 4}
```

- Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object".

```javascript
   
   let arrayOfObjects = [
      {name: 'John', age: 30},
      {name: 'Jane', age: 25},
      {name: 'Bob', age: 28}
      ];

      console.log(arrayOfObject[1]);
      // -> {name: 'Jane', age: 25}
      
      console.log(arrayOfObjects[1].name);
      // -> Jane
```


# The Lycanthrope's Log

- So, Jacques starts up his JavaScript interpreter and sets up the environment he needs to keep his journal.


```javascript

   let journal = [];
   function addEntry(events, squirrel) {
      journal.push({events, squirrel});
   }
   addEntry(["work" ,"run", "read book", "watch TV", "sleep"], false);
   console.log(journal);
   // -> [{events: ["work","run", "read book", "watch TV", "sleep"], squirrel: false}]
```

# Computing Correlation
- To extract a two-by-two table for a specific event from the journal, we must loop over all the entries and tally how many times the event occurs in relation to squirrel transformations.

```javascript
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
```

# Further Arrayology

- The corresponding methods for adding and removing things at the start of an array are called unshift and shift.

```javascript
   let todoList = [];
   function remember(task) {
      todoList.push(task);
   }
   function getTask() {
      return todoList.shift();
   }
   function rememberUrgently(task) {
      todoList.unshift(task);
   }

   remember(5);
   remember('wash dishes');
   remember('write letter');
   rememberUrgently('fix leaky faucet');
   remember(3);
   console.log(todoList);
   /*
   Outputs:
   [ 'fix leaky faucet', 5, 'wash dishes', 'write letter', 3 ]
   */
   
```

- To search for a specific value, arrays provide an indexOf method. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called lastIndexOf.
```javascript

   console.log([1, 2, 3, 2, 1].indexOf(2));
   // → 1
   console.log(['apple', 'banana', 'cherry'].lastIndexOf('banana'));
   // → 1

```