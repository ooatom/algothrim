function merge(arr, start, mid, end) {
    const newArr = [];

    let j = start, k = mid + 1;
    while (j <= mid && k <= end) {
        if (arr[j] <= arr[k]) {
            newArr.push(arr[j]);
            j++;
        } else {
            newArr.push(arr[k]);
            k++;
        }
    }

    if (j <= mid) {
        newArr.push.apply(newArr, arr.slice(j, mid + 1));
    } else if (k <= end) {
        newArr.push.apply(newArr, arr.slice(k, end + 1));
    }

    newArr.forEach((item, index) => {
        arr[start + index] = item;
    });
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const mid = Math.floor((end + start) / 2);
    
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }

    return arr;
}

function mergeSort_iteration(arr) {
    let offset;
    for (let step = 1; step < arr.length; step <<= 1) {
        offset = step + step;
        for (let i = 0; i < arr.length; i += offset) {
            merge(arr, i, i + step - 1, Math.min(i + offset - 1, arr.length - 1));
        }
    }

    return arr;
}

export {
    mergeSort,
    mergeSort_iteration
};