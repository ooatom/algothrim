function countingSort(arr) {
    let min = arr[0],
        max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    const countArr = new Array(max - min + 1);
    arr.forEach((item) => {
        if (countArr[item - min] === undefined) {
            countArr[item - min] = 0;
        }
        countArr[item - min]++;
    });

    let currIndex = 0;
    countArr.forEach((item, index) => {
        for (let i = 0; i < item; i++) {
            arr[currIndex++] = index + min;
        }
    });

    return arr;
}

function countingSort_stable(arr) {
    let min = arr[0],
        max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    const countArr = new Array(max - min + 1);
    arr.forEach((item) => {
        if (countArr[item - min] === undefined) {
            countArr[item - min] = 0;
        }
        countArr[item - min]++;
    });

    for (let i = 1; i < countArr.length; i++) {
        if (countArr[i] === undefined) {
            countArr[i] = countArr[i - 1];
        } else {
            countArr[i] += countArr[i - 1];
        }
    }

    const sortedArr = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        sortedArr[countArr[arr[i] - min] - 1] = arr[i];
        countArr[arr[i] - min]--;
    }

    sortedArr.forEach((item, index) => arr[index] = item);

    return arr;
}

export {
    countingSort,
    countingSort_stable
};