// CHALLENGE 1
function createFunction() {
  function createdFunction() {
    console.log("hello");
  }
  return createdFunction;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printer() {
    console.log(input);
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // -> counter 1
// willCounter(); // -> counter 2
// willCounter(); // -> counter 3
//
// jasCounter(); // -> counter 1
// willCounter(); // -> counter 4

function addByX(x) {
  let step = x;

  function addToInput(number) {
    return number + step;
  }

  return addToInput;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let output;

  function callOnce(num) {
    if (output > 0) {
      return output;
    } else {
      output = func(num);
      return output;
    }
  }

  return callOnce;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let timesRun = 0;

  function callAfterCount() {
    if (timesRun >= count - 1) {
      func();
    } else {
      timesRun++;
    }
  }

  return callAfterCount;
}

/*** Uncomment these to check your work! ***/
const called = function() {
  console.log("hello");
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...params) {
  setTimeout(() => {
    func(...params);
  }, wait);
}

function callParams(...params) {
  console.log("called", ...params);
}

// delay(callParams, 1000, "param1", "param2");

// CHALLENGE 7
function rollCall(names) {
  let callIndex = 0;

  function callPerson() {
    if (callIndex < names.length) {
      console.log(names[callIndex]);
      callIndex++;
    } else {
      console.log("Everyone accounted for");
    }
  }

  return callPerson;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const savedOutput = {};
  function returnFunction(arg) {
    if (arg === magicWord) {
      return savedOutput;
    } else {
      savedOutput[arg] = func(arg);
      return func(arg);
    }
  }
  return returnFunction;
}

/*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) {
  return num * 2;
};
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let index = 0;

  function returnFunction() {
    if (index < array.length - 1) {
      index++;
      return array[index - 1];
    } else {
      index = 0;
      return array[array.length - 1];
    }
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  function returnFunction(...params) {
    return func(arg, ...params);
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) {
//   return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  function returnFunction(...params) {
    const timestampedResult = {
      date: new Date(Date.now()),
      result: func(...params),
    };
    return timestampedResult;
  }
  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const pairs = {};
  function returnFunction(...params) {
    if (params.length > 2 || params.length < 1) {
      return "Max 2 params pls";
    } else if (params.length > 1) {
      pairs[params[0]] = params[1];
    } else if (params.length === 1) {
      let string = params[0];
      for (const key in pairs) {
        string = string.replace(key, pairs[key]);
      }
      return string;
    }
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let heldSecret = secret;
  return {
    getSecret: () => {
      console.log(heldSecret);
    },
    setSecret: (newSecret) => (heldSecret = newSecret),
  };
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

// CHALLENGE 14
function callTimes() {
  let timesCalled = 0;
  function returnFunction() {
    timesCalled++;
    console.log(timesCalled);
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
  let timesCalled = 0;
  function returnFunction() {
    if (timesCalled > num - 1) {
      timesCalled++;
      return "pick a number to play again";
    } else if (timesCalled === num - 1) {
      timesCalled++;
      return "win";
    } else {
      timesCalled++;
      return "spin";
    }
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let numbers = [];
  let average = 0;
  function returnFunction(...params) {
    if (params.length === 0) {
      if (numbers.length === 0) {
        return average;
      } else {
        average = numbers.reduce((a, b) => a + b) / numbers.length;
        return average;
      }
    } else {
      numbers.push(params[0]);
      average = numbers.reduce((a, b) => a + b) / numbers.length;
      return average;
    }
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let elementPairs = arrOfTests;
  let testResult = false;

  function functionTester(callback) {
    for (const elementPair of elementPairs) {
      if (callback(elementPair[0]) === elementPair[1]) {
        testResult = true;
      } else {
        testResult = false;
      }
    }
    return testResult;
  }

  return functionTester;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const savedStrings = [];

  function returnFunction(string) {
    if (savedStrings.length < 2 && string !== "undo") {
      savedStrings.push(string);
      return `${string} done`;
    } else if (savedStrings.length === 2 && string !== "undo") {
      savedStrings.shift();
      savedStrings.push(string);
      return `${string} done`;
    } else if (savedStrings.length > 0 && string === "undo") {
      poppedString = savedStrings.pop();
      return `${poppedString} undone`;
    } else if (savedStrings.length === 0 && string === "undo") {
      return "nothing to undo";
    }
  }

  return returnFunction;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); // => should log 'jump done'
// console.log(myActions("undo")); // => should log 'jump undone'
// console.log(myActions("walk")); // => should log 'walk done'
// console.log(myActions("code")); // => should log 'code done'
// console.log(myActions("pose")); // => should log 'pose done'
// console.log(myActions("undo")); // => should log 'pose undone'
// console.log(myActions("undo")); // => should log 'code undone'
// console.log(myActions("undo")); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  const cards = array;
  function dealer(number1, number2) {
    let timesCalled = 0;
    let playerSum = 0;
    let bust = false;
    function player() {
      if (bust === true) {
        return "you are done!";
      } else if (playerSum > 21) {
        bust = true;
        return "bust";
      } else if (timesCalled === 0) {
        timesCalled++;
        playerSum = number1 + number2;
        if (playerSum < 22) {
          return playerSum;
        } else {
          bust = true;
          return "bust";
        }
      } else {
        playerSum += cards.shift();
        timesCalled++;
        if (playerSum < 22) {
          return playerSum;
        } else {
          bust = true;
          return "bust";
        }
      }
    }
    return player;
  }

  return dealer;
}

// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
