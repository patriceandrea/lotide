const assertEqual = require('./assertEqual');

const tail = function (array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result = + array[i];

  }
  return result;
};

module.exports = tail;



