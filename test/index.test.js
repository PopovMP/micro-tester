"use strict"

const {init, test, done} = require("../index");

init("Test the tester");

test("The answer is 42", () =>
    42
);


test("Complex test", () => {
    const expected = 42;
    const actual   = 6 * 7;
    return expected === actual;
});


done(); 
