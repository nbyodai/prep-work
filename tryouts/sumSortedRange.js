// given a sorted list and a list of two items
// find the sum of the found members of the range(inclusive)

const sortedList = [1, 3, 4, 6, 7, 12, 15, 20];
const rangeList = [4,5];

const summer = (list, start, end) => {
    let sum = []
    for(let i = start; i <= end; i++) {
        sum.push(list[i])
    }
    return sum.reduce((acc, x) => acc + x, 0);
}


const iterativeFunction = (list, val) => {
    let start = 0;
    let end = list.length - 1;

    while(start<=end) {
        let mid = Math.floor((start+end)/2);

        if(list[mid] === val) {
            return mid;
        } else if(list[mid] > val) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return  null
}

const findPosition = (list, val) => {
    // binary search the list for the index of val
    let result = null;
    while(result === null) {
        result = iterativeFunction(list, val)
        val -= 1;
    }
    return result;
}

function solveProblem(list, range) {
    const startIndex = findPosition(list, range[0])
    const endIndex = findPosition(list, range[1])

    return summer(list, startIndex, endIndex)
}

console.log(solveProblem(sortedList, rangeList))
