


const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[1], 'Labs');
  });
  it("does not change the original array ", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});
