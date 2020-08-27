# A miniature Tester helper for nodejs

**micro-tester** is a very simple, zero dependencies helper for unit tests.

Homepage: https://github.com/popovmp/micro-tester

## Synopsis

```javascript
const assert = require("assert");
const {init, test, done, ensure} = require("@popovmp/micro-tester");

init("My tests");

test("Math test: 6 * 7 = 42", () => {
    const actual   = 6 * 7;
    const expected = 42;
    assert.strictEqual(actual, expected);
});

done();
```

## Installation

```
npm install @popovmp/micro-tester
```

## Usage

**micro-tester** runs a testFunction, collects stats, and prints a summary.

Start the test file with `init("Test set description");`. The `intit` function resets the testing statistics.
It also prints the provided message on the console.

Perform test: `test("Test description", () => {...})`. **micro-tester** a tests passes when the function completes.
The test fails when the function throws.

Call `ensure();` at the end of the test file. It shows a test summary and throws an error if there are failed tests.

If you don't want to throw errors, call `done()` at the end of the test set.


```javascript
const assert = require("assert");
const {init, test, done, ensure} = require("@popovmp/micro-tester");

init("My tests");

test("Math test: 6 * 7 = 42", () => {
    const actual   = 6 * 7;
    const expected = 42;
    assert.strictEqual(actual, expected);
});

ensure(); 
```

Outputs:

My tests

1. ✅ Math test: 6 * 7 = 42

Passed: 1 of 1, Failed: 0


You may have several testing groups:

```javascript
init("Testing foo");

test(...);
test(...);

done();

init("Testing bar");

test(...);
test(...);

ensure(); // Call `ensure` instead of `done` at the end
```

## Run all tests

**micro-tester** exports a `micro-tester` command. It finds and runs all tests in `./test` folder.

The accepted test files format is `test-name.test.js`.

You can set this command in your `package.js`:

```javascript
{
  ...
  "scripts": {
    "test": "micro-tester"
  }
}
```

## Methods

**micro-tester** exports three methods:

```javascript
/**
 * Resets the stats and shows the message
 * @param {string} message
 */
function init(message)
```

```javascript
/**
 * Performs a test
 *
 * @param {string} message
 * @param {function} testFunction
 */
function test(message, testFunction)
```

```javascript
/**
 * Called at the end of testing.
 * It resets the stats.
 */
function done()
```

```javascript
/**
 * Called at the end of testing.
 * It resets the stats.
 * It throws error on failed tests.
 */
function ensure()
```

## License

`micro-tester` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
