// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

//TEST CODE
assertEqual(head("Lighthouse Labs", "Bootcamp"));
assertEqual(head(1, 1));
assertEqual(head("hi", "hi"));
assertEqual(head("hi", "bye"));
assertEqual(head(1, 167));
