function formatDigitSequence(input) {
  const digits = String(input).replace(/[^0-9]/g, '');
  if (digits.length === 0) return '';

  const isEven = (char) => Number(char) % 2 === 0;
  const isOdd = (char) => Number(char) % 2 !== 0;

  let result = digits[0];

  for (let i = 1; i < digits.length; i += 1) {
    const prev = digits[i - 1];
    const current = digits[i];

    if (isEven(prev) && isEven(current)) {
      result += '*';
    } else if (isOdd(prev) && isOdd(current)) {
      result += '-';
    }

    result += current;
  }

  return result;
}

// Example usage
const examples = [12345678, 1245614, 132345786];
for (const example of examples) {
  console.log(`input = ${example}`);
  console.log(`output = ${formatDigitSequence(example)}`);
  console.log('---');
}

module.exports = { formatDigitSequence };