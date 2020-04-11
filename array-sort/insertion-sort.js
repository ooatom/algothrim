function insertionSort(arr) {
    let temp, j;
    for (let i = 1, len = arr.length; i < len; i++) {
        temp = arr[i];
        j = i - 1;
        for (; j >= 0 && temp < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }

    return arr;
}

export default insertionSort;