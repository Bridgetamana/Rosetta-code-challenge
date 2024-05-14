function canMakeWord(word) {
    const blocks = {
        'BO': false, 'XK': false, 'DQ': false, 'CP': false, 'NA': false,
        'GT': false, 'RE': false, 'TG': false, 'QD': false, 'SF': false, 'JW': false,
        'HU': false, 'VI': false, 'AN': false, 'OB': false, 'ER': false, 'FS': false, 'LY': false,
        'PC': false, 'ZA': false
    };

    word = word.toUpperCase();

    for (const letter of word) {
        let letterFound = false;
        for (const block in blocks) {
            if (!blocks[block] && block.toUpperCase().includes(letter)) {
                blocks[block] = true;
                letterFound = true;
                break;
            }
        }
        if (!letterFound) {
            return false;
        }
    }

    return true;
}

console.log(canMakeWord("bark"));
console.log(canMakeWord("BooK"));
console.log(canMakeWord("TReAT"));
console.log(canMakeWord("COMMON"));
console.log(canMakeWord("squAD"));
console.log(canMakeWord("conFUSE"));
