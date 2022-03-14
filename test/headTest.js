const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs'] ", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello");
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 9 for [9]", () => {
    assert.strictEqual(head([9]), 9);
  });
});


