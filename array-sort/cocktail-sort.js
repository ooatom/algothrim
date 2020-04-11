function cocktailSort(arr) {
    let isSwapped, lastSwapIndex, leftBorder, rightBorder, len, halfLen;
    len = arr.length;
    halfLen = len / 2;
    leftBorder = 0;
    rightBorder = len - 1;

    for (let i = 0; i < halfLen; i++) {
        isSwapped = false;

        for (let j = leftBorder; j < rightBorder; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
                lastSwapIndex = j;
            }
        }
        rightBorder = lastSwapIndex;
        if(!isSwapped) {
            break;
        }

        isSwapped = false;
        for (let k = rightBorder; k > leftBorder; k--) {
            if (arr[k] < arr[k - 1]) {
                [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
                isSwapped = true;
                lastSwapIndex = k;
            }
        }
        leftBorder = lastSwapIndex;
        if(!isSwapped) {
            break;
        }
    }

    return arr;
}

export default cocktailSort;