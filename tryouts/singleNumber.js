// bitwise ops
// Single Number
function findSingleNumber(arr) {
    let num = arr[0]
    for (let i = 1; i < arr.length; i++) {
        num = num ^ arr[i]
    }
    return num
}

console.log(findSingleNumber([4,1,2,1,2]))
