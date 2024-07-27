// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const output = [];
  forEach(array, (element) => output.push(callback(element)));
  return output;
}

// Challenge 6
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

// const nums = [4, 7, 3];
// const add = function (a, b) {
//   return a * b;
// };
// console.log(reduce(nums, add, 1));

// Challenge 7
function intersection(arrays) {
  function compare(array1, array2) {
    const output = [];
    for (let index = 0; index < array1.length; index++) {
      if (array2.includes(array1[index])) {
        output.push(array1[index]);
      }
    }
    return output;
  }
  return reduce(arrays, compare, arrays[0]);
}

// console.log(compare([1, 2, 3], [2, 3, 4]));

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ]),
// );
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  function compare(array1, array2) {
    console.log(array1, array2);
    const output = array1;
    for (let index = 0; index < array2.length; index++) {
      const element = array2[index];
      if (!output.includes(element)) {
        output.push(element);
      }
    }
    return output;
  }
  return reduce(arrays, compare, []);
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ]),
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const output = {};
  for (let index = 0; index < array1.length; index++) {
    if (callback(array1[index]) === array2[index]) {
      output[array1[index]] = array2[index];
    }
  }
  return output;
}

// console.log(
//   objOfMatches(
//     ["hi", "howdy", "bye", "later", "hello"],
//     ["HI", "Howdy", "BYE", "LATER", "hello"],
//     function (str) {
//       return str.toUpperCase();
//     },
//   ),
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const output = {};
  arrVals.forEach((value) => {
    output[value] = arrCallbacks.map((callback) => callback(value));
  });
  return output;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ],
//   ),
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const output = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (callback(key) === obj[key]) {
      output[key] = obj[key];
    }
  });
  return output;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let truthCounter = 0;

  array.forEach((element) => {
    if (callback(element)) {
      truthCounter++;
    }
  });

  if (truthCounter > array.length / 2) {
    return true;
  } else {
    return false;
  }
}

// /*** Uncomment these to check your work! ***/
const isOdd = function(num) {
  return num % 2 === 1;
};
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const prioritizedElements = [];
  const otherElements = [];
  array.forEach((element) => {
    if (callback(element)) {
      prioritizedElements.push(element);
    } else {
      otherElements.push(element);
    }
  });
  return prioritizedElements.concat(otherElements);
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  const output = {};
  array.forEach((element) => {
    if (Object.keys(output).includes(callback(element))) {
      output[callback(element)]++;
    } else {
      output[callback(element)] = 1;
    }
  });
  return output;
}

// /*** Uncomment these to check your work! ***/
// console.log(
//   countBy([1, 2, 3, 4, 5], function(num) {
//     if (num % 2 === 0) return "even";
//     else return "odd";
//   }),
// ); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const output = {};
  array.forEach((element) => {
    if (output.hasOwnProperty(String(callback(element)))) {
      output[callback(element)].push(element);
    } else {
      output[callback(element)] = [];
      output[callback(element)].push(element);
    }
  });
  return output;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) {
//   return Math.floor(num);
// };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  const output = [];
  for (const key in obj) {
    if (callback(obj[key])) {
      output.push(key);
    }
  }
  return output;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  const result1 = func2(func1(value));
  const result2 = func1(func2(value));
  return result1 === result2;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const output = {};
  for (const key in obj) {
    if (callback(key) === obj[key]) {
      output[key] = obj[key];
    }
  }
  return output;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = (n) => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let trueCounter = 0;
  arrOfFuncs.forEach((func) => {
    if (func(value)) {
      trueCounter++;
    }
  });
  return (trueCounter / arrOfFuncs.length) * 100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = (n) => n % 2 === 0;
// const greaterThanFour = (n) => n > 4;
// const isSquare = (n) => Math.sqrt(n) % 1 === 0;
// const hasSix = (n) => n.toString().includes("6");
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  let output = value;
  arrOfFuncs.forEach((func) => {
    output = func(output);
  });
  return output;
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let highestResult = -1000000000000;
  let highestFunction = "";
  for (const func in objOfFuncs) {
    if (objOfFuncs[func](subject) > highestResult) {
      highestResult = objOfFuncs[func](subject);
      highestFunction = func;
    }
  }

  return highestFunction;
}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = (n) => n * 2;
// groupOfFuncs.addTen = (n) => n + 10;
// groupOfFuncs.inverse = (n) => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let currentValue = startVal;
  for (const func of arrOfFuncs) {
    currentValue = func(currentValue);
  }

  return currentValue;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

/*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  let returnIndex = -1;
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      returnIndex = index;
    }
  }
  
  return returnIndex;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return num % 2 !== 0;
// }

/*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) { }

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
