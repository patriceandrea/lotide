# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @patriceandrea/lotide`

**Require it:**

`const _ = require('@patriceandrea/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual()`: asserts if the expectected array equals to the actual array.
* `assertEqual()`: asserts if  the expectected value equals to the actual value . 
* `assertObjectsEqual()`: asserts if the expectected object equals to the actual object. 
* `countLetters()`: counts the number of each letter in a string. 
* `countOnly()`: counts the specific strings only from an array of strings.  
* `eqArrays()`: checks if every value from the expectected array equals to every value from the actual array. 
* `eqObjects()`: check if the every object keys from the expectected object equals to every object keys from the actual object. 
* `findKey()`: finds the object key based on a specific callback function. 
* `findKeyByValue()`: finds the object key based on specific value.  
* `head()`: return the first value of an array. 
* `letterPositions()`: returns the indices of each letter of a string.  
* `map()`: creates a new array and iterates the values the selected array into a callback function. 
* `middle()`: returns the middle element of an array. 
* `tail()`: removes the first element of the array. 
* `takeUntil()`: creates a new array and iterates the values of the selected array but stops iterating once the value becomes a true value. 
* `without()`: creates a new array and iterates the value of the selected array but removes the unwanted values.  