const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected} `);
  }
};

// consists of object and callback 
// scan object and return first key 
// callback returns a truthy value
// no key found return undefined

const findKey = function (obj, callback) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    /// console.log(obj[key]) === { stars: 1 }
    //console.log(key); iterating the property name or keys === Blue Hill
    // console.log(keys); list all property name or keys in one array === [ 'Blue Hill', 'Akaleri', 'noma', 'elBulli', 'Ora', 'Akelarre' ]
    // console.log(obj[key])
    const nested = obj[key];

    if (callback(nested)) {
      return key;
    }

  }
  return undefined;
};

const numstars = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};


assertEqual(findKey(numstars, x => x.stars === 2), "noma");

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

// expected output: "noma"