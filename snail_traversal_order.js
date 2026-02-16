/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
   // Check if the dimensions are valid for the array length
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  // Initialize the 2D array (ans) with empty rows
  const ans = Array.from({ length: rowsCount }, () => []);

  for (let i = 0; i < this.length; i++) {
    // Determine which column we are currently filling
    const col = Math.floor(i / rowsCount);
    
    // Determine the row. If column is even, go down. If odd, go up.
    const isEvenCol = col % 2 === 0;
    const row = isEvenCol ? (i % rowsCount) : (rowsCount - 1 - (i % rowsCount));

    ans[row][col] = this[i];
  }

  return ans;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */