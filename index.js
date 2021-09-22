function marbles(n) {
    const availableMarbles = 100;
    return Math.ceil(availableMarbles - ((n - 1) / 2));
}
module.exports = marbles;