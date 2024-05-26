function longestString(strings) {
    let maxLength = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > maxLength) {
            maxLength = strings[i].length;
        }
    }

    const longestStrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length === maxLength) {
            longestStrings.push(strings[i]);
        }
    }

    return longestStrings;
}

console.log(longestString(["a", "bb", "ccc", "ee", "f", "ggg"]));
console.log(longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"]));
console.log(longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"]));
console.log(longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"]));
console.log(longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"]));
