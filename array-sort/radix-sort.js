function getMaxBit(arr) {
    let max = arr[0];

    arr.forEach(item => {
        if (item > max) {
            max = item;
        }
    });

    let bit = 0;
    while (max > 0) {
        max = Math.floor(max / 10);
        bit++;
    }

    return bit;
}

function radixSort(arr) {
    const maxBit = getMaxBit(arr);

    const countArr = new Array(10); // 0-9
    const tempSortedArr = new Array(arr.length);
    let radix = 1;
    let temp;
    for (let i = 1; i <= maxBit; i++) {
        countArr.fill(0);
        for (let j = 0; j < arr.length; j++) {
            temp = Math.floor(arr[j] / radix) % 10;
            countArr[temp]++;
        }

        for (let k = 1; k < countArr.length; k++) {
            countArr[k] += countArr[k - 1];
        }
        
        for (let l = arr.length - 1; l >= 0; l--) {
            temp = Math.floor(arr[l] / radix) % 10;
            tempSortedArr[countArr[temp] - 1] = arr[l];
            countArr[temp]--;
        }
        tempSortedArr.forEach((item, index) => {
            arr[index] = item;
        });

        radix *= 10;
    }

    return arr;
}

export default radixSort;