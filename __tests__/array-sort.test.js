import { bubbleSort, bubbleSort_v1, bubbleSort_v2 } from '../array-sort/bubble-sort';
import selectionSort from '../array-sort/selection-sort';
import insertionSort from '../array-sort/insertion-sort';
import cocktailSort from '../array-sort/cocktail-sort';

const shuffledArrays = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 10, 9, 8, 7, 6],
    [10, 9, 8, 7, 6, 1, 2, 3, 4, 5, 6],
    new Array(39).fill(undefined).map(() => Math.round(Math.random() * 100))
];

describe.each(
    shuffledArrays.map(arr => [
        arr,
        [].concat(arr).sort((a, b) => a - b)
    ])
)('ArraySort test %p', (origin, expected) => {
    const originCache = origin;
    beforeEach(() => {
        origin = [].concat(originCache);
    });

    test('bubbleSort', () => {
        expect(bubbleSort(origin).join()).toEqual(expected.join());
    });
    test('bubbleSort_v1', () => {
        expect(bubbleSort_v1(origin).join()).toEqual(expected.join());
    });
    test('bubbleSort_v2', () => {
        expect(bubbleSort_v2(origin).join()).toEqual(expected.join());
    });
    
    test('selectionSort', () => {
        expect(selectionSort(origin).join()).toEqual(expected.join());
    });
    
    test('insertionSort', () => {
        expect(insertionSort(origin).join()).toEqual(expected.join());
    });
    
    test('cocktailSort', () => {
        expect(cocktailSort(origin).join()).toEqual(expected.join());
    });
});
