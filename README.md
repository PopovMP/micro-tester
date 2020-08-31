# A miniature Tester helper for nodejs

**micro-tester** is a very simple, zero dependencies helper for unit tests.

Homepage: https://github.com/popovmp/micro-tester

## Synopsis

```javascript
const { strictEqual } = require('assert');
const {init, test, done, ensure} = require('@popovmp/micro-tester');

init('My tests');

test('6 * 7 = 42', () => {
    const actual   = 6 * 7;
    const expected = 42;
    strictEqual(actual, expected);
});

done();
```

## Installation

```
npm install @popovmp/micro-tester
```

## Usage

**micro-tester** runs a testFunction, collects stats, and prints a summary.

Start the test file with `init('Test set description');`. The `intit` function resets the testing statistics.
It also prints the provided message on the console.

Perform test: `test('Test description', () => {...})`. **micro-tester** a tests passes when the function completes.
The test fails when the function throws.

Call `ensure();` at the end of the test file. It shows a test summary and throws an error if there are failed tests.

If you don't want to throw errors, call `done()` at the end of the test set.


```javascript
const { strictEqual } = require('assert');
const {init, test, done, ensure} = require('@popovmp/micro-tester');

init('My tests');

test('6 * 7 = 42', () => {
    const actual   = 6 * 7;
    const expected = 42;
    strictEqual(actual, expected);
});

ensure(); 
```

Output - passed test:

![Micro Tester - passed test](https://image-holder.forexsb.com/store/micro-tester-success.png)

Output - failed test:

![Micro Tester - failed test](https://image-holder.forexsb.com/store/micro-tester-failure.png)

You may have several testing groups:

```javascript
init('Testing foo');

test();
test();

done();

init('Testing bar');

test();
test();

ensure(); // Call `ensure` if you want to throw on a failed test
```

## Run all tests

**micro-tester** exports a `micro-tester` command. It finds and runs all tests in `./test` folder.

The accepted test files format is `test-name.test.js`.

You can set this command in your `package.js`:

```json
{
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
function init(message) { }
```

```javascript
/**
 * Performs a test
 *
 * @param { string   } message
 * @param { function } assertion
 */
function test(message, assertion) { }
```

```javascript
/**
 * Called at the end of testing.
 * It resets the stats.
 */
function done() { }
```

```javascript
/**
 * Called at the end of testing.
 * It resets the stats.
 * It throws error on failed tests.
 */
function ensure() { }
```

## License

`micro-tester` is free for use and modification. No responsibilities for damages of any kind.

Copyright (c) 2020 Miroslav Popov
