

function numberToString (n, base = 10) {
   let result = '', sign = "";
   if (n < 0) {
     sign = "-";
     n = -n;
   }
 
   do {
     result = n % base + result;
     n = Math.floor(n / base);
   } while (n > 0);
 
   return sign + result;
 }


 function lastElement (array) {
  if (array.length == 0) {
    return { failed: true };
  } else {
    return { element: array[array.length -1]};
  }
}

function promptDirection (q) {
  if (q.toLowerCase() == "left") return "L";
  if (q.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + q);
}

function look () {
  if (promptDirection("right") == "L") {
    return "a house";
  } else {
    return "two angry bears!";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log(error);
}