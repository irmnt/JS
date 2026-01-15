/**
 * Task: Find the smallest positive integer that does not occur in a given sequence.
 * 
 * Example:
 * Input: [1, 3, 6, 4, 1, 2]
 * Output: 5
 * 
 * Input: [-1, -3]
 * Output: 1
 */
const A = [1, 3, 6, 4, 1, 2];

function Solution(A) {
    let min = 1;
    let max = 1;

    for (var i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            min = min < A[i] ? min : A[i];
            max = max > A[i] ? max : A[i];
        }
    }

    if (min >= max) {
        return min;
    }

    let ans = min;
    while (ans < max) {
        let isExist = A.includes(ans);
        if(isExist) {
            ans++;
        } else {
            break;
        }
    }

    return ans == max? max + 1 : ans;
}


var result = Solution(A);
console.log(result);