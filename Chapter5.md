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

   console.log(SCRIPTS.filter(s => s.year == -200));
```