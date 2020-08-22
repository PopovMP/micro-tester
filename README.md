# A miniature Tester helper for nodejs

**micro-tester** is a very simple, zero dependencies library for logging.

Homepage: https://github.com/popovmp/micro-tester

## Synopsis

```javascript
const {init, test, done} = require("@popovmp/micro-tester");

init("My tests");

test("The answer is 42", () =>
    42
);

done(); 
```

## Installation

```
npm install @popovmp/micro-tester
```

## Usage

**micro-tester** test the truthiness the provided test function.

Start the test file with `init("Test set description");`. The `intit` function resets the testing statistics.
It also prints the the message on the console.

Perform test: `test("Test description", (): boolean => {...})`. **micro-tester** tests if the test function returns true or false.
It also counts the passed and the failed test.

Call `done();` at the end of the test file. It shows a test summary and throws an error if there are failed tests.

If you don't want to throw errors, skip the `done` call.
 

```javascript
// Import the test functions
const {init, test, done} = require("@popovmp/micro-tester");

init("My tests");

test("The answer is 42", () =>
    42
);

test("Complex test", () => {
    const expected = 42;
    const actual   = 6 * 7;
    return expected === actual;
});

done(); 
```

Outputs:

My tests

1. ✅ The answer is 42
2. ✅ Complex test

Passed: 2 of 2, Failed: 0

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
 * @param {function} testFunction - When return: truthy - test pass, faulty - test fails
 */
function test(message, testFunction)
```

```javascript
/**
 * Called at the end of testing.
 * It resets the stats.
 * It throws error on failed tests.
 */
function done()
```

## License

`micro-tester` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
