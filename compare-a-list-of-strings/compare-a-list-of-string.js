function allEqual(arr) {
    if (arr.length === 0) return true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

function azSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(allEqual(["AA", "AA", "AA", "AA"]));
console.log(azSorted(["AA", "AA", "AA", "AA"]));
console.log(allEqual(["AA", "ACB", "BB", "CC"]));
console.log(azSorted(["AA", "ACB", "BB", "CC"]));
console.log(allEqual([]));
console.log(azSorted([]));
console.log(allEqual(["AA"]));
console.log(azSorted(["AA"]));
console.log(allEqual(["BB", "AA"]));
console.log(azSorted(["BB", "AA"]));
