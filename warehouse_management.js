/**
 * Example 1: 
 * Input: puts = [1,2,3,4] 
 * Output: [-1,-1,-1,-1]
 * 
 * Example 2: 
 * Input: puts = [1,2,0,0,2,1] 
 * Output: [-1,-1,2,1,-1-1]
 * 
 * Example 3: 
 * Input: puts = [1,2,0,1,2] 
 * Output: []
 */

function warehouseManagement(puts) {
    // warehouse checker
    let checker = [];
    let output = [];
    
    // looping flow
    // if not 0, mark as stocked
    for (let i = 0; i < puts.length; i++) {
        if (puts[i] !== 0) {
            // duplicate check
            if (checker.includes(puts[i])) {
                return [];
            }
            // set the item as stocked
            checker.push(puts[i]);
            output.push(-1);
        } else {
            // if 0, empty the last stocked item
            if (checker.length !== 0) {
                checker.sort((a, b) => a - b);
                output.push(checker[checker.length - 1]);
                checker.pop();
            }
        }
    }

    return output;
}

const tests = [
    [1, 2, 3, 4],
    [0, 0, 0],
    [1, 0, 1],
    [1, 2, 0, 1, 2],
    [1, 2, 0, 2, 0, 1],
    [1, 2, 3, 0, 0, 0],
    [1, 2, 0, 3],
    [1, 2, 0, 1, 0, 2],
    [1, 3, 2, 0, 3, 0, 2, 1]
];

tests.forEach((t, idx) => {
    console.log(`Test ${idx + 1}: input = [${t.join(', ')}] -> output =`, warehouseManagement(t));
});
