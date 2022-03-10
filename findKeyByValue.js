const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected} `);
  }
};


// object and value
// return the first key of object 
// no key --> undefined

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function (obj, value) {
  const keys = Object.keys(obj)
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
      //iterating value console.log(keys);
      // property name  console.log("property name:", key);
      //value/name of show  console.log("value/show:", obj[key]);
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);