function happy(number) {
  const num_seen = new Set();

  while (number !== 1 && !num_seen.has(number)) {
    num_seen.add(number);
    number = sumOfSquares(number);
  }

  return number === 1;
}

function sumOfSquares(num) {
  let sum = 0;
  for (const digit of String(num)) {
    sum += Number(digit) * Number(digit);
  }
  return sum;
}

console.log(happy(1));
console.log(happy(2));
console.log(happy(7));
console.log(happy(10));
console.log(happy(13));
console.log(happy(19));
console.log(happy(23));
console.log(happy(28));
console.log(happy(31));
console.log(happy(32));
console.log(happy(33));