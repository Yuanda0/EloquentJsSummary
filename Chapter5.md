# CHAPTER 5

- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

- Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.

```javascript

   function greaterThan(n) {
      return m => m > n;
   }

   let greaterThan10 = greaterThan(10);
   console.log(greaterThan10(11));
   // -> true
```

- And we can have functions that change other functions.

```javascript

   function noisy(f) {
      return (...args) => {
         console.log("calling with", args);
         let result = f(...args);
         console.log("called with", args, ", returned ", result);
         return result;
      }
   }

   noisy(Math.min)(3, 2, 1),
   // -> calling with [3, 2 , 1]
   // -> called with [3, 2, 1] returned 1
```

- There is a built-in array method, ``forEach``, that provides something like a *for/of* loop as a higher-order function.

```javascript
   const myArr = ["WORD", "JS", 4, 5];
   myArr.forEach(l => console.log(l))
   //-> WORD
   //-> JS
   //-> 4
   //-> 5
```


# Filtering Arrays

-  It filters out the elements in an array that don’t pass a test.

```javascript

   function filter(array, test) {
      let passed = [];
      for (let element of array) {
         if (test(element)) {
            passed.push(element);
         }
      }
      return passed;
   }
```

- Like forEach, filter is a standard array method. The example defined the function only to show what it does internally. From now on, we’ll use it like this instead:

```javascript

   console.log(SCRIPTS.filter(s => s.year == -204));
```


# Summarizing with reduce


The parameters to *reduce* are, apart from the array, a combining function and a start value. This function is a little less straightforward than filter and map, so take a close look at it:


```javascript

   function reduce(arr, combine, start) {
      let current = start;
      for (let element of arr) {
         current = combine(current, element);
      }
      return current;
   }

   console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
   // -> 10
```

- The standard array method ``reduce``, which of course corresponds to this function, has an added convenience. If your array contains at least one element, you are allowed to leave off the start argument. The method will take the first element of the array as its start value and start reducing at the second element.

```javascript

   const arr = [1, 2, 3, 4, 5];
   console.log(arr.slice((acc, number) => acc+number));
   // -> 15
   // We can define a inital value:
   console.log(arr.reduce((acc, number) => acc+number, 2));
   // -> 17     2 is inital value.
```

- Another example: 
```javascript

   const Cart = [
      {
         product: "iPhone 14",
         price: 1400
      }, 
      {
         product: "Apple MacBook Pro",
         price: 2899
      }, 
      {
         product: "Logitech Mouse",
         price: 69
      }
   ]

   console.log(Cart.reduce((acc, item) => acc + item.price, 0));
   // -> 4368
   // This reduce function sums all of the prices and returns the result.
```

```javascript

   const names = ["John","Hans","Sophia","Yuanda", "Yuanda", "Sophia"];

   let countedNames = names.reduce((allNames, name) => {
      if (name in allNames) {
         allNames[name]++;
      } else {
         allNames[name] = 1;
      }
      return allNames
   }, {}) // Initial value is an object.

   console.log(countedNames);
   // -> { John: 1, Hans: 1, Sophia: 2, Yuanda: 2 }
```


# Composability

```javascript

   let biggest = null;
   for (let script of SCRIPTS) {
      if (biggest == null || 
      characterCount)
   }
```