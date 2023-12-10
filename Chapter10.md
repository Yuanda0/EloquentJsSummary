# CHAPTER 10: MODULES

## Improvised Modules

- This is a module for going between day names and numbers (as returned by Date’s getDay method). Its interface consists of weekDay.name and weekDay.number, and it hides its local binding names inside the scope of a function expression that is immediately invoked.

```javascript
const weekDay = function () {
   const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
   return {
      name(number) { return names[number] };
      number(name) { return names.indexOf(name) };
   }
}
```


## Evaluating Data As Code

- The most obvious way is the special operator eval, which will execute a string in the current scope. This is usually a bad idea because it breaks some of the properties that scopes normally have, such as it being easily predictable which binding a given name refers to.

```javascript

const x = 1;

function evalAndReturnX (code) {
   eval(code);
   return x;
}

console.log(evalAndReturnX("var x = 2"));
//->2
console.log(x);
// -> 1

```

- A less scary way of interpreting data as code is to use the Function constructor. It takes two arguments: a string containing a comma-separated list of argument names and a string containing the function body. It wraps the code in a function value so that it gets its own scope and won’t do odd things with other scopes.

```javascript

let plusOne = Function("n", "return n + 1;")
console.log(plusOne(4));
//-> 5
```

## CommonJs

- The main concept in CommonJS modules is a function called require. When you call this with the module name of a dependency, it makes sure the module is loaded and returns its interface.

+ This example module provides a date-formatting function. It uses two packages from NPM—ordinal to convert numbers to strings like "1st" and "2nd", and date-names to get the English names for weekdays and months. It exports a single function, formatDate, which takes a Date object and a template string.

- The template string may contain codes that direct the format, such as YYYY for the full year and Do for the ordinal day of the month. You could give it a string like "MMMM Do YYYY" to get output like “November 22nd 2017”.

```javascript

const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function (date, format) {
   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
       if (tag == "YYYY") return date.getFullYear();
      if (tag == "M") return date.getMonth();
      if (tag == "MMMM") return months[date.getMonth()];
      if (tag == "D") return date.getDate();
      if (tag == "Do") return ordinal(date.getDate());
      if (tag == "dddd") return days[date.getDay()];
   })
}
```


## EcmaScript (ES) Modules

- CommonJS modules work quite well and, in combination with NPM, have allowed the JavaScript community to start sharing code on a large scale.

```javascript

import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }
```

Similarly, the export keyword is used to export things. It may appear in front of a function, class, or binding definition (*let*, *const*, or *var*).

> To create a default export, you write export default before an expression, a function declaration, or a class declaration.

```javascript

export default ["Winter", "Spring", "Summer", "Autumn"];
```

It is possible to rename imported bindings using the word **as**.
```javascript
import {days as dayNames} from "date-names";

console.log(dayNames.length);
// → 7
```

```javascript
const {find_path} = require("dijkstrajs");

let graph = {};
for (let node of Object.keys(roadGraph)) {
  let edges = graph[node] = {};
  for (let dest of roadGraph[node]) {
    edges[dest] = 1;
  }
}

console.log(find_path(graph, "Post Office", "Cabin"));
// → ["Post Office", "Alice's House", "Cabin"]
```