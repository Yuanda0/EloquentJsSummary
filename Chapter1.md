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
