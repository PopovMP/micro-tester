"use strict";

/**
 * Testing stats
 * @type {object}
 * @property {number} index
 * @property {number} passed
 * @property {number} failed
 */
const stats = {};

/**
 * Resets the stats and shows the message
 * @param {string} message
 */
function init(message) {
    console.log(message);
    resetStats();
}

/**
 * Performs a test
 *
 * @param {string} message
 * @param {function} testFunction - When it finishes successfully - test passes, when throws - test fails
 */
function test(message, testFunction) {
    stats.index++;

    try {
        testFunction();
        console.log(stats.index + ". ✅ " + message);
        stats.passed++;
    } catch (e) {
        console.error(stats.index + ". ❌ " + message);
        console.error(e.message);
        console.error("Actual: " + e.actual + ", Expected: " + e.expected);
        stats.failed++;
    }
}

/**
 * Shows a test summary. It resets the stats.
 */
function done() {
    const message = `Passed: ${stats.passed} of ${stats.index}, Failed: ${stats.failed}`;
    const failed = stats.failed;

    resetStats();

    if (failed) {
        console.error(message);
    } else {
        console.log(message);
    }
}

/**
 * Called at the end of the testing set.
 * It throws error on failed tests.
 */
function ensure() {
    const failed = stats.failed;

    done();

    if (failed) {
        throw new Error("Tests failed: " + failed);
    }
}

function resetStats() {
    stats.index  = 0;
    stats.passed = 0;
    stats.failed = 0;
}

module.exports = {
    init,
    test,
    done,
    ensure,
}
