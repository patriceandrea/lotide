
const assertEqual = require('./assertEqual');
// array and object 
// return objects: everything counted from an array 
// array counts the numbers of same element 

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// countOnly -> return [value: count of the value] 
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  return results;
}

module.exports = countOnly; 