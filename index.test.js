const marbles = require('./index');

test('2 robots gives the oldest robot 100 marbles', () => {
  expect(marbles(2)).toBe(100);
});

test('3 robots gives the oldest robot 99 marbles', () => {
    expect(marbles(3)).toBe(99);
});

test('4 robots gives the oldest robot 99 marbles', () => {
    expect(marbles(4)).toBe(99);
});

test('5 robots gives the oldest robot 98 marbles', () => {
    expect(marbles(5)).toBe(98);
});