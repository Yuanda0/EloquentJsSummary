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

- Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.

```javascript

   console.log([0, 1, 2, 3, 4].slice(2, 4));
   // -> [2, 3]
   console.log([0, 1, 2, 3, 4].slice(2));
   // -> [2, 3, 4]
   console.log([0, 1, 2, 3, 4].slice(-2));
   // -> [3, 4]
```

- The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.


```javascript

   function remove(array, index) {
      return array.slice(0, index)
         .concat(array.slice(index + 1));
   }

   console.log(remove(["a", "b", "c", "d", "e"]), 2);
   // -> ["a", "b", "d", "e"]
```

# Strings and Their Properties

-We can read properties like length and toUpperCase from string values. But if you try to add a new property, it doesn’t stick.

```javascript

   let kim = "Kim";
   kim.age = 88;
   console.log(kim.age);
   // -> undefined
```

> Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. As mentioned earlier, such values are immutable and cannot be changed.

- But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are slice and indexOf, which resemble the array methods of the same name.

```javascript

   console.log("coconuts".slice(4, 7));
   // -> "nut"

   console.log("coconuts".indexOf("u"));
   // -> 5
```
- One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

```javascript

   console.log("one two three".indexOf("ee"));
   // -> 11
```

- The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

```javascript

   console.log("     okay /n  ".trim());
   // -> okay

```
- It is called padStart and takes the desired length and padding character as arguments.

```javascript

   console.log(String(4).padStart(4, "2"));
   // -> 22224
```

- A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

```javascript

   console.log("HELLO, ".repeat(3));
   // -> HELLO, HELLO, HELLO, 
```


# Rest Parameters

- It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.

- To write such a function, you put three dots before the function’s last parameter, like this:

```javascript

   function max(...numbers) {
      let result = -Infinity;
      for (let number of numbers) {
         if (number > result) result = number;
      }
      return result;
   }
   console.log(max(4, 1, 9, -2));
   // → 9
   // You can use a similar three-dot notation to call a function with an array of arguments.

   let numbers = [5, 1, 7];
   console.log(max(...numbers));
   // -> 7
```

# Destructuring

```javascript

   let {name} = {name: "Yuanda", age: 16};
   console.log(name);
   // -> Yuanda
```
- Another example:
```javascript
   const myArr = [{name: "yuanda", age: 16}, {name: "Emir", age: 16}];

   for (let i = 0; i < myArr.length; i++) {
      let {name} = myArr[i];
      console.log(name);
      // -> yuanda, Emir
} 
```