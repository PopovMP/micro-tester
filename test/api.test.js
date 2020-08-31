'use strict'

const { strictEqual } = require('assert');
const {init, test, done, ensure} = require('../index');

init('init(message)');

test('"init" is a function', () => {
    strictEqual(typeof init, 'function');
});

test('"init" accepts one argument', () => {
    strictEqual(init.length, 1);
});

ensure();


init('test(message, assertion)');

test('"test" is a function', () => {
    strictEqual(typeof test, 'function');
});

test('"test" accepts two arguments', () => {
    strictEqual(test.length, 2);
});

ensure();


test('It exposes a `test` method', () => {
    strictEqual(typeof test, 'function');
});


init('done()');

test('"done" is a function', () => {
    strictEqual(typeof done, 'function');
});

test('"done" accepts zero arguments', () => {
    strictEqual(done.length, 0);
});

ensure();


init('ensure()');

test('"ensure" is a function', () => {
    strictEqual(typeof ensure, 'function');
});

test('"ensure" accepts zero arguments', () => {
    strictEqual(ensure.length, 0);
});

ensure();
