import { bubbleSort, bubbleSort_v1, bubbleSort_v2 } from '../array-sort/bubble-sort';
import selectionSort from '../array-sort/selection-sort';
import insertionSort from '../array-sort/insertion-sort';
import cocktailSort from '../array-sort/cocktail-sort';
import { quickSort, quickSort_iteration } from '../array-sort/quick-sort';
import { mergeSort, mergeSort_iteration } from '../array-sort/merge-sort';
import shellSort from '../array-sort/shell-sort';
import heapSort from '../array-sort/heap-sort';
import bucketSort from '../array-sort/bucket-sort';

import { countingSort, countingSort_stable } from '../array-sort/counting-sort';
import radixSort from '../array-sort/radix-sort';

const shuffledArrays = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 15, 14, 13, 12, 11, 10, 9, 8],
    [10, 9, 8, 7, 6, 1, 2, 3, 4, 5, 6,],
    new Array(37).fill(undefined).map(() => Math.round(Math.random() * 100)),
    new Array(16).fill(undefined).map(() => Math.round(Math.random() * Math.pow(10, 4) + Math.pow(10, 4)))
];

const shuffledArrays_float = [
    new Array(20).fill(undefined).map(() => +(Math.random() * 20).toFixed(2))
];

const descText = 'ArraySort test %p\n                 %p';

describe.each(
    shuffledArrays.concat(shuffledArrays_float).map(arr => [
        arr,
        [].concat(arr).sort((a, b) => a - b)
    ])
)(descText, (origin, expected) => {
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

    test('quickSort', () => {
        expect(quickSort(origin).join()).toEqual(expected.join());
    });
    test('quickSort_iteration', () => {
        expect(quickSort_iteration(origin).join()).toEqual(expected.join());
    });

    test('mergeSort', () => {
        expect(mergeSort(origin).join()).toEqual(expected.join());
    });
    test('mergeSort_iteration', () => {
        expect(mergeSort_iteration(origin).join()).toEqual(expected.join());
    });

    test('shellSort', () => {
        expect(shellSort(origin).join()).toEqual(expected.join());
    });

    test('heapSort', () => {
        expect(heapSort(origin).join()).toEqual(expected.join());
    });
    
    test('bucketSort', () => {
        expect(bucketSort(origin).join()).toEqual(expected.join());
    });
});

describe.each(
    shuffledArrays.map(arr => [
        arr,
        [].concat(arr).sort((a, b) => a - b)
    ])
)(descText, (origin, expected) => {
    const originCache = origin;
    beforeEach(() => {
        origin = [].concat(originCache);
    });

    test('countingSort', () => {
        expect(countingSort(origin).join()).toEqual(expected.join());
    });
    test('countingSort_stable', () => {
        expect(countingSort_stable(origin).join()).toEqual(expected.join());
    });

    test('radixSort', () => {
        expect(radixSort(origin).join()).toEqual(expected.join());
    });
});
