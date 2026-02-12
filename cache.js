const sum = (a, b) => a + b;

function memoize(fn) {
    const cache = new Map();
    let callCount = 0; // Tracking internal calls for testing

    const memoized = function(...args) {
        const key = args.join(',');
        if (cache.has(key)) {
            return cache.get(key);
        }
        callCount++; // Increment whenever the original function is actually run
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

    // Attach a helper method to check the count easily
    memoized.getCallCount = () => callCount;
    return memoized;
}

// --- TEST CASE 1: Sum ---
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // Returns 4
console.log(memoizedSum(2, 2)); // Returns 4 (from cache)
console.log("Total calls:", memoizedSum.getCallCount()); // Should be 1

console.log(memoizedSum(1, 2)); // Returns 3
console.log("Total calls:", memoizedSum.getCallCount()); // Should be 2