function shiftedArrSearch(shiftArr, num) {
    const pivot = findPivotIndex(shiftArr);
    console.log(pivot)

    if (pivot === 0 || num < shiftArr[0]) {
        return binarySearch(shiftArr, pivot, shiftArr.length - 1, num);
    }

    return binarySearch(shiftArr, 0, pivot - 1, num);
}

// pivot is the point where arr[i] < arr[i - 1]
// where my number most likely is depends if the is less arr[0] then it's in the second half

function findPivotIndex(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(mid)
        // if (mid === 0 || arr[mid] < arr[mid - 1]) {
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }
        if (arr[mid] > arr[0]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return 0;
}

function binarySearch(arr, start, end, val) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] < val) {
            start = mid + 1;
        } else if (arr[mid] === val) {
            return mid;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}
