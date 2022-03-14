

// 2 arrays as 2 parameters in function
// for  loop : iterate every element of each array
// compare b/w both arrays
// if array1 = array2 --> return true
// if !array1 = array2 --> return false
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

module.exports = eqArrays;
