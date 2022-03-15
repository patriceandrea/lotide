const assert = require('chai').assert;
const countOnly = require('../countOnly');






describe("#countOnly", () => {
  it("returns correct count for firstNames array with all true values ", () => {

    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });
    const expected = { "Jason": 1, "Fang": 2, "Agouhanna": 1 };
    assert.deepEqual(actual, expected);
  });
  it("returns correct count for firstNames array with true values and  a false value included", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false, "Agouhanna": true });
    const expected = { "Jason": 1, "Agouhanna": 1 };
    assert.deepEqual(actual, expected);
  });

});







// console.log(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);