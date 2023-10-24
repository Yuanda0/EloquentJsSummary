const names = ["John","Hans","Sophia","Yuanda"];

   let countedNames = names.reduce((allNames, name) => {
      if (name in allNames) {
         allNames[name]++;
      } else {
         allNames[name] = 1;
      }
      return allNames
   }, {}) // Initial value is an object.


let arrays = [[1,2,3], [4,5], [6]];
let flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
// -> [1, 2, 3, 4, 5, 6]
console.log(flattenedArray);

const every = (arr, test) => {
   return arr.reduce((result, item) => {
      return result && test(item);
    }, true);
}

console.log(every([2,4,5], n => n > 5));