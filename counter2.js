/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var output = init;
    // var lastCalled = null;

    return {
        increment: function() {
            // lastCalled = 'increment';
            return ++output;
        },
        reset: function() {
            // lastCalled = 'reset';
            return output = init;
        },
        decrement: function() {
            // lastCalled = 'decrement';
            return --output;
        },
        // getLastCalled: function() {
            // return lastCalled;
        // }
    }
};

 const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset());     // 5
 console.log(counter.decrement()); // 4