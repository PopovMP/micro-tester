'use strict'

const { strictEqual } = require('assert');
const {init, test, ensure} = require('../index');

init('Math test');

test('6 * 7 = 42', () => {
    const actual   = 6 * 7;
    const expected = 42;
    strictEqual(actual, expected);
});

ensure();
