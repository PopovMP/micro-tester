'use strict'

const {ok, strictEqual, deepStrictEqual, match} = require('assert');
const {init, test, done} = require('../index');

init('ok(fact)')

test('null is ok', () => {
    ok(null);
});

test('42 is ok', () => {
    ok(null);
});

done();


init('strictEqual(actual, expected)')

test('42 === 42', () => {
    strictEqual(42, 42);
});

test('13 === 42', () => {
    strictEqual(13, 42);
});

done();


init('deepStrictEqual(actual, expected)')

test('[1, 2, 3] equal to [1, 2, 3]', () => {
    deepStrictEqual([1, 2, 3], [1, 2, 3]);
});

test('[1, 2, 3] equal to [1, 42, 3]', () => {
    deepStrictEqual([1, 2, 3], [1, 42, 3]);
});

done();

init('match(value, regExp)');

test('hello match /hell/', () => {
    match('hello', /hell/);
});

test('hello match /ola/', () => {
    match('hello', /ola/);
});

done();
