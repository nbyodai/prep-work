// binary search

export const recursiveFunction = (arr, x, start, end) => {
    // base case
    if (start > end) {
        return false
    }
    // calculate the mid point
    let mid = Math.floor( (start+end) /2);
    // check if it's middle
    if (arr[mid] === x) {return true}
    // check left side if midvalue is greater than search value
    if (arr[mid] > x) {
        return recursiveFunction(arr, x, start, mid-1);
    } else {
        // check right side if midvalue is less than search value
        return recursiveFunction(arr, x, mid+1, end);
    }
}


export const iterativeFunction = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;

    while (start<=end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            return true
        } else if(x < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

const list = [2, 3, 8, 9, 50, 78, 120, 158, 400, 561, 567, 568, 569]
const searchValue = 400;

const recursiveAnswer = recursiveFunction(list, searchValue, 0, list.length - 1)
const iterativeAnswer = iterativeFunction(list, searchValue)
