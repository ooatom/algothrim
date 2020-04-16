function shellSort(arr) {
    let temp, i, j;
    for (let step = arr.length >> 1; step >= 1; step >>= 1) {
        for (i = step; i < arr.length; i++) {
            temp = arr[i];
            for (j = i - step; j >= 0 && temp < arr[j]; j -= step) {
                arr[j + step] = arr[j];
            }
            arr[j + step] = temp;
        }
    }

    return arr;
}

export default shellSort;