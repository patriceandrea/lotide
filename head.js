// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected} `);
  }
};


const head = function (array) {
  let result = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array === 0) {
      return undefined;
    } else {
      result = array[i - 1];
      //yes = console.log(result);

    }
  }
  return result;
};
// TEST CODE

// assertEqual(1, 1);
// assertEqual("hi", "hi");
// assertEqual("hi", "bye");
// assertEqual(1, 167);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 5);