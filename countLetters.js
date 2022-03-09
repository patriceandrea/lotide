//iterate the letters of a sentence
// for of loop 
// output -> "L":1 , "H":2 
//create an empty object/array 

const countLetters = function (str) {
  let results = {};
  for (let letter of str) {

    if (results[letter]) {

      results[letter] += 1;
    } else {
      results[letter] = 1;
    }


  }
  console.log(results);
}

countLetters('LHL');