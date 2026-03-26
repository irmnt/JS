/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeout;

    return function (...args) {
        // 1. Cancel the timer if already running
        clearTimeout(timeout);

        // 2. start a timer anew
        timeout = setTimeout(() => {
            // 3. if the timer actually finishes, executes the function
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */