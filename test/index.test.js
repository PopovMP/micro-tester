"use strict"

const assert = require("assert");
const {init, test, done, ensure} = require("../index");

init("Test the tester");

test("It exposes an `init` method", () => {
    assert.strictEqual(typeof init, "function");
});

test("It exposes a `test` method", () => {
    assert.strictEqual(typeof test, "function");
});

test("It exposes a `done` method", () => {
    assert.strictEqual(typeof done, "function");
});

test("It exposes an `ensure` method", () => {
    assert.strictEqual(typeof ensure, "function");
});

test("Math test: 6 * 7 = 42", () => {
    const actual   = 6 * 7;
    const expected = 42;
    assert.strictEqual(actual, expected);
});

test("Expected to fail - strictEqual", () => {
    assert.strictEqual(3, 42);
});

test("Expected to fail - ok", () => {
    assert.ok(null);
});

done();
