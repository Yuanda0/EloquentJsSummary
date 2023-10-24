const names = ["John","Hans","Sophia","Yuanda"];

   let countedNames = names.reduce((allNames, name) => {
      if (name in allNames) {
         allNames[name]++;
      } else {
         allNames[name] = 1;
      }
      return allNames
   }, {}) // Initial value is an object.

   console.log(countedNames);