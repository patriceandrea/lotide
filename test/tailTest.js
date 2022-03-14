const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [3];

assertEqual(words.length, 3);
assertEqual(numbers.length, 1);