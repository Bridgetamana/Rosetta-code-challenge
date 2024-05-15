function mode(arr) {
    const frequency = {};

    for (const num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    let maxFrequency = 0;
    const average = [];

    for (const num in frequency) {
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    }

    for (const num in frequency) {
        if (frequency[num] === maxFrequency) {
            average.push(num);
        }
    }

    return average;
}

console.log(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]));
console.log(mode([1, 2, 4, 4, 1]));
