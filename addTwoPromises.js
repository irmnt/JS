/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    // Option1: Using Promise.all
    // Less memory usage
    return Promise.all([promise1, promise2])
        .then(([val1, val2]) => val1 + val2);

    // Option2: Using async/await
    // const val1 = await promise1;
    // const val2 = await promise2;

    // return val1 + val2;

};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */