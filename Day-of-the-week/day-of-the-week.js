function findXmasSunday(start, end) {
    const xmasSundays = [];

    for (let year = start; year <= end; year++) {
        const xmasDate = new Date(year, 11, 25);
        if (xmasDate.getDay() === 0) {
            xmasSundays.push(year);
        }
    }

    return xmasSundays;
}

console.log(findXmasSunday(1970, 2017));
console.log(findXmasSunday(2000, 2100));
console.log(findXmasSunday(2008, 2121));
