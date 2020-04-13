import {mergeSort} from './merge-sort';

function bucketSort(arr) {
    let min = arr[0],
        max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    const bucketNum = arr.length;
    const bucketRange = (max - min) / (arr.length - 1);
    const buckets = new Array(bucketNum);

    let bucketIndex;
    arr.forEach((item) => {
        bucketIndex = Math.floor((item - min) / bucketRange);
        if (buckets[bucketIndex] === undefined) {
            buckets[bucketIndex] = [];
        }

        buckets[bucketIndex].push(item);
    });
    buckets.forEach(bucket => mergeSort(bucket));

    buckets.reduce((index, bucket) => {
        bucket.forEach(item => {
            arr[index++] = item;
        });

        return index;
    }, 0);

    return arr;
}

export default bucketSort;