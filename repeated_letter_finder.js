/**
 * Finds the first word with the greatest number of repeated letters.
 * If no word has a repeated letter, returns -1.
 *
 * @param {string} text
 * @return {string|number}
 */
var findFirstWordWithMostRepeatedLetters = function (text) {
    if (!text || typeof text !== 'string') {
        return -1;
    }

    var words = text
        .trim()
        .split(/\s+/)
        .map(function (word) {
            return word.replace(/[^a-zA-Z]/g, '');
        })
        .filter(function (word) {
            return word.length > 0;
        });

    var bestWord = -1;
    var bestScore = 0;

    words.forEach(function (word) {
        var normalized = word.toLowerCase();
        var counts = {};
        var score = 0;

        for (var i = 0; i < normalized.length; i++) {
            var letter = normalized[i];
            counts[letter] = (counts[letter] || 0) + 1;
            score = Math.max(score, counts[letter]);
        }

        if (score > bestScore) {
            bestScore = score;
            bestWord = word;
        }
    });

    return bestScore > 1 ? bestWord : -1;
};

// Example usage:
console.log(findFirstWordWithMostRepeatedLetters('Hello Apple Pie')); // Hello

