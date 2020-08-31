'use strict';

const colors = {
    Reset   : '\x1b[0m',
    Bright  : '\x1b[1m',
    FgRed   : '\x1b[31m',
    FgGreen : '\x1b[32m',
}

/**
 * @typedef {object} TestStats
 *
 * @property { number } count - total count of the tests
 * @property { number } passed - count of passed tests
 * @property { number } failed - count of failed tests
 * @property { number } start - start time
 */

/** @type { TestStats } */
let stats = {};

/**
 * Gets initial TestStats
 *
 * @return { TestStats }
 */
function getNewStats() {
    return {
        count  : 0,
        passed : 0,
        failed : 0,
        start  : 0,
    }
}

/**
 * Inits testing stats and shows the message
 *
 * @param {string} message
 */
function init(message) {
    stats = getNewStats();
    console.log();
    console.log(colors.Bright + message + colors.Reset);
    stats.start = Date.now();
}

/**
 * Performs a test
 *
 * @param {string} message
 * @param {function} assertion - When it finishes successfully - test passes, when throws - test fails
 */
function test(message, assertion) {
    stats.count++;

    try {
        assertion();

        logSuccess('✅ ' + message);
        stats.passed++;
    } catch (e) {
        logError('❌ ' + message);
        log(e.message);
        log('Actual: ' + colors.FgRed + e.actual + colors.Reset + ', ' +
            'Expected: ' + colors.FgGreen + e.expected + colors.Reset);
        stats.failed++;
    }
}

/**
 * Shows a test summary. It resets the stats.
 */
function done() {
    const time    = Date.now() - stats.start;
    const summary = getStatsSummary(time);

    stats = getNewStats();

    console.log(summary);
}

/**
 * Called at the end of the testing set.
 * It throws error on failed tests.
 */
function ensure() {
    const time    = Date.now() - stats.start;
    const summary = getStatsSummary(time);
    const failed  = stats.failed;

    stats = getNewStats();

    console.log(summary);

    if (failed) {
        throw new Error('Tests failed: ' + failed);
    }
}

/**
 * Composes the test summary message
 *
 * @param { number } time - the total test time
 */
function getStatsSummary(time) {
    const passedText = stats.passed === stats.count
        ? colors.FgGreen + 'Passed: ' + stats.passed + ' of ' + stats.count + colors.Reset
        : 'Passed: ' + stats.passed + ' of ' + stats.count;

    const failedText = stats.failed
        ? colors.FgRed + 'Failed: ' + stats.failed + colors.Reset
        : 'Failed: ' + stats.failed;

    return passedText + ', ' + failedText + ' (' + time + ' ms)';
}

/**
 * Logs with indentation
 *
 * @param { string } message - success message
 */
function log(message) {
    console.log('    ' + message);
}

/**
 * Logs a successful test
 *
 * @param { string } message - success message
 */
function logSuccess(message) {
    console.log('    ' + colors.FgGreen + message + colors.Reset);
}

/**
 * Logs a failed test
 *
 * @param { string } message - error message
 */
function logError(message) {
    console.log('    ' + colors.FgRed + message + colors.Reset);
}

module.exports = {
    init,
    test,
    done,
    ensure,
}
