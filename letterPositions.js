const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1}} !=== ${array2} `);
  }
};

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

// return all indices in string 
// P: 0, P:2,P:3

const letterPositions = function (sentence) {
  let newSentence = sentence.toLowerCase()
  const results = {};
  for (let i = 0; i < newSentence.length; i++) {
    //console.log("sentence", sentence[i]);
    //console.log("results", results[sentence[i]]);
    if (results[sentence[i]]) {
      //console.log("test", results[sentence[i]]);
      results[sentence[i]].push(i);

    } else {
      results[sentence[i]] = [i];
    }

  }
  return results;

};



console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse labs"));
assertArraysEqual(letterPositions("hello"), [1]);