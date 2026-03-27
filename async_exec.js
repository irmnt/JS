/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // Prepare an array to hold results in the correct order
        const results = new Array(functions.length);
        let resolvedCount = 0;

        // edg case: if the array is empty, resolve immediately
        if(functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((fn, i) => {
            // Start the async function
            fn()
                .then((value) => {
                    results[i] = value;
                    resolvedCount++;

                    // If this was the last one to finish, resolve the master promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // if Any function fails, the whole master promise fails immediaely
                    reject(err);
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */