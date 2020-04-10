import { bubbleSort, bubbleSort_1, bubbleSort_2 } from '../array-sort/bubble-sort';

const shuffledArrays = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 5],
    [6, 7, 8, 9, 10, 5, 4, 3, 2, 1, 6],
    new Array(39).fill(undefined).map(() => Math.round(Math.random() * 100))
];

describe.each(
    shuffledArrays.map(arr => [
        [].concat(arr),
        arr.sort((a, b) => a - b)
    ])
)('ArraySort test %p', (origin, expected) => {
    test('bubbleSort', () => {
        expect(bubbleSort(origin).join()).toEqual(expected.join());
    });
    test('bubbleSort_1', () => {
        expect(bubbleSort_1(origin).join()).toEqual(expected.join());
    });
    test('bubbleSort_2', () => {
        expect(bubbleSort_2(origin).join()).toEqual(expected.join());
    });
});
