/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArray = [];

    for (let i = 0; i < arr.length; i += size) {
        // extract a portion of the array from current index to index + size
        const part = arr.slice(i, i + size);
        chunkedArray.push(part);
    }
    return chunkedArray;
};
