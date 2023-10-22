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