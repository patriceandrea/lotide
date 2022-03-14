const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);