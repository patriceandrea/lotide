const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected} `);
  }
};


const tail = function (array) {
  let result = [];
  for (let i = 1; i <= array.length; i++) {
    result = + array[i];
  }
  return result;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [3];
tail(words);
tail(numbers);
assertEqual(words.length, 3);
assertEqual(numbers.length, 1);

