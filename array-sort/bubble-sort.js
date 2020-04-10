function bubbleSort(arr) {
    let temp;
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort_1(arr) {
    let temp, isSwapped;

    for (let i = 0, len = arr.length; i < len - 1; i++) {
        isSwapped = false;
        
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}

function bubbleSort_2(arr) {
    let temp, isSwapped, len, sortBorder, lastSwapIndex;
    len = arr.length;
    sortBorder = len - 1;
    lastSwapIndex = 0;

    for (let i = 0; i < len - 1; i++) {
        isSwapped = false;
        
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                isSwapped = true;
                lastSwapIndex = j;
            }
        }
        sortBorder = lastSwapIndex;
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}


export {
    bubbleSort,
    bubbleSort_1,
    bubbleSort_2
};
