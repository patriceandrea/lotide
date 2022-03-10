const eqObjects = function (object1, object2) {
  const keyOfObject1 = Object.keys(object1);
  const keyOfObject2 = Object.keys(object2);
  if (keyOfObject1.length !== keyOfObject2.length) {
    return false;
  } else {
    for (const key of keyOfObject1) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}}} !=== ${expected} `);
  }
};

console.log(`Example label: ${inspect(actual)}`);