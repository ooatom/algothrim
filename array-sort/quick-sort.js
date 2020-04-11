function getPivotIndex(low, high) {
    return low + Math.round(Math.random() * (high - low));
}

function partition(arr, low, high) {
    const pivotIndex = getPivotIndex(low, high);
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

    const pivot = arr[high];

    let i = low;
    for (; low < high; low++) {
        if (arr[low] < pivot) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            i++;
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];

    return i;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (high > low) {
        const index = partition(arr, low, high);
        quickSort(arr, low, index - 1);
        quickSort(arr, index + 1, high);
    }

    return arr;
}

function quickSort_iteration(arr, low = 0, high = arr.length - 1) {
    const stack = [
        [low, high]
    ];
    let temp;
    while (stack.length !== 0) {
        temp = stack.pop();
        if (temp[0] >= temp[1]) {
            continue;
        }
        const index = partition(arr, temp[0], temp[1]);
        stack.push([temp[0], index - 1]);
        stack.push([index + 1, temp[1]]);
    }

    return arr;
}

export {
    quickSort,
    quickSort_iteration
};