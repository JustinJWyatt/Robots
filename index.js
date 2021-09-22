function marbles(n) {
    const availableMarbles = 100;
    return Math.ceil(100 - ((n - 1) / 2));
}
module.exports = marbles;