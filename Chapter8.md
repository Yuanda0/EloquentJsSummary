# CHAPTER 8: BUGS AND ERRORS

- JavaScript can be made a little stricter by enabling strict mode. This is done by putting the string "use strict" at the top of a file or a function body. Here’s an example:

```javascript
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined
```
- For binding a variable we have to use `let`, `var` or `const`. If you forget to put them in front of your bindings, as with counter in example, JavaScript quietly creates a global binding and uses that. In strict mode, an error is reported instead.

- Another change in strict mode is that the this binding holds the value undefined in functions that are not called as methods. When making such a call outside of strict mode, this refers to the global scope object, which is an object whose properties are the global bindings. So if you accidentally call a method or constructor incorrectly in strict mode, JavaScript will produce an error as soon as it tries to read something from this, rather than happily writing to the global scope.

- For example, consider the following code, which calls a constructor function without the new keyword so that its this will not refer to a newly constructed object:

```javascript
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinand
```
> If use "use strict":

```javascript
"use strict"
function Person(name) { this.name = name };
let ferdinand = Person("Ferdinand")
// → TypeError: Cannot set property 'name' of undefined

```

## Debugging

- The following example program tries to convert a whole number to a string in a given base (decimal, binary, and so on) by repeatedly picking out the last digit and then dividing the number to get rid of this digit. But the strange output that it currently produces suggests that it has a bug.

```javascript

function numberToString (n, base = 10) {
  let result = '', sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }

  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);

  return sign + result;
}

```

```
13
1.3
0.13
0.013
…
1.5e-323
```
- Right. Dividing 13 by 10 does not produce a whole number. Instead of n /= base, what we actually want is n = Math.floor(n / base) so that the number is properly “shifted” to the right.

## Error Propagation


- Say you have a function promptNumber that asks the user for a number and returns it. What should it return if the user inputs “orange”?

- One option is to make it return a special value. Common choices for such values are null, undefined, or -1.

```javascript

function promptNumber (question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
```

- In many situations, mostly when errors are common and the caller should be explicitly taking them into account, returning a special value is a good way to indicate an error. It does, however, have its downsides. First, what if the function can already return every possible kind of value? In such a function, you’ll have to do something like wrap the result in an object to be able to distinguish success from failure.


```javascript

function lastElement (array) {
  if (array.length == 0) {
    return { failed: true };
  } else {
    return { element: array[array.length -1]};
  }
}
```


## Exceptions

- When a function cannot proceed normally, what we would like to do is just stop what we are doing and immediately jump to a place that knows how to handle the problem. This is what exception handling does.

- If exceptions always zoomed right down to the bottom of the stack, they would not be of much use. They’d just provide a novel way to blow up your program. Their power lies in the fact that you can set “obstacles” along the stack to catch the exception as it is zooming down. Once you’ve caught an exception, you can do something with it to address the problem and then continue to run the program.

### Here's an example:

```javascript
function promptDirection (q) {
  let result = prompt(q);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look () {
  if (promptDirection("Which Way?") == "L") {
    return "a house";
  } else {
    return "two angry bears!";
  }
}

try {
  console.log("You see", look());
} catch(e) {
  console.log("Something went wrong: " + e);
}
```

## Cleaning Up After Exceptions

- The effect of an exception is another kind of control flow. Every action that might cause an exception, which is pretty much every function call and property access, might cause control to suddenly leave your code.

- This means when code has several side effects, even if its “regular” control flow looks like they’ll always all happen, an exception might prevent some of them from taking place.


> Here is some really basd banking code. 
```javascript
const accouunts = {
  a: 100,
  b: 0,
  c: 20
}

function getAccount () {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }

  return accountName;
}

function transfer (from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}
```

- One way to address this is to use fewer side effects. Again, a programming style that computes new values instead of changing existing data helps. If a piece of code stops running in the middle of creating a new value, no one ever sees the half-finished value, and there is no problem.
 
- But that isn’t always practical. So there is another feature that try statements have. They may be followed by a finally block either instead of or in addition to a catch block. A finally block says “no matter what happens, run this code after trying to run the code in the try block.”

```javascript

function transfer (from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```