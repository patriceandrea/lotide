const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1}} !=== ${array2} `);
  }
};

// two arguments 
//1. array to map 
// 2. callback to function 
const words = ["ground", "control", "to", "major", "tom"];
const dogs = ["snoopy", "kobe", "summer", "pogi"];
const nums = [2, 3, 4, 5, 6];


const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    console.log(callback)
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = dogs.map(name => `I love my dog:${name} `)
const results3 = nums.map(function (num) {
  return num * 2;
})

console.log(results1);
assertArrayEqual((results1), ['g', 'c', 't', 'm', 't']);
console.log(results2);
assertArrayEqual((results2), ['I love my dog:snoopy ', 'I love my dog:kobe ', 'I love my dog:summer ', 'I love my dog:pogi ']);
console.log(results3);
assertArrayEqual((results3), [4, 6, 8, 10, 12]);
//assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); example
