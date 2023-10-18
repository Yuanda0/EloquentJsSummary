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